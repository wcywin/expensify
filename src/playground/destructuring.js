//
// Object destructuring
//

// const person = {
//     name: 'Wojciech',
//     age: 30,
//     location: {
//         city: 'Warsaw',
//         temp: 21
//     }
// };
//
// // const name = person.name;
// // const age = person.age;
// const {name: firstName = 'Anonymous', age} = person; // this line is equivalent to those above, creates 2 variables from object person. Rename and set name = default if undefined
//
// console.log(`${firstName} is ${age}.`);
//
// const {city, temp: temperature} = person.location; // after colon we rename the variable
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };
//
// const {name: publisherName = 'Self-Published'} = book.publisher;
// console.log(publisherName);

//
// Array destructuring
//

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [, city, state = 'New York'] = address; // skip the first item, go to second and third, and don't mind about the rest after. state = default

console.log(`You are in ${city}, ${state}`);

const item = ['Coffee (white choco)', '$3.00', '$3.50', '$3.75'];

const [product, , mediumPrice] = item;

console.log(`A medium ${product} costs ${mediumPrice}`);