import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.scss"; // Import CSS for styling

const Login = () => {
  const navigate = useNavigate();

  // Form validation schema
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  // Handle form submission
  const handleLogin = async (values, { setSubmitting, setErrors }) => {
    try {
      const response = await axios.post("https://reqres.in/api/login", values);
      sessionStorage.setItem("token", response.data.token);

      // Wait for sessionStorage to update before navigating
      setTimeout(() => navigate("/users"), 100);
    } catch (error) {
      setErrors({ general: "Invalid email or password. Please try again." });
    }
    setSubmitting(false);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>

      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleLogin}
      >
        {({ isSubmitting, errors }) => (
          <Form className="login-form">
            {errors.general && <p className="error">{errors.general}</p>}

            <div className="form-group">
              <label>Email:</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="p" className="error" />
            </div>

            <div className="form-group">
              <label>Password:</label>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="p" className="error" />
            </div>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Logging in..." : "Login"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
