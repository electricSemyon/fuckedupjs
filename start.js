const app = require('./app');
app.set('port', 1488);
const server = app.listen(app.get('port'), () => {
  console.log(`Сервер запущен на порте ${server.address().port}`);
});