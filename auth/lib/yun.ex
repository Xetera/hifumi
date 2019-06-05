defmodule Yun do
  @moduledoc """
    Yun supervisor
  """
  use Application

  require Logger

  @envs ["YUN_OAUTH_SECRET","YUN_OAUTH_ID", "YUN_OAUTH_REDIRECT", "YUN_WEBSITE_CALLBACK"]
  defp check_env do
    missing = Enum.find(@envs, fn env -> !System.get_env(env) end)
    if missing != nil do
      IO.puts "Environment variable '#{missing}' is missing, aborting..."
      exit("Env variable #{missing} is missing")
    end
  end

  @spec start(any, any) :: {:error, any} | {:ok, pid}
  def start(_type, _args) do
    check_env()
    import Supervisor.Spec, warn: false

    children = [
      Plug.Cowboy.child_spec(scheme: :http, plug: Yun.Handler, options: [port: 4000])
    ]

    opts = [strategy: :one_for_one, name: HexVersion.Supervisor]
    Supervisor.start_link(children, opts)
  end
end
