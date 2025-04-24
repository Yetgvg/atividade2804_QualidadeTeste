import { Employee } from "./Employee";

export class SalaryCalculator {
    calculateSalary(employee: Employee): number {
        let discount = 0;

        switch (employee.position) {
            case "DESENVOLVEDOR":
                discount = employee.salary >= 3000 ? 0.20 : 0.10;
                break;
            case "DBA":
            case "TESTADOR":
                discount = employee.salary >= 2000 ? 0.25 : 0.15;
                break;
            case "GERENTE":
                discount = employee.salary >= 5000 ? 0.30 : 0.20;
                break;
        }

        // Aplicando o desconto corretamente
        return employee.salary - (employee.salary * discount);
    }
}
