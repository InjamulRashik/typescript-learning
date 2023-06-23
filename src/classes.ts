import { Invoice } from "./classes/Invoice.js";

interface isPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): void;
}

const me: isPerson = {
  name: "Rashik",
  age: 30,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log("I spent", amount);
    return amount;
  },
};
const greetPerson = (person: isPerson) => {
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

let invoices: Invoice[] = [];
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

const form = document.querySelector(".new-item-form") as HTMLFormElement;
// console.log(form);
console.log(form.children);

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
