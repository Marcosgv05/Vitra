# 🛍️ Guia Completo: Configurar Shopify Headless para Vitra

Este guia passo a passo te ajudará a configurar o Shopify em modo **headless commerce** para sua loja Vitra.

## 📋 O que é Headless Commerce?

**Headless Commerce** significa separar o frontend (seu site Vitra) do backend (Shopify). Isso permite:
- ✅ Controle total do design e experiência do usuário
- ✅ Produtos e estoque gerenciados no Shopify
- ✅ Checkout seguro processado pelo Shopify
- ✅ Pagamentos, impostos e frete calculados automaticamente

```
┌─────────────────┐
│  Site Vitra     │  ← Frontend customizado (React)
│  (Headless)     │
└────────┬────────┘
         │ GraphQL API
         ▼
┌─────────────────┐
│   Shopify       │  ← Backend (produtos, estoque, checkout)
│   (Headless)    │
└─────────────────┘
```

---

## 🚀 Passo 1: Criar Conta e Loja no Shopify

### 1.1 Criar Conta
1. Acesse: https://www.shopify.com.br
2. Clique em **Começar teste gratuito**
3. Preencha seus dados
4. Escolha um nome para sua loja (ex: `vitra-store`)
5. Complete o cadastro

### 1.2 Configurações Iniciais
1. No painel admin, complete o onboarding básico
2. Vá em **Configurações** → **Pagamentos** e configure métodos de pagamento
3. Vá em **Configurações** → **Envio e entrega** e configure frete

---

## 🔑 Passo 2: Criar App e Obter Credenciais da API

### 2.1 Acessar a Área de Desenvolvimento
1. No painel admin do Shopify, vá em **Configurações** (Settings)
2. Role até **Apps e canais de venda** (Apps and sales channels)
3. Clique em **Desenvolver apps** (Develop apps) - canto superior direito

### 2.2 Criar Novo App
1. Clique no botão **Criar um app** (Create an app)
2. Dê um nome ao app: **"Vitra Storefront"**
3. Clique em **Criar app**

### 2.3 Configurar Storefront API
1. Na página do app, encontre a seção **Storefront API**
2. Clique em **Configurar** (Configure)
3. Você verá uma lista de permissões (scopes)

### 2.4 Definir Permissões da API
Selecione estas permissões para funcionamento completo:

**✅ Permissões Obrigatórias:**
- `unauthenticated_read_product_listings` - Ler produtos e coleções
- `unauthenticated_read_product_inventory` - Verificar estoque
- `unauthenticated_read_product_tags` - Ler tags/categorias
- `unauthenticated_read_checkouts` - Ler carrinhos existentes
- `unauthenticated_write_checkouts` - Criar novos checkouts

**Como selecionar:**
- Clique no toggle ao lado de cada permissão para ativá-la
- Ou use o botão **Select all** para selecionar todas de uma vez

4. Clique em **Salvar** (Save)

### 2.5 Instalar o App
1. Na parte superior da página, clique em **Instalar app** (Install app)
2. Confirme a instalação
3. O app será instalado na sua loja

