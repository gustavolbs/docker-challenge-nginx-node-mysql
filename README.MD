# Full Cycle challenge (docker)

### Goals:

- Display a screen with "Full Cycle Rocks" from node.js using NGINX as a reverse proxy and mysql.
- When a request is made to the server, it needs to save a name into MySQL and show all the names at the screen.
- The application needs to run under http://localhost:8080.
- The application must run with docker compose through the command `docker-compose up -d`.

### How to run:

1. git clone this repo;
2. run `docker-compose up -d --build` (build flag just need to be passed for the first time or when dockerfile is modified).
3. Go to http://localhost:8080 at your browser.

In case that the browser shows 502 error, please wait a few seconds and refresh the page.
