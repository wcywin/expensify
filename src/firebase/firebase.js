import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };



//
// // child_removed - another event apart from 'value'
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });
//
// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });
//
// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];
//
//         snapshot.forEach((childSnapshot) => {
//              expenses.push({
//                  id: childSnapshot.key,
//                  ...childSnapshot.val()
//              });
//         });
//
//         console.log(expenses);
//     });

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//
//     console.log(expenses);
// });

// database.ref('expenses').push({
//     description: "Rent",
//     note: "August 2018",
//     amount: 130000,
//     createdAt: 9754862165484585
// });
//
// database.ref('expenses').push({
//     description: "Car",
//     note: "July 2018",
//     amount: 12500,
//     createdAt: 9578561243256847
// });
//
// database.ref('expenses').push({
//     description: "MacBook",
//     note: "June 2018",
//     amount: 5500,
//     createdAt: 9542548654627735
// });




// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error with data fetching', e);
// });
//
// // on is the subscription to the changes
// database.ref().on('value', onValueChange);
//
// setTimeout(() => {
//     database.ref('age').set(29);
// }, 3500);
//
// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7000);
//
// setTimeout(() => {
//     database.ref('age').set(31);
// }, 10500);

// database.ref('job')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e);
//     });

// database.ref().set({
//     name: 'Wojciech Cywinski',
//     age: 30,
//     stressLevel: 6,
//     job: {
//         title: 'Software developer',
//         company: 'Google'
//     },
//     isSingle: false,
//     location: {
//         city: 'New York',
//         country: 'United States'
//     }
// }).then(() => {
//     console.log('Data is saved!');
// }).catch((error) => {
//     console.log('This failed.', error);
// });
//
// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });

// database
//     .ref()
//     .remove()
//     .then(() => {
//         console.log('Data was removed');
//     }).catch((e) => {
//         console.log('Did not remove data', e);
// });


//
// // database.ref().set('This is my test data.');
//
// // database.ref('age').set(31);
// // database.ref('location/city').set('New York');
//
// database.ref('attributes').set({
//     height: 180,
//     weight: 87
// }).then(() => {
//     console.log('Second set call worked.')
// }).catch((error) => {
//     console.log('This did not work well', error);
// });