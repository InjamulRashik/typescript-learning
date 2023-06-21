// // let character = "rashik";
// // let age = 30;

// // const circ = (diameter: number) => {
// //   return diameter * Math.PI;
// // };
// // console.log(circ(20));

// //Arrrays
// // let names = ["Rashik", "Injamul"];
// // names.push("");
// // console.log(names);

// // let mixedArray = ["Rashik", 4, "Hello", true];
// // mixedArray.push("Injamul");
// // console.log(mixedArray);

// //Objects

// // let ninja = {
// //   name: "Rashik",
// //   belt: "black",
// //   age: 30,
// // };

// //Explicit Types
// // let character: string;
// // let age: number;

// //Union Types

// let mixed: (string | number | boolean)[] = [];
// mixed.push("Hello");
// mixed.push(20);

//Function Basics
// let greet: Function;

// greet = () => {
//   console.log("Hello World");
// };

const add = (a: number, b: number, c?: number | string): void => {
  console.log(a + b); // Here "?" mark indicates optional parameter
};
add(5, 10);

const minus = (a: number, b: number): number => {
  return a + b;
};

let result = minus(10, 7);
