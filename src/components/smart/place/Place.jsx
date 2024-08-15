import { useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import Modal from "../modal/Modal";
import Map from "../../ui/map/Map";
import Swal from "sweetalert2";
import styles from "./place.module.css";
function Place({ place }) {
  const { loggedUser } = useAuth();

  const [mapModal, setMapModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  const handleMapView = () => {
    setMapModal(true);
  };

  const closeMapModal = () => {
    setMapModal(false);
  };

  const handleEdit = () => {
    setEditModal(true);
  };

  const closeEditModal = () => {
    setEditModal(false);
  };

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: `You are going to remove the "${place.title}" from the list of places. You will not be able to revert this.`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#1ea4d9",
      cancelButtonColor: "#f22e62",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: `The place "${place.title}" has been deleted.`,
          icon: "success",
        });
      }
    });
  };

  return (
    <>
      <div className={styles.place}>
        <div
          className={styles.image}
          style={{ backgroundImage: `url(${place.image})` }}
        />
        <div className={styles.info}>
          <h2>{place.title}</h2>
          <h3>{place.description}</h3>
          <h4>{place.address}</h4>
        </div>
        <div className={styles.btnGroup}>
          <button onClick={handleMapView}>View on map</button>
          {loggedUser && (
            <>
              <button onClick={handleEdit}>Edit</button>
              <button onClick={handleDelete}>Delete</button>
            </>
          )}
        </div>
      </div>
      {mapModal && (
        <Modal header={place.address} closeModal={closeMapModal}>
          <Map position={place.location} />
        </Modal>
      )}
      {editModal && <Modal closeModal={closeEditModal} />}
    </>
  );
}

export default Place;
