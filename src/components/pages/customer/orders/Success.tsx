// <%- include('../../shared/includes/head', { pageTitle: 'Success' }) %>

import { Link } from "react-router-dom";

const Success: React.FC = () => {
  return (
    <main>
      <h1>Order was successful!</h1>
      <p>You can visit <Link to="/orders">the orders page</Link> for more details!</p>
    </main>
  );
}


export default Success