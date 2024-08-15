import { useForm } from "react-hook-form";
import Container from "../../components/ui/container/Container";
import Heading from "../../components/ui/heading/Heading";
import styles from "./addplace.module.css";

function AddPlace() {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const submitForm = (data) => {
    alert(JSON.stringify(data));
    reset();
  };

  return (
    <Container>
      <Heading track={[{ title: "Add place", to: "/addplace" }]} />
      <form className={styles.form} onSubmit={handleSubmit(submitForm)}>
        <label>
          Title:
          <input
            {...register("title", {
              required: "Enter the title please.",
              minLength: {
                value: 3,
                message: "The field must contain at least 3 characters.",
              },
            })}
          />
          <div className={styles.error}>
            {errors?.title && (
              <p> {errors?.title?.message || "Unknown error."} </p>
            )}
          </div>
        </label>

        <label>
          Description:
          <input
            {...register("description", {
              required: "Enter the description please.",
              minLength: {
                value: 10,
                message: "The field must contain at least 10 characters.",
              },
            })}
          />
          <div className={styles.error}>
            {errors?.description && (
              <p> {errors?.description?.message || "Unknown error."} </p>
            )}
          </div>
        </label>

        <label>
          Address:
          <input
            {...register("address", {
              required: "Enter the address please.",
              minLength: {
                value: 5,
                message: "The field must contain at least 5 characters.",
              },
            })}
          />
          <div className={styles.error}>
            {errors?.address && (
              <p> {errors?.address?.message || "Unknown error."} </p>
            )}
          </div>
        </label>
        <input type="submit" disabled={!isValid} />
      </form>
    </Container>
  );
}

export default AddPlace;
