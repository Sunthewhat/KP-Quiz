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

	const handleShare = async () => {
		const imgSrc = resultImages[resultIndex - 1]!;
		const response = await fetch(imgSrc);
		const blob = await response.blob();
		const file = new File([blob], `result-${resultIndex}.png`, { type: "image/png" });

		if (navigator.share && navigator.canShare({ files: [file] })) {
			await navigator.share({
				files: [file],
			});
		} else {
			const link = document.createElement("a");
			link.href = URL.createObjectURL(blob);
			link.download = `result-${resultIndex}.png`;
			link.click();
			URL.revokeObjectURL(link.href);
		}
	};

	return (
		<div className="relative min-h-dvh min-h-screen w-screen flex flex-col justify-center items-center overflow-hidden" style={{ height: "100dvh" }}>
			<img
				src={resultImages[resultIndex - 1]}
				alt={result.title}
				className="w-full h-full object-fill"
			/>
			<button
				onClick={handleShare}
				className="absolute bottom-10 z-10 bg-white text-black font-anuphan font-[500] text-lg px-8 py-3 rounded-full shadow-lg"
			>
				บันทึกผลลัพธ์
			</button>
		</div>
	);
};

export { ResultPage };
