import * as yup from "yup";

export const schema = yup
  .object({
    name: yup
      .string()
      .required("Name is required")
      .min(3, "Please provide your Name"),
    email: yup
      .string()
      .required("Email is required")
      .email("Please enter a valid Email"),
    message: yup
      .string()
      .required("Message is required")
      .min(40, "Can you provide more details?"),
  })
  .required();

export type SchemaType = yup.InferType<typeof schema>;
