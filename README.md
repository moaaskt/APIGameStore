<img src="http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge"/>
<h1>GameStore - API E-commerce de Games</h1>


<p>A GameStore é uma loja virtual de vendas de jogos para todas as plataformas.</p>


<h2>Recursos</h2>

<ul>
  <li>Recurso 1: </li>
  <li>Recurso 2: </li>
  <!-- Adicione mais recursos se necessário -->
</ul>

<h2>Instalação</h2>

<ol>
  <li>Clone o repositório do projeto:</li>
</ol>

<pre><code>git clone https://github.com/seu-usuario/seu-projeto.git</code></pre>

<ol start="2">
  <li>Navegue até o diretório do projeto:</li>
</ol>

<pre><code>cd seu-projeto</code></pre>

<ol start="3">
  <li>Instale as dependências:</li>
</ol>

<pre><code>npm install</code></pre>

<h2>Uso</h2>

<ol>
  <li>Execute o projeto:</li>
</ol>

<pre><code>node server.js</code></pre>

<p>Acesse o aplicativo em <a href="http://localhost:4000">http://localhost:4000</a>.</p>

## Exemplo de uso:

A seguir, estão detalhadas as rotas disponíveis na API, juntamente com exemplos de como utilizá-las para interagir com o sistema de gerenciamento de jogos, usuários e administradores.

### Listar Todos os Usuários:

```http
GET /listar-users
```
Esta rota retorna uma lista de todos os usuários cadastrados no sistema.


### Cadastrar um Novo Usuário:

```http
POST /cadastrar-usuario
```
Envie um JSON no corpo da solicitação contendo os detalhes do usuário para criar um novo registro.


### Atualizar Informações de um Usuário:

```http
PUT /atualizar-usuario/:id
```
Substitua :id pelo ID do usuário que deseja atualizar e envie um JSON no corpo da solicitação com os novos detalhes.


### Remover um Usuário:

```http
DELETE /deletar-usuario/:id
```
Substitua :id pelo ID do usuário que deseja excluir.

### Listar Todos os Jogos:

```http
GET /listar-games
```
Esta rota retorna uma lista de todos os jogos cadastrados no sistema.

### Cadastrar um Novo Jogo:

```http
POST /cadastrar-game
```
Envie um JSON no corpo da solicitação contendo os detalhes do jogo para criar um novo registro.

### Atualizar Informações de um Jogo:

```http
PUT /atualizar-game/:id
```
Substitua :id pelo ID do jogo que deseja atualizar e envie um JSON no corpo da solicitação com os novos detalhes.

### Remover um Jogo:

```http
DELETE /deletar-game/:id
```
Substitua :id pelo ID do jogo que deseja excluir.

### Listar Todos os Administradores:

```http
GET /listar-admins
```
Esta rota retorna uma lista de todos os administradores cadastrados no sistema.

### Cadastrar um Novo Administrador:

```http
POST /cadastrar-admin
```
Envie um JSON no corpo da solicitação contendo os detalhes do administrador para criar um novo registro.

### Autenticar um Administrador (Realizar Login):

```http
POST /login
```
Envie um JSON no corpo da solicitação contendo o email e a senha do administrador para autenticação. Se as credenciais estiverem corretas, um token 
de autenticação será retornado.

### Buscar Jogos por Critérios:
```http
GET /buscar-jogo?nome=<nome>&precoMin=<precoMin>&precoMax=<precoMax>&plataforma=<plataforma>
```
Substitua os parâmetros <nome>, <precoMin>, <precoMax> e <plataforma> pelos critérios desejados para buscar jogos específicos.

### Buscar Jogos por Plataforma:
```http
GET /buscar-por-plataforma/:plataforma
```
Substitua :plataforma pela plataforma desejada para buscar jogos relacionados a essa plataforma.


<h2>Contribuição</h2>

<p>Se você deseja contribuir para este projeto e ajudá-lo a melhorar, siga estas etapas:</p>

<ol>
  <li>Faça um fork do projeto.</li>
  <li>Crie uma nova branch com a sua feature ou correção de bug: <code>git checkout -b minha-feature</code>.</li>
  <li>Faça as alterações desejadas e adicione os commits: <code>git commit -m 'Adicionei minha feature'</code>.</li>
  <li>Envie as alterações para o repositório remoto: <code>git push origin minha-feature</code>.</li>
  <li>Crie um novo Pull Request.</li>
</ol>

<h2>Licença</h2>

<p>Este projeto está licenciado sob a <a href="https://opensource.org/licenses/MIT">MIT License</a>.</p>

<h2>Contato</h2>

<p>Se você tiver alguma dúvida ou sugestão em relação a este projeto, entre em contato no <a href="mailto:moacirneto59@gmail.com">E-mail</a>.</p>
