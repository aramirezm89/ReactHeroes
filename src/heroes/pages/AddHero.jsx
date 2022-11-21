import { useState } from "react";
import { HeroForm } from "../components/HeroForm";
import { imgRoute } from "../helpers/imgRoute,";

export const AddHero = () => {


 
  const [imageUrl, setImageUrl] = useState(
   
  );


  const setImage = (image) => {
    console.log(image)
    setImageUrl(image);
  };
  return (
    <>
      <div className="container">
        <h1>Agregar-Héroe</h1>
        <hr />
        <div className=" row  d-flex-nowrap justify-content-between align-items-center">
          <div className="col-md-5 col-sm-12 ">
            <HeroForm setImage={setImage}/>
          </div>

          <div className="col-md-5 col-sm-12">
            <img src={imageUrl} alt="heroe" />
          </div>
        </div>
      </div>
    </>
  );
};
