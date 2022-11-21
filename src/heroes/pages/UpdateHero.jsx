import { useState } from "react";
import { useParams } from "react-router-dom";
import { HeroForm } from "../components/HeroForm";
import { imgRoute } from "../helpers/imgRoute,";

export const UpdateHero = () => {
  const { id } = useParams();
  const [imageUrl, setImageUrl] = useState(
    "https://www.pngitem.com/pimgs/m/499-4992374_sin-imagen-de-perfil-hd-png-download.png"
  );
  const setImage = (image) => {
    setImageUrl(imgRoute(image));
  };
  return (
    <>
      <div className="container">
        <h1>Actualziar-Héroe</h1>
        <hr />
        <div className=" row  d-flex-nowrap justify-content-between align-items-center">
          <div className="col-md-5 col-sm-12 ">
            <HeroForm setImage={setImage} id={id} />
          </div>

          <div className="col-md-5 col-sm-12">
            <img src={imageUrl} alt="heroe" />
          </div>
        </div>
      </div>
    </>
  );
};
