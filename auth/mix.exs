defmodule Testmeme.MixProject do
  use Mix.Project

  def project do
    [
      app: :yun,
      version: "0.1.0",
      elixir: "~> 1.8",
      start_permanent: Mix.env() == :prod,
      deps: deps(),
      main: Yun
    ]
  end

  # Run "mix help compile.app" to learn about applications.
  def application do
    [applications: applications(Mix.env()), extra_applications: [:logger], mod: {Yun, []}]
  end

  defp applications(:dev) do
    applications(:all) ++ [:remix]
  end

  defp applications(_otherwise) do
    [:oauth2, :poison, :plug_cowboy, :corsica, :joken]
  end

  # Run "mix help deps" to learn about dependencies.
  defp deps do
    [
      {:oauth2, "~>1.0.1"},
      {:poison, "~>3.1"},
      {:plug, "~>1.5"},
      {:plug_cowboy, "~>1.0"},
      {:cowboy, "~>1.0.3"},
      {:joken, "~>2.0"},
      {:corsica, "~>1.0"},
      # dev
      {:distillery, "~>1.5.2", only: :dev},
      {:remix, "~>0.0.1", only: :dev}
    ]
  end
end
