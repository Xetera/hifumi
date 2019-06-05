defmodule Yun do
  @moduledoc """
    Yun supervisor
  """
  use Application

  require Logger

  @spec start(any, any) :: {:error, any} | {:ok, pid}
  def start(_type, _args) do
    import Supervisor.Spec, warn: false

    children = [
      Plug.Cowboy.child_spec(scheme: :http, plug: Yun.Handler, options: [port: 4000])
    ]

    opts = [strategy: :one_for_one, name: HexVersion.Supervisor]
    Supervisor.start_link(children, opts)
  end
end
