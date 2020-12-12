const express = require('express');
const app = express();
const handle = require('./handlers');

const PORT = 5000;
app.get('/', (req, res) => {
    res.json({
        hello: "world"
    });
});

app.use(handle.notFound);

app.use(handle.errors);


app.listen(PORT, console.log(`Server started at port ${PORT}`));