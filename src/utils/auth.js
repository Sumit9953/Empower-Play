import { auth } from "../../firebase";
import { createUserWithEmailAndPassword , signInWithEmailAndPassword , signOut} from "firebase/auth";
import { ToastAndroid } from "react-native";

export const SignIn = async (email , password) => {
    await signInWithEmailAndPassword(auth ,email, password)
          .then(userCredential => {
            ToastAndroid.show("Logged In" , ToastAndroid.SHORT)
            const user = userCredential.user;
            console.log(user.email);
        }).catch(e => {
            console.log(e);
        })
}

export const SignUp = async (email , password ) => {
    await createUserWithEmailAndPassword(auth ,email, password)
          .then(userCredential => {
            ToastAndroid.show("Sign Up" , ToastAndroid.SHORT)
            const user = userCredential.user;
            console.log(user.email);
        }).catch(e => {
            console.log(e);
        })
}

export const logout = () => {
    signOut(auth).then(() => {
        ToastAndroid.show("Logout successfully" , ToastAndroid.SHORT)
    }).catch(e => {
        console.log(e);
    })
}