### 2.6 Obter o Access Token
1. Após instalar, vá para a aba **Credenciais da API** (API credentials)
2. Na seção **Storefront API access token**, clique em **Revelar token** (Reveal token)
3. **Copie o token** - você precisará dele!
4. O token terá o formato: `shpat_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

**⚠️ IMPORTANTE:** Guarde este token em local seguro. Não compartilhe publicamente!

---

## 🏗️ Passo 3: Organizar Produtos no Shopify

### 3.1 Adicionar Produtos
1. No painel admin, vá em **Produtos** → **Todos os produtos**
2. Clique em **Adicionar produto**
3. Preencha:
   - **Título** (nome do produto)
   - **Descrição**
   - **Imagens** (arraste ou clique para adicionar)
   - **Preço**
   - **Tipo de produto** (ex: "Camisas", "Relógios") - isso será a categoria
   - **Vendedor** (ex: "VITRA ESSENTIALS")
   - **Tags** (opcional, para filtros)

4. Clique em **Salvar**

### 3.2 Configurar Variantes
Se o produto tem tamanhos/cores:
1. No produto, role até **Variantes**
2. Clique em **Adicionar variante**
3. Configure tamanho, cor, etc.
4. Defina preço e estoque para cada variante

**💡 Dica:** O sistema usa a primeira variante disponível para checkout.

### 3.3 Publicar Produtos
Certifique-se de que os produtos estão:
- ✅ **Status:** Ativo
- ✅ **Disponibilidade:** Disponível no canal "Loja online"
- ✅ Com pelo menos **1 imagem**
- ✅ Com **preço definido**

---

## 📁 Passo 4: Criar Coleções (Categorias)

Para que as categorias funcionem no site, crie coleções no Shopify com os seguintes **handles**:

### Tabela de Coleções

| Categoria no Site | Handle da Coleção | Exemplo de Nome |
|-------------------|-------------------|-----------------|
| Vestuário | `vestuario` | Vestuário |
| Calçados | `calcados` | Calçados |
| Relógios | `relogios` | Relógios |
| Perfumes | `perfumes` | Perfumes |
| Carteiras | `carteiras` | Carteiras |
| Cintos | `cintos` | Cintos |
| Óculos | `oculos` | Óculos |
| Acessórios | `acessorios` | Acessórios |

### Como Criar uma Coleção:

1. Vá em **Produtos** → **Coleções**
2. Clique em **Criar coleção**
3. Escolha **Manual** (você adiciona produtos manualmente)
4. Preencha:
   - **Título:** Ex: "Vestuário"
   - **Descrição:** (opcional)
   - **Handle:** Ex: `vestuario` (minúsculas, sem espaços ou acentos)
5. Clique em **Salvar**
6. Adicione produtos à coleção clicando em **Adicionar produtos**

**⚠️ IMPORTANTE:** O **handle** (URL) da coleção deve ser **exatamente** como na tabela acima!

---

## 🔐 Passo 5: Configurar Variáveis de Ambiente

### 5.1 Criar Arquivo .env

Na raiz do projeto Vitra, crie um arquivo chamado `.env` (sem extensão):

```env
VITE_SHOPIFY_STORE_DOMAIN=sua-loja.myshopify.com
VITE_SHOPIFY_STOREFRONT_ACCESS_TOKEN=shpat_seu_token_aqui
```

### 5.2 Substituir Valores

**Exemplo real:**
```env
VITE_SHOPIFY_STORE_DOMAIN=vitra-store.myshopify.com
VITE_SHOPIFY_STOREFRONT_ACCESS_TOKEN=shpat_abc123def456ghi789jkl012mno345
```

**⚠️ ATENÇÃO:**
- Não inclua `https://` no domínio
- O token deve ser copiado completo
- Não faça commit do arquivo `.env` no Git!

### 5.3 Verificar .gitignore

Certifique-se de que o `.gitignore` inclui `.env`:

```gitignore
.env
.env.local
.env.*.local
```

---

## ✅ Passo 6: Testar a Integração

### 6.1 Reiniciar o Servidor

Após criar o arquivo `.env`, reinicie o servidor:

```bash
# Pare o servidor (Ctrl+C)
npm run dev
```

### 6.2 Verificar no Console

1. Abra o site: http://localhost:8000
2. Abra o **Console do Navegador** (F12 → Console)
3. Verifique se aparecem:
   - ✅ Produtos sendo carregados do Shopify
   - ✅ Sem erros de autenticação

### 6.3 Testar Funcionalidades

1. **Página de Produtos:**
   - Os produtos devem vir do Shopify
   - Preços e imagens devem estar corretos

2. **Categorias:**
   - Filtros devem funcionar corretamente
   - Coleções devem aparecer organizadas

3. **Carrinho:**
   - Adicione produtos ao carrinho
   - Clique em "Finalizar Compra"
   - Deve redirecionar para checkout do Shopify

---

## 🛒 Passo 7: Configurar Checkout e Pagamentos

### 7.1 Configurar Métodos de Pagamento

1. No Shopify admin, vá em **Configurações** → **Pagamentos**
2. Configure métodos desejados:
   - **Cartão de Crédito** (Shopify Payments)
   - **Boleto** (se disponível na sua região)
   - **PIX** (se disponível)
   - Outros métodos

