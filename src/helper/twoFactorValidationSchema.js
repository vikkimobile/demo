import * as Yup from 'yup';

const twoFactorValidationSchema = Yup.object().shape({
    code: Yup.string()
      .min(6, 'Code must be at least 6 characters')
      .required('Code is required'),
  });

  export default twoFactorValidationSchema