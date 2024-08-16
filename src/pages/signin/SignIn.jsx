import Container from "../../components/ui/container/Container";
import Heading from "../../components/ui/heading/Heading";
import Form from "../../components/smart/form/Form";
import { signInFormFields } from "./signInFormFields";

function SignIn() {
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <section className="signPage">
      <Container>
        <Heading track={[{ title: "Sign in", to: "/signin" }]} />
        <Form
          fields={signInFormFields}
          button1={"Reset"}
          button2={"Sign in"}
          onSubmit={onSubmit}
        />
      </Container>
    </section>
  );
}

export default SignIn;
