# Task 006 - Implementar GitHub Actions para Testes Automatizados

## 📌 Informações da Task

**Número:** 006  
**Tipo:** feat  
**Título:** Implementar GitHub Actions para execução automática de testes  
**Branch:** derivar de `ia-main`  
**Nome do Branch:** `006-feat-github-actions-testes-automatizados`  
**Agent Responsável:** devops (`.kiro/agents/devops.json`)

---

## 🎯 Objetivo

Implementar um workflow de GitHub Actions que execute automaticamente os testes unitários da aplicação BIA a cada Pull Request criado contra o branch `ia-main`, garantindo a qualidade do código antes de qualquer merge.

---

## 📝 Descrição

Como **desenvolvedor do projeto BIA**,  
Eu quero **que os testes sejam executados automaticamente em cada PR contra ia-main**,  
Para que **possamos garantir que nenhuma alteração quebre a funcionalidade existente antes do merge**.

---

## ✅ Critérios de Aceitação

1. **Workflow configurado** no diretório `.github/workflows/`
2. **Trigger automático** em Pull Requests contra o branch `ia-main`
3. **Execução dos testes** utilizando o comando `npm test`
4. **Ambiente de teste** configurado com Node.js (versão compatível com o projeto)
5. **Status check visível** no GitHub mostrando se os testes passaram ou falharam
6. **Cache de dependências** configurado para otimizar tempo de execução
7. **Documentação** sobre o workflow criada ou atualizada

---

## 🔧 Contexto Técnico

### Testes Existentes
- **Framework:** Jest 27.5.1
- **Localização:** `tests/unit/controllers/`
- **Arquivos:**
  - `versao.test.js` - Testes do controller de versão
  - `tarefas.test.js` - Testes do controller de tarefas
- **Comando:** `npm test` (executa `jest tests/unit`)

### Tecnologia do Projeto
- **Node.js:** Verificar versão no package.json/Dockerfile
- **Gerenciador:** npm
- **Dependências de Dev:** jest, sequelize-cli

---

## 📋 Checklist de Implementação

### Fase 1: Verificação Inicial
- [ ] Agent verifica se está no branch `ia-main`
- [ ] Solicita autorização para criar branch (se necessário)
- [ ] Move task para `doing/`
- [ ] Faz commit e push no `ia-main`
- [ ] Cria branch `006-feat-github-actions-testes-automatizados`

### Fase 2: Análise
- [ ] Verificar versão do Node.js utilizada no projeto
- [ ] Analisar dependências necessárias para os testes
- [ ] Revisar estrutura de testes existente

### Fase 3: Implementação
- [ ] Criar diretório `.github/workflows/` (se não existir)
- [ ] Criar arquivo `test.yml` ou `ci.yml` com o workflow
- [ ] Configurar trigger para PRs contra `ia-main`
- [ ] Configurar ambiente Node.js
- [ ] Configurar cache de dependências npm
- [ ] Adicionar step de instalação de dependências
- [ ] Adicionar step de execução dos testes

### Fase 4: Documentação
- [ ] Documentar o workflow no README ou em arquivo específico
- [ ] Incluir badge de status (opcional)

### Fase 5: Validação
- [ ] Fazer commit das alterações
- [ ] Push do branch
- [ ] Criar PR de teste contra `ia-main`
- [ ] Verificar se o workflow é executado automaticamente
- [ ] Validar se os testes rodam corretamente
- [ ] Confirmar status check no PR

---

## 🚀 Fluxo de Trabalho Esperado

```
1. Developer cria feature branch
2. Developer faz alterações no código
3. Developer abre PR contra ia-main
4. GitHub Actions detecta o PR
5. Workflow é executado automaticamente
6. Testes são executados
7. Status é reportado no PR (✅ ou ❌)
8. Review é feito com base no resultado dos testes
```

---

## 📖 Exemplo de Workflow Base

```yaml
name: Testes Automatizados

on:
  pull_request:
    branches:
      - ia-main

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout código
        uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 'XX' # Verificar versão correta
          cache: 'npm'
      
      - name: Instalar dependências
        run: npm ci
      
      - name: Executar testes
        run: npm test
```

---

## 🎓 Valor de Negócio

- **Qualidade:** Garantia automática de que o código não quebra funcionalidades existentes
- **Agilidade:** Feedback imediato sobre a qualidade do código
- **Confiança:** Equipe pode fazer refactorings com mais segurança
- **Documentação viva:** Testes servem como documentação do comportamento esperado

---

## ⚠️ Observações Importantes

1. **Simplicidade:** Seguir a filosofia do projeto BIA - manter configuração simples e clara para fins educacionais
2. **Node Version:** Verificar a versão do Node.js usada no Dockerfile/package.json
3. **Secrets:** Não há necessidade de secrets para execução de testes unitários
4. **Database:** Os testes atuais usam mocks, não necessitam de banco de dados real

---

## 🔗 Dependências

- Nenhuma task anterior como dependência
- Utiliza estrutura de testes já existente no projeto

---

## 📅 Estimativa

**Complexidade:** Baixa  
**Tempo estimado:** 1-2 horas  
**Prioridade:** Alta (infraestrutura de qualidade)

---

## ✨ Definição de Pronto (DoD)

- [ ] Workflow do GitHub Actions criado e funcionando
- [ ] Testes executam automaticamente em PRs contra `ia-main`
- [ ] Status check visível no GitHub
- [ ] Documentação criada/atualizada
- [ ] PR de teste validado com sucesso
- [ ] Código commitado e pushed
- [ ] Task movida para `done/`
