export const signInFormFields = [
  {
    label: "E-mail",
    type: "email",
    required: "Enter your e-mail, please.",
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Please enter a valid email address.",
    },
    minLength: {
      value: 5,
      message: "The field must contain at least 5 characters.",
    },
  },
  {
    label: "Password",
    type: "password",
    required: "Enter your password, please.",
    pattern: {
      value: /^(?=.*[^\W_])(?=.*\d).{8,}$/,
      message: "The field must contain both letters and numbers.",
    },
    minLength: {
      value: 8,
      message: "The field must contain at least 8 characters.",
    },
  },
];
