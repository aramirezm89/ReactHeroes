import { LoginForm } from "../components/LoginForm";
import "./loginPage.css";
export const LoginPage = () => {
  return (
    <div className="image  d-flex justify-content-center align-items-center  ">
      <div className="container row ">
       
          <div className="col-md-6 col-sm-12 text-center my-auto">
            <h3>App-Heroes</h3>
          </div>
          <div className="col-md-6 col-sm-12 text-center">
            <div className="card  ">
              <div className="card-body p-3 m-2">
                <LoginForm />
              </div>
            </div>
          </div>
        
      </div>
    </div>
  );
};
