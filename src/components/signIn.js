import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';
import { signInWithPopup } from 'firebase/auth';
import { Button } from '@mui/material';
import { auth, provider } from '../firebase-config';
import { createUser } from '../service/userApi';
import { GoogleAuthProvider } from 'firebase/auth';

function SignIn() {
    // Nämä muokkaa jotenkin fiksummaksi, sillä nyt kutsutaan kahdessa paikassa
    const dispatch = useDispatch();
    const { setUser } = bindActionCreators(actionCreators, dispatch);
    // Google sign-in
    const signIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential =
                    GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // muokataan omaa storea asettamalla käyttäjä
                setUser(result.user.displayName);
                // luodaan käyttäjä omaan tauluun - ainakin yritetään
                createUser(result.user.uid, result.user.displayName);
                // ...
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential =
                    GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    };

    return (
        <div>
            <h1>Please sign in with Google</h1>
            <Button variant='contained' onClick={signIn}>
                Sign in
            </Button>
        </div>
    );
}

export default SignIn;
