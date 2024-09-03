// Context, Reducer, Provider, Hook
import { createContext, useContext, useReducer } from "react";

const initialData = {
  currentStep: 0,
  name: "",
  level: 0,
  email: "",
  github: "",
};

// Context
const FormContext = createContext(undefined);

// Reducer
enum FormActions {
  setCurrentStep,
  setName,
  setLevel,
  setEmail,
  setGithb,
}
const FormReducer = (state, action) => {
  switch (action.type) {
    case FormActions.setCurrentStep:
      return { ...state, currentStep: action.payload };

    case FormActions.setName:
      return { ...state, name: action.payload };

    case FormActions.setLevel:
      return { ...state, level: action.payload };

    case FormActions.setEmail:
      return { ...state, email: action.payload };

    case FormActions.setGithb:
      return { ...state, github: action.payload };

    default:
      return state;
  }
};

// Provider
const FormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(FormReducer, initialData);
  const value = { state, dispatch };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

// Context Hook
const useForm = () => {
  const context = useContext(FormContext);

  if (context === undefined) {
    throw new Error("useForm precisa ser usado dentro do FormProvider");
  }
  return context;
};
