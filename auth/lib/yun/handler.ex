defmodule Yun.Handler do
  use Plug.Router
  require Logger

  plug Plug.Logger
  plug Plug.Parsers, parsers: [:json, :multipart], json_decoder: Poison
  plug :match
  plug :dispatch

  # request headers
  @user_agent "Hifumi API (https://github.com/moedevs/hifumi)"
  @content_type "application/x-www-form-urlencoded"
  @accept "application/json"
  @headers [{ "User-Agent", @user_agent}, { "Content-Type", @content_type}, { "Accept", @accept}]

  # request options
  @oauth_secret   System.get_env("YUN_OAUTH_SECRET")
  @oauth_id       System.get_env("YUN_OAUTH_ID")
  @oauth_redirect System.get_env("YUN_OAUTH_REDIRECT")
  @oauth_callback System.get_env("YUN_OAUTH_CALLBACK")

  def init(options) do
    options
  end

  @spec start_link :: {:ok, pid}
  def start_link do
    {:ok, _ } = Plug.Adapters.Cowboy.http(__MODULE__, [])
  end

  get "/callback" do
    client = OAuth2.Client.new([
      client_id: @oauth_id,
      client_secret: @oauth_secret,
      site: "https://discordapp.com/api/v6",
      token_url: "https://discordapp.com/api/v6/oauth2/token",
      redirect_uri: @oauth_redirect
    ])
    |> OAuth2.Client.put_headers(@headers)
    |> OAuth2.Client.put_serializer("application/json", Poison)

    error_missing_code = %{ error: "No valid code was found" }

    code = Map.get(conn.query_params, "code")
    if code == nil do
      send_resp(conn, 200, Poison.encode!(error_missing_code))
    else
      body = [{ :code, code},{:scope, "identify"}, {:client_secret, @oauth_secret}]
      %{ :token => %{ :access_token => token } } = client
      |> OAuth2.Client.get_token!(body)
      get_user(client, token)
      send_resp(conn, 200, "dab")
    end
  end

  defp get_user(client, token) do
    res = client
    |> OAuth2.Client.put_header("Authorization", "Bearer #{token}")
    |> OAuth2.Client.post("/users/@me")
    IO.inspect res
  end
end
