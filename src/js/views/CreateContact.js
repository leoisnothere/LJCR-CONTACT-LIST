import React from "react";
import FormCreateContact from '../component/FormCreateContact.js';
import { Link } from "react-router-dom";
const CreateContact = () => {
    return (
        <>
            <div className="mb-3">
                <h1 className="text-center">
                    Agregar nuevo contacto
                </h1>
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <div className="card w-75">

                    <FormCreateContact createContacts={"Guardar"} />
                </div>
            </div>
            <div>
                <Link to="/">
                    <h3 className="text-center">
                        o vuelve a la lista de contactos
                    </h3>
                </Link>
            </div>
        </>
    )
}
export default CreateContact