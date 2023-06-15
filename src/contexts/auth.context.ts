import React from "react";

export enum Gender {
  MALE = 0,
  FEMALE = 1,
}

export interface CurrentUserProps {
  email: string;
  firstName: string;
  lastName: string;
  middleName: string;
  age: number;
  gender: Gender,
  avatar: string;
}

interface AuthValues {
  currentUser: CurrentUserProps | null;
  setCurrentUser: (loggedInUser: CurrentUserProps) => void;
}

const initialValues: AuthValues = {
  currentUser: null,
  setCurrentUser: null,
}

export default React.createContext<AuthValues>(initialValues);