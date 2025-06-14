import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from '../firebase/firebase.init';

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setIsLoading(false);
        })
        return () => {
            unsubscribe();
        }
    }, [])


    const createUserWithEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const emailSignIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const signOutUser = () => {
        return signOut(auth);
    }

    // info update
    const updatePhotoURL = (photoURL) => {
        setUser({ ...user, photoURL: photoURL });
        return updateProfile(auth.currentUser, { photoURL });
    }

    const updateDisplayName = (userName) => {
        setUser({ ...user, displayName: userName });
        return updateProfile(auth.currentUser, { displayName: userName });
    }


    const userAuthHandler = {
        user,
        isLoading,
        createUserWithEmail,
        googleSignIn,
        emailSignIn,
        updateDisplayName,
        updatePhotoURL,
        signOutUser
    }

    return (
        <AuthContext value={userAuthHandler}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;