import { type FC, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import introBg from "../../asset/background/intro.png";
import clouds from "../../asset/element/clouds.png";
import truck from "../../asset/element/truck.png";
import musicSrc from "../../asset/music/music.wav";

const pages = [
	<>
		ยินดีต้อนรับ
		<br />
		สู่การเดินทางครั้งใหม่
	</>,
	<>
		ที่เมืองใหญ่แห่งนี้เต็มไปด้วย
		<br />
		เรื่องราวและเอกลักษณ์ที่ซ่อนอยู่
	</>,
	<>
		ย่านต่าง ๆ
		<br />
		ล้วนมีบุคลิกและจังหวะของตัวมันเอง
		<br />
		แต่ละย่านกําลังรอนักเดินทาง
		<br />
		ที่เข้ากันกับมันได้อย่างพอดี
	</>,
	<>
		คุณ คือ นักเดินทาง
		<br />
		ที่กําลังออกเดินทาง
		<br />
		เพื่อค้นหาย่านที่คุณสามารถ
		<br />
		เป็นตัวเองได้อย่างเต็มที่
	</>,
	<>
		ไม่ต้องมีแผนที่
		<br />
		ไม่ต้องคิดซับซ้อน
		<br />
		แค่เลือกช้อยส์ที่ตรงใจ
		<br />
		แล้วไปเดินเล่นในย่านที่ใช่กัน!
	</>,
];

const Homepage: FC = () => {
	const [page, setPage] = useState(0);
	const [ready, setReady] = useState(false);
	const [showButton, setShowButton] = useState(false);
	const [showStartButton, setShowStartButton] = useState(false);
	const [truckLeaving, setTruckLeaving] = useState(false);
	const [fading, setFading] = useState(false);
	const audioRef = useRef<HTMLAudioElement | null>(null);
	const navigate = useNavigate();

	useEffect(() => {
		const textTimer = setTimeout(() => setReady(true), 1500);
		const buttonTimer = setTimeout(() => setShowButton(true), 2000);
		return () => {
			clearTimeout(textTimer);
			clearTimeout(buttonTimer);
		};
	}, []);

	const handleClick = () => {
		if (!ready || fading) return;
		if (page < pages.length - 1) {
			if (page === 0 && !audioRef.current) {
				const audio = new Audio(musicSrc);
				audio.loop = true;
				audio.play();
				audioRef.current = audio;
			}
			setFading(true);
			setTimeout(() => {
				const nextPage = page + 1;
				setPage(nextPage);
				setFading(false);
				if (nextPage === pages.length - 1) {
					setTimeout(() => setShowStartButton(true), 4000);
				}
			}, 700);
		}
	};

	return (
		<div
			className="relative w-screen flex flex-col justify-center items-center cursor-pointer overflow-hidden"
			style={{ minHeight: "100vh", height: "100dvh" }}
			onClick={handleClick}
		>
			<img
				src={introBg}
				alt=""
				className="absolute inset-0 h-full w-full object-cover object-bottom"
			/>
			<img src={clouds} alt="" className="absolute inset-0 h-11/12 w-full object-fill animate-float" />
			<p
				className={`relative w-11/12 z-10 text-center text-black text-[20px] font-anuphan font-[580] px-4 transition-opacity duration-700 ${!ready || fading ? "opacity-0" : "opacity-100"}`}
				style={{ transform: "translateY(-10vh)" }}
			>
				{pages[page]}
			</p>
			{page < pages.length - 1 ? (
				<p
					className={`relative z-10 text-center text-black text-sm font-anuphan mt-8 transition-opacity duration-700 ${!showButton ? "opacity-0" : "opacity-100"}`}
					style={{ transform: "translateY(-10vh)" }}
				>
					[ กดเพื่อไปต่อ ]
				</p>
			) : (
				<button
					className={`relative z-10 mt-8 bg-red-500 text-white font-anuphan font-[400] text-lg px-8 py-3 rounded-xs transition-opacity duration-700 ${showStartButton && !truckLeaving ? "opacity-100" : "opacity-0 pointer-events-none"}`}
					style={{ transform: "translateY(-10vh)" }}
					onClick={() => {
						setTruckLeaving(true);
						setTimeout(() => navigate("/question?q=1"), 2000);
					}}
				>
					เริ่มออกเดินทาง
				</button>
			)}
			<img
				src={truck}
				alt=""
				className={`absolute bottom-10 z-10 w-1/2 transition-all duration-[4s] ease-out ${truckLeaving ? "left-[110%]" : page === pages.length - 1 && !fading ? "left-[10%] animate-vibrate" : "-left-100"}`}
			/>
		</div>
	);
};

export { Homepage };
