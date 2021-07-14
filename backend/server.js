const express  = require('express');

const app = express();

// Init Middleware
app.arguments(express.json({ extended: false }));


const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Sever started on port ${PORT}`));
