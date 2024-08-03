import { useRef, useState } from "react";
import { checkValidation } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../utils/firebase";
import { setDoc, getDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const [isSigninForm, setIsSigninForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const username = useRef(null);

  const navigate = useNavigate();

  const toggleSigninButton = () => {
    setIsSigninForm(!isSigninForm);
  };

  const handleButtonClick = async () => {
    let message;
    if (!isSigninForm) {
      message = checkValidation(
        email.current.value,
        password.current.value,
        username.current ? username.current.value : "",
      );
    } else {
      message = checkValidation(email.current.value, password.current.value);
    }

    setErrorMessage(message);

    if (message) return;

    try {
      if (!isSigninForm) {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value,
        );
        const user = userCredential.user;
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          fullname: username.current.value,
        });
        console.log("user signed up successfully");
        navigate("/welcome", { state: { name: username.current.value } });
      } else {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value,
        );
        const user = userCredential.user;
        // const userDoc = await getDoc(doc(db, "Users", user.uid));
        // const userData = userDoc.data();
        console.log("user signed in successfully");
        navigate("/welcome", { state: { name: user.email } });
      }
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorCode + "-" + errorMessage);
    }
  };

  return (
    <div className="h-screen  flex items-center justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-1/4 p-12 shadow-lg bg-gradient-to-r  mx-auto right-0 left-0 rounded-md"
        label="input form"
      >
        <p className="font-bold text-2xl text-center mb-4">
          {isSigninForm ? "Sign In" : "Sign up"}
        </p>
        <div className="flex flex-col">
          {!isSigninForm && (
            <input
              type="text"
              ref={username}
              placeholder="Full name"
              className="p-2 my-2 w-full"
            />
          )}
          <input
            type="text"
            ref={email}
            placeholder="email"
            className="p-2 my-2 w-full"
          />

          <input
            ref={password}
            type="password"
            placeholder="password"
            className="p-2 my-2 w-full"
          />
          <p className="text-red-500">{errorMessage}</p>
          <button
            className="mt-4 p-4 border-2 font-bold"
            onClick={handleButtonClick}
          >
            {isSigninForm ? "Sign In" : "Sign up"}
          </button>
          <p
            onClick={toggleSigninButton}
            className="mt-6 font-bold cursor-pointer"
          >
            {isSigninForm
              ? "New User? Sign up now"
              : "Already registered? Signin now"}
          </p>
        </div>
      </form>
    </div>
  );
};
