import { useParams } from "react-router-dom"
import { HeroForm } from "../components/HeroForm";


export const AddHero = () => {

    const {id} = useParams();
    const titulo = id?"Actualizar" : "Agregar"
 
  return (
    <>
      <div className="container">
        <h1>{titulo}</h1>
        <hr/>
        <div className=" row  d-flex-nowrap justify-content-between align-items-center">
          <div className="col-md-5 col-sm-12 ">
           
                        <HeroForm/>
            
          </div>

          <div className="col-md-5 col-sm-12">
            <h1 className="w-100">Imagenddddddddd</h1>
          </div>
        </div>
      </div>
    </>
  );
}
