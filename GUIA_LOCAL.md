# 🚀 Guia Completo para Rodar o Projeto Localmente

Este guia vai te ajudar passo a passo a fazer o projeto funcionar no seu computador.

## 📋 O que você precisa ter instalado

Antes de começar, você precisa ter o **Node.js** instalado no seu computador.

### Como verificar se você tem Node.js:

1. Abra o **PowerShell** ou **Prompt de Comando**
2. Digite: `node --version`
3. Se aparecer um número (como `v18.0.0` ou similar), está instalado! ✅
4. Se aparecer erro, você precisa instalar (veja abaixo)

### Como instalar Node.js (se necessário):

1. Acesse: https://nodejs.org/
2. Baixe a versão **LTS** (Long Term Support) - é a versão recomendada
3. Execute o instalador e siga as instruções
4. Reinicie o computador após instalar
5. Abra o PowerShell novamente e verifique com `node --version`

---

## 📦 Passo a Passo para Rodar o Projeto

### Passo 1: Abrir o projeto no terminal

1. Abra o **PowerShell** no Windows
2. Navegue até a pasta do projeto usando o comando:
   ```powershell
   cd C:\Users\marco\CascadeProjects\Vitra
   ```
   (Ou arraste a pasta para o PowerShell)

### Passo 2: Instalar as dependências

As "dependências" são programas externos que o projeto precisa para funcionar. É como se você precisasse instalar peças para montar um móvel.

Execute este comando:
```powershell
npm install
```

**O que vai acontecer:**
- O npm vai baixar e instalar todos os programas necessários
- Isso pode levar alguns minutos (1-5 minutos)
- Você verá várias mensagens na tela - isso é normal!

**Possíveis erros e soluções:**
- Se aparecer "npm não é reconhecido": Você precisa reinstalar o Node.js
- Se aparecer erro de permissão: Execute o PowerShell como Administrador

### Passo 3: Configurar variáveis de ambiente (opcional)

O projeto tem um arquivo `.env.local` que você pode usar para configurar chaves de API. Por enquanto, você pode deixar vazio - o projeto vai funcionar mesmo assim.

### Passo 4: Iniciar o servidor de desenvolvimento

Agora vamos fazer o projeto "rodar" localmente. Execute:
```powershell
npm run dev
```

**O que vai acontecer:**
- O Vite vai compilar o projeto
- Você verá uma mensagem como: `Local: http://localhost:3000`
- O projeto estará rodando! 🎉

### Passo 5: Abrir no navegador

1. Abra seu navegador (Chrome, Edge, Firefox, etc.)
2. Digite na barra de endereço: `http://localhost:3000`
3. Você verá o site funcionando!

---

## 🎯 Comandos Úteis

Aqui estão os comandos que você pode usar:

### `npm run dev`
- Inicia o servidor de desenvolvimento
- O site fica disponível em `http://localhost:3000`
- Qualquer mudança no código atualiza automaticamente no navegador

### `npm run build`
- Cria uma versão otimizada do projeto para produção
- Os arquivos ficam na pasta `dist`

### `npm run preview`
- Permite visualizar a versão de produção localmente
- Execute `npm run build` antes de usar este comando

---

## ❓ Problemas Comuns

### O site não abre
- Verifique se você executou `npm run dev`
- Confira se o endereço está correto: `http://localhost:3000`
- Veja se há alguma mensagem de erro no terminal

### Erro ao instalar dependências
- Verifique sua conexão com a internet
- Tente limpar o cache: `npm cache clean --force`
- Delete a pasta `node_modules` (se existir) e execute `npm install` novamente

### Erro de porta em uso
- Se a porta 3000 estiver ocupada, o Vite pode usar outra porta
- Veja a mensagem no terminal - ela mostrará qual porta está sendo usada

### Mudanças não aparecem no navegador
- Salve o arquivo novamente (Ctrl+S)
- Recarregue a página (F5 ou Ctrl+R)
- Verifique se o servidor ainda está rodando

---

## 🎨 Fazendo Alterações

Para fazer alterações no projeto:

1. Abra os arquivos no seu editor de código (VS Code, por exemplo)
2. Faça as alterações que desejar
3. Salve o arquivo (Ctrl+S)
4. O navegador atualizará automaticamente! (Hot Reload)

**Arquivos importantes para começar:**
- `App.tsx` - Página principal
- `components/ProductCard.tsx` - Cartão de produto
- `constants.ts` - Lista de produtos e categorias
- `components/Navbar.tsx` - Barra de navegação

---

## 🚪 Parar o Servidor

Para parar o servidor de desenvolvimento:
- Pressione `Ctrl + C` no terminal
- Confirme com `S` (Sim) se perguntado

---

Boa sorte com seu projeto! 🎉

