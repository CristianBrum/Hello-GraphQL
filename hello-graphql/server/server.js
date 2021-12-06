const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const router = require('./src/router/route');
const connection = require('./src/connection');

app.use('/graphql', router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, connection(), console.log(`Server running on port ${PORT}`));
