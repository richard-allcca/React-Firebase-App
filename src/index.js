import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./context/authContext";
import { ListProvider } from "./context/listContext";
import { UserProvider } from "./context/userContext";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<AuthProvider>
			<UserProvider>
				<ListProvider>
					<App />
				</ListProvider>
			</UserProvider>
		</AuthProvider>
	</React.StrictMode>
);
