import { Invoice } from "./classes/Invoice.js";
const me = {
    name: "Rashik",
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log("I spent", amount);
        return amount;
    },
};
const greetPerson = (person) => {
    console.log("Hello", person.name);
};
greetPerson(me);
// class Invoice {
//   constructor(
//     readonly client: string,
//     private details: string,
//     public amount: number
//   ) {}
//   format() {
//     return `${this.client} owes $${this.amount} for ${this.details}`;
//   }
// }
const invOne = new Invoice("Rashik", "Work on the website", 250);
const invTwo = new Invoice("Injamul", "Work on the Backend", 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
// console.log(invoices);
invoices.forEach((inv) => {
    console.log(inv.client, inv.amount, inv.format());
});
// class Invoice {
//   readonly client: string;
//   private details: string;
//   amount: number;
//   constructor(client: string, details: string, amount: number) {
//     this.client = client;
//     this.details = details;
//     this.amount = amount;
//   }
//   format() {
//     return `${this.client} owes $${this.amount} for ${this.details}`;
//   }
// }
// const invOne = new Invoice("Rashik", "Work on the website", 250);
// const invTwo = new Invoice("Injamul", "Work on the Backend", 300);
// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);
// // console.log(invoices);
// invoices.forEach((inv) => {
//   console.log(inv.client, inv.amount, inv.format());
// });
const form = document.querySelector(".new-item-form");
// console.log(form);
console.log(form.children);
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
