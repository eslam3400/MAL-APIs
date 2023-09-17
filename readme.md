# Express.js TypeScript Application with Clean Architecture

This repository contains an Express.js application written in TypeScript, following clean architecture principles. It incorporates a logger and dependency injection capabilities.

## System Components

The application is structured using clean architecture principles, consisting of the following components:

- **Routes**: Handle HTTP requests and route them to appropriate controller.
- **Middlewares**: Intercepting the HTTP requests validate/mutate the request then pass it to the controllers.
- **Controllers**: Handle data send over the HTTP validate the input talk to the services then respond.
- **Services**: Contain business logic and interact with data sources.
- **Models**: Define data models.
- **Helpers**: Utility functions.
- **Config**: Configuration files.
- **Extensions**: Extending the types and interfaces of the target one to attach some other data ex -> adding user variable to the `Express/Request` so i can access user from request directly.
- **Logger**: Utilizes Winston for logging exceptions and errors.
- **Errors**: Custom errors that will be thrown in the services layer and be handled global with respond.

## Installation

To run this application, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/eslam3400/MAL-APIs.git
   cd your_repository
   npm i
   ```

2. Start the server:

   ```bash
   npm run dev #running in dev mode
   or
   npm run start
   ```

   The application will be running at http://localhost:3000 by default.

## Usage

- **Postman Collection** is provided
- Access the application using a tool like Postman or a web browser.
- Use appropriate endpoints as defined in the `Postman` to interact with the application.

## Configuration

- **.env** Changing the values of the file will change the behavior of the app
- **config.ts** change the configuration of the app ex -> `mongodb` connection options

## Logger

The application logs errors and unhandled exceptions using Winston logger. Logs are stored in `error.log` and `exceptions.log` files.

## Notes

this app is running on serverless environment if want to run it local please comment the section at the `src/server.ts`

```bash
const server = serverless(app);
export { server };
```

and uncomment `app.listen(process.env.PORT, () => console.log('listening on port: 3000'));`
