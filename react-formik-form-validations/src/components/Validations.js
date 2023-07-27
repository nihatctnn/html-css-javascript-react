import { object, string, ref } from 'yup';

const Validations = object({
  email: string().email("Invalid email address. Please check your email address !").required("Email is required"),
  password: string().min(5, "'Password must be at least 5 characters'").required("Password is required"),
  passwordConfirm: string().oneOf([ref("password")], "Passwords must match").required("Password confirmation is required")
});

export default Validations;