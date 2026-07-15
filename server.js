const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Servir archivos estáticos del frontend
app.use(express.static(__dirname));

// Mock database for plans
const plans = {
  monthly: { name: 'Monthly Plan', price: 120.00 },
  lifetime: { name: 'Permanent Plan', price: 300.00 }
};

// Wallet addresses for USDT simulation
const WALLET_ADDRESSES = {
  usdt_trc20: 'TX1a2B3c4D5e6F7g8H9i0J1k2L3m4N5o6P',
  usdt_bsc: '0x71C7656EC7ab88b098defB751B7401B5f6d8976F'
};

// Route: Get plans info
app.get('/api/plans', (req, res) => {
  res.json(plans);
});

// Route: Initiate Payment (Binance Pay or USDT Wallet Simulator)
app.post('/api/pay', (req, res) => {
  const { planId, paymentMethod } = req.body;

  if (!planId || !plans[planId]) {
    return res.status(400).json({ error: 'Plan inválido o no especificado.' });
  }

  if (!paymentMethod) {
    return res.status(400).json({ error: 'Método de pago no especificado.' });
  }

  const selectedPlan = plans[planId];
  const transactionId = 'TXN-' + Math.floor(100000000 + Math.random() * 900000000);
  
  let responseData = {
    success: true,
    transactionId,
    plan: selectedPlan.name,
    amount: selectedPlan.price,
    currency: 'USDT',
    paymentMethod
  };

  if (paymentMethod === 'binance_pay') {
    // Simulating Binance Pay checkout redirect
    responseData.checkoutUrl = `https://pay.binance.com/checkout?id=simulated-pay-${transactionId}`;
    responseData.message = 'Redirección a Binance Pay generada exitosamente.';
  } else if (paymentMethod === 'usdt_trc20' || paymentMethod === 'usdt_bsc') {
    const address = WALLET_ADDRESSES[paymentMethod];
    responseData.walletAddress = address;
    
    // We use a public QR code generator API to make it real and functional!
    const qrData = encodeURIComponent(address);
    responseData.qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${qrData}`;
    responseData.message = `Billetera USDT (${paymentMethod.split('_')[1].toUpperCase()}) generada exitosamente. Realice el pago exacto a la dirección provista.`;
  } else {
    return res.status(400).json({ error: 'Método de pago no soportado. Use binance_pay, usdt_trc20 o usdt_bsc.' });
  }

  console.log(`[PAYMENT INITIATED] Plan: ${selectedPlan.name}, Method: ${paymentMethod}, Amount: $${selectedPlan.price}, TxID: ${transactionId}`);
  
  // Return the simulated payment payload after 1 second delay to feel realistic
  setTimeout(() => {
    res.json(responseData);
  }, 1000);
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', serverTime: new Date() });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
