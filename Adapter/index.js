var localStorage = require('./LocalStorage');

console.log( "LocalStorage length: ", localStorage.length );

var uid = localStorage.getItem("user_id");

console.log( "user_id: ", uid );

if (!uid) {
    console.log('User ID not found, set new user ID.');
    localStorage.setItem("user_id", "12345");
} else {
    console.log('User ID found.', uid);
    console.log('Clearing the User ID...');
    localStorage.clear();
}
