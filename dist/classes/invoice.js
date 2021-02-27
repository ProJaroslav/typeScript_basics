//We are saying that this class must implement HasFormatter (follow it´s structure)
export class Invoice {
    constructor(
    //^ If we specify scope right in the constructor we do not need to specify it before as in the coded class below
    client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    //without this function we would get an error 
    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}
// export class Invoice implements HasFormatter {
//     client: string;
//     details: string;
//     amount: number;
//     constructor(c: string, d: string, a: number) {
//         this.client = c;
//         this.details = d;
//         this.amount = a;
//     }
//     format() {
//         return `${this.client} owes money${this.amount} for ${this.details}`
//     }
// }
