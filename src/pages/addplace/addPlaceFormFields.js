export const addPlaceFormFields = [
  {
    label: "Title",
    type: "text",
    required: "Enter the title please.",
    minLength: {
      value: 3,
      message: "The field must contain at least 3 characters.",
    },
  },
  {
    label: "Description",
    type: "text",
    required: "Enter the description please.",
    minLength: {
      value: 10,
      message: "The field must contain at least 10 characters.",
    },
  },
  {
    label: "Address",
    type: "text",
    required: "Enter the address please.",
    minLength: {
      value: 5,
      message: "The field must contain at least 5 characters.",
    },
  },
];
