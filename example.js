const { Paddle, Environment } = require('@paddle/paddle-node-sdk');

// Replace 'YOUR_API_KEY' with your actual Paddle API key
const paddle = new Paddle('332c4098166713ecb28b9e49f6a6f2b2a75ad826630021c694', {
  environment: Environment.sandbox, // Use sandbox for testing
  logLevel: 'verbose' // For detailed logging
});

// Example: List all products
async function listProducts() {
  try {
    const products = await paddle.products.list();
    console.log('Products:', products);
  } catch (error) {
    console.error('Error:', error);
  }
}

listProducts();