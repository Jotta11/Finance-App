
const firebaseConfig = initializeApp({
    apiKey: "AIzaSyBR2STVD-9DH9rjNWAZAkdndHQCaG9GPuc",
    authDomain: "peach-manager.firebaseapp.com",
    projectId: "peach-manager",
    storageBucket: "peach-manager.appspot.com",
    messagingSenderId: "325103798734",
    appId: "1:325103798734:web:eacfe3a59a7b74511e839f"
});
 
const auth = getAuth(firebaseApp);

console.log('antes');
firebase.auth().signInWithEmailAndPassword(auth, "any@email.com","12345").then(Response => {
  console.log('success', Response)
}).catch(error => {
  console.log('error', error)
});
console.log('depois')