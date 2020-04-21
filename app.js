var app = require('./config/server');

var rota_home = require('./app/routs/home')(app);

var rota_noticias = require('./app/routs/noticias')(app);

var rota_inclusao_noticia = require('./app/routs/formulario_inclusao_noticia')(app);

app.listen(3000, function () {
    console.log('Servidor ON...');
});
