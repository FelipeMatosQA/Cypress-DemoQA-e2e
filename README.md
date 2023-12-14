# Cypress-DemoQA-e2e PT-BR README

Neste projeto de automação de portfólio utilizamos Cypress para automatizar a aplicação "https://demoqa.com/", a aplicação apontada é um site de pratica de automação utilizado para treinamento de certificações de diferentes frameworks. 

Foi visado demonstrar a proeficiencia em interagir com elementos considerados "complexos" no mundo da automação e passar por problemas reais enfrentados no dia a dia das automações de testes UI, como: Esperar pelo carregamento de barra de progreço, validações de toolTips, Interagir com WebTables, Validar carregamento de imagens e imagens não carregadas, Interagir com diferentes tipos de inputs em formulários, Iframes de Anuncios em frente aos elementos, dentre outros. Assim como foi utilizado o padrão de projeto "Page Objects" para facilitar a manutenção e reuso do código, e foi feita a gestão de dados por meio de arquivos fixtures.

Quanto à reports e execução, foi utilizado o "cypress-mochawesome-reporter" para geração do relatório de execução. E foram configuradas duas pipelines de execução em Cloud utilizando Github Actions, tendo como trigger a execução de um PR, e uma execução agendada diária. Onde serão anexados os devidos artefatos de execução e será enviado notificação informando da execução no Slack.


# Instruções para execução

Se você deseja executar esse projeto primeiro você precisa clonar este repositório.

Para clonar este repositório execute esses comandos:

```bash
## Clone esse repositório para um diretório local.
git clone https://github.com/FelipeMatosQA/Cypress-DemoQA-e2e.git
## Entre na pasta do projeto
cd Cypress-DemoQA-e2e
## Instale o node-modules
npm install
## Instale o cypress localmente
npx cypress install --force
## Caso deseje abrir a interface gráfica
npx cypress open
## Para executar os testes headless
npx cypress run
```

# Cypress-DemoQA-e2e EN-US README

On this portfolio automation project, I used Cypress to automate the application "https://demoqa.com/". This application is a automation pratice tool, used for  certifications training of differents automations tests frameworks.

The purpouse of this project was demonstrate proficiency in interacting with diferent kinds of elements cosidered "complex" in automation, and go through real problems found day to day in  UI testing automation,such as: Wait until the progress bar is complete, validate toolTips, interact with WebTables, validate broken and valid images, interact with diffretent kinds of inputs in forms, ads inside Iframes in front of the elements. I also used the design pattern "Page Objects" to have a better maintenance and reusability of the code, and I use fixtures files to manage data.

About reports and execution, the "cypress-mochawesome-reporter" was used to generate the execution report.There were configured two pipelines files of cloud execution using Github Actions, the triggers were PR executions and a daily scheduled execution. There will be anexed the execution artifact of each execution and will be sent a Slack notification of each execution report.

# Execution Instructions

If you want to experiment with running this project, you'll need to Clone it first.

To clone this project from Github, run these commands:

```bash
## Clone this repository to a local directory.
git clone https://github.com/FelipeMatosQA/Cypress-DemoQA-e2e.git
## Enter in the project folder
cd Cypress-DemoQA-e2e
## Install the node modules
npm install
## Install Cypress locally
npx cypress install --force
## To run the tests visually use
npx cypress open
## To run the tests in a headless inviroment use
npx cypress run
```
# Report 

In the image below, you can see the report layout, that has passed all tests.

![ALL TESTS PASSED](https://github.com/FelipeMatosQA/Cypress-DemoQA-e2e/assets/121990373/643510dd-7051-48cb-8e1e-2f1c4b9018b4)


