#!/bin/bash

# This is the development management script.  Used to build, start, and
# stop a development environment that uses docker containers for the http server.


# At least one argument required
if [ "$#" -eq 0 ]; then
  show_usage_and_exit
fi

function build_docker_images {
  echo "> Building http server docker image ... "
  docker build -t task-web . &&
  return 0
}

function start_http_container {
  echo "> Starting http server container ..."
  docker run --name task-web-dev -p 80:80 -d task-web &&
  echo "> task-web should be listening on http://localhost:80/"
  return 0
}

function stop_and_remove_containers {
  echo "> Stopping and removing containers ..."
  docker stop task-web-dev && docker rm task-web-dev
  return 0
}


if [ $1 = "build" ]; then
  build_docker_images
elif [ $1 = "start" ]; then
  start_http_container
elif [ $1 = "stop" ]; then
  stop_and_remove_containers
elif [ $1 = "log" ]; then
  docker logs task-web-dev
fi
