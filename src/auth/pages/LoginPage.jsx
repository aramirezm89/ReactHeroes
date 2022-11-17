import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userLoogin } from "../../api/auth/authApi";
import { useForm } from "../../heroes/hooks/useForm";
import { AuthContext } from "../context";

export const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const { onInputChange, onResetForm, formState } = useForm({
    email: "",
    password: "",
  });

  const onLogin = (event) => {
    event.preventDefault();

    const lastPath = localStorage.getItem('lastPath') || '/';

    try {
      userLoogin(formState)
        .then((res) => {
          const { data } = res;
          if (data?.usuario) {
            login(data.usuario);

            navigate(lastPath, {
              replace: true,
            });
          }
        })
        .catch(({ response }) => console.log(response.data.errors));
    } catch (error) {
      console.log(error)
      throw new Error('Error al realizar la peticion')
    }
  };


  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <form onSubmit={onLogin}>
        <input className="form-control" onChange={onInputChange} name="email" />
        <input
          className="form-control"
          onChange={onInputChange}
          name="password"
        />

        <button onClick={onLogin} className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};
