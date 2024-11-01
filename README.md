###Este projeto contém testes automatizados usando Cypress para realizar verificações na interface web do YouTube. Utilizamos o Cypress para simular ações de um usuário e validar elementos e comportamentos na plataforma. Também integramos a ferramenta Mochawesome para a geração de relatórios em HTML.

###Pré-requisitos:
Node.js (versão 12 ou superior)
npm ou yarn
Cypress
Mochawesome

###Instalação
Clone o repositório:

git clone https://github.com/seu-usuario/projeto-youtube-tests.git

Instale as dependências do projeto:

npm install

###Estrutura de Diretórios

cypress/: Contém todos os arquivos de teste.
cypress/integration/: Contém os scripts de teste.
cypress/reports/: Contém os relatórios gerados pelo Mochawesome.

###Como Executar os Testes
Executar os Testes em Modo Interativo (Cypress GUI)

npx cypress open

Isso abrirá a interface gráfica do Cypress, onde você poderá selecionar e executar os testes manualmente.

###Executar os Testes em Modo Headless (Automatizado)

npx cypress run

Os testes serão executados em modo headless (sem interface gráfica). Por padrão, os resultados aparecerão no terminal.

###Geração de Relatórios com Mochawesome
Instalação do Mochawesome
Caso ainda não tenha instalado, execute:

npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator

###Configuração
O Mochawesome é configurado automaticamente através de um comando adicional de reporter no Cypress.

###Executar e Gerar o Relatório
Para executar os testes e gerar o relatório, utilize o comando:

npx cypress run --reporter mochawesome --reporter-options reportDir=cypress/reports,overwrite=false,html=true,json=true
Este comando irá gerar relatórios JSON e HTML na pasta cypress/reports.

###Visualizar o Relatório
O relatório em HTML estará disponível em cypress/reports/mochawesome.html. Abra-o em seu navegador para visualizar os resultados detalhados dos testes.