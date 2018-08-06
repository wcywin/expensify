import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDY5moB7b_aBNXCSehzbpc1nIfAnYy2cMc",
    authDomain: "expensify-wcywin.firebaseapp.com",
    databaseURL: "https://expensify-wcywin.firebaseio.com",
    projectId: "expensify-wcywin",
    storageBucket: "expensify-wcywin.appspot.com",
    messagingSenderId: "355980289523"
};

firebase.initializeApp(config);

const database = firebase.database();

database.ref().set({
    name: 'Wojciech Cywinski',
    age: 30,
    isSingle: false,
    location: {
        city: 'Los Angeles',
        country: 'United States'
    }
});

// database.ref().set('This is my test data.');

database.ref('age').set(31);
database.ref('location/city').set('New York');

database.ref('attributes').set({
    height: 180,
    weight: 87
});