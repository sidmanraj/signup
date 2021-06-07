import firebase from "firebase/app";
import "firebase/auth";

export const signup = async (
  email: string,
  password: string
): Promise<string> => {
  try {
    const response = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    return response.user?.uid ?? "some issue";
  } catch (error) {
    return error.message;
  }
};

export const signOut = async (): Promise<string> => {
  try {
    await firebase.auth().signOut();
    return "sign out success";
  } catch (error) {
    return "sign out failure";
  }
};

export const logIn = async (
  email: string,
  password: string
): Promise<string> => {
  try {
    const response = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    return response.user?.uid ?? "some issue";
  } catch (error) {
    return error.message;
  }
};
