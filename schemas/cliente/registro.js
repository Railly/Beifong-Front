import * as yup from "yup"

export const patientRegisterSchema = yup.object().shape({
  name: yup.string().required("El nombre es requerido"),
  email: yup.string().required("El correo es requerido"),
  password: yup.string().required("La contraseña es requerida"),
})
