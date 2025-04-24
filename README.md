## Dependências

Este projeto utiliza as seguintes dependências:

- **TypeScript**: para a escrita do código.
- **Jest**: para a execução dos testes.
- **ts-jest**: para integrar o TypeScript com o Jest.
- **@types/jest**: tipagens para o Jest.

### Instalando as Dependências

Antes de rodar o projeto, você precisa instalar as dependências. Para isso, execute o seguinte comando:

```bash
npm install
```

Isso irá instalar as dependências necessárias no seu projeto.

## Estrutura do Projeto

O projeto está estruturado da seguinte forma:

```
/atividade2804_QualidadeTeste
    /src
        /models
            Person.ts            # Modelo para a classe Person
            Email.ts             # Modelo para a classe Email
            Employee.ts          # Modelo para a classe Employee
            SalaryCalculator.ts  # Calculadora de salário
        /dao
            PersonDAO.ts         # Validação de dados da pessoa
    /tests
        PersonDAO.test.ts       # Testes para validação de pessoa
        SalaryCalculator.test.ts # Testes para cálculo de salário
    tsconfig.json
    package.json
    jest.config.js
```

## Rodando os Testes

Para rodar os testes automatizados com Jest, utilize o comando:

```bash
npx jest
```

Este comando irá executar os testes definidos em `tests/`.

## Comandos Úteis

- **Instalar dependências**: `npm install`
- **Rodar os testes**: `npx jest`
- **Compilar o código TypeScript**: `npx tsc`
