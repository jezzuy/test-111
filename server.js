const express = require('express');
const { Paddle } = require('./dist/cjs/index.cjs.node.js');
const { Environment } = require('./dist/cjs/internal/index.js');
const { ApiError } = require('./dist/cjs/internal/index.js');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');

// Initialize Paddle client
const paddle = new Paddle('332c4098166713ecb28b9e49f6a6f2b2a75ad826630021c694', {
  environment: Environment.sandbox,
  logLevel: 'verbose'
});

// Routes
app.get('/', async (req, res) => {
  try {
    const productCollection = paddle.products.list();
    const products = await productCollection.next();
    res.render('index', { products });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).render('error', { error });
  }
});

// Customers route
app.get('/customers', async (req, res) => {
  try {
    const customerCollection = paddle.customers.list();
    const customers = await customerCollection.next();
    res.render('customers', { customers });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).render('error', { error });
  }
});

// Invoices routes
app.get('/invoices', async (req, res) => {
  try {
    const transactionCollection = paddle.transactions.list();
    const transactions = await transactionCollection.next();
    res.render('invoices', { transactions, customerId: null });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).render('error', { error });
  }
});

app.get('/invoices/:id/pdf', async (req, res) => {
    try {
        const transactionId = req.params.id;
        console.log(`Fetching invoice PDF for transaction ID: ${transactionId}`);
        
        const pdfResponse = await paddle.transactions.getInvoicePDF(transactionId);
        if (!pdfResponse || typeof pdfResponse.url !== 'string' || !pdfResponse.url.trim()) {
            throw new Error('PDF URL not available');
        }

        // Fetch the PDF data from the URL
        const pdfFetch = await fetch(pdfResponse.url);
        if (!pdfFetch.ok) {
            throw new Error(`Failed to fetch PDF: ${pdfFetch.statusText}`);
        }

        // Get the PDF data as a buffer
        const pdfBuffer = await pdfFetch.arrayBuffer();

        // Set appropriate headers for PDF viewing
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'inline');
        res.setHeader('Cache-Control', 'no-cache');
        res.setHeader('Content-Length', Buffer.byteLength(Buffer.from(pdfBuffer)));
        
        // Send the PDF data
        res.end(Buffer.from(pdfBuffer));
    } catch (error) {
        console.error('Error fetching invoice PDF:', error);
        
        if (error instanceof ApiError) {
            res.status(error.status || 500).json({
                error: error.name,
                details: error.message,
                code: error.code
            });
        } else if (error.message === 'PDF URL not available') {
            res.status(404).json({
                error: 'Invoice PDF not available',
                details: 'The PDF for this invoice is not available'
            });
        } else {
            res.status(500).json({ 
                error: 'Failed to fetch invoice PDF',
                details: error.message
            });
        }
    }
});

app.get('/customers/:customerId/invoices', async (req, res) => {
  try {
    const { customerId } = req.params;
    const transactionCollection = paddle.transactions.list({
      customer_id: customerId
    });
    const transactions = await transactionCollection.next();
    res.render('invoices', { transactions, customerId });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).render('error', { error });
  }
});

// Start server
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});