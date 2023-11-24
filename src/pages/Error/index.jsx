import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="error">
      <Link to="/" className="error-link">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
}
export default Error;
