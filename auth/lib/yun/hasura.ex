defmodule Yun.Hasura do
  @moduledoc """
  Hasura handler
  """
  @spec generate_hasura_resp(String.t()) :: %{
          "X-Hasura-Role": String.t(),
          "X-Hasura-User-Id": String.t()
        }
  def generate_hasura_resp(id) do
    %{"X-Hasura-User-Id": id, "X-Hasura-Role": "user"}
  end
end
