import PropTypes from "prop-types";

import {
  GithubAuthProvider,
  GoogleAuthProvider,
  TwitterAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

// social auth provider

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const twitterProvider = new TwitterAuthProvider();

const FrirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  //   console.log(user);

  //   create user

  const createUser = (email, password) => {
    setLoading(false);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   update user profile
  const updateUserProfile = (name, image) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    }).then(() => {
      // profile update
    });
    //   .catch((error) => {
    //     // An error occurred
    //   });
  };

  //   sign in user

  const signInUser = (email, password) => {
    setLoading(false);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   google login

  const googleLogin = () => {
    setLoading(false);
    return signInWithPopup(auth, googleProvider);
  };
  //   github login

  const githubLogin = () => {
    setLoading(false);
    return signInWithPopup(auth, githubProvider);
  };

  // twitter login
  const twitterLogin = () => {
    setLoading(false);
    return signInWithPopup(auth, twitterProvider);
  };

  //   logout
  const logout = () => {
    setLoading(false);
    setUser(null);
    signOut(auth);
  };
  //observer

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLoading(false);
      }
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const allValues = {
    createUser,
    signInUser,
    googleLogin,
    githubLogin,
    logout,
    user,
    updateUserProfile,
    twitterLogin,
    loading,
  };

  return (
    <AuthContext.Provider value={allValues}>{children}</AuthContext.Provider>
  );
};

FrirebaseProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FrirebaseProvider;
