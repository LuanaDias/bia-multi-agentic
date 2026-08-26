# 004 - [feat] Checkbox "Importante" marcado por padrão na tela de cadastro de tarefa

## Modelo de Trabalho
- **Branch:** `004-feat-checkbox-importante-marcado-por-padrao`
- **Derivar de:** `ia-main`
- **Status:** done
- **Agente responsável pelo início:** dev (`.kiro/agents/dev.json`)

---

## História de Usuário

**Como** usuário que cadastra tarefas,  
**Quero** que o checkbox "Importante" já venha marcado por padrão na tela de cadastro,  
**Para que** eu não precise marcar manualmente toda vez que criar uma nova tarefa, já que a maioria das tarefas cadastradas são consideradas importantes.

---

## Critérios de Aceitação

- Ao abrir a tela de cadastro de tarefa, o campo/checkbox "Importante" deve estar marcado (`true`) por padrão.
- O usuário pode desmarcar o checkbox caso a tarefa não seja importante.
- O comportamento de salvar a tarefa deve permanecer o mesmo — o valor do campo deve refletir o estado atual do checkbox no momento do envio.
- Nenhuma outra funcionalidade da tela de cadastro deve ser afetada.

---

## Detalhes Técnicos

- Localizar o componente de cadastro de tarefa no frontend (`client/`).
- Identificar o campo/checkbox correspondente ao atributo "importante" (ou equivalente).
- Alterar o estado inicial do campo para `true` (marcado por padrão).
- Verificar se existe valor default no backend/modelo — não é necessário alterar o backend, apenas o estado inicial do formulário no frontend.

---

## Checklist da Task

### 🔀 Início — dev

- [x] Verificar se o branch atual é `ia-main`. Caso não esteja, informar e aguardar autorização para retornar.
- [x] Mover esta task de `todo/` para `doing/`.
- [x] Fazer commit e push no branch `ia-main` com a task em doing.
- [x] Criar o branch `004-feat-checkbox-importante-marcado-por-padrao` a partir de `ia-main`.

### 🛠️ Implementação — dev

- [x] Localizar o componente de cadastro de tarefa no frontend (`client/`).
- [x] Identificar o campo/checkbox correspondente ao atributo "importante".
- [x] Alterar o estado inicial do checkbox para `true` (marcado por padrão).
- [x] Testar localmente — checkbox aparece marcado ao abrir a tela de cadastro.
- [x] Testar que o usuário consegue desmarcar o checkbox.
- [x] Testar que salvar com checkbox desmarcado persiste `false` corretamente.
- [x] Verificar que nenhuma regressão foi introduzida nas demais funcionalidades da tela.
- [x] Realizar commit no branch da task com mensagem clara.
- [x] Abrir Pull Request apontando para `ia-main`.

### 📋 Encerramento — PO

- [x] Verificar se todos os critérios de aceitação foram atendidos.
- [x] Verificar se todos os itens do checklist estão marcados como concluídos (`[x]`).
- [x] Verificar se o Pull Request foi aberto corretamente apontando para `ia-main`.
- [x] Informar ao usuário que a task está finalizada.
- [x] Mover o arquivo da task de `doing/` para `done/`.
- [x] Realizar commit e push final com a task encerrada.
