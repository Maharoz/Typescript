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
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Max" }, { age: 30 });
//mergedObj.age;

interface Lengthy {
  length: number;
}
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value";
  if (element.length === 1) {
    descriptionText = "Got 1 element";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " element";
  }
  return [element, descriptionText];
}

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return "Value" + obj[key];
}
