import docker
import os

env = os.environ

def env_check(name):
  if name not in env:
    print("Missing required {} env variable".format(name))
    quit(1)

def guard(guards):
  for guard in guards:
    env_check(guard)

if __name__ == "__main__":
  client = docker.from_env()

  print("Checking environemnt...")
  guard([
    "DOCKER_USERNAME",
    "DOCKER_PASSWORD"
  ])

  print("Building container...")
  client.images.build(path=".", tag="moedevs/hasura")

  print("Pushing container...")
  build = client.images.push("moedevs/hasura", stream=True, auth_config={
    "username": env["DOCKER_USERNAME"],
    "password": env["DOCKER_PASSWORD"]
  })

  for line in build:
    print(line.decode("utf-8"))

