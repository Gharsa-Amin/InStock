import { Link } from "react-router-dom";
import "./NotFoundPage.scss";

export default function NotFoundPage() {
	return (
		<>
			<h2>Whooopsies! Page Not found⚠️</h2>
			<Link to="/">
				<p className="redirectional-link">
					Click here to get back to the HomePage
				</p>
			</Link>
		</>
	);
}
