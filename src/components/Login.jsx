import React, { useState } from 'react'
import "../styles/login.css"
import { Formik, Field, Form } from "formik";
import eye from "../assets/eye.svg"
import loginValidationSchema from '../helper/loginValidationSchema'
import { useDispatch, useSelector } from 'react-redux'
import { userLogin } from '../features/auth/authActions'


const Login = ({ setPage }) => {
  const [showPassword, setShowPassword] = useState(false);
  const { loading, userInfo, error, success } = useSelector(
    (state) => state.auth
  )
  const dispatch = useDispatch()
  console.log(loading, userInfo, error, success)
  const onSubmitHandler = (values) => {
    values.email = values.email.toLowerCase()
    // alert(JSON.stringify(values));
    dispatch(userLogin(values))
    setPage("authenticate")
  }

  return (
    <div className='login_content'>
      <Formik initialValues={{ email: "", password: "" }}  validationSchema={loginValidationSchema}  
      onSubmit={(values) => {
          onSubmitHandler(values)
        }}>
        {({ errors, touched }) => (
          <Form>
            <label htmlFor="" className='custom_label'>Email</label>
            <Field name="email" type="email" className="custom_input" placeholder="Email" required /> <br /><br />
            {errors.email && touched.email ? <div className='error_message'>{errors.email}</div> : null}

            <div className="password-container">
              <label htmlFor="" className='custom_label'>Password</label>
              <Field className="custom_input" type={showPassword ? 'text' : 'password'} name="password" required />
              <img src={eye} alt="Show password" onClick={() => setShowPassword(!showPassword)} className="eye-icon2" />
            </div >
            {errors.password && touched.password ? <div className='error_message'>{errors.password}</div> : null}
            <br /><br />
            <button type="submit" className='custom_button'>Login</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Login