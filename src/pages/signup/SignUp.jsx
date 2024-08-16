import Container from "../../components/ui/container/Container";
import Heading from "../../components/ui/heading/Heading";
import Form from "../../components/smart/form/Form";
import { signUpFormFields } from "./signUpFormFields";

function SignUp() {
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <section className="signPage">
      <Container>
        <Heading track={[{ title: "Sign up", to: "/signup" }]} />
        <Form
          fields={signUpFormFields}
          button1={"Reset"}
          button2={"Sign up"}
          onSubmit={onSubmit}
        />
      </Container>
    </section>
  );
}

export default SignUp;
