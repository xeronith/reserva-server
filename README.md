# Reserva Demo Server

This NodeJS server application is developed to demonstrate a basic backend for a reservation app and is for technical demonstration purposes only.

To run the server using Docker, you can build the image with `docker build -t reserva-server .` and run it with ` docker run -p 3000:3000 reserva-server`. The server will be accessible at `http://localhost:3000` and exposes the following APIs:

- GET /api/restaurants
- GET /api/reservations
- POST /api/reservations

Theres's also a demo app which can be found at https://github.com/xeronith/reserva
