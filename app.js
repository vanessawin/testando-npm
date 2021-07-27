// Incluindo uma biblioteca
const http = require('http');
const url = require('url'); 
const queryString = require('query-string');

// Definição de endereço / Url
const hostname = '127.0.0.1'; // localhost
const port = 3000;

// Implementação da regra de negocio/logica de programação


const server = http.createServer((req, res) => {

    // Pegar a pergunta na url
    const params = queryString.parse(url.parse(req.url, true).search) //decodificamos a url
    
    
    // Verificar a pergunta e escolher uma resposta
    let resposta; // mapeamos pergunta e resposta
    if(params.pergunta == "melhor-filme"){
      resposta = "star wars";
    }
    else if(params.pergunta == "melhor-tecnologia-backend"){
      resposta = "Nodejs";
    }
    else {
      resposta = "Nao sei, desculpe :( ";
    }
    
    // Retornar a resposta escolhida

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(resposta); //retornamos a resposta para o navegador
});

// Execução
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

//http://localhost:3000/?pergunta=melhor-filme