use Mix.Releases.Config,
    default_release: :default,
    default_environment: Mix.env()

environment :prod do
  set include_erts: true
  set include_src: false
  set cookie: System.get_env("YUN_COOKIE")
end

release :yun do
  set applications: [
        :runtime_tools
      ]
end
