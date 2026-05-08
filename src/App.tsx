import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/homepage/HomePage";
import { QuestionPage } from "./pages/question/QuestionPage";
import { ResultPage } from "./pages/result/ResultPage";

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