### 7.2 Configurar Envio

1. Vá em **Configurações** → **Envio e entrega**
2. Configure:
   - Zonas de envio
   - Taxas de frete
   - Prazos de entrega

### 7.3 Testar Checkout

1. Adicione produtos ao carrinho no site
2. Clique em "Finalizar Compra"
3. Você será redirecionado para o checkout do Shopify
4. Complete o teste (use modo de teste se disponível)

---

## 🐛 Solução de Problemas

### ❌ "Shopify não está configurado"

**Problema:** Variáveis de ambiente não encontradas

**Solução:**
1. Verifique se o arquivo `.env` existe na raiz do projeto
2. Confirme que as variáveis começam com `VITE_`
3. Reinicie o servidor após criar/editar `.env`
4. Verifique se não há espaços extras nos valores

---

### ❌ "Erro na API do Shopify: 401 Unauthorized"

**Problema:** Token inválido ou expirado

**Solução:**
1. Verifique se o token foi copiado completamente
2. Confirme que o app está instalado na loja
3. Gere um novo token se necessário:
   - Vá em Apps → Desenvolver apps
   - Selecione seu app
   - Na aba Credenciais, clique em "Revelar token"

---

### ❌ "Erro na API do Shopify: 403 Forbidden"

**Problema:** Permissões da API não configuradas

**Solução:**
1. Vá em Apps → Desenvolver apps
2. Selecione seu app
3. Na seção Storefront API, verifique se todas as permissões estão ativadas
4. Reinstale o app se necessário

---

### ❌ "Produtos não aparecem"

**Problema:** Produtos não publicados ou sem disponibilidade

**Solução:**
1. Verifique se os produtos estão com status **Ativo**
2. Confirme que estão disponíveis no canal **Loja online**
3. Verifique se há produtos na loja
4. Confira o console do navegador para erros específicos

---

### ❌ "Checkout não funciona"

**Problema:** Produtos sem variantId ou Shopify não configurado

**Solução:**
1. Certifique-se de que os produtos vêm do Shopify (não são produtos de demonstração)
2. Verifique se os produtos têm variantes configuradas
3. Confirme que o Shopify está configurado corretamente
4. Verifique se os produtos estão disponíveis para venda

---

### ❌ "Coleções não funcionam"

**Problema:** Handles das coleções incorretos

**Solução:**
1. Verifique se os handles das coleções estão corretos (minúsculas, sem espaços)
2. Confirme que os produtos estão adicionados às coleções
3. Veja a tabela de coleções no Passo 4 deste guia

---

## 📚 Recursos Adicionais

### Documentação Oficial
- [Shopify Storefront API](https://shopify.dev/docs/api/storefront)
- [Shopify GraphQL Admin API](https://shopify.dev/docs/api/admin-graphql)
- [Guia de Headless Commerce](https://shopify.dev/docs/custom-storefronts)

### Suporte
- [Central de Ajuda do Shopify](https://help.shopify.com/pt-BR)
- [Shopify Community](https://community.shopify.com/)
- [Shopify Partners](https://partners.shopify.com/)

---

## ✅ Checklist Final

Antes de colocar em produção, verifique:

- [ ] Shopify configurado e app criado
- [ ] Storefront API token obtido e configurado no `.env`
- [ ] Produtos adicionados e publicados no Shopify
- [ ] Coleções criadas com handles corretos
- [ ] Pagamentos configurados no Shopify
- [ ] Envio/entrega configurado
- [ ] Teste completo do fluxo de compra funcionando
- [ ] Arquivo `.env` não está no Git (verificado no `.gitignore`)

---

## 🎉 Pronto!

Agora sua loja Vitra está configurada para funcionar em modo **headless commerce** com Shopify!

- ✅ Produtos gerenciados no Shopify
- ✅ Checkout seguro processado pelo Shopify
- ✅ Design customizado no site Vitra
- ✅ Total controle da experiência do usuário

**Dúvidas?** Consulte a seção de Solução de Problemas ou a documentação oficial do Shopify.

