const Signup: React.FC = () => {
  return (
    <main>
      <h1>Create New Account</h1>
      {/* <% if (inputData.errorMessage) { %> */}
      {/* <section className="alert"> */}
        {/* <h2>Invalid Input</h2> */}
        {/* <p><%= inputData.errorMessage %></p> */}
      {/* </section> */}
      {/* <% } %> */}
      <form action="/signup" method="POST">
        <input type="hidden" name="_csrf" value="<%= locals.csrfToken %>" />
        <p>
          <label htmlFor="email">E-Mail</label>
          <input type="email" id="email" name="email"
            value="<%= inputData.email %>" required />
        </p>
        <p>
          <label htmlFor="confirm-email">Confirm Email</label>
          <input type="email" id="confirm-email" name="confirm-email" value="<%= inputData.confirmEmail %>" required />

        </p>
        <p>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" min="6" value="<%= inputData.password %>" required />
        </p>
        <p>
          <label htmlFor="fullname">Full Name</label>
          <input type="text" id="fullname" name="fullname" value="<%= inputData.fullname %>" required />
        </p>
        <p>
          <label htmlFor="street">Street</label>
          <input type="text" id="street" name="street" value="<%= inputData.street %>" required />
        </p>
        <p>
          <label htmlFor="postal">Postal Code</label>
          <input type="text" id="postal" name="postal" min="5" max="5" value="<%= inputData.postal %>" required />
        </p>
        <p>
          <label htmlFor="city">City</label>
          <input type="text" id="city" name="city" value="<%= inputData.city %>" required />
        </p>
        <button className="btn">Create Account</button>
        <p id="switch-form"><a href="/login">Login instead</a></p>
      </form>
    </main>
  );
}


export default Signup