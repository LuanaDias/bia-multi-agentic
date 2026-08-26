# 004 - [feat] Checkbox "Importante" marcado por padrão na tela de cadastro de tarefa

## Modelo de Trabalho
- **Branch:** `004-feat-checkbox-importante-marcado-por-padrao`
- **Derivar de:** `ia-main`
- **Status inicial:** doing
- **Agente responsável:** dev (`.kiro/agents/dev.json`)

## Instruções de Início para o Agente

1. Verificar se o branch atual é `ia-main`. Caso não esteja, informar e perguntar se pode retornar para ele antes de iniciar.
2. Após autorização: mover esta task para `doing`, fazer commit e push no branch `ia-main`.
3. Criar o branch `004-feat-checkbox-importante-marcado-por-padrao` a partir do `ia-main` e iniciar a implementação.

---

## História de Usuário

**Como** usuário que cadastra tarefas,  
**Quero** que o checkbox "Importante" já venha marcado por padrão na tela de cadastro,  
**Para que** eu não precise marcar manualmente toda vez que criar uma nova tarefa, já que a maioria das tarefas cadastradas são consideradas importantes.

---

## Critérios de Aceitação

- [x] Ao abrir a tela de cadastro de tarefa, o campo/checkbox "Importante" deve estar marcado (`true`) por padrão.
- [x] O usuário pode desmarcar o checkbox caso a tarefa não seja importante.
- [x] O comportamento de salvar a tarefa deve permanecer o mesmo — o valor do campo deve refletir o estado atual do checkbox no momento do envio.
- [x] Nenhuma outra funcionalidade da tela de cadastro deve ser afetada.

---

## Detalhes Técnicos

- Localizar o componente de cadastro de tarefa no frontend (`client/`).
- Identificar o campo/checkbox correspondente ao atributo "importante" (ou equivalente).
- Alterar o estado inicial do campo para `true` (marcado por padrão).
- Verificar se existe valor default no backend/modelo — não é necessário alterar o backend, apenas o estado inicial do formulário no frontend.

---

## Definição de Pronto (DoD)

- [x] Código implementado e funcionando localmente.
- [x] Checkbox aparece marcado ao abrir a tela de cadastro.
- [x] Não há regressão nas demais funcionalidades da tela.
- [x] Commit no branch da task com mensagem clara.
- [x] Pull Request aberto apontando para `ia-main`.

---

## Encerramento da Task (responsabilidade do PO)

> Quando todos os itens acima estiverem concluídos, o agente dev deve informar ao PO que a task está pronta para ser encerrada.

### Checklist de Encerramento (PO)

- [ ] Verificar se tudo foi implementado conforme os critérios de aceitação.
- [ ] Verificar se todos os itens da task estão marcados como `[x]`.
- [ ] Informar ao usuário que a task está finalizada.
- [ ] Mover a task de `doing/` para `done/`.
- [ ] Fazer commit e push final no `ia-main`.
