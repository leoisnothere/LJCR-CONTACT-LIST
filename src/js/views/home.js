import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export const Home = () => {
	const { store, actions } = useContext(Context);
	
	
	const alertDelete = (contact) => {
		Swal.fire({
			title: "Advertencia",
			text: "¿Desea eliminar el contacto?", position: "center",
			icon: "error",
			showDenyButton: true,
			denyButtonText: "No",
			confirmButtonText: "Si"
		}).then(click => {
			if (click.isConfirmed) {
				actions.deleteContacts(contact);
				Swal.fire('Éxito', 'El contacto se elimino correctamente', 'success')
			} else {
				return
			}
		});
	}
	return (
		<div className="container text-center mt-5">
			<div className="d-flex justify-content-end mb-2">
			<Link to={("/createContact")} className="btn btn-primary">
						Agregar nuevo contacto
				</Link>
			</div>
			{store.contacts.length > 0 ? store.contacts.map((contact) => {
				return (
					<div className="card" key={contact.id}>
						<div className="card-body fullCard d-flex justify-content-around" id="imgBox">
							<div className="col-sm d-flex justify-content-center">
								<img
									src="https://media.istockphoto.com/id/153696622/photo/happy-senior-man-giving-thumb-up.jpg?s=612x612&w=0&k=20&c=b2BI4P4vvgEK9AqxQ_gl7EpWnr1BomTJV24RqtGpaRo="
									className=""
									alt="..."
								/>
							</div>
							<div className="col-sm text-start">
								<h5 className="card-title">{contact.name}</h5>
								<p className="card-text">{contact.phone}</p>
								<p className="card-text">{contact.email}</p>
								<p className="card-text">{contact.address}</p>
							</div>
							<div className="col-sm d-flex justify-content-end align-items-center">
								<button
									className="btn btn-danger me-4"
									onClick={() => alertDelete(contact.id)}
								>
									Eliminar
								</button>
								<Link to={(`/editContact/${contact.id}`)} className="btn btn-warning">
									Editar
								</Link>
							</div>
						</div>
					</div>
				);
			}) : <h1>No hay contactos</h1>}
		</div>

	);
};