import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {useContext} from "react";
import { Link } from "react-router-dom";
import { deleteHero } from "../../api/heroes/heroesApi";
import { AuthContext } from "../../auth/context";
import { confirmDialog } from "../helpers/confirmDialog";
import { imgRoute } from "../helpers/imgRoute,";
import Swal from "sweetalert2";

import "./heroeItem.css";

export default function HeroeItem({ hero, onReload }) {
  const { authState } = useContext(AuthContext);
  const { user } = authState;
  const imgUrl = imgRoute(hero.imageId);

  const onDeleteHero = (id) => {
    confirmDialog().then((result) => {
      if (result.isConfirmed) {
        deleteHero(id)
          .then(({data}) => {
         Swal.fire("Eliminado!", `${data.message}`, "success");
          })
          .catch((err) => console.log(err));
        onReload(true)
      }
    });
  };

  return (
    <div className="col-md-4  col-sm-12  mb-3 mt-2 animate__animated animate__fadeIn ">
      <Card>
        <CardContent>
          <Typography variant="h5" component="div">
            {hero.superhero}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {hero.publisher}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Alter ego: {hero.alter_ego}
          </Typography>
          <img src={imgUrl} alt={hero.superhero} />

          {hero.alter_ego !== hero.characters && (
            <p className="mt-2 mb-0">Personajes: {hero.characters}</p>
          )}

          <p className="text-muted mt-2 mb-0">{hero.first_appearance}</p>
        </CardContent>
        <CardActions>
          <Link className="btn btn-primary" to={`/hero/${hero._id}`}>
            Leer más...
          </Link>
          {user.role === "ADMIN_ROLE" && (
            <Link className="btn btn-success" to={`/hero/update/${hero._id}`}>
              Editar
            </Link>
          )}
          {user.role === "ADMIN_ROLE" && (
            <button
              className="btn btn-danger ms-2"
              onClick={() => onDeleteHero(hero._id)}
            >
              Eliminar
            </button>
          )}
        </CardActions>
      </Card>
    </div>
  );
}
