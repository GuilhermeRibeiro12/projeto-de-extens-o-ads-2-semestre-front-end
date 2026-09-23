# Barbearia - Front-end

Projeto de extensão desenvolvido durante o 2º semestre do curso de Análise e Desenvolvimento de Sistemas (ADS).

Este repositório contém apenas o **front-end** de um sistema de gestão para barbearia, construído com **Angular**. O objetivo do projeto é aplicar na prática os conceitos aprendidos em sala de aula, oferecendo uma interface para agendamento de horários, visualização de serviços e cadastro de clientes.

## 🛠️ Tecnologias utilizadas
- Angular
- TypeScript
- HTML5
- CSS3

## 📌 Sobre o projeto
Projeto acadêmico de extensão universitária, com foco no desenvolvimento do front-end de uma aplicação para barbearia. Os dados exibidos (serviços, trabalhos e equipe) são **mockados**, já que o back-end ainda será desenvolvido futuramente.

## 📁 Estrutura do projeto

frontprojeto/
├── src/
│ ├── app/
│ │ ├── components/
│ │ │ └── home/
│ │ │ ├── home.ts # Lógica do componente principal
│ │ │ ├── home.html # Template com as seções da página
│ │ │ └── home.css # Estilos da página
│ │ ├── mocks/
│ │ │ └── mock-data.ts # Dados mockados (serviços, trabalhos, equipe)
│ │ ├── models/
│ │ │ ├── servico.ts # Interface Servico
│ │ │ ├── trabalho.ts # Interface Trabalho
│ │ │ └── barbeiro.ts # Interface Barbeiro
│ │ ├── services/
│ │ │ └── barbearia.ts # Service que simula chamadas de API
│ │ ├── app.ts # Componente raiz da aplicação
│ │ ├── app.html
│ │ └── app.css
│ ├── index.html
│ └── styles.css
├── angular.json
├── package.json
└── README.md


## 🚀 Como rodar o projeto

### Pré-requisitos
- [Node.js](https://nodejs.org/) instalado (versão 18 ou superior)
- [Angular CLI](https://angular.dev/tools/cli) instalado globalmente:
```bash
  npm install -g @angular/cli
```

### Passo a passo

1. Clone o repositório:
```bash
   git clone https://github.com/GuilhermeRibeiro12/projeto-de-extens-o-ads-2-semestre-front-end.git
```

2. Entre na pasta do projeto:
```bash
   cd projeto-de-extens-o-ads-2-semestre-front-end
```

3. Instale as dependências:
```bash
   npm install
```

4. Rode o servidor de desenvolvimento:
```bash
   ng serve
```

5. Abra o navegador em:
http://localhost:4200


A aplicação vai recarregar automaticamente sempre que você alterar algum arquivo.

## 🚧 Status
Em desenvolvimento.