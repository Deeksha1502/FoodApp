import { useRef, useState } from "react";
import { checkValidation } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
export const Login = () => {
  const [isSigninForm, setIsSigninForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  // const username = useRef(null);

  const toggleSigninButton = () => {
    setIsSigninForm(!isSigninForm);
  };

  const handleButtonClick = () => {
    const message = checkValidation(
      email.current.value,
      password.current.value,
      // username.current.value,
    );
    setErrorMessage(message);

    if (message) return;

    if (!isSigninForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <div className="pt-10">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-1/4 absolute p-12 bg-slate-100 mx-auto right-0 left-0"
          label="input form"
        >
          <p className="font-bold text-2xl text-center mb-4">
            {isSigninForm ? "Sign In" : "Sign up"}
          </p>
          <div className="flex flex-col">
            {!isSigninForm && (
              <input
                type="text"
                // ref={username}
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
            <button className="mt-4 p-4 border-2" onClick={handleButtonClick}>
              {isSigninForm ? "Sign In" : "Sign up"}
            </button>
            <p onClick={toggleSigninButton} className="mt-6 cursor-pointer">
              {isSigninForm
                ? "New User? Sign up now"
                : "Already registerd? Signin now"}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
