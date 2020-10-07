import React from "react";
import { useFirebase } from "react-redux-firebase";
import { useHistory } from "react-router-dom";
import {motion} from 'framer-motion';


const SignIn = () => {


  const firebase = useFirebase();
  const history = useHistory();

  const signInWithGoogle = () => {
    firebase.login({
        provider: "google",
        type: "popup",
      })
      .then(() => {
        history.push("/todos");
      });
  };


  return (
    <div className='h-screen bg-gray-700 flex items-start justify-center'> 
    <div className='mt-24'>
      <h1 className='text-4xl mb-8'>Sign In</h1> 
        <motion.button whileHover={{scale: 1.05, color: 'white'}} transition={{type: "spring"}} className='bg-orange-600 py-2 px-6 rounded-sm'
          onClick={(event) => {
            event.preventDefault();
            signInWithGoogle();
          }}
        >
          Sign In with Google
        </motion.button>
    </div>
    </div>
  );
};
export default SignIn;