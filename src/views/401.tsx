import { Link } from "react-router-dom";

const Error401: React.FC = () => {
  return (
    <main>
      <h1>Not authenticated!</h1>
      <p>You are not authenticated!</p>
      <p><Link className="btn" to="/">Back to safety!</Link></p>
    </main>
  );
}


export default Error401