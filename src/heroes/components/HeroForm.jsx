import { Formik } from "formik";
import { FieldText } from "../../shared/FieldText";
import { SelectField } from "../../shared/SelectField";
import './heroForm.css'

export const HeroForm = ({setImage}) => {

    const heroForm = {
      superhero: "",
      publisher: "",
      alter_ego: "",
      first_appearance: "",
      characters: "",
      imageId:''
    };

   
   const onAddHero = () =>{
    
   }
    const onSetImage = (imageId) => {
     if(imageId.length >0){
        setImage(imageId)
     }else{
        setImage(
          "https://www.pngitem.com/pimgs/m/499-4992374_sin-imagen-de-perfil-hd-png-download.png"
        );
     }
    };



  return (
    <>
      <Formik
        initialValues={heroForm}
        onSubmit={(values, actions) => onAddHero(values, actions)}
      >
        {({ errors, handleSubmit, isSubmitting, values }) => (
          <form
            onSubmit={handleSubmit}
            className="d-grid gap-2"
            onChange={ onSetImage(values.imageId)}
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
              <FieldText name="characters" errors={errors} label="Characters" />
            </div>

            {/*campo imageId */}
            <div className="col-12  ">
              <FieldText
                name="imageId"
                errors={errors}
                label="imageId"
                onChange={onSetImage}
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
    </>
  );
}
