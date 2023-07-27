import React from "react";
import { useFormik } from "formik";
import validationSchema from "./Validations";

function Signup() {

  // Get necessary values for form handling using the useFormik function.
  const { handleChange, handleSubmit, handleBlur, values, errors, touched } = useFormik({
    initialValues: {
      // Define initial values for form fields.
      email: "",
      password: "",
      passwordConfirm: "",
    },

    onSubmit: (values) => {
      // Define actions to be performed when the form is submitted.
      console.log(values); // Print form data to the console.
    },

    validationSchema, // Use the validation schema for form validation.

  });

  return (

    <div>

      <h1>Sign Up</h1>

      <form onSubmit={handleSubmit}>

        {/* Email */}
        <label>Email </label>
        <input name="email"
         value={values.email} 
         onChange={handleChange} 
         onBlur={handleBlur}/>
        {errors.email && touched.email && <div className="error">{errors.email}</div>}

        <br />
        {/* Password */}
        <label>Password </label>
        <input
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.password && touched.password && <div className="error">{errors.password}</div>}
        <br />
        <br />
        {/* passwordConfirm */}
        <label>Confirm Password </label>
        <input
          name="passwordConfirm"
          value={values.passwordConfirm}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.passwordConfirm && touched.passwordConfirm && <div className="error">{errors.passwordConfirm}</div>}

        <br />
        <br />
        {/* Submit Button */}
        <button type="submit">Submit</button>
        
      </form>
    </div>
  );
}
export default Signup;