defmodule Yun.Handler do
  use Plug.Router
  use Plug.ErrorHandler
  require Logger

  if Mix.env() == :dev do
    use Plug.Debugger
  end

  plug(
    Corsica,
    allow_headers: ["authorization"],
    log: [rejected: :error],
    origins: "*"
  )

  plug(Plug.Logger)
  plug(Plug.Parsers, parsers: [:json, :multipart], json_decoder: Poison)
  plug(:match)
  plug(:dispatch)

  # request headers
  @user_agent "Hifumi API (https://github.com/moedevs/hifumi)"
  @content_type "application/x-www-form-urlencoded"
  @accept "application/json"
  @scope "identify"
  @headers [{"User-Agent", @user_agent}, {"Content-Type", @content_type}, {"Accept", @accept}]

  # request options
  @oauth_secret System.get_env("YUN_OAUTH_SECRET")
  @oauth_id System.get_env("YUN_OAUTH_ID")
  @oauth_redirect System.get_env("YUN_OAUTH_REDIRECT")
  @website_callback System.get_env("YUN_WEBSITE_CALLBACK")

  def init(options) do
    options
  end

  @spec start_link :: {:ok, pid}
  def start_link do
    {:ok, _} = Plug.Adapters.Cowboy.http(__MODULE__, [])
  end

  defp handle_errors(conn, %{kind: _kind, reason: _reason, stack: _stack}) do
    payload = %{error: "Something went wrong"}
    send_resp(conn, conn.status, Poison.encode!(payload))
  end

  defp oauth_body(code) do
    [{:code, code}, {:scope, @scope}, {:client_secret, @oauth_secret}]
  end

@spec with_authorization(Plug.Conn.t(), (String.t() -> any)) :: any
defp with_authorization(conn, f) do
  auth = get_req_header(conn, "authorization")
  if Enum.empty?(auth) do
    send_resp(conn, 401, "Missing authorization")
  else
    parts =
      List.first(auth)
      |> String.split(" ")
    case parts do
      [_, _, _| _] -> send_resp(conn, 401, "Invalid token")
      ["Bearer", token] -> f.(token)
      [] -> send_resp(conn, 401, "Missing authorization header")
      _ -> send_resp(conn, 401, "Invalid auth type")
    end
  end
end

  options "*_" do
    send_resp(conn, 202, [])
  end

  get "/favicon.ico" do
    send_resp(conn, 404, [])
  end

  get "/callback" do
    client =
      OAuth2.Client.new(
        client_id: @oauth_id,
        client_secret: @oauth_secret,
        site: "https://discordapp.com/api/v6",
        token_url: "https://discordapp.com/api/v6/oauth2/token",
        redirect_uri: @oauth_redirect
      )
      |> OAuth2.Client.put_headers(@headers)
      |> OAuth2.Client.put_serializer("application/json", Poison)

    code = Map.get(conn.query_params, "code")

    if code == nil do
      send_resp(conn, 200, Poison.encode!(%{error: "No valid code was found"}))
    else
      body = oauth_body(code)
      %{:token => %{:access_token => token}} = OAuth2.Client.get_token!(client, body)
      user_id = get_user(client, token)
      jwt = Yun.JWT.create(%{user_id: user_id})
      redirect = "#{@website_callback}?code=#{jwt}"

      conn
      |> put_resp_header("location", redirect)
      |> resp(302, "You are being redirected...")
      |> halt()
    end
  end

  @spec get_user(Plug.Conn.t, String.t) :: String.t | nil
  defp get_user(client, token) do
    {:ok, %OAuth2.Response{:body => body}} =
      client
      |> OAuth2.Client.put_header("Authorization", "Bearer #{token}")
      |> OAuth2.Client.get("/users/@me")

    Map.get(body, "id")
  end

  get "/hasura" do
    with_authorization(conn, fn token ->
      IO.inspect token
      if !Yun.JWT.is_valid?(token) do
        send_resp(conn, 401, "Invalid JWT")
      else
        IO.inspect(token)
        claims = Yun.JWT.get_claims(token)
        payload = Yun.Hasura.generate_hasura_resp(Map.get(claims, "user_id"))
        send_resp(conn, 200, Poison.encode!(payload))
      end
    end)
  end

  get "/auth" do
    with_authorization(conn, fn token ->
      send_resp(conn, 200, Poison.encode!(%{authorized: Yun.JWT.is_valid?(token)}))
    end)
  end
end
