import Anchor from "../../../atoms/Anchor";
import Button from "../../../atoms/Button";
import Divider from "../../../atoms/Divider";
import Form from "../../../atoms/Form";
import Input from "../../../atoms/Input";
import Label from "../../../atoms/Label";
import { H2 } from "../../../atoms/Typography";

const Login: React.FC = () => {
  return (
    <main>
      <H2>Login</H2>
      {/* <% if (inputData.errorMessage) { %> */}
      {/* <section className="alert"> */}
      {/* <h2>Invalid Credentials</h2> */}
      {/* <p><%= inputData.errorMessage %></p> */}
      {/* </section> */}
      {/* <% } %> */}
      <Form action="/login" method="POST">
        <Input type="hidden" name="_csrf" value="<%= locals.csrfToken %>" />
        <p>
          <Label htmlFor="email">E-Mail</Label>
          <Input $full type="email" id="email" name="email" value="<%= inputData.email %>" required />
        </p>
        <p>
          <Label htmlFor="password">Password</Label>
          <Input $full type="password" id="password" name="password" value="<%= inputData.password %>" required />
        </p>
        <Divider />
        <Button>Login</Button>
        <p id="switch-form"><Anchor to="/signup">Create a new user</Anchor></p>
      </Form>
    </main>
  );
}

export default Login