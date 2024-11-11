import { Link } from "react-router-dom";

const Error403: React.FC = () => {
  return (
    <main>
      <h1>Not authorized!</h1>
      <p>You are not authorized!</p>
      <p><Link className="btn" to="/">Back to safety!</Link></p>
    </main>
  );
}


export default Error403