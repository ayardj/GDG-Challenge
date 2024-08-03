
# Backend Dev Challenge

The Backend Dev Challenge is a project developed as part of a GDG (Google Developer Groups) challenge. It includes middleware for user authentication, attribute validation, email verification, and password reset functionalities.


## Features

- Middleware to Check if User is Logged In: Ensures that users are authenticated before accessing certain endpoints.
- Middleware for Attribute Validation: Validates attributes for incoming requests to ensure data integrity.
- Email Verification: Handles email verification for new user registrations.
- Password Reset: Provides functionality for users to reset their passwords.


## Installation

1-Clone the repository

```bash
git clone https://github.com/ayardj/GDG-Challenge.git
```
2-Create a '.env' file

Create a .env file in the root directory of the project and include the following environment variables:
```bash
MONGO_URL= mongodb://127.0.0.1:27017
JWT_SECRET= Jwt_seceret
JWT_LIFETIME = 1d
USER= example@gmail.com
PASSWORD= password
FROM_NAME = name //your app name
```

Ensure that USER is a Gmail address.

Use an app password for Gmail in the PASSWORD field.

3- Install dependecies

Navigate to the project directory and run:
```bash
npm intall
```


## Usage
To start the project, run the following command in your terminal:

```javascript
npm start
```

