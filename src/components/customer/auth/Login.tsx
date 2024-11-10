const Login: React.FC = () => {
  return (
    <main>
      <h1>Login</h1>
      {/* <% if (inputData.errorMessage) { %> */}
      {/* <section className="alert"> */}
        {/* <h2>Invalid Credentials</h2> */}
        {/* <p><%= inputData.errorMessage %></p> */}
      {/* </section> */}
    {/* <% } %> */}
      <form action="/login" method="POST">
        <input type="hidden" name="_csrf" value="<%= locals.csrfToken %>" />
          <p>
            <label htmlFor="email">E-Mail</label>
            <input type="email" id="email" name="email" value="<%= inputData.email %>" required />
          </p>
          <p>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" value="<%= inputData.password %>" required />
          </p>
          <button className="btn">Login</button>
          <p id="switch-form"><a href="/signup">Create a new user</a></p>
      </form>
    </main>
  );
}

export default Login