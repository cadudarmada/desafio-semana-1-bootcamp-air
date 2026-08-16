const express = require('express');

const app = express();

app.use(express.json());

const payments = [];

app.post('/payments', (req, res) => {
    const { amount, currency, payer, payee } = req.body;

    const payment = {
        id: `pay_${String(payments.length + 1).padStart(3, '0')}`,
        amount,
        currency,
        payer,
        payee,
        status: 'created'
    };

    payments.push(payment);

    res.status(201).json(payment);
});

app.get('/payments', (req, res) => {
    res.status(200).json(payments);
});

app.listen(3000, () => {
    console.log('API rodando em http://localhost:3000');
});