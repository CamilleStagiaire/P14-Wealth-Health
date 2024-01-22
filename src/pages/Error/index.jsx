import { Link } from "react-router-dom";

/**
 * Composant page Error
 * @returns {React.Element}
 */
function Error() {
	return (
		<main className="error">
			<h1 className="error_404">404</h1>
			<h3 className="error_text">Oups! La page que vous demandez n'existe pas.</h3>
			<Link to="/" className="error_link">
				Retourner sur la page d’accueil
			</Link>
		</main>
	);
}

export default Error;
