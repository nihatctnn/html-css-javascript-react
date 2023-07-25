import { useFormik } from "formik";
import "./App.css";

function App() {
  // Get necessary values for form handling using the useFormik function.
  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      // Define initial values for form fields.
      firstName: "Nihat",
      lastName: "Çetin",
      email: "nihatcetin0143@gmail.com",
      gender: "male",
      hobies: [],
      country: "Türkiye",
    },
    onSubmit: (values) => {
      // Define actions to be performed when the form is submitted.
      console.log(values); // Print form data to the console.
    },
  });

  return (
    <div className="App">
      <h1>Sign Up</h1>

      <form onSubmit={handleSubmit}>
        {/* Last Name */}
        <label htmlFor="lastName">Last Name: </label>
        <input
          name="lastName"
          value={values.lastName}
          onChange={handleChange}
        />
        <br />
        <br />
        {/* Email */}
        <label htmlFor="email">Email: </label>
        <input name="email" value={values.email} onChange={handleChange} />
        <br />
        <br />
        {/* Gender */}
        <span>Male</span>
        <input
          name="gender"
          onChange={handleChange}
          value="male"
          type="radio"
          checked={values.gender === "male"}
        />
        <span>Female</span>
        <input
          name="gender"
          onChange={handleChange}
          value="female"
          type="radio"
          checked={values.gender === "female"}
        />
        <br />
        <br />
        {/* Submit Button */}
        <button type="submit">Submit</button>
        <br />
        <br />
        {/* Hobbies */}
        <div>
          <input
            type="checkbox"
            name="hobies"
            value="Reading and Listening Quran"
            onChange={handleChange}
          />
          Reading and Listening Quran{" "}
          {/* Hobby option for reading and listening to the Quran */}
        </div>
        <div>
          <input
            type="checkbox"
            name="hobies"
            value="To memorize Quran verses"
            onChange={handleChange}
          />
          To memorize Quran verses{" "}
          {/* Hobby option for memorizing Quran verses */}
        </div>
        <div>
          <input
            type="checkbox"
            name="hobies"
            value="Meeting with friends"
            onChange={handleChange}
          />
          Meeting with friends {/* Hobby option for meeting with friends */}
        </div>
        <br />
        {/* Country */}
        <select name="country" value={values.country} onChange={handleChange}>
          <option value="türkiye">Türkiye</option>
          <option value="czech">Czech</option>
          <option value="italy">Italy</option>
        </select>
        <br />
        <br />
        {/* Display Form Data */}
        <code>{JSON.stringify(values)}</code>{" "}
        {/* Display form data in JSON format */}
      </form>
    </div>
  );
}

export default App;