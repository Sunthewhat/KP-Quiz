import { calcResult } from "@/util/questions";
import { getResult } from "@/util/results";
import type { FC } from "react";

import result01 from "../../asset/result/result-01.png";
import result02 from "../../asset/result/result-02.png";
import result03 from "../../asset/result/result-03.png";
import result04 from "../../asset/result/result-04.png";
import result05 from "../../asset/result/result-05.png";
import result06 from "../../asset/result/result-06.png";
import result07 from "../../asset/result/result-07.png";

const resultImages = [result01, result02, result03, result04, result05, result06, result07];

const ResultPage: FC = () => {
	const resultIndex = calcResult();
	const result = getResult(resultIndex);

	return (
		<div className="h-dvh w-screen flex flex-col justify-center items-center">
			<img
				src={resultImages[resultIndex - 1]}
				alt={result.title}
				className="w-full h-full object-fill"
			/>
		</div>
	);
};

export { ResultPage };
