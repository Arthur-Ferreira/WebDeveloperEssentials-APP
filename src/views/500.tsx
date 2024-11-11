import { Link } from "react-router-dom";

const Error500: React.FC = () => {
  return (
    <main>
      <h1>Something went wrong!</h1>
      <p>Unfortunately, something went wrong - please try again later.</p>
      <p><Link className="btn" to="/">Back to safety!</Link></p>
    </main>
  );
}


export default Error500