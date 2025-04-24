import { Person } from "../models/Person";
import { Email } from "../models/Email";

export class PersonDAO {
    isValidToInclude(person: Person): string[] {
        const errors: string[] = [];

        // Valida se o nome tem pelo menos 2 partes
        if (person.name.split(" ").length < 2) {
            errors.push("O nome deve ter pelo menos 2 partes.");
        }

        // Valida se a idade está entre 1 e 200
        if (person.age < 1 || person.age > 200) {
            errors.push("A idade deve estar entre 1 e 200.");
        }

        // Valida se o email é válido
        if (!person.email || !person.email.isValid()) {
            errors.push("O email é obrigatório e deve ser válido.");
        }

        return errors;
    }
}
