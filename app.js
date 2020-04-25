var app = require('./config/server');

//var rota_home = require('./app/routes/home')(app);

//var rota_noticias = require('./app/routes/noticias')(app);

//var rota_inclusao_noticia = require('./app/routes/formulario_inclusao_noticia')(app);

app.listen(3000, function () {
    console.log('Servidor ON...');
});
