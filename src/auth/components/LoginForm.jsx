import { Formik } from "formik";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { userLoogin } from "../../api/auth/authApi";
import { handleNotificationError, handleNotificationSuccess } from "../../heroes/helpers/handleNotification";

import { FieldPassword } from "../../shared/FieldPassword";
import { FieldText } from "../../shared/FieldText";
import { AuthContext } from "../context";

export const LoginForm = () => {

  const loginForm = {
    email:'',
    password:''
  }
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);


  
  const onLogin = (values, {setSubmitting,resetForm}) => {
    const lastPath = localStorage.getItem("lastPath") || "/";

    try {
      userLoogin(values)
        .then((res) => {
          const { data } = res;
          if (data?.usuario) {
            login(data.usuario); //funcion que llega desde el AuthContext
            handleNotificationSuccess(`Bienvenido ${data.usuario.username}`)
            localStorage.setItem('x-token',data.token)
            navigate(lastPath, {
              replace: true,
            });
          }
        })
        .catch(({ response }) => {
          const {message} = response.data
          console.log(response);
          setSubmitting(false);
          resetForm();
          handleNotificationError(message);
        });
    } catch (error) {
      console.log(error);
      throw new Error("Error al realizar la peticion");
    }
  };

  return (
    <>
      <Formik
        initialValues={loginForm}
        onSubmit={(values, actions) => onLogin(values, actions)}
        validationSchema={yup.object({
          email: yup
            .string()
            .required("Este campo es obligatorio")
            .email("Debe ingresar un email valido"),
          password: yup
            .string()
            .required("Este campo es obligatorio")
            .min(6, "La Contraseña debe contener minimo 6 caracteres")
            .max(20, "La contraseña debe tener maximo 20 caracteres"),
        })}
      >
        {({ errors, isSubmitting, touched, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            {/* inicio  campo email */}
            <div className="col-12">
             <FieldText name="email" errors={errors} label="Correo electronico"/>
            </div>
            {/* fin  campo email */}

            {/* inicio  campo password */}
            <div className="col-12">
           <FieldPassword name="password" errors={errors}/>
            </div>
            {/* fin  campo password */}
            <button
              type="submit"
              className="btn btn-primary ms-2 mt-2 w-100"
              disabled={isSubmitting}
            >
              Login
            </button>

            {/*fin formulario */}
          </form>
        )}
      </Formik>
    </>
  );
};
