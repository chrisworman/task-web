# task-web

The task web repo provides an http server and the front-end angular js task web app in a Docker
container.

#Getting Started

Clone the repo down to your machine and change directory into the task web project.

```
$ git clone git@github.com:chrisworman/task-web.git
$ cd task-web
```

Development will be easier with a few shorthand scripts in the `./dev.sh` file.  Get up and running quickly with
these scripts.

##Build your container
```
$ ./dev.sh build
```

##Start your container
```
$ ./dev.sh start
```

##Stop your container
This command not only stops your container, but removes it as well.
```
$ ./dev.sh stop
```

##Print logs from your container
Use this command to see the traffic coming to your container
```
$ ./dev.sh log
```
