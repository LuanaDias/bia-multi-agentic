# 005 - [feat] Simplificar tela de versão para exibir apenas status da API

## Modelo de Trabalho
- **Branch:** `005-feat-simplificar-tela-versao`
- **Derivar de:** `ia-main`
- **Status:** done
- **Agente responsável pelo início:** dev (`.kiro/agents/dev.json`)

---

## História de Usuário

**Como** usuário da aplicação,  
**Quero** que a tela `/versao` exiba apenas o status da API,  
**Para que** a informação seja simples, direta e sem dados desnecessários como ambiente, cliente, cache e URLs.

---

## Contexto Técnico

Existem dois componentes relacionados à versão:

- **`client/src/components/Versao.jsx`** — página acessada pela rota `/versao`. Atualmente já é simples, mas exibe apenas o texto cru da versão.
- **`client/src/components/VersionInfo.jsx`** — widget exibido no header com tooltip que mostra: status da API, ambiente (local/produção/IP), URL da API, configuração de cache, link para `/api/versao` e botão de refresh.

---

## Critérios de Aceitação

### Tela `/versao` (`Versao.jsx`)
- Exibir apenas o **status da API** (online/offline/verificando).
- Remover qualquer informação de ambiente, cliente ou configuração.
- Manter o visual limpo e legível.

### Widget do Header (`VersionInfo.jsx`)
- Remover do tooltip as informações de: ambiente, local (hostname/porta), URL da API e configuração de cache.
- Manter apenas: status da API (ícone + texto) e versão da aplicação.
- Manter o botão de atualizar status (🔄).

---

## O que NÃO alterar
- Lógica de chamada à `/api/versao` — deve ser mantida.
- Estilo visual geral dos componentes.
- Roteamento da aplicação.

---

## Checklist da Task

### 🔀 Início — dev

- [x] Verificar se o branch atual é `ia-main`. Caso não esteja, informar e aguardar autorização para retornar.
- [x] Mover esta task de `todo/` para `doing/`.
- [x] Fazer commit e push no branch `ia-main` com a task em doing.
- [x] Criar o branch `005-feat-simplificar-tela-versao` a partir de `ia-main`.

### 🛠️ Implementação — dev

- [x] Localizar `client/src/components/Versao.jsx`.
- [x] Alterar `Versao.jsx` para exibir apenas o status da API (online/offline/verificando).
- [x] Remover de `Versao.jsx` qualquer informação de ambiente, cliente ou configuração.
- [x] Localizar `client/src/components/VersionInfo.jsx`.
- [x] Remover do tooltip de `VersionInfo.jsx` as informações de: ambiente, local (hostname/porta), URL da API e configuração de cache.
- [x] Garantir que `VersionInfo.jsx` mantém apenas: status da API (ícone + texto), versão da aplicação e botão de refresh (🔄).
- [x] Confirmar que a lógica de chamada à `/api/versao` não foi alterada.
- [x] Testar localmente — tela `/versao` exibe apenas o status da API.
- [x] Testar localmente — widget do header exibe apenas versão e status.
- [x] Verificar que nenhuma regressão foi introduzida nas demais telas.
- [x] Realizar commit no branch da task com mensagem clara.
- [x] Abrir Pull Request apontando para `ia-main`.

### 📋 Encerramento — PO

- [x] Verificar se todos os critérios de aceitação foram atendidos.
- [x] Verificar se todos os itens do checklist estão marcados como concluídos (`[x]`).
- [x] Verificar se o Pull Request foi aberto corretamente apontando para `ia-main`.
- [x] Informar ao usuário que a task está finalizada.
- [x] Mover o arquivo da task de `doing/` para `done/`.
- [x] Realizar commit e push final com a task encerrada.
