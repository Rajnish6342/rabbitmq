# RABBITMQ BASICS

## Features
- Send Message
- Consume Message

## Docker
It is very easy to install and deploy in a Docker container.
By default, the Docker will expose port 3000, so change this within the
Dockerfile if necessary. When ready, simply use the Dockerfile to
build the image.
```sh
cd rabbitmq
docker-compose -f docker/docker-compose.yml up --build .
```
This will start the server  and pull in the necessary dependencies.
Verify the server running by navigating to your server address in
your preferred browser.

```sh
127.0.0.1:3000
```
