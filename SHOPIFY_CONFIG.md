# Configuração do Shopify para Vitra

Este guia explica como conectar sua loja Vitra ao Shopify para gerenciar produtos.

## Por que usar o Shopify?

Com a integração do Shopify, você pode:
- ✅ Gerenciar todos os produtos em um só lugar
- ✅ Controlar estoque automaticamente
- ✅ Processar pagamentos de forma segura
- ✅ Atualizar preços e descrições facilmente
- ✅ Adicionar novos produtos sem alterar código

## Passo a Passo de Configuração

### 1. Crie um App no Shopify

1. Acesse o painel admin do Shopify: `https://sua-loja.myshopify.com/admin`
2. Vá em **Configurações** > **Apps e canais de venda**
3. Clique em **Desenvolver apps** (ou "Develop apps")
4. Clique em **Criar um app**
5. Dê um nome ao app (exemplo: "Vitra Storefront")

### 2. Configure as Permissões da API

Na aba **Configurações** do app criado:

1. Clique em **Configurar** na seção "Storefront API"
2. Selecione as seguintes permissões:
   - `unauthenticated_read_product_listings` - Ler produtos
   - `unauthenticated_read_product_inventory` - Ler estoque
   - `unauthenticated_read_product_tags` - Ler tags/categorias
   - `unauthenticated_read_checkouts` - Ler carrinhos
   - `unauthenticated_write_checkouts` - Criar carrinhos
3. Clique em **Salvar**

### 3. Instale o App

1. Clique em **Instalar app**
2. Confirme a instalação

### 4. Obtenha as Credenciais

Na aba **Credenciais da API**:

1. Copie o **Storefront API access token**
2. Anote o domínio da sua loja (ex: `minhaloja.myshopify.com`)

### 5. Configure as Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com:

```env
VITE_SHOPIFY_STORE_DOMAIN=sua-loja.myshopify.com
VITE_SHOPIFY_STOREFRONT_ACCESS_TOKEN=seu_token_aqui
```

**⚠️ IMPORTANTE:** Nunca compartilhe o arquivo `.env` ou faça commit dele no Git!

### 6. Organize suas Coleções no Shopify

Para que as categorias funcionem corretamente, crie coleções no Shopify com os seguintes handles (identificadores):

| Categoria no Site | Handle da Coleção no Shopify |
|-------------------|------------------------------|
| Vestuário | `vestuario` |
| Calçados | `calcados` |
| Relógios | `relogios` |
| Perfumes | `perfumes` |
| Carteiras | `carteiras` |
| Cintos | `cintos` |
| Óculos | `oculos` |
| Acessórios | `acessorios` |

Para criar uma coleção:
1. No admin do Shopify, vá em **Produtos** > **Coleções**
2. Clique em **Criar coleção**
3. Dê um nome e defina o handle desejado
4. Adicione os produtos à coleção

## Como Funciona

Quando o Shopify está configurado:
1. O site busca os produtos automaticamente da sua loja Shopify
2. Preços, fotos e descrições vêm direto do Shopify
3. O botão "Finalizar Compra" redireciona para o checkout do Shopify

Quando o Shopify NÃO está configurado:
1. O site usa os produtos de demonstração (arquivo `constants.ts`)
2. Você pode editar os produtos diretamente no código

## Testando a Integração

Após configurar, reinicie o servidor de desenvolvimento:

```bash
npm run dev
```

Se a integração estiver funcionando, você verá no console:
- "Shopify configurado com sucesso" - Produtos vindo do Shopify
- Ou os produtos de demonstração se houver algum erro

## Problemas Comuns

### "Erro na API do Shopify"
- Verifique se o token está correto
- Confirme que as permissões da API estão habilitadas

### "Produtos não aparecem"
- Verifique se você tem produtos publicados no Shopify
- Confirme que os produtos estão disponíveis no canal "Online Store"

### "Coleções não funcionam"
- Verifique se os handles das coleções estão corretos
- Confirme que os produtos estão adicionados às coleções

## Suporte

Para dúvidas sobre a configuração do Shopify:
- [Documentação do Shopify Storefront API](https://shopify.dev/docs/api/storefront)
- [Central de Ajuda do Shopify](https://help.shopify.com/pt-BR)

