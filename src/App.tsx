import "./index.css";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepage } from "./page/homepage/HomePage";
import { QuestionPage } from "./page/question/QuestionPage";
import { ResultPage } from "./page/result/ResultPage";

import bg01 from "./asset/background/bg-01.png";
import bg02 from "./asset/background/bg-02.png";
import bg03 from "./asset/background/bg-03.png";
import bg04 from "./asset/background/bg-04.png";
import bg05 from "./asset/background/bg-05.png";
import bg06 from "./asset/background/bg-06.png";
import bg07 from "./asset/background/bg-07.png";
import bg08 from "./asset/background/bg-08.png";
import bg09 from "./asset/background/bg-09.png";
import bg10 from "./asset/background/bg-10.png";
import bg11 from "./asset/background/bg-11.png";
import bg12 from "./asset/background/bg-12.png";
import bg13 from "./asset/background/bg-13.png";
import introBg from "./asset/background/intro.png";
import clouds from "./asset/element/clouds.png";
import truck from "./asset/element/truck.png";
import globe from "./asset/element/globe.png";
import lamp from "./asset/element/lamp.png";
import ghost from "./asset/element/ghost.png";
import television from "./asset/element/television.png";
import block from "./asset/element/block.png";
import tuktuk from "./asset/element/tuktuk.png";
import confetti from "./asset/element/confetti.png";
import shirt from "./asset/element/shirt.png";
import book from "./asset/element/book.png";
import granny from "./asset/element/granny.png";
import headphone from "./asset/element/headphone.png";
import notebook from "./asset/element/notebook.png";
import cup from "./asset/element/cup.png";
import result01 from "./asset/result/result-01.png";
import result02 from "./asset/result/result-02.png";
import result03 from "./asset/result/result-03.png";
import result04 from "./asset/result/result-04.png";
import result05 from "./asset/result/result-05.png";
import result06 from "./asset/result/result-06.png";
import result07 from "./asset/result/result-07.png";

const allAssets = [
	bg01,
	bg02,
	bg03,
	bg04,
	bg05,
	bg06,
	bg07,
	bg08,
	bg09,
	bg10,
	bg11,
	bg12,
	bg13,
	introBg,
	clouds,
	truck,
	globe,
	lamp,
	ghost,
	television,
	block,
	tuktuk,
	confetti,
	shirt,
	book,
	granny,
	headphone,
	notebook,
	cup,
	result01,
	result02,
	result03,
	result04,
	result05,
	result06,
	result07,
];

export function App() {
	useEffect(() => {
		allAssets.forEach((src) => {
			const img = new Image();
			img.src = src;
		});
	}, []);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/question" element={<QuestionPage />} />
				<Route path="/result" element={<ResultPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
