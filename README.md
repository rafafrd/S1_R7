# 🚗💼 Calculadora de Aluguel de Carros e Reajuste Salarial

Programas em JavaScript para cálculo de aluguel de veículos e reajuste salarial conforme critérios específicos.

## 📋 Tarefas

### 1. Calculadora de Aluguel de Carros
**Objetivo**: Calcular o valor total do aluguel de um carro baseado em:
- Tipo de veículo (popular ou luxo)
- Dias de aluguel
- Quilômetros rodados

**Tabela de Preços**:
| Categoria | Diária  | Até Limite | Acima do Limite |
|-----------|---------|------------|-----------------|
| Popular   | R$ 90   | R$0,20/km  | R$0,10/km       |
| Luxo      | R$ 150  | R$0,30/km  | R$0,25/km       |

*Limites: Popular = 100km, Luxo = 200km*

### 2. Calculadora de Reajuste Salarial
**Objetivo**: Calcular novo salário considerando:
- Salário atual
- Gênero (M/F)
- Tempo de serviço

**Regras de Reajuste**:
#### Mulheres
- < 5 anos: +4%
- 5-10 anos: +7%
- 15-20 anos: +12%
- > 20 anos: +23%

#### Homens
- < 5 anos: +3%
- 5-15 anos: +8%
- 20-30 anos: +14%
- > 30 anos: +25%

## 🛠️ Tecnologias
- JavaScript
- Node.js (para execução via terminal)
- HTML (para versão web)

## 🚀 Como Executar
### Versão Web:
1. Abra o arquivo `index.html` no navegador
2. Interaja com a interface gráfica
