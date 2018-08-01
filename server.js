var http = require('http')
var url = require('url')
var fs = require('fs')
var path = require('path')


http.createServer(function (pedido, resposta) {

  // Aqui vamos escrever o código do servidor que vai ser
  // executado sempre que for feito um pedido

  //Definir os content types que poderemos entregar na requisição http
  var contentTypes = {
    'html': 'text/html',
    'css': 'text/css',
    'ico': 'image/x-icon',
    'png': 'image/png',
    'svg': 'image/svg+xml',
    'js': 'application/javascript',
    'map':'application/javascript',
    'otf': 'application/x-font-otf',
    'ttf': 'application/x-font-ttf',
    'eot': 'application/vnd.ms-fontobject',
    'woff': 'application/x-font-woff',
    'woff2': 'application/font-woff2',
    'zip': 'application/zip'
  }


  //1º Saber qual o ficheiro pedido (pagina html)
  var caminho = url.parse(pedido.url).pathname;

  //2º Ler o ficheiro correspondente a partir da pasta public
  if (caminho === '/') {
    var ficheiro = path.join(__dirname, 'public', caminho, 'index.html');
  } else {
    var ficheiro = path.join(__dirname, 'public', caminho);
  }


  //Atribuir nos Headers (cabeçalho da requisição) os tipos de arquivos permitidos.
  var extensao = path.extname(ficheiro).slice(1);
  resposta.setHeader('Content-Type', contentTypes[extensao]);


  //3º Responder ao pedido com o conteúdo do ficheiro lido
  fs.readFile(ficheiro, function (erro, dados) {
    if (erro) {
      resposta.writeHead(404);
      resposta.end();
    } else {
      resposta.end(dados);
    }
  });

}).listen(3000, 'localhost', function () {
  console.log('--- O servidor arrancou –--');
});