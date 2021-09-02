import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/styles.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div className="rowone">
				<div className="left" />
				<div className="boxone">one</div>
				<div className="boxtwo">two</div>
				<div className="boxthree">three</div>
				<div className="right" />
			</div>
			<div className="rowtwo">
				<div className="left" />
				<div className="boxfour">four</div>
				<div className="boxfive">five</div>
				<div className="boxsix">six</div>
				<div className="right" />
			</div>
			<div className="rowthree">
				<div className="left" />
				<div className="boxseven">seven</div>
				<div className="boxeight">eight</div>
				<div className="boxnine">nine</div>
				<div className="right" />
			</div>
		</div>
	);
};
