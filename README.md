# task-web

This repo contains an Angular JS implementation of the task client application.  A `Dockerfile` is included to provide containerization for development and production deployments.

# Getting Started

Clone the repo down to your machine and change directory into the task web project.

```
$ git clone git@github.com:chrisworman/task-web.git
$ cd task-web
```

Development will be easier with a few shorthand scripts in the `./dev.sh` file.  Get up and running quickly with
these scripts.

## Build your container
```
$ ./dev.sh build
```

## Start your container
```
$ ./dev.sh start
```

At this point, you should be able to open up a browser and visit `http://localhost/` and be able to view an interact the task-web
project.

## Stop your container
This command not only stops your container, but removes it as well.
```
$ ./dev.sh stop
```

## Clean
This command stops and removes your container.  It also removes it's built image.  Use this shortcut command to "clean"
your local docker environment for you.    
```
$ ./dev.sh clean
```

## Print logs from your container
Use this command to see the traffic coming to your container
```
$ ./dev.sh log
```
