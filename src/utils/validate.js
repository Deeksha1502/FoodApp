export const checkValidation = (email, password, username = null) => {
  const isEmailValid = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  const isUsernameValid = /^[A-Za-z][A-Za-z0-9_]{7,29}$/.test(username);

  if (!isEmailValid) return "Email Id is not valid";
  if (!isPasswordValid) return "Password is not valid";

  if (username !== null) {
    const isUsernameValid = /^[A-Za-z][A-Za-z0-9_]{7,29}$/.test(username);
    if (!isUsernameValid) return "User name is not valid";
  }

  return null;
};
