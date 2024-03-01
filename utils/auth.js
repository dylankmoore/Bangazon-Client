import firebase from 'firebase/app';
import 'firebase/auth';

const checkUser = (userId) => new Promise((resolve, reject) => {
  fetch(`https://localhost:7203/api/users/${userId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then((resp) => {
      if (!resp.ok) {
        throw new Error('User not found');
      }
      return resp.json();
    })
    .then(resolve)
    .catch(reject);
});

const registerUser = (userInfo) => new Promise((resolve, reject) => {
  fetch('https://localhost:7203/api/register', {
    method: 'POST',
    body: JSON.stringify(userInfo),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then((resp) => resolve(resp.json()))
    .catch(reject);
});

const signIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const signOut = () => {
  firebase.auth().signOut();
};

export {
  signIn, //
  signOut,
  checkUser,
  registerUser,
};
