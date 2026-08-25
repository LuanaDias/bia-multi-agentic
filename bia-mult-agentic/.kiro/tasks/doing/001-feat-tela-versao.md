# [001] - Tela de Versão da Aplicação

## Informações da Task

| Campo                   | Valor                        |
|-------------------------|------------------------------|
| **ID**                  | 001                          |
| **Tipo**                | feat                         |
| **Status**              | todo                         |
| **Branch**              | 001-feat-tela-versao         |
| **Derivado de**         | ia-main                      |
| **Agente Responsável**  | dev                          |

---

## Modelo de Trabalho

> Esta task segue o modelo **feature/branch**.

### Instruções para o Agente que Iniciar esta Task

1. **Verificar branch atual:** Confirmar que estamos no branch `ia-main`.
   - Caso não esteja, informar ao usuário e perguntar se pode retornar para `ia-main` antes de iniciar.
2. **Após autorização:**
   - Mover este arquivo de `.kiro/tasks/` para `.kiro/tasks/doing/`
   - Fazer **commit e push** no branch `ia-main`
   - Criar o branch `001-feat-tela-versao` derivado de `ia-main`
   - Iniciar a implementação neste novo branch

---

## História de Usuário

**Como** usuário da aplicação BIA,  
**Quero** acessar uma página dedicada que exiba as informações de versão da aplicação,  
**Para que** eu possa visualizar de forma clara e completa qual versão está em execução e o status da API.

---

## Descrição

Criar uma nova página/rota no frontend React seguindo exatamente o mesmo padrão arquitetural das telas existentes no projeto (ex: `About`, `Tasks`). A tela deve consumir o endpoint `GET /api/versao` e exibir as informações retornadas.

### Contexto do Projeto

O projeto já possui um componente `VersionInfo.jsx` que faz a chamada para `/api/versao` e é usado no `Header` como um tooltip. A nova tela deve ser uma **página completa** (não um tooltip), acessível via rota do React Router, seguindo o mesmo estilo e estrutura das outras páginas.

- **Endpoint:** `GET /api/versao` — retorna texto simples no formato `Bia {versão}` (ex: `Bia 4.2.0`)
- **Rota frontend existente de referência:** `/about` → componente `About.jsx`
- **Padrão de roteamento:** definido em `App.jsx` com `<Route path="..." element={...} />`
- **Base URL da API:** `import.meta.env.VITE_API_URL || "http://localhost:8080"`

---

## Critérios de Aceite

- [ ] Nova rota `/versao` criada no `App.jsx`
- [ ] Novo componente `Versao.jsx` criado em `client/src/components/`
- [ ] O componente faz chamada `GET` para `${apiUrl}/api/versao` usando o mesmo padrão de `App.jsx` (`fetch` nativo)
- [ ] A tela exibe o texto retornado pela API (ex: `Bia 4.2.0`)
- [ ] A tela possui estado de **loading** enquanto aguarda a resposta
- [ ] A tela exibe mensagem de **erro** amigável caso a requisição falhe
- [ ] A nova rota está acessível via link no `Header.jsx` ou na navegação existente
- [ ] O estilo visual segue o padrão do projeto (mesmas classes CSS, sem adicionar novas bibliotecas)

---

## Referências Técnicas

### Arquivos a Consultar Antes de Implementar

| Arquivo | Motivo |
|---------|--------|
| `client/src/App.jsx` | Padrão de rotas, uso do `apiUrl`, estrutura geral |
| `client/src/components/About.jsx` | Referência de componente de página simples |
| `client/src/components/Header.jsx` | Onde adicionar link de navegação |
| `client/src/components/VersionInfo.jsx` | Já consome `/api/versao` — referência para a chamada |
| `client/src/index.css` | Estilos globais — usar classes existentes |
| `api/routes/versao.js` | Confirmar a rota do backend |
| `api/controllers/versao.js` | Confirmar o retorno da API (`Bia {VERSAO_API}`) |

### Padrão de Chamada à API (seguir o de `App.jsx`)

```js
const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:8080";

const res = await fetch(`${apiUrl}/api/versao`);
const data = await res.text(); // retorna texto simples
```

---

## O que NÃO fazer

- ❌ Não usar o componente `VersionInfo.jsx` diretamente como a página — ele é um tooltip do header
- ❌ Não adicionar novas bibliotecas CSS ou de UI
- ❌ Não criar lógica complexa além do necessário (fetch + exibição)
- ❌ Não alterar o comportamento existente do `VersionInfo.jsx` no `Header`
