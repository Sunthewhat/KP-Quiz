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
		try {
			const imgSrc = resultImages[resultIndex - 1]!;
			const response = await fetch(imgSrc);
			const blob = await response.blob();
			const file = new File([blob], `result-${resultIndex}.png`, { type: "image/png" });

			if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
				await navigator.share({ files: [file] });
				return;
			}
		} catch {
			// fall through to download
		}

		const imgSrc = resultImages[resultIndex - 1]!;
		const link = document.createElement("a");
		link.href = imgSrc;
		link.download = `result-${resultIndex}.png`;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	return (
		<div className="w-screen flex flex-col items-center justify-center bg-black overflow-hidden" style={{ minHeight: "100vh", height: "100dvh" }}>
			<img
				src={resultImages[resultIndex - 1]}
				alt={result.title}
				className="w-full max-h-[85vh] object-contain"
			/>
			<button
				onClick={handleShare}
				className="mt-4 bg-white text-black font-anuphan font-[500] text-lg px-8 py-3 rounded-full shadow-lg"
			>
				บันทึกผลลัพธ์
			</button>
		</div>
	);
};

export { ResultPage };
