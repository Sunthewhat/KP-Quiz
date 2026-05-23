import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepage } from "./page/homepage/HomePage";
import { QuestionPage } from "./page/question/QuestionPage";
import { ResultPage } from "./page/result/ResultPage";

export function App() {
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
