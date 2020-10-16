var express = require('express');
var app = express();

// inicio index clientes proveedores contactos etc
app.get('/', c_inicio);
app.get('/clientes', c_clientes);
app.get('/productos', c_productos);

function c_inicio(req,res)
{
    res.send('<h1> Index de inicio</h1>');
}
function c_clientes(req,res)
{
    res.send('<h1>Hola desde la página de inicio</h1><p>Frisco Ramírez Gomero</p><p>	Elmer curio Juan</p><p>	Aquies Caigo Claudio</p>');
}
function c_productos(req,res)
{
    res.send('<h1>Productos</h1><table border="1 px"><tr><td>N°</td><td>Producto</td><td>Precio</td><td>Cantidad</td></tr><tr><td>1</td><td>Llantas</td><td>S/. 320</td><td>16</td></tr><tr><td>2</td><td>Mesas de plástico</td><td>S/. 60</td><td>120</td></tr><tr><td>3</td><td>Lunas polarizadas</td><td>S/. 220</td><td>180</td></tr></table>');
}
function c_server()
{
    var host = server.address().address;
    var port = server.address().port;
    console.log(host + ' : '+port);
}

var server = app.listen(5000,c_server);