defmodule Yun.JWT do
  @moduledoc """
    JWT handler for incoming requests from hasura
  """
  use Joken.Config
  defp secret, do: System.get_env("YUN_JWT_SECRET")

  @spec signer :: Joken.Signer.t()
  defp signer do
    Joken.Signer.create("HS256", secret())
  end

  @spec create(%{binary => any}) :: String.t()
  def create(payload) do
    generate_and_sign!(payload, signer())
  end

  @spec is_valid?(String.t()) :: boolean
  def is_valid?(token) do
    try do
      verify_and_validate!(token, signer())
      true
    rescue
      _ in Joken.Error -> false
    end
  end

  @spec get_claims(String.t()) :: %{String.t() => String.t()}
  def get_claims(token) do
    verify_and_validate!(token, signer())
  end
end
