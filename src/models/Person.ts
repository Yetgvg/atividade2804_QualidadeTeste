import { Email } from "./Email";

export class Person {
    constructor(
        public name: string,
        public age: number,
        public email: Email | null
    ) { }
}
