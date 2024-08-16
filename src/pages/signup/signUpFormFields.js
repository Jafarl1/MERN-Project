import { signInFormFields } from "../signin/signInFormFields";

export const signUpFormFields = [
  {
    label: "Full name",
    type: "text",
    required: "Enter your full name, please.",
    minLength: {
      value: 5,
      message: "The field must contain at least 5 characters.",
    },
  },
  ...signInFormFields,
];
