import Container from "../../components/ui/container/Container";
import Heading from "../../components/ui/heading/Heading";
import Form from "../../components/smart/form/Form";
import { addPlaceFormFields } from "./addPlaceFormFields";
import styles from "./addPlace.module.css";

function AddPlace() {
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <section className={styles.addPlace}>
      <Container>
        <Heading track={[{ title: "Add place", to: "/addplace" }]} />
        <Form
          fields={addPlaceFormFields}
          button1={"Reset"}
          button2={"Add"}
          onSubmit={onSubmit}
        />
      </Container>
    </section>
  );
}

export default AddPlace;
