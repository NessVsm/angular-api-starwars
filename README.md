# Descrição

Este projeto foi realizado a partir do desafio proposto pela companhia B2W e da necessidade da criação de uma API onde pudessem ser consultadas as principais informações a respeito de um elementos da franquia Starwars.

# Objetivo

Apresentar informações relacionadas a seis (6) diferentes categorias da saga, através da seleção aleatória do elemento a ser apresentado:

Planetas (Planets) - Nome, população, clima, terreno, filmes em que aparece
Espaçonaves (Starships) - Nome, modelo, manufaturação, passageiros e filmes
Veículos (Vehicles) - Nome, modelo, manufaturação, passageiros e filmes
Pessoas (People) - Nome, data de nascimento, gênero, altura e filmes
Filmes (Films) - Nome, episódio, diretor, produtor e data de lançamento
Espécies (Species) -  Nome, classificação, designação, linguagem e filmes

# Tecnologias

Para desenvolvimento da API, foram utilizadas as seguintes ferramentas:
<ul>
  <li>
     <b> Angular </b> - Framework para construção de interfaces com uso de Html, Css e Javascript </li>
   <li>
     <b>Angular CLI </b> - Ferramenta de apoio na criação de componentes Angular</li>
   <li> 
     <b> Typescript </b> - Superset do Javascript </li>
   <li>
     <b> SCC  </b> - Pré-processador CSS </li>
   <li>
     <b> CSS Snippets </b>
     <ul>
       <li> <b> The force Awakens </b> - https://cssanimation.rocks/starwars/ 
       </li>
       <li> <b> Button </b> - https://codepen.io/DanielWeiner/pen/iFadn 
       </li>
       <li> <b> Starwars Icons </b> - http://www.iconarchive.com/show/starwars-icons-by-sensibleworld.html 
       </li>
       <li> <b> Sidebar Menu </b> - https://codepen.io/arjancodes/pen/wtqIr 
       </li>
       <li> <b> Border </b> - https://codepen.io/uiswarup/pen/RBByzW 
       </li>
       <li> <b> Loading Icon </b> - https://2.bp.blogspot.com/-JiCTZL0TIt4/WMkrMCODCcI/AAAAAAAAA9g/1hG3JJpnO0EWXNLQwDFoyAu13f6Ks4H8QCLcB/s1600/animation.gif 
       </li>
     </ul>
    </li> 
    <li> <b> Lint </b> - Teste de padrões </li>
    <li> <b> Jasmine/Karma </b> - Teste unitário </li>
  <li> <b> Protractor </b> - Teste de integração </li>
 </ul><br />
  
  # Como executar
  
  Para execução do projeto será necessário ter instalado previamente em sua máquina o Git, o Node.js e o Angular CLI para então executar os seguintes passos.<br />
   <b>1. Clonar repositório </b> <br />
Através da clonagem do repositório, uma cópia do projeto será salva no seu computador. A partir desta, o projeto será executado, tornando também possível executar alterações (localmente) a partir da última versão lançada.<br /><br />
    <code>
    git clone https://github.com/NessVsm/starwars.git
    </code><br />
   <b>2. Instalar dependências </b> <br />
    A execução correta do projeto depende da existência das dependências necessárias. Para tal, dentro da pasta do projeto (diretório/starwars), execute o comando.<br /><br />
    <code>
    npm install
    </code><br />
    <b>3. Executando o servidor e seleção da porta </b><br />
   Após a instalação das dependências, já é possível inicilizar o servidor que irá rodar o projeto. 
  Por padrão, o acesso à API se dará a partir da seguinte url: http://localhost:4200/people. Caso haja necessidade de alteração (por exemplo, caso a porta já esteja sendo utilizada), o seguinte comando poderá ser executado:<br /><br />
    <code>
    ng serve --port portadesejada
    </code><br />

  # Testando
  
  Para garantir a qualidade do projeto, foram executados os testes:<br />
  <code> ng lint </code><br />
  <code> ng test </code><br />
  <code> ng e2e </code><br />
  
  Através destes testes, podem ser encontrados tanto erros referentes à boas práticas quanto erros que podem vir a comprometer a condução do projeto. Após a execução dos testes, foram realizadas todas as mudanças pertinentes.
  
  # Funcionalidades Adicionais
  
  <ul>
  <li><b> Seleção de diferentes categorias </b> - Além de planetas, é possível também obter informações sobre diferentes categorias relacionadas a Starwars<br />
  </li>
  <li><b> Tratamento de página não encontrada </b> - Caso o usuário digite uma página que não corresponda a nenhuma das rotas, será exibido uma página de erro pré-configurada<br />
  </li>
  </ul>
  







