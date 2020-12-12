require('dotenv').config();
const express = require('express');
const app = express();
const handle = require('./handlers');
const cors = require('cors');
const bodyparser = require('body-parser');
const db = require('./models');
app.use(cors());
app.use(bodyparser.json());

const PORT = process.env.PORT;
app.get('/', (req, res) => {
    res.json({
        hello: "world"
    });
});

app.use(handle.notFound);

app.use(handle.errors);


app.listen(PORT, console.log(`Server started at port ${PORT}`));