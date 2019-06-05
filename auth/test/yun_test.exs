defmodule YunTest do
  use ExUnit.Case
  doctest Yun

  test "greets the world" do
    assert Yun.hello() == :world
  end
end
