defmodule Yun.Handler do
  use Plug.Router
  require Logger

  plug(Plug.Logger)
  plug(Plug.Parsers, parsers: [:json, :multipart], json_decoder: Poison)
  plug(:match)
  plug(:dispatch)

  # request headers
  @user_agent "Hifumi API (https://github.com/moedevs/hifumi)"
  @content_type "application/x-www-form-urlencoded"
  @accept "application/json"
  @scope "identify"
  @headers [{"User-Agent", @user_agent},{"Content-Type", @content_type}, {"Accept", @accept}]

  # request options
  @oauth_secret System.get_env("YUN_OAUTH_SECRET")
  @oauth_id System.get_env("YUN_OAUTH_ID")
  @oauth_redirect System.get_env("YUN_OAUTH_REDIRECT")
  @oauth_callback System.get_env("YUN_OAUTH_CALLBACK")

  def init(options) do
    options
  end

  @spec start_link :: {:ok, pid}
  def start_link do
    {:ok, _} = Plug.Adapters.Cowboy.http(__MODULE__, [])
  end

  defp oauth_body(code) do
    [{:code, code}, {:scope, @scope}, {:client_secret, @oauth_secret}]
  end

  get "/favicon.ico" do
    send_resp(conn, 404, [])
  end

  get "/callback" do
    client = OAuth2.Client.new([
      client_id: @oauth_id,
      client_secret: @oauth_secret,
      site: "https://discordapp.com/api/v6",
      token_url: "https://discordapp.com/api/v6/oauth2/token",
      redirect_uri: @oauth_redirect
    ]) |> OAuth2.Client.put_headers(@headers) |> OAuth2.Client.put_serializer("application/json", Poison)

    code = Map.get(conn.query_params, "code")

    if code == nil do
      send_resp(conn, 200, Poison.encode!(%{error: "No valid code was found"}))
    else
      body = oauth_body(code)

      %{:token => %{:access_token => token}} = OAuth2.Client.get_token!(client, body)

      e = get_user(client, token)
      IO.inspect(e)
      send_resp(conn, 200, "dab")
    end
  end

  defp get_user(client, token) do
    {:ok, %OAuth2.Response{ :body => body }} =
      client
      |> OAuth2.Client.put_header("Authorization", "Bearer #{token}")
      |> OAuth2.Client.get("/users/@me")

    Map.get(body, "id")
  end
end
