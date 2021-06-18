const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));


app.listen(process.env.PORT || 3000, function() {
    console.log('servidor corriendo en el puerto 3000');
})

app.get('/', (req, res) =>{
    const ruta = path.resolve(__dirname, 'views/home.html');
    res.sendFile(ruta);
})