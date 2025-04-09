# Microservices Demo

Files and Folders Structure for the Microservices Following Best Practices:

```
microservices-demo/
|
├── server/ # <-- Core backend logic lives
|
here
|
│ ├── controllers/ # Route handlers /
|
|business logic
|
│ ├── routes/ # Express route definitions
│ ├── models/ # Data models (Mongo/SQL/DTOs)
│ ├── services/ # Service layer (helper
|
|functions, abstractions)
|
│ ├── middleware/ # Custom middleware (auth,
|
|validation, logging)
|
│ ├── config/ # Env config, DB setup
│ ├── utils/ # Shared helpers (formatting, validators)
|
|
│ └── index.js # App entry point
│
├── .env # Env vars (never commit!)
├── .gitignore
├── package.json
├── yarn.lock
├── nodemon.json
└── README.md
```
