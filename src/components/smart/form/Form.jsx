import { useForm } from "react-hook-form";
import ButtonsGroup from "../../ui/buttonsGroup/ButtonsGroup";
import styles from "./form.module.css";

function Form({ fields, button1, button2, onSubmit }) {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const submitForm = (data) => {
    onSubmit(data);
    reset();
  };

  return (
    <form className={styles.authForm} onSubmit={handleSubmit(submitForm)}>
      {fields.map((field) => (
        <label key={field.label}>
          {field.label}
          <input
            type={field.type}
            {...register(`${field.label}`, {
              required: field.required,
              pattern: field.pattern,
              minLength: field.minLength,
            })}
          />
          <div className={styles.error}>
            {errors?.[`${field.label}`] && (
              <p> {errors?.[`${field.label}`]?.message || "Unknown error."} </p>
            )}
          </div>
        </label>
      ))}

      <ButtonsGroup isValid={isValid} button1={button1} button2={button2} />
    </form>
  );
}

export default Form;
