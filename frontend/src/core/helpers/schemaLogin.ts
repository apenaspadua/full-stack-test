import * as yup from 'yup';

export const validationSchemaLogin = yup.object({
  username: yup
    .string()
    .required('Required field'),
  password: yup
    .string()
    .required('Required field'),
});