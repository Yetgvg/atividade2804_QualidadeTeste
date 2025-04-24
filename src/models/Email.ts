export class Email {
    constructor(public email: string) { }

    isValid(): boolean {
        // Verifica se o formato do email está correto
        const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
        return regex.test(this.email);
    }
}
