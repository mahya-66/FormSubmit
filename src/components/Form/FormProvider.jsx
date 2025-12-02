import { useReducer } from "react";
import { FormContext } from "./FormContext";

const initialState = {
  submittedValue: { name: "", email: "", phone: "" },
  loading: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SUBMIT_START":
      return { ...state, loading: true };
    case "SUBMIT_SUCCESS":
      return { ...state, submittedValue: action.payload, loading: false };
    default:
      return state;
  }
};

const FormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
