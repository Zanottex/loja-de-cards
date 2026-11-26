# Loja de Cards

Projeto de loja de cartas e acessórios feito com React, TypeScript e Vite.

## Como executar

```bash
npm install
```

Crie um arquivo `.env.local` na raiz deste projeto e informe sua chave da API Mockaroo:

```env
VITE_MOCKAROO_API_KEY=sua_chave_mockaroo
```

Depois, inicie o servidor de desenvolvimento:

```bash
npm run dev
```

## Fonte dos dados

A listagem principal de cartas é carregada com `fetch` do endpoint
`https://my.api.mockaroo.com/card.json`, usando a chave Mockaroo configurada em
`.env.local`. O endpoint deve retornar um array JSON com os campos `id`, `name`,
`category`, `price` e `tipo`; `condition` e `image` são opcionais. Registros da
categoria `acessorios` são ignorados nessa listagem. “Destaques do dia” exibe
até cinco cartas quando “Todos” está selecionado; ao selecionar uma categoria,
a seção mostra todas as cartas dessa categoria retornadas pelo endpoint.

Os acessórios da seção secundária continuam no vetor local
`src/cases/products/dtos/product.ts`. O arquivo `mockaroo-products.csv` contém
os dados de exemplo para importar no Mockaroo. A coluna `image` recebe o nome
do arquivo de imagem; o projeto associa esses nomes às imagens locais em
`src/cases/products/assets`. Reimporte o CSV no Mockaroo para atualizar os
dados servidos pelo endpoint.

> A variável `VITE_` é incorporada ao código entregue ao navegador. Use essa
> configuração apenas para este projeto de demonstração e não para uma chave
> que precise permanecer secreta em produção.
