import Anchor from "../../../atoms/Anchor";
import Button from "../../../atoms/Button";
import Form from "../../../atoms/Form";
import Input from "../../../atoms/Input";
import Label from "../../../atoms/Label";
import { H2 } from "../../../atoms/Typography";


const Signup: React.FC = () => {
  return (
    <main>
      <H2>Create New Account</H2>
      {/* <% if (inputData.errorMessage) { %> */}
      {/* <section className="alert"> */}
      {/* <h2>Invalid Input</h2> */}
      {/* <p><%= inputData.errorMessage %></p> */}
      {/* </section> */}
      {/* <% } %> */}
      <Form action="/signup" method="POST">
        <Input type="hidden" name="_csrf" value="<%= locals.csrfToken %>" />
        <p>
          <Label htmlFor="email">E-Mail</Label>
          <Input $full type="email" id="email" name="email"
            value="<%= inputData.email %>" required />
        </p>
        <p>
          <Label htmlFor="confirm-email">Confirm Email</Label>
          <Input $full type="email" id="confirm-email" name="confirm-email" value="<%= inputData.confirmEmail %>" required />
        </p>
        <p>
          <Label htmlFor="password">Password</Label>
          <Input $full type="password" id="password" name="password" min="6" value="<%= inputData.password %>" required />
        </p>
        <hr />
        <p>
          <Label htmlFor="fullname">Full Name</Label>
          <Input $full type="text" id="fullname" name="fullname" value="<%= inputData.fullname %>" required />
        </p>
        <p>
          <Label htmlFor="street">Street</Label>
          <Input $full type="text" id="street" name="street" value="<%= inputData.street %>" required />
        </p>
        <p>
          <Label htmlFor="postal">Postal Code</Label>
          <Input $full type="text" id="postal" name="postal" min="5" max="5" value="<%= inputData.postal %>" required />
        </p>
        <p>
          <Label htmlFor="city">City</Label>
          <Input $full type="text" id="city" name="city" value="<%= inputData.city %>" required />
        </p>
        <Button>Create Account</Button>
        <p id="switch-form"><Anchor to="/login">Login instead</Anchor></p>
      </Form>
    </main>
  );
}


export default Signup