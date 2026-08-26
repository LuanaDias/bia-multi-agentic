# 005 - [feat] Simplificar tela de versão para exibir apenas status da API

## Modelo de Trabalho
- **Branch:** `005-feat-simplificar-tela-versao`
- **Derivar de:** `ia-main`
- **Status inicial:** todo
- **Agente responsável:** dev (`.kiro/agents/dev.json`)

## Instruções de Início para o Agente

1. Verificar se o branch atual é `ia-main`. Caso não esteja, informar e perguntar se pode retornar para ele antes de iniciar.
2. Após autorização: mover esta task para `doing`, fazer commit e push no branch `ia-main`.
3. Criar o branch `005-feat-simplificar-tela-versao` a partir do `ia-main` e iniciar a implementação.

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
- [x] Exibir apenas o **status da API** (online/offline/verificando).
- [x] Remover qualquer informação de ambiente, cliente ou configuração.
- [x] Manter o visual limpo e legível.

### Widget do Header (`VersionInfo.jsx`)
- [x] Remover do tooltip as informações de: ambiente, local (hostname/porta), URL da API e configuração de cache.
- [x] Manter apenas: status da API (ícone + texto) e versão da aplicação.
- [x] Manter o botão de atualizar status (🔄).

---

## O que NÃO alterar
- Lógica de chamada à `/api/versao` — deve ser mantida.
- Estilo visual geral dos componentes.
- Roteamento da aplicação.

---

## Definição de Pronto (DoD)

- [x] Código implementado e funcionando localmente.
- [x] Tela `/versao` exibe apenas status da API.
- [x] Widget do header exibe apenas versão e status.
- [x] Nenhuma regressão nas demais telas.
- [x] Commit no branch da task com mensagem clara.
- [x] Pull Request aberto apontando para `ia-main`.

---

## Encerramento da Task (responsabilidade do PO)

> Quando todos os itens acima estiverem concluídos, o agente dev deve informar ao PO que a task está pronta para ser encerrada.

### Checklist de Encerramento (PO)

- [x] Verificar se tudo foi implementado conforme os critérios de aceitação.
- [x] Verificar se todos os itens da task estão marcados como `[x]`.
- [x] Informar ao usuário que a task está finalizada.
- [x] Mover a task de `doing/` para `done/`.
- [x] Fazer commit e push final no `ia-main`.
