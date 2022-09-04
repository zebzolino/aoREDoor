<p align="center">
 <img width=200px height=200px src="https://i.imgur.com/Mg9efzZ.png" alt="Project logo">
</p>

<h1 align="center">Ao (seu) REDoor</h1>

<div align="center">

  [![Status](https://img.shields.io/badge/status-active-success.svg)]() 
  [![GitHub Issues](https://img.shields.io/github/issues/silvamva/aoREDoor)](https://github.com/silvamva/aoREDoor/issues)
  [![GitHub Pull Requests](https://img.shields.io/github/issues-pr/silvamva/aoREDoor.svg)](https://github.com/silvamva/aoREDoor/pulls)
  [![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---
<br />

## 📝 Índice
- [Desafio](#desafio)
- [Ideia / Solução](#ideia)
- [Planos Futuros](#proximos_passos)
- [Instalação](#instalacao)
- [Feito Com](#feito_com)
- [Autor](#autor)

<br />

## 🧐 Desafio <a name = "desafio"></a>
Desenvolver um portal de recursos educacionais digitais (RED) fictício utilizando o padrão PWA (Progressive WebApp).
```md
#### Catálogo
Para cada recurso educacional deve ter as seguintes informações:
+ Imagem de capa do RED;
+ Nome do RED;
+ Descrição;
+ Autor;
+ Categoria;
+ Link para acessar o RED;
+ Palavras chaves
+ Página de detalhes para cada RED

#### Atividades
+ Adicionar pelo menos 50 RED’s exibindo 15 por página;
+ Consumir os dados: https://api.portalmec.c3sl.ufpr.br/v1/learning_objects

```

<br />

## 💡 Ideia / Solução <a name = "ideia"></a>
Desenvolver um SPA (Single-page application) utilizando o virtual DOM que a biblioteca ReactJS nós prover. Inicialmente, pesquisei por inspirações no behance, dribbble, e o próprio site do portal MEC, dessa forma, entendi um pouco mais sobre as cores, temas e formas relacionadas com esse assunto. 
<br /><br />
Depois, comecei a prototipar utilizando o [figma](https://www.figma.com/file/j0uigsyEMLJSec7bacLxPH/AOREDOOR?node-id=0%3A1) algum rumo inicial para a cara visual da solução, então elaborei a logo do REDoor (um grande mix da logo do stackoverflow) utilizando o inkscape e figma. 
<br /><br />
Por fim, comecei a codificação estudando a API que era requisito consumir seus dados, e utilizei o JSON formatter para conhecer seu objetos e desenvolver as interfaces em código, também utilizei MUI para não precisar reiventar a roda com componentes de utilização consolidada.

<br />

## 🚀 Próximos Passos <a name = "proximos_passos"></a>
```md
+ Adicionar API Context para fazer cache dos dados da API
+ Adicionar mais Unit Test
+ Verificar melhorias sugeridas pelo Lighthouse
```

<br />

### Pré-requisitos

```
Node.js v16.15.0
```

<br />

### Instalação <a name = "instalacao"></a>

```
## Cloning the repository
git clone https://gitlab.cin.ufpe.br/devcin/intranet/graduate-management/graduate-management-front.git

## Entering the directory
cd graduate-management-front

## Installing the npm dependencies
npm install

## Starting the project (development environment)
npm start
```

```
## Building the project (production environment)
npm run build

## Entering the directory
cd build

## Starting the project (production environment)
npx serve
```

<br />

## ⛏️ Feito Com <a name = "feito_com"></a>
- [MUI](https://www.mongodb.com/) - Suite of UI Tools
- [ReactJS](https://expressjs.com/) - JavaScript library for building user interfaces 
- [Typescript](https://vuejs.org/) - JavaScript With Syntax For Types.
- [NodeJs](https://nodejs.org/en/) - JavaScript Runtime

<br />

## ✍️ Autor <a name = "autor"></a>
- [@Matheus Silva](https://www.linkedin.com/in/matheusvasilva/) - Front-end Engineer

<br />
