import { PersonDAO } from "../src/dao/PersonDAO";
import { Person } from "../src/models/Person";
import { Email } from "../src/models/Email";

describe("PersonDAO - isValidToInclude", () => {
    const personDAO = new PersonDAO();

    it("should return no errors for valid person", () => {
        const person = new Person("Felipe Silva", 25, new Email("felipe@domain.com"));
        const errors = personDAO.isValidToInclude(person);
        expect(errors).toHaveLength(0);
    });

    it("should return error for name with less than 2 parts", () => {
        const person = new Person("Felipe", 25, new Email("felipe@domain.com"));
        const errors = personDAO.isValidToInclude(person);
        expect(errors).toContain("O nome deve ter pelo menos 2 partes.");
    });

    it("should return error for invalid age", () => {
        const person = new Person("Felipe Silva", 0, new Email("felipe@domain.com"));
        const errors = personDAO.isValidToInclude(person);
        expect(errors).toContain("A idade deve estar entre 1 e 200.");
    });

    it("should return error for invalid email", () => {
        const person = new Person("Felipe Silva", 25, new Email("felipe@domain"));
        const errors = personDAO.isValidToInclude(person);
        expect(errors).toContain("O email é obrigatório e deve ser válido.");
    });

    it("should return error if email is missing", () => {
        const person = new Person("Felipe Silva", 25, null);
        const errors = personDAO.isValidToInclude(person);
        expect(errors).toContain("O email é obrigatório e deve ser válido.");
    });
});
