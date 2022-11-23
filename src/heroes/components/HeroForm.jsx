import { Formik } from "formik";
import { useState, useEffect } from "react";
import {
  createHero,
  getHeroById,
  updateHero,
} from "../../api/heroes/heroesApi";
import { FieldText } from "../../shared/FieldText";
import { SelectField } from "../../shared/SelectField";
import * as yup from "yup";
import "./heroForm.css";
import { ThumbUp } from "@mui/icons-material";
import {
  handleNotificationError,
  handleNotificationSuccess,
} from "../helpers/handleNotification";

export const HeroForm = ({ setImage, id }) => {
  const [formHero, setFormHero] = useState();

  useEffect(() => {
    if (id) {
      getHeroById(id)
        .then(({ data }) => {
          const { hero } = data;
          console.log(hero);
          setFormHero(hero);
        })
        .catch((err) => console.log(err));
    } else {
      setFormHero({
        superhero: "",
        publisher: "",
        alter_ego: "",
        first_appearance: "",
        characters: "",
        imageId: "",
      });
    }
  }, [id]);

  const onAddHero = (values, actions) => {
    //si en values se encuentra la _id queire decir que se avtualizara el héroe si no se creara
    console.log(actions)
    if (values._id) {
      updateHero(values._id, values)
        .then(({ data }) => {
          handleNotificationSuccess(data.message);
       
        })
        .catch((err) => {
          console.log(err);

          const { response } = err;
          handleNotificationError(response.data.message);
        });
        
    } else {
      createHero(values)
        .then(({ data }) => {
          handleNotificationSuccess(data.message);
             actions.resetForm();
        })
        .catch((err) => {
          console.log(err);

          const { response } = err;
          handleNotificationError(response.data.message);
        });
    }
  };

  const onSetImage = (imageId) => {
    if (imageId.length > 0) {
      setImage(imageId);
    } else {
      setImage(
        "https://www.pngitem.com/pimgs/m/499-4992374_sin-imagen-de-perfil-hd-png-download.png"
      );
    }
  };

  return (
    <>
      {formHero && (
        <Formik
          initialValues={formHero}
          onSubmit={(values, actions) => onAddHero(values, actions)}
          validationSchema={yup.object({
            superhero: yup.string().required("Este campo es obligatorio"),
            alter_ego: yup.string().required("Este campo es obligatorio"),
            publisher: yup.string().required("Este campo es obligatorio"),
            first_appearance: yup
              .string()
              .required("Este campo es obligatorio"),
            characters: yup.string().required("Este campo es obligatorio"),
            imageId: yup.string().required("Este campo es obligatorio"),
          })}
        >
          {({ errors, handleSubmit, isSubmitting, values }) => (
            <form
              onSubmit={handleSubmit}
              className="d-grid gap-2 animate__animated animate__bounceInLeft "
              onChange={onSetImage(values.imageId)}
            >
              {/*campo  superhero */}
              <div className="row ">
                <div className="col-6">
                  <FieldText
                    clase="inputHeroForm"
                    name="superhero"
                    label="Superhero"
                    errors={errors}
                  />
                </div>

                <div className="col-6">
                  {/*campo alter_ego */}
                  <div className="col-12  ">
                    <FieldText
                      name="alter_ego"
                      label="Alter_ego"
                      errors={errors}
                    />
                  </div>
                </div>
              </div>

              {/* campo publisher */}
              <div className="col-12 ms-2 ">
                <SelectField
                  id="select"
                  name="publisher"
                  label="Publisher"
                  options={["DC Comics", "Marvel Comics"]}
                />
              </div>

              {/*campo first_appearance */}
              <div className="col-12  ">
                <FieldText
                  name="first_appearance"
                  errors={errors}
                  label="First_appearance"
                  variant="standard"
                />
              </div>

              {/*campo characters */}
              <div className="col-12  ">
                <FieldText
                  name="characters"
                  errors={errors}
                  label="Characters"
                />
              </div>

              {/*campo imageId */}
              <div className="col-12  ">
                <FieldText
                  name="imageId"
                  errors={errors}
                  label="imageId"
                  input={onSetImage(values?.imageId)}
                />
              </div>

              <div className="col-12 ps-3">
                <button type="submit" className="btn btn-primary w-100 mb-4 ">
                  guardar
                </button>
              </div>
            </form>
          )}
        </Formik>
      )}
    </>
  );
};
