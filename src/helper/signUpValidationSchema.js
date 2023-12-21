import * as Yup from 'yup';

const  signUpValidationSchema = Yup.object().shape({
    fullname: Yup.string()
       .required('Full Name is required'),
    companyname: Yup.string()
      .required('Company Name is required'),
    title: Yup.string()
      .required('Title is required'),
    phone: Yup.number()
      .required('Phone Number is required')
      .min(10, 'Phone number must be 10 digits')
      .typeError("That doesn't look like a phone number")
      .positive("A phone number can't start with a minus")
      .integer("A phone number can't include a decimal point"),
    email: Yup.string()
      .required('Email is required')
      .email('Email is invalid'),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters'),
    confirmpassword: Yup.string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters')
      .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
  });

  export default signUpValidationSchema;
  