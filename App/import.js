import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
  
    const auth = getAuth();
    signInWithEmailAndPassword(auth, 'jgbgdondim@gmail.com', 'Gondim25j@').then(Response => {
        console.log('sucess', Response)
    }).catch(error => {
        console.log('error', error)
    });  


console.log('cadeira')
