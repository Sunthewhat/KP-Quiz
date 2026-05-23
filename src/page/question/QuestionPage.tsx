import {
	getChoiceColor,
	getChoiceHeaderColor,
	getChoiceTextColor,
	getChoiceTitleTextColor,
	getQuestion,
	type Choice,
	type Question,
} from "@/util/questions";
import { useEffect, useState, type FC } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import globe from "../../asset/element/globe.png";
import lamp from "../../asset/element/lamp.png";
import ghost from "../../asset/element/ghost.png";
import television from "../../asset/element/television.png";
import block from "../../asset/element/block.png";
import tuktuk from "../../asset/element/tuktuk.png";
import confetti from "../../asset/element/confetti.png";
import shirt from "../../asset/element/shirt.png";
import book from "../../asset/element/book.png";
import granny from "../../asset/element/granny.png";
import headphone from "../../asset/element/headphone.png";
import notebook from "../../asset/element/notebook.png";
import cup from "../../asset/element/cup.png";
import bg01 from "../../asset/background/bg-01.png";
import bg02 from "../../asset/background/bg-02.png";
import bg03 from "../../asset/background/bg-03.png";
import bg04 from "../../asset/background/bg-04.png";
import bg05 from "../../asset/background/bg-05.png";
import bg06 from "../../asset/background/bg-06.png";
import bg07 from "../../asset/background/bg-07.png";
import bg08 from "../../asset/background/bg-08.png";
import bg09 from "../../asset/background/bg-09.png";
import bg10 from "../../asset/background/bg-10.png";
import bg11 from "../../asset/background/bg-11.png";
import bg12 from "../../asset/background/bg-12.png";
import bg13 from "../../asset/background/bg-13.png";

const backgrounds = [bg01, bg02, bg03, bg04, bg05, bg06, bg07, bg08, bg09, bg10, bg11, bg12, bg13];

const choicesBottomHalf = new Set([2]);

const QuestionPage: FC = () => {
	const [searchParam, setSearchParams] = useSearchParams();
	const navigate = useNavigate();
	const [question, setQuestion] = useState<Question>(getQuestion(1));
	const questionIndex = parseInt(searchParam.get("q") || "1");

	useEffect(() => {
		const q = searchParam.get("q");

		if (q === null) {
			navigate("/", { replace: true });
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
		const qi = parseInt(q || "1");
		setSearchParams((prev) => {
			prev.set("q", `${qi + 1}`);
			return prev;
		});
	};

	const isBottomHalf = choicesBottomHalf.has(questionIndex);
	const rotations = [
		[-1, 1, -1, 1],
		[1, -1, 1, -1],
		[-1, 1, -1, 1],
		[1, -1, 1, -1],
		[-1, 1, -1, 1],
		[1, -1, 1, -1],
		[-1, 1, -1, 1],
		[1, -1, 1, -1],
		[-1, 1, -1, 1],
		[1, -1, 1, -1],
		[-1, 1, -1, 1],
		[1, -1, 1, -1],
		[-1, 1, -1, 1],
	];

	return (
		<div className="relative h-dvh w-screen flex flex-col">
			<img
				src={backgrounds[questionIndex - 1]}
				alt=""
				className="absolute inset-0 h-full w-full object-fill"
			/>
			<div
				className={`relative z-10 flex flex-col items-center gap-10 px-4 py-25 ${isBottomHalf ? "mt-auto" : ""}`}
			>
				{questionIndex === 1 && <img src={globe} alt="" className="w-32" />}
				{questionIndex === 2 && <img src={lamp} alt="" className="w-32" />}
				{questionIndex === 4 && <img src={television} alt="" className="w-32" />}
				{(questionIndex === 7 || questionIndex === 12) && (
					<img src={tuktuk} alt="" className="w-32" />
				)}
				{questionIndex === 9 && <img src={confetti} alt="" className="w-20" />}
				{questionIndex === 10 && (
					<div className="grid grid-cols-3 grid-rows-3 w-55 h-30 place-items-center">
						<img src={shirt} alt="" className="w-16 col-start-2 row-start-1 -mr-10" />
						<img
							src={book}
							alt=""
							className="w-16 col-start-1 row-start-2 -mt-10 -mr-10"
						/>
						<img src={granny} alt="" className="w-16 col-start-3 row-start-2 -mb-8" />
						<img
							src={headphone}
							alt=""
							className="w-16 col-start-2 row-start-3 -ml-3"
						/>
					</div>
				)}
				{questionIndex === 13 && (
					<div className="flex gap-4 items-center">
						<img src={notebook} alt="" className="w-20 mt-8" />
						<img src={cup} alt="" className="w-20 -mt-8" />
					</div>
				)}
				<div className="relative flex items-center justify-center">
					{questionIndex === 3 && <img src={ghost} alt="" className="w-[80vw]" />}
					{questionIndex === 5 && <img src={block} alt="" className="w-[80vw] -mt-5" />}
					<p
						className={`text-center text-2xl font-anuphan font-[480] whitespace-pre-line ${questionIndex === 3 || questionIndex === 5 ? "absolute" : ""} ${questionIndex === 6 ? "mt-10" : ""} ${questionIndex === 9 ? "-mt-5" : ""} ${questionIndex === 11 ? "mt-35" : ""}`}
						style={{
							color:
								questionIndex === 1 || questionIndex === 5
									? "white"
									: questionIndex === 2
										? "rgb(50, 22, 20)"
										: [6, 7, 8, 10].includes(questionIndex)
											? "black"
											: questionIndex === 9 || questionIndex === 13
												? getChoiceColor(questionIndex)
												: getChoiceHeaderColor(questionIndex),
							transform: questionIndex === 5 ? "rotate(-1.5deg)" : undefined,
						}}
					>
						{questionIndex + ". " + question.title}
					</p>
				</div>
				<div
					className={`flex flex-col gap-7 w-full max-w-sm mx-auto justify-center items-center ${questionIndex === 6 ? "mt-10" : ""} ${questionIndex === 8 ? "mt-20" : ""}`}
				>
					{question.choices.map((q, i) => (
						<button
							key={i}
							className="flex overflow-hidden text-left"
							style={{ transform: `rotate(${rotations[questionIndex - 1]![i]}deg)` }}
							onClick={() => handleNextQuestion(i)}
						>
							<div
								className="w-14 shrink-0 flex items-center justify-center font-2005 font-medium text-6xl leading-none overflow-hidden"
								style={{
									backgroundColor: getChoiceHeaderColor(questionIndex),
									color: getChoiceTitleTextColor(questionIndex),
								}}
							>
								{["A.", "B.", "C.", "D."][i]}
							</div>
							<div
								className="pl-3 whitespace-pre-line pr-3 py-3 font-anuphan text-[16px] font-[480] text-center flex items-center"
								style={{
									backgroundColor: getChoiceColor(questionIndex),
									color: getChoiceTextColor(questionIndex),
								}}
							>
								{q.text}
							</div>
						</button>
					))}
				</div>
			</div>
		</div>
	);
};

export { QuestionPage };
