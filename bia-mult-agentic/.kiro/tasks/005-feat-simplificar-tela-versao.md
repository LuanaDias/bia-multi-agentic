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
- [ ] Exibir apenas o **status da API** (online/offline/verificando).
- [ ] Remover qualquer informação de ambiente, cliente ou configuração.
- [ ] Manter o visual limpo e legível.

### Widget do Header (`VersionInfo.jsx`)
- [ ] Remover do tooltip as informações de: ambiente, local (hostname/porta), URL da API e configuração de cache.
- [ ] Manter apenas: status da API (ícone + texto) e versão da aplicação.
- [ ] Manter o botão de atualizar status (🔄).

---

## O que NÃO alterar
- Lógica de chamada à `/api/versao` — deve ser mantida.
- Estilo visual geral dos componentes.
- Roteamento da aplicação.

---

## Definição de Pronto (DoD)

- [ ] Código implementado e funcionando localmente.
- [ ] Tela `/versao` exibe apenas status da API.
- [ ] Widget do header exibe apenas versão e status.
- [ ] Nenhuma regressão nas demais telas.
- [ ] Commit no branch da task com mensagem clara.
- [ ] Pull Request aberto apontando para `ia-main`.
