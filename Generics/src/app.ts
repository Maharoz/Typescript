// Code goes here!
//const names=['Max','Manuel'];
// const names: Array<string> = [];
// //names[0].split(" ");

// const promise = new Promise<any>((resolve, reject) => {
//   setTimeout(() => {
//     resolve("This is done!!");
//   }, 2000);
// });

// promise.then((data) => {
//   data.split(" ");
// });

function merge<T extends Object, U extends Object>(objA: T, objB: U) {
  return Object.assign( objA, objB);
}

const mergedObj = merge({ name: "Max" }, { age: 30 });
//mergedObj.age;
