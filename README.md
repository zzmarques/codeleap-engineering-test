# Desafio Front-End Jr. - Codeleap

Este projeto foi desenvolvido como parte do processo seletivo para a vaga de **Desenvolvedor Front-End Jr.** na **Codeleap**. A aplicação permite que o usuário se cadastre, crie, edite e exclua postagens, utilizando **React** e outras tecnologias modernas.

> 💡 Este projeto foi desenvolvido com o conceito **Mobile First**, garantindo uma ótima experiência em dispositivos móveis antes de ser adaptado para telas maiores.

[🔗 Acesse a demo do projeto aqui](https://codeleap-engineering-test-one.vercel.app/)
---

## Tecnologias Utilizadas

- **React**: Biblioteca para criação de interfaces de usuário dinâmicas.
- **React Hooks**: Para gerenciamento de estado local e controle de efeitos.
- **React Context API**: Utilizada para o gerenciamento global do estado das postagens (criação, edição e exclusão).
- **Sass**: Para a estilização da aplicação.
- **React Icons**: Para adicionar ícones de ação, como editar e excluir postagens.

---

## Funcionalidades

- **Cadastro de Usuário**: O usuário deve preencher um campo de nome para se cadastrar e acessar a aplicação.
- **Criação de Postagens**: Após o cadastro, o usuário pode criar postagens, com título e conteúdo.
- **Edição de Postagens**: O usuário pode editar postagens existentes, alterando título e conteúdo.
- **Exclusão de Postagens**: O usuário pode excluir postagens já criadas.
- **Validação de Campos**: Antes de criar ou editar uma postagem, os campos de **Título** e **Conteúdo** precisam ser preenchidos corretamente.
- **Desabilitação de Botões**: O botão de ação **Criar**, **Salvar** ou **Editar** ficará desabilitado enquanto os campos obrigatórios não estiverem preenchidos corretamente.

---

## Como Usar

### 1. **Cadastro de Usuário**
- Ao acessar a aplicação pela primeira vez, o usuário é solicitado a inserir um nome de usuário no campo de texto.
- O botão **"Enter"** ficará desabilitado até que o campo de nome esteja preenchido.

### 2. **Criar uma Nova Postagem**
- Após o cadastro, o usuário pode criar uma nova postagem:
  - Preencha os campos **Title** (Título) e **Content** (Conteúdo).
  - O botão **"Create"** só será habilitado se ambos os campos estiverem preenchidos corretamente. Caso contrário, ele ficará desabilitado.

### 3. **Editar uma Postagem Existente**
- O usuário pode editar postagens existentes clicando no ícone de **editar**.
- O título e o conteúdo podem ser alterados.
- O botão **"Save"** ficará habilitado apenas se ambos os campos estiverem preenchidos corretamente. Caso contrário, o botão permanecerá desabilitado.

### 4. **Excluir uma Postagem**
- O usuário pode excluir postagens clicando no ícone de **excluir**.
- Após clicar, será exibida uma confirmação antes da exclusão permanente da postagem.

---

## Validações de Campos

- **Título** (Title):
  - O título é um campo obrigatório para a criação e edição de postagens. Se o campo estiver vazio, os botões de **"Create"** ou **"Save"** serão desabilitados.
  
- **Conteúdo** (Content):
  - O conteúdo também é obrigatório para a criação e edição de postagens. Se o campo estiver vazio, o botão **"Create"** ou **"Save"** será desabilitado.

---

## Botões de Ação

### **Botão "Enter"**
- O botão **"Enter"** permite que o usuário se cadastre na aplicação.
- Ele será habilitado apenas quando o campo de nome for preenchido corretamente.

### **Botão "Create"**
- O botão **"Create"** permite criar uma nova postagem.
- Ele será habilitado somente quando os campos **Título** e **Conteúdo** estiverem preenchidos corretamente.

### **Botão "Save"**
- O botão **"Save"** permite salvar as edições feitas em uma postagem existente.
- Será habilitado apenas quando os campos **Título** e **Conteúdo** estiverem preenchidos corretamente.

### **Botão "Delete"**
- O botão **"Delete"** permite excluir uma postagem.
- Uma confirmação será exibida antes da exclusão permanente da postagem.
