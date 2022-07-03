// import 'dotenv/config'
import { getFirestore, collection, addDoc, getDoc, setDoc, doc, getDocs } from "firebase/firestore";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
//   measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
// };

const firebaseConfig = {
  apiKey: "AIzaSyB9VHFp0wOSrPOIssmdnF38AiGOBvppnu4",
  authDomain: "ineuron-native-base.firebaseapp.com",
  projectId: "ineuron-native-base",
  storageBucket: "ineuron-native-base.appspot.com",
  messagingSenderId: "553177709342",
  appId: "1:553177709342:web:738054e1fd16d04dad670f",
  measurementId: "G-NFJQ4KCP7W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth();
const storage = getStorage(app);

export const USER_SETUP = 'USER_SETUP';
export const USER_LOGOUT = 'USER_LOGOUT';
export const ALL_ITEMS = 'ALL_ITEMS';
export const ALL_ORDERS = 'ALL_ORDERS';


export const orderPlaced = (data) => {
  return async (dispatch, getState) => {
    try {
      console.log('action :: orderPlaced :: ', data);
      const docRef = await addDoc(collection(db, "orders"), data);
      return {
        status: true
      }
    } catch (error) {
      console.log('getOrders :: error :: ', error);
      return {
        status: false,
        message: error.message
      }
    }
  }
}

export const getOrders = () => {
  return async (dispatch, getState) => {
    try {
      let allOrders = [];

      const querySnapshot = await getDocs(collection(db, "orders"));
      querySnapshot.forEach((doc) => {
        allOrders.push(doc.data())
      });
      dispatch({
        type: ALL_ORDERS,
        data: allOrders
      })
      return {
        status: true
      }
    } catch (error) {
      console.log('getOrders :: error :: ', error);
      return {
        status: false,
        message: error.message
      }
    }
  }
}

export const getItems = () => {
  return async (dispatch, getState) => {
    try {
      let allItems = [];

      const querySnapshot = await getDocs(collection(db, "items"));
      querySnapshot.forEach((doc) => {
        allItems.push(doc.data())
      });

      dispatch({
        type: ALL_ITEMS,
        data: allItems
      })
      return {
        status: true
      }
    } catch (error) {
      console.log('getItem :: error :: ', error);
      return {
        status: false,
        message: error.message
      }
    }
  }
}

export const addItem = (data) => {
  return async (dispatch, getState) => {
    console.log('addItem :: data :: ', data);
    try {
      const docRef = await addDoc(collection(db, "items"),data);
      return {
        status: true
      }
    } catch (error) {
      console.log('addItem :: error :: ', error);
      return {
        status: false,
        message: error.message
      }
    }
  }
}

export const signin = (data) => {
  return async (dispatch, getState) => {
    console.log('signup :: data :: ', data);
    const { email, password } = data;

    return await signInWithEmailAndPassword(auth, email, password).then(async (userCred) => {
      console.log('signup :: authCred :: ', userCred);
      // const user = userCred.user;
      return {
        status: true
      }
    }).catch(error => {
      console.log('signup :: error :: ', error);
      return {
        status: false,
        message: error.message
      }
    })

  }
}

export const signup = (data) => {
  return async (dispatch, getState) => {
    console.log('signup :: data :: ', data);
    const { email, password, userType, fullName, phoneNum } = data;

    return await createUserWithEmailAndPassword(auth, email, password).then(async (userCred) => {
      console.log('signup :: authCred :: ', userCred);
      const user = userCred.user;
      try {
        // const docRef = await collection(db, 'users', user.uid);
        const docRes = await setDoc(doc(db, 'users', user.uid), {
          email,
          userType,
          fullName,
          phoneNum,
          uid: user.uid
        });
        console.log('signup :: docRes :: ', docRes);
        return {
          status: true
        }
      } catch (error) {
        console.log('addItem :: error :: ', error);
        return {
          status: false,
          message: error.message
        }
      }
    }).catch(error => {
      console.log('signup :: error :: ', error);
      return {
        status: false,
        message: error.message
      }
    })

  }
}

export const getUserInfo = (data) => {
  return async (dispatch, getState) => {
    const { uid } = data;

    try {
      const docRef = doc(db, "users", uid);
      const docSnap = await getDoc(docRef);
      // const docRef = await collection(db, "users", uid);
      if (docSnap.exists()) {
        const docRes = await docSnap.data()
        console.log('action :: getUserInfo :: docRes :: ', docRes);
        dispatch({
          type: USER_SETUP,
          data: docRes
        })
        return {
          status: true
        }
      } else {
        return {
          status: false
        }
      }

    } catch (error) {
      console.log('action :: getUserInfo :: error :: ', error);
      return {
        status: false,
        message: error.message
      }
    }

  }
}

export const logoutUser = (data) => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: USER_LOGOUT,
      })
      return {
        status: true
      }


    } catch (error) {
      console.log('action :: getUserInfo :: error :: ', error);
      return {
        status: false,
        message: error.message
      }
    }

  }
}

export const uploadImgToStorage = (data) => {
  try {
    


  } catch (error) {
    console.log('action :: getUserInfo :: error :: ', error);
    return {
      status: false,
      message: error.message
    }
  }

}




//   return (dispatch, getState) => {

//   }
// }