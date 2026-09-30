# E-Commerce API

A simple RESTful API for managing products in an e-commerce application.

This project provides CRUD operations for products using **Node.js**, **Express.js**, **MongoDB**, and **Mongoose**. It is designed as a backend practice project for working with RESTful API design, database operations, request validation, and error handling.

## Features

- Create a product
- Get all products
- Get a product by ID
- Update a product
- Delete a product
- Search products by name
- Filter products by category
- Request validation
- Centralized error handling
- MongoDB database integration
- CORS support

## Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **dotenv**
- **CORS**
- **Nodemon**

The API uses Express for routing and middleware and Mongoose for interacting with MongoDB.

## Project Structure

```text
ecommerce-api/
├── config/
│   └── db.js
├── controllers/
│   └── productController.js
├── middleware/
│   └── errorHandler.js
├── models/
│   └── Product.js
├── routes/
│   └── productRoutes.js
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── server.js
```

## Product Model

Each product contains the following fields:

| Field         | Type    | Required | Description                 |
| ------------- | ------- | -------- | --------------------------- |
| `name`        | String  | Yes      | Product name                |
| `description` | String  | Yes      | Product description         |
| `price`       | Number  | Yes      | Product price               |
| `category`    | String  | Yes      | Product category            |
| `stock`       | Number  | Yes      | Available stock             |
| `imageUrl`    | String  | No       | Product image URL           |
| `isActive`    | Boolean | No       | Product availability status |

The model also uses timestamps for `createdAt` and `updatedAt`.

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/kate-fontecilla/ecommerce-api.git
cd ecommerce-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root directory:

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
```

The application uses `MONGODB_URI` to establish the MongoDB connection.

### 4. Start the development server

```bash
npm run dev
```

Or start the application normally:

```bash
npm start
```

The available scripts are defined in `package.json`.

## API Endpoints

Base URL:

```text
http://localhost:3000/api/products
```

### Get All Products

```http
GET /api/products
```

Returns all products.

#### Filter by category

```http
GET /api/products?category=Electronics
```

#### Search by product name

```http
GET /api/products?search=phone
```

The API supports both `category` and `search` query parameters.

### Get Product by ID

```http
GET /api/products/:id
```

Example:

```http
GET /api/products/68c123456789abcdef123456
```

Returns a single product.

### Create Product

```http
POST /api/products
```

Example request body:

```json
{
  "name": "Wireless Keyboard",
  "description": "A compact wireless keyboard",
  "price": 49.99,
  "category": "Electronics",
  "stock": 25,
  "imageUrl": "https://example.com/keyboard.jpg"
}
```

### Update Product

```http
PATCH /api/products/:id
```

Example request body:

```json
{
  "price": 44.99,
  "stock": 30
}
```

The API validates the updated product fields before saving the changes.

### Delete Product

```http
DELETE /api/products/:id
```

Deletes a product by its ID.

## Example Responses

### Successful Response

```json
{
  "success": true,
  "message": "Product created",
  "data": {
    "_id": "68c123456789abcdef123456",
    "name": "Wireless Keyboard",
    "description": "A compact wireless keyboard",
    "price": 49.99,
    "category": "Electronics",
    "stock": 25,
    "imageUrl": "https://example.com/keyboard.jpg",
    "isActive": true
  }
}
```

### Validation Error

```json
{
  "success": false,
  "message": "Name, price, category, and stock are required"
}
```

### Product Not Found

```json
{
  "success": false,
  "message": "Product not found"
}
```

## HTTP Methods

| Method   | Endpoint            | Operation             |
| -------- | ------------------- | --------------------- |
| `GET`    | `/api/products`     | Retrieve all products |
| `GET`    | `/api/products/:id` | Retrieve one product  |
| `POST`   | `/api/products`     | Create a product      |
| `PATCH`  | `/api/products/:id` | Update a product      |
| `DELETE` | `/api/products/:id` | Delete a product      |

The routes are implemented using Express Router and map each HTTP method to its corresponding controller.

## Learning Goals

This project was created to practice:

- RESTful API design
- CRUD operations
- Express.js routing
- MongoDB and Mongoose
- Request validation
- Query parameters
- HTTP status codes
- Error handling middleware
- Environment variables
- Backend project structure

## Future Improvements

Possible improvements for this project include:

- User authentication and authorization
- Pagination
- Product sorting
- Product categories as a separate resource
- Image upload
- Product reviews and ratings
- Shopping cart functionality
- Order management
- Automated API tests
- API documentation with Swagger/OpenAPI

## License

This project is available for learning and personal development purposes.
