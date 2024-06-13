# Bazoka Plus
Bazoka Plus is a restaurant management system that provides comprehensive functionality for managing users, categories, food items, orders, and restaurants. The system includes secure authentication and authorization, along with various security measures to protect user data.

## Features
- User Management: Register, login, and manage users.
- Category Management: CRUD operations for categories.
- Food Management: CRUD operations for food items, upload food photos, get food by restaurant, and get food by category.
- Order Management: Place orders, update order status, and manage orders.
- Restaurant Management: CRUD operations for restaurants.
- Security: Authentication and authorization using JWT and bcrypt, rate limiting, helmet for security headers, CORS, and cookie parser.
- File Uploads: Upload food photos using Multer.

## Table of Contents
- Usage
- API Endpoints
- Authentication & Authorization
- Security
- Dependencies

## Usage
### Register and Login
- Register: Create a new user account.
- Login: Authenticate an existing user and obtain a JWT token.
### Food Management
- Get Food by Restaurant: Retrieve all food items available at a specific restaurant.
- Get Food by Category: Retrieve all food items under a specific category.
### Orders
- Place Order: Create a new order.
- Update Order Status: Update the status of an existing order.

## API Endpoints

### User
- POST /api/users/register: Register a new user.
- POST /api/users/login: Login a user.
### Category
- GET /api/categories: Get all categories.
- POST /api/categories: Create a new category.
- PUT /api/categories/:id: Update a category.
- DELETE /api/categories/:id: Delete a category.
### Food
- GET /api/foods: Get all food items.
- POST /api/foods: Create a new food item.
- PUT /api/foods/:id: Update a food item.
- DELETE /api/foods/:id: Delete a food item.
- GET /api/foods/restaurant/:restaurantId: Get food by restaurant.
- GET /api/foods/category/:categoryId: Get food by category.
### Order
- GET /api/orders: Get all orders.
- POST /api/orders: Place a new order.
- PUT /api/orders/:id: Update order status.
- DELETE /api/orders/:id: Delete an order.
### Restaurant
- GET /api/restaurants: Get all restaurants.
- POST /api/restaurants: Create a new restaurant.
- PUT /api/restaurants/:id: Update a restaurant.
- DELETE /api/restaurants/:id: Delete a restaurant.

## Authentication & Authorization
- JWT: JSON Web Tokens are used for secure authentication.
- Bcrypt: Passwords are hashed using bcrypt for secure storage.

## Security
- Rate Limiter: Limits the number of requests to prevent abuse.
- Helmet: Adds security headers to responses.
- CORS: Cross-Origin Resource Sharing is enabled.
- Cookie Parser: Parses cookies attached to client requests.

## Dependencies
- Express: Web framework for Node.js
- Mongoose: MongoDB object modeling tool
- JWT: JSON Web Tokens for authentication
- Bcrypt: Library to hash passwords
- Rate Limiter: Middleware to limit repeated requests
- Helmet: Middleware for securing HTTP headers
- CORS: Middleware to enable CORS
- Cookie Parser: Middleware to parse cookies
- Multer: Middleware for handling file uploads

## License
This project is licensed under the MIT License - see the LICENSE file for details.
