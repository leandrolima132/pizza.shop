# Pizza Shop

![Descrição do GIF](/src/assets/demostrativo.png)

## Descrição

Este é o projeto "Pizza Shop", desenvolvido como parte do curso da Rocketseat. O objetivo do projeto é criar uma aplicação simples para gerenciamento de pedidos de pizzas, permitindo que os usuários visualizem o cardápio, realizem pedidos e acompanhem o status.

## Funcionalidades

- Visualização do cardápio de pizzas.
- Adição de pizzas ao carrinho.
- Finalização de pedidos.
- Acompanhamento do status dos pedidos.

## Tecnologias Utilizadas

- **ReactJS** - Biblioteca para construção da interface
- **TypeScript** - Superset do JavaScript que adiciona tipagem estática
- **React Hook Form** - Biblioteca para gerenciamento de formulários
- **Zod** - Validação de esquemas e dados
- **Tailwind CSS** - Estilização de componentes com CSS-in-JS
- **React Router** - Navegação e roteamento
- **lucide-react** - Ícones para a interface

## Instalação front

Para começar a usar o Pizza Shop localmente, siga os passos abaixo:

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/leandrolima132/pizza.shop.git
   ```

2. **Navegue até o diretório do projeto:**

   ```bash
   cd pizza.shop
   ```

3. **Instale as dependências:**

   ```bash
   npm install
   ```

4. **Execute o Docker compose:**
   ```bash
   docker compose up -d
   ```
5. **Inicie o servidor de desenvolvimento:**

   ```bash
   npm start
   ```

## Instalação backend

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/rocketseat-education/pizzashop-api.git
   ```

2. **Instale as dependências:**

   ```bash
   bun i
   ```

3. **Realize as migrações:**

   ```bash
   bun migrate
   ```

4. **Popule o banco de dados:**

   ```bash
   bun seed
   ```

5. **Inicie o servidor de desenvolvimento:**

   ```bash
   bun dev
   ```
