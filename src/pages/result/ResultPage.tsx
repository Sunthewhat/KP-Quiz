import { calcResult } from "@/utils/questions";
import { getResult } from "@/utils/results";
import type { FC } from "react";
import { Link } from "react-router-dom";

const ResultPage: FC = () => {
	const result = getResult(calcResult());

	return (
		<div className="h-screen w-screen flex flex-col justify-center items-center">
			<div className="font-bold text-2xl">{result.title}</div>
			<div className="text-xl">{result.desc}</div>
			<Link to="/">
				<button className="px-5 py-3 border-2 border-black rounded-lg mt-10">Back</button>
			</Link>
		</div>
	);
};

export { ResultPage };
