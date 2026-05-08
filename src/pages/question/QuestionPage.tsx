import { getQuestion, type Choice, type Question } from "@/utils/questions";
import { useEffect, useRef, useState, type FC } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const QuestionPage: FC = () => {
	const [searchParam, setSearchParams] = useSearchParams();
	const navigate = useNavigate();
	const [question, setQuestion] = useState<Question>(getQuestion(1));

	useEffect(() => {
		const q = searchParam.get("q");

		if (q === null) {
			setQuestion(getQuestion(1));
			setSearchParams((prev) => {
				prev.set("q", "1");
				return prev;
			});
			return;
		}

		setQuestion(getQuestion(parseInt(q)));
	}, [searchParam]);

	const handleNextQuestion = (choice: number) => {
		localStorage.setItem(searchParam.get("q")!, `${choice + 1}`);
		if (searchParam.get("q") === "13") {
			return navigate("/result");
		}
		const q = searchParam.get("q");
		const questionIndex = parseInt(q || "1");
		setSearchParams((prev) => {
			prev.set("q", `${questionIndex + 1}`);
			return prev;
		});
	};
	return (
		<div className="h-screen w-screen flex flex-col justify-center items-center gap-10">
			<div>{question.title}</div>
			<div className="flex flex-col gap-5">
				{question.choices.map((q, i) => {
					return <button onClick={() => handleNextQuestion(i)}>{q.text}</button>;
				})}
			</div>
		</div>
	);
};

export { QuestionPage };
