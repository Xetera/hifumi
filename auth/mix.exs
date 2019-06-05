defmodule Testmeme.MixProject do
  use Mix.Project

  def project do
    [
      app: :yun,
      version: "0.1.0",
      elixir: "~> 1.8",
      start_permanent: Mix.env() == :prod,
      deps: deps()
    ]
  end

  # Run "mix help compile.app" to learn about applications.
  def application do
    [
      applications: [:oauth2, :poison, :plug_cowboy],
      extra_applications: [:logger],
      mod: {Yun, []}
    ]
  end

  # Run "mix help deps" to learn about dependencies.
  defp deps do
    [
      {:oauth2, "~>1.0.1"},
      {:poison, "~>3.1"},
      {:plug, "~>1.5"},
      {:plug_cowboy, "~>1.0"},
      {:cowboy, "~>1.0.3"}
    ]
  end
end
