import { Link } from "react-router-dom";

const Error404: React.FC = () => {
  return (
    <main>
      <h1>Could not find resource</h1>
      <p>Unfortunately, we could not find the requested resource!</p>
      <p><Link className="btn" to="/">Back to safety!</Link></p>
    </main>

  );
}


export default Error404