import { Link } from 'react-router-dom';
import { useRouteError, isRouteErrorResponse } from 'react-router-dom';

interface RouteError {
	data: string;
	error: {
		columnNumber: number;
		fileName: string;
		lineNumber: number;
		message: string;
		stack: string;
	};
	internal: boolean;
	status: number;
	statusText: string;
}

const Error: React.FC = () => {
	const error = useRouteError() as RouteError;
	if (isRouteErrorResponse(error)) {
		return (
			<div>
				<h1>Oops! {error.status}</h1>
				<h1>{error.statusText}</h1>
				<Link to="/">Back Home</Link>
			</div>
		);
	}
	return (
		<div>
			<h1>Something went wrong!</h1>
			<Link to="/">Back Home</Link>
		</div>
	);
};

export default Error;
