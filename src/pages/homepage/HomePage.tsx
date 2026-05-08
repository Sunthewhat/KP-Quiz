import type { FC } from "react";
import { useNavigate } from "react-router-dom";

const Homepage: FC = () => {
	const navigator = useNavigate();
	const handleStart = () => {
		navigator("/question");
	};
	return (
		<div className="bg-black h-screen w-screen flex justify-center items-center">
			<button
				className="text-white border-white border-2 h-fit rounded-xl px-10 py-3"
				onClick={handleStart}
			>
				Start!
			</button>
		</div>
	);
};

export { Homepage };
