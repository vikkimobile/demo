import React from 'react'
import "../styles/login.css"
import "../styles/twofactorauthentication.css"
import { Formik, Field, Form } from "formik";
import { useDispatch, useSelector } from 'react-redux'
import { userAuthenticate } from '../features/auth/authActions'
import twoFactorValidationSchema from '../helper/twoFactorValidationSchema';
import { useNavigate } from 'react-router-dom';


const TwoFactorAuthentication = ({setPage}) => {
  const { loading, userInfo, error, success, userToken } = useSelector(
    (state) => state.auth
  )
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const onSubmitHandler = (values)=>{
    console.log(values)
    dispatch(userAuthenticate(values))
    console.log(loading, userInfo, error, success,userToken)  
    navigate("/dashboard")
    setPage("") 
  }
  


  return (
    <div className='otp_content'> 
      {userInfo? <Formik
        initialValues={{ email: userInfo.email , code: "" }} 
        validationSchema={twoFactorValidationSchema} 
        onSubmit={(values) => {
          onSubmitHandler(values)
        }}>
           {({ errors, touched }) => (
              <Form>
              <div className="password-container_2fa">
              <label htmlFor="" className='custom_label_2fa'>Please Enter your OTP</label><br /><br />
              <p className='fa_para'>We have sent you one time password to your Email</p>
              <Field className="custom_input_2fa" type='text' 
              name="code" required/>
           
            </div >
            {errors.code && touched.code ? <div className='error_message'>{errors.code}</div> : null}

               <br /><br />
              <button type="submit" className='custom_button_2fa'>Verify</button>
            </Form>
           )}
      </Formik> : null} 
      
    </div>
  )
}

export default TwoFactorAuthentication 