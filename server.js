const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static('public'));

// --- Mock Database (In-Memory) ---
let mockProfile = {
    businessName: 'AdWise Demo',
    founderName: 'Founder',
    businessEmail: 'demo@adwise.com',
    industry: 'SaaS',
    revenueRange: '25L-1Cr',
    channels: ['Google Ads', 'Facebook Ads', 'Instagram']
};

// --- Mock Multipliers ---
const getMultiplier = (range) => range / 7;

// --- Auth Routes (Mock) ---
app.post('/api/auth/register', (req, res) => {
    res.json({ token: 'mock-jwt-token', userId: 'mock-user-id' });
});

app.post('/api/auth/login', (req, res) => {
    res.json({ token: 'mock-jwt-token', hasBusiness: true });
});

// --- Business & Onboarding (Mock) ---
app.post('/api/business/onboarding', (req, res) => {
    mockProfile = { ...mockProfile, ...req.body };
    res.json({ success: true });
});

app.get('/api/business/profile', (req, res) => {
    res.json(mockProfile);
});

// --- Dashboard APIs (Mock) ---
app.get('/api/dashboard/stats', (req, res) => {
    const range = parseInt(req.query.range) || 30;
    const mult = getMultiplier(range);

    const spend = Math.floor((15000 + Math.random() * 5000) * mult);
    const revenue = Math.floor(spend * (2.5 + Math.random() * 2));
    const conversions = Math.floor(spend / 450);

    res.json({
        totalSpend: spend,
        totalRevenue: revenue,
        totalConversions: conversions,
        roi: ((revenue - spend) / spend) * 100
    });
});

app.get('/api/dashboard/charts', (req, res) => {
    const range = parseInt(req.query.range) || 30;
    const timeSeries = [];
    const now = new Date();

    let points = range === 7 ? 7 : (range === 30 ? 15 : 12);
    let interval = range / points;

    for (let i = points; i >= 0; i--) {
        const date = new Date(now);
        date.setDate(date.getDate() - (i * interval));
        const spend = Math.floor(Math.random() * 2000) + 1000;
        const revenue = Math.floor(spend * (2 + Math.random() * 2));
        timeSeries.push({
            _id: date.toISOString().split('T')[0],
            spend,
            revenue
        });
    }

    const platformStats = [
        { _id: 'Google Ads', spend: 0.4, revMult: 3.2 },
        { _id: 'Facebook Ads', spend: 0.3, revMult: 2.6 },
        { _id: 'Instagram', spend: 0.2, revMult: 2.2 },
        { _id: 'Email Marketing', spend: 0.05, revMult: 4.5 },
        { _id: 'WhatsApp Marketing', spend: 0.05, revMult: 1.5 }
    ].map(p => {
        const s = Math.floor((range * 3000) * p.spend);
        const r = Math.floor(s * p.revMult * (0.9 + Math.random() * 0.2));
        return {
            _id: p._id,
            spend: s,
            revenue: r,
            conversions: Math.floor(s / 400)
        };
    });

    res.json({ timeSeries, platformStats });
});

app.get('/api/recommendations', (req, res) => {
    res.json({
        topPerformer: { _id: 'Google Ads', roi: 320 },
        underperformer: { _id: 'WhatsApp Marketing', roi: 120 }
    });
});

// Serving index.html for all other routes
app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Analytics Server running at http://localhost:${PORT}`);
});
