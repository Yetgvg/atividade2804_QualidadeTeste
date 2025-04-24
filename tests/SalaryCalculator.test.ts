import { SalaryCalculator } from "../src/models/SalaryCalculator";
import { Employee } from "../src/models/Employee";

describe("SalaryCalculator - calculateSalary", () => {
    const salaryCalculator = new SalaryCalculator();

    it("should calculate correct salary for DESENVOLVEDOR", () => {
        const dev = new Employee("Carlos", "dev@domain.com", 3500, "DESENVOLVEDOR");
        expect(salaryCalculator.calculateSalary(dev)).toBe(2800);
    });

    it("should calculate correct salary for DBA", () => {
        const dba = new Employee("Ana", "dba@domain.com", 1800, "DBA");
        expect(salaryCalculator.calculateSalary(dba)).toBe(1530);
    });

    it("should calculate correct salary for TESTADOR", () => {
        const tester = new Employee("Ricardo", "tester@domain.com", 2500, "TESTADOR");
        expect(salaryCalculator.calculateSalary(tester)).toBe(1875);
    });

    it("should calculate correct salary for GERENTE", () => {
        const manager = new Employee("Maria", "manager@domain.com", 5000, "GERENTE");
        expect(salaryCalculator.calculateSalary(manager)).toBe(3500);
    });
});
