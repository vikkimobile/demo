import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import "../styles/signup.css";
import eye from "../assets/eye.svg";
import signUpValidationSchema from "../helper/signUpValidationSchema";
import { userSignup } from '../features/auth/authActions'
import { useDispatch, useSelector } from 'react-redux'

const initialValues = {
  usertype: "broker",
  fullname: "",
  companyname: "",
  title: "",
  phone: "",
  email: "",
  password: "",
  confirmpassword: "",
};

const SignUp = ({ setPage }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { loading, userInfo, error, success } = useSelector(
    (state) => state.auth
  )
  const dispatch = useDispatch()
  console.log(loading, userInfo, error, success)
  const onSubmitHandler = (values) => {
    console.log(values)
    alert(JSON.stringify(values));
    dispatch(userSignup(values))
    setPage("login");
  };


  return (
    <div className="signup_content">
      <Formik
        initialValues={initialValues}
        validationSchema={signUpValidationSchema}
        onSubmit={(values) => {
          onSubmitHandler(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>

            <label >
              <Field type="radio" value="broker" name="usertype" />
              Broker
            </label>
            <label >
              <Field type="radio" value="client" name="usertype" />
              Client
            </label>

            <label htmlFor="" className="custom_label">
              Full Name
            </label>
            <Field
              placeholder="Ex: Jordan Doe"
              name="fullname"
              type="text"
              className="custom_input"
              required
            />
            {errors.fullname && touched.fullname ? (
              <div className="error_message">{errors.fullname}</div>
            ) : null}

            <label htmlFor="" className="custom_label">
              Company Name
            </label>
            <Field
              placeholder="Ex: Jordan Doe"
              name="companyname"
              type="text"
              className="custom_input"
              required
            />
            {errors.companyname && touched.companyname ? (
              <div className="error_message">{errors.companyname}</div>
            ) : null}

            <label htmlFor="" className="custom_label">
              Title
            </label>
            <Field
              placeholder="Value"
              name="title"
              type="text"
              className="custom_input"
              required
            />
            {errors.title && touched.title ? (
              <div className="error_message">{errors.title}</div>
            ) : null}

            <label htmlFor="" className="custom_label">
              Phone No
            </label>
            <Field
              placeholder="Ex: +91 9876543211"
              name="phone"
              type="text"
              className="custom_input"
              required
            />
            {errors.phone && touched.phone ? (
              <div className="error_message">{errors.phone}</div>
            ) : null}

            <label htmlFor="" className="custom_label">
              Email
            </label>
            <Field
              placeholder="Ex: Jordan@8081.com"
              name="email"
              type="email"
              className="custom_input"
              required
            />
            {errors.email && touched.email ? (
              <div className="error_message">{errors.email}</div>
            ) : null}

            <div className="password-container">
              <label htmlFor="" className="custom_label">
                Password
              </label>
              <Field
                className="custom_input"
                type={showPassword ? "text" : "password"}
                name="password"
                required
              />
              <img
                src={eye}
                alt="Show password"
                onClick={() => setShowPassword(!showPassword)}
                className="eye-icon"
              />
            </div>
            {errors.password && touched.password ? (
              <div className="error_message">{errors.password}</div>
            ) : null}

            <div className="password-container">
              <label htmlFor="" className="custom_label">
                Confirm Password
              </label>
              <Field
                className="custom_input"
                type={showConfirmPassword ? "text" : "password"}
                name="confirmpassword"
                required
              />
              <img
                src={eye}
                alt="Show password"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="eye-icon"
              />
            </div>
            {errors.confirmpassword && touched.confirmpassword ? (
              <div className="error_message">{errors.confirmpassword}</div>
            ) : null}

            <p className="terms_condition">
              By signing up, you agree to our <br />{" "}
              <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                Terms of use
              </a>{" "}
              and{" "}
              <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                {" "}
                Privacy Policy
              </a>
            </p>

            <button type="submit" className="custom_register_button">
              Create an Account
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUp;
