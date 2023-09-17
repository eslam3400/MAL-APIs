2. Install the dependencies:
```
npm install
```
3. Create a .env file in the root directory and add the following variables:
```
MONGO_URI=<Your MongoDB connection string>
JWT_SECRET=<Your JWT secret>
```

## Running the Server

To start the server, run the following command:
```
npm run start
```

## Project Structure

- `src/server.ts`: This is the entry point of the server.
- `src/routes/`: This directory contains all the route definitions.
- `src/controllers/`: This directory contains all the controller definitions.
- `src/models/`: This directory contains all the data models.

## Using the Server

The server has the following API endpoints:

- POST /api/otp: Create an OTP for a phone number.
- POST /api/otp/verify: Verify an OTP and get a JWT.
- POST /api/logout: Logout a user.
- GET /api/me: Get the current user's information.

For example, to create an OTP, you would send a POST request to /api/otp with the following body:
```
{
  "phone": "<Your phone number>"
}
