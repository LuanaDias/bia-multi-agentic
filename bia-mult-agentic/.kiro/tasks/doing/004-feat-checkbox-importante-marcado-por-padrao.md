# 004 - [feat] Checkbox "Importante" marcado por padrão na tela de cadastro de tarefa

## Modelo de Trabalho
- **Branch:** `004-feat-checkbox-importante-marcado-por-padrao`
- **Derivar de:** `ia-main`
- **Status inicial:** doing
- **Agente responsável:** dev (`.kiro/agents/dev.json`)

## Instruções de Início para o Agente (dev)

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

- [ ] Ao abrir a tela de cadastro de tarefa, o campo/checkbox "Importante" deve estar marcado (`true`) por padrão.
- [ ] O usuário pode desmarcar o checkbox caso a tarefa não seja importante.
- [ ] O comportamento de salvar a tarefa deve permanecer o mesmo — o valor do campo deve refletir o estado atual do checkbox no momento do envio.
- [ ] Nenhuma outra funcionalidade da tela de cadastro deve ser afetada.

---

## Detalhes Técnicos

- Localizar o componente de cadastro de tarefa no frontend (`client/`).
- Identificar o campo/checkbox correspondente ao atributo "importante" (ou equivalente).
- Alterar o estado inicial do campo para `true` (marcado por padrão).
- Verificar se existe valor default no backend/modelo — não é necessário alterar o backend, apenas o estado inicial do formulário no frontend.

---

## Checklist de Implementação (dev)

> Marque cada item conforme for concluindo durante a implementação.

- [ ] Branch `004-feat-checkbox-importante-marcado-por-padrao` criado a partir de `ia-main`
- [ ] Componente de cadastro de tarefa localizado no frontend (`client/`)
- [ ] Campo/checkbox "importante" identificado no componente
- [ ] Estado inicial do checkbox alterado para `true`
- [ ] Testado localmente — checkbox aparece marcado ao abrir a tela de cadastro
- [ ] Testado que o usuário consegue desmarcar o checkbox
- [ ] Testado que salvar com checkbox desmarcado persiste `false` corretamente
- [ ] Nenhuma regressão identificada nas demais funcionalidades da tela
- [ ] Commit realizado no branch da task com mensagem clara
- [ ] Pull Request aberto apontando para `ia-main`

---

## Definição de Pronto (DoD)

- [ ] Código implementado e funcionando localmente.
- [ ] Checkbox aparece marcado ao abrir a tela de cadastro.
- [ ] Não há regressão nas demais funcionalidades da tela.
- [ ] Commit no branch da task com mensagem clara.
- [ ] Pull Request aberto apontando para `ia-main`.

---

## ⚠️ Encerramento da Task — Responsabilidade do PO

Quando o agente **dev** concluir todas as etapas acima, **deve informar ao PO** que a task está pronta para ser encerrada.

### O que o PO irá fazer ao final:

1. Verificar se todos os critérios de aceitação foram atendidos.
2. Verificar se todos os itens do checklist de implementação estão marcados como concluídos (`[x]`).
3. Verificar se o Pull Request foi aberto corretamente apontando para `ia-main`.
4. Tudo estando ok, o PO irá:
   - Informar ao usuário que a task está finalizada.
   - Mover o arquivo da task de `doing/` para `done/`.
   - Realizar o commit e push final com a task encerrada.
