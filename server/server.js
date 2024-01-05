const express = require('express');
const app = express();
const PORT = 3001; 

app.get('/', (req, res) => {
    res.send('Hello, this is your Express server!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
