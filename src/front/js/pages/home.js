import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/styles2.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="game-board">
			<div data-cell className="cell">
				<i className="fas fa-times" />
			</div>
			<div data-cell className="cell">
				<i className="far fa-circle" />
			</div>
			<div data-cell className="cell" />
			<div data-cell className="cell" />
			<div data-cell className="cell" />
			<div data-cell className="cell" />
			<div data-cell className="cell" />
			<div data-cell className="cell" />
			<div data-cell className="cell" />

			<div className="winning-message" id="winningMessage">
				<div data-winning-message-text />
				<button id="restart">Restart</button>
			</div>
		</div>
	);
};
