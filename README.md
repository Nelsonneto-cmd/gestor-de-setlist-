# Gestor de Setlist

Aplicação web para criar, organizar e gerir setlists de músicas para apresentações, ensaios e eventos.

## Sobre o projeto

O Gestor de Setlist foi desenvolvido para facilitar a organização das músicas de uma apresentação. A aplicação permite estruturar um repertório de forma simples, tornando mais fácil consultar a ordem das músicas e preparar um setlist.

## Funcionalidades

- Criar e organizar setlists.
- Adicionar músicas ao repertório.
- Definir a ordem das músicas.
- Consultar os setlists criados.
- Separação entre frontend e backend.
- Estrutura preparada para futuras melhorias.

## Tecnologias utilizadas

### Frontend

- HTML
- CSS
- JavaScript
- [Adicionar aqui o framework utilizado, caso exista]

### Backend

- Node.js
- [Adicionar aqui o framework utilizado, caso exista]
- [Adicionar aqui a base de dados utilizada, caso exista]

## Estrutura do projeto

```text
gestor-de-setlist/
├── backend/
│   └── Código da API e regras de negócio
├── front-end/
│   └── Interface da aplicação
└── README.md
```

## Pré-requisitos

Antes de começar, certifica-te de que tens instalado:

- Node.js
- npm
- Git

Podes confirmar as versões instaladas com:

```bash
node --version
npm --version
git --version
```

## Instalação

1. Clona o repositório:

```bash
git clone https://github.com/Nelsonneto-cmd/gestor-de-setlist.git
```

2. Entra na pasta do projeto:

```bash
cd gestor-de-setlist
```

3. Instala as dependências do backend:

```bash
cd backend
npm install
```

4. Instala as dependências do frontend:

```bash
cd ../front-end
npm install
```

## Como executar

### Executar o backend

Dentro da pasta `backend`, executa:

```bash
npm start
```

Caso o projeto utilize outro script, podes executar:

```bash
npm run dev
```

### Executar o frontend

Abre outro terminal, entra na pasta do frontend e executa:

```bash
cd front-end
npm start
```

Ou, caso esteja configurado para desenvolvimento:

```bash
npm run dev
```

Depois, abre no navegador o endereço apresentado no terminal, normalmente:

```text
http://localhost:3000
```

## Variáveis de ambiente

Se o projeto utilizar variáveis de ambiente, cria um arquivo `.env` dentro da pasta `backend`:

```env
PORT=3000
DATABASE_URL=coloca_aqui_a_url_da_base_de_dados
```

Não partilhes informações sensíveis, como palavras-passe, tokens ou chaves de API.

## Exemplo de utilização

1. Inicia o backend e o frontend.
2. Abre a aplicação no navegador.
3. Cria um novo setlist.
4. Adiciona as músicas desejadas.
5. Organiza as músicas pela ordem da apresentação.
6. Consulta o setlist durante o ensaio ou evento.

## Melhorias futuras

- Sistema de autenticação de utilizadores.
- Edição e eliminação de setlists.
- Pesquisa de músicas.
- Exportação do setlist para PDF.
- Partilha de setlists através de um link.
- Modo escuro.
- Integração com serviços de música.
- Responsividade para dispositivos móveis.

## Contribuição

Contribuições são bem-vindas.

1. Faz um fork do projeto.
2. Cria uma nova branch:

```bash
git checkout -b minha-melhoria
```

3. Faz as alterações necessárias.
4. Guarda as alterações:

```bash
git add .
git commit -m "Adiciona nova funcionalidade"
```

5. Envia a branch:

```bash
git push origin minha-melhoria
```

6. Abre um Pull Request.

## Autor

Desenvolvido por **Nelson Neto**.

- GitHub: [Nelsonneto-cmd](https://github.com/Nelsonneto-cmd)

## Licença

Este projeto ainda não possui uma licença definida.

Para permitir a utilização e modificação do projeto por outras pessoas, considera adicionar uma licença, como a [MIT](https://opensource.org/licenses/MIT).
