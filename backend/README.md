# Tweet Control - Backend 

## Node.js 

Node.js é um ambiente de execução JavaScript server-side. As vantagens do node: 

* Linguagem popular: o JavaScript já está por aí desde os tempos da internet lascada, digo, discada. É possível contratar programadores com relativa facilidade.
* JavaScript full-stack: usar a mesma linguagem no front-end e back-end é uma grande vantagem, pois os programadores não precisam trabalhar com mais de uma linguagem.
* Leve: criar um ambiente e subir uma aplicação Node.js não exige muitos recursos computacionais como seus concorrentes. Tanto que é muito usado em microserviços e serverless (como nas skills tipo Alexa Hosted).

Você pode saber mais sobre lendo a própria documentando do [Node.js](https://nodejs.dev/learn).

<br>

## Node no Tweet Control

<br>

### Estrutura do projeto




```console
src\
 |--config\         # Configurações das variaveis e funcionamento dos pacotes instalados;
 |--controllers\    # Controle das rotas
 |--middlewares\    # Middlewares personalizados
 |--models\         # Classes dos objetos
 |--routes\         # Routas do express
 |--services\       # Logica de negocio
 |--utils\          # Classes utilitárias para todo o projeto
 |--validations\    # Validações das classes
 |--app.js          # App do Express
 |--index.js        # Inicio do projeto
```
###  Rodar o projeto

```bash
 npm i 
 npm run dev
```

## Authors

- **Juliana Portilho** - [JulianaPort](https://github.com/JulianaPort)
