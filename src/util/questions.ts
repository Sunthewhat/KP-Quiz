type Question = {
	title: string;
	choices: Choice[];
};

type Choice = {
	text: string;
	score: number[];
};

const Questions: Question[] = [
	// 1
	{
		title: "พื้นที่สำหรับคุณ\nคือพื้นที่แบบไหนกันนะ?",
		choices: [
			{ text: "พื้นที่รวมแหล่งกิจกรรม สนุก ท้าทาย", score: [2] },
			{ text: "พื้นที่แห่งศิลปะ มีรายละเอียดเล็ก ๆ ให้มองเสมอ", score: [3, 7] },
			{ text: "พื้นที่เรียบง่าย เป็นระเบียบ ชัดเจน", score: [4, 6] },
			{ text: "พื้นที่คึกคัก ได้อยู่กับคนเยอะ ๆ", score: [1, 5] },
		],
	},
	// 2
	{
		title: "ตัวคุณมองการแสดงตัวตน\nของตัวเองออกมาเป็นแบบไหน?",
		choices: [
			{ text: "ชอบตั้งคำถาม ชอบทดลอง\nชอบที่จะวิเคราะห์สิ่งที่หยั่งรู้", score: [3] },
			{ text: "ชัดเจน มีสไตล์ รู้แนวทาง\nของตัวเองว่าชอบอะไรแบบไหน", score: [2, 5, 7] },
			{ text: "มีพื้นที่ส่วนตัว ไม่ค่อยกล้าแสดงออก", score: [4, 6] },
			{ text: "กล้าที่จะมองหา เผชิญกับสิ่งใหม่ๆ", score: [1] },
		],
	},
	// 3
	{
		title: "คุณอินกับอะไร\nแบบไม่รู้ตัว",
		choices: [
			{ text: "แสงแดดตอนบ่าย / เสียงลม / กลิ่นฝน", score: [4, 6] },
			{ text: "การเคลื่อนไหว ร่างกาย แฟชั่น", score: [2, 5] },
			{ text: "เพลง ภาพยนตร์ บรรยากาศบางอย่าง", score: [1, 3] },
			{ text: "งานดีไซน์เก่า หนังสือ เพลงคลาสสิก", score: [7] },
		],
	},
	// 4
	{
		title: "คุณเป็นคนเลือก\nแพลนกิจกรรมบางอย่าง\nในวันนี้คุณอยากจะทำอะไร",
		choices: [
			{ text: "ดูหนัง / ฟังเพลงอยู่ห้อง", score: [2, 6] },
			{ text: "คาราโอเกะกับกลุ่มเพื่อน", score: [1] },
			{ text: "เดินดูงานนิทรรศการศิลปะ", score: [3, 4, 7] },
			{ text: "ลองสิ่งที่ยังไม่เคยทำ", score: [4] },
		],
	},
	// 5
	{
		title: "ถนนแบบไหนที่คุณ\nเดินแล้วไม่เบื่อ",
		choices: [
			{ text: "ถนนที่มีต้นไม้ตลอดทาง และผู้คนไม่พลุกพล่าน", score: [4] },
			{ text: "ถนนที่มีสีสันอยู่ตลอดทาง ทั้งที่มาจากตึกและของตกแต่ง", score: [1, 5] },
			{ text: "ถนนที่มีบรรยากาศให้ชวนคิดเรื่องราวต่าง ๆ", score: [3, 6] },
			{ text: "ถนนที่มีเรื่องราวและความเป็นมา", score: [2, 7] },
		],
	},
	// 6
	{
		title: "คุณได้บังเอิญเดินไปเจอ\nกับย่านที่ไม่คุ้นเคย\nความรู้สึกแรกของคุณคือ...",
		choices: [
			{ text: "ตื่นเต้น", score: [2, 6] },
			{ text: "กังวล/กลัวว่าจะหลงทางหรือหาทางกลับไม่ได้", score: [1, 3] },
			{ text: "เฉย ๆ เดินสำรวจไปเรื่อย", score: [4] },
			{ text: "มีความสุขไปกับย่านใหม่ ๆ ที่ได้ค้นพบ", score: [5, 7] },
		],
	},
	// 7
	{
		title: "คุณอยากได้เพื่อนร่วมเดินทางคู่ใจ\nคนคนนั้นจะเป็นคนแบบไหน?",
		choices: [
			{ text: "นักคิดเงียบขรึม ชอบตั้งคำถามกับชีวิต", score: [2, 6] },
			{ text: "นักเล่าเรื่อง ร่าเริง ชวนคุยได้ทุกเรื่อง", score: [1, 4] },
			{ text: "ศิลปินอิสระ มองโลกผ่านอารมณ์และความรู้สึก", score: [3, 5] },
			{ text: "ผู้รู้มากประสบการณ์ สุขุมและให้คำแนะนำได้ดี", score: [7] },
		],
	},
	// 8
	{
		title: "คุณกำลังมองหาสถานที่\nอะไรบางอย่างที่คุณอยากเข้าเป็น\nอันดับแรกและสถานที่นั้นก็คือ..",
		choices: [
			{ text: "คาเฟ่นั่งชิล", score: [1, 5] },
			{ text: "ร้านค้าขายของชำ", score: [7] },
			{ text: "ห้องสมุด", score: [2] },
			{ text: "สวนสาธารณะ", score: [3, 4, 6] },
		],
	},
	// 9
	{
		title: "ถ้าคุณได้เดินเล่นไปตามย่าน\nในวันหยุด คุณคิดว่าย่านนั้นจะเปิด\nplaylist เพลงแบบไหน?",
		choices: [
			{ text: "indie / alternative\n(มีตัวตน ไม่ตามกระแส อินกับดีเทล)", score: [2, 6] },
			{ text: "city pop / pop\n(แอคทีฟ รักเมือง ชีวิตมีจังหวะ)", score: [1] },
			{ text: "soul / jazz (สุขุม มีรสนิยม สโลว์ไลฟ์)", score: [3, 4, 7] },
			{ text: "rock (ตัวตึง ไม่แคร์กรอบ ชัดเจนในสิ่งที่เลือก)", score: [5] },
		],
	},
	// 10
	{
		title: "ระหว่างเดินเล่น\nคุณได้ไปเจอกับสิ่งที่คุณชื่นชอบ\nสิ่งๆนั้นคือ...",
		choices: [
			{ text: "หนังสือนิยาย/การ์ตูน", score: [2, 6] },
			{ text: "หูฟัง,มือถือหรืออุปกรณ์อิเล็กทรอนิกส์", score: [3, 4] },
			{ text: "อาร์ตทอย,ฟิคเกอร์หรือของตั้งโชว์", score: [1] },
			{ text: "สินค้าแฟชั่น", score: [5, 7] },
		],
	},
	// 11
	{
		title: "คุณกำลังเดินสำรวจอยู่ในย่านนั้น\nจู่ๆ เกิดฝนตกขึ้นมาระหว่างทางคุณจะ...",
		choices: [
			{ text: "หาที่หลบฝนที่เงียบ ๆ รอจนกว่าฝนจะหยุดตก", score: [3, 4, 6] },
			{ text: "เดินลุยต่อ ฝนตกไม่ใช่ปัญหา", score: [5] },
			{ text: "หาร้านที่มีคนนั่งเยอะ ๆ เผื่อเจอเพื่อนใหม่", score: [1] },
			{ text: "หลบเข้าไปในตึกเก่า ๆ แล้วนั่งสังเกตระหว่างรอฝนหยุด", score: [2, 7] },
		],
	},
	// 12
	{
		title: 'ถ้าต้องเลือก "ของที่ระลึก"\nกลับไปฝากคนสำคัญหนึ่งชิ้น\nจะเลือกอะไร ?',
		choices: [
			{ text: "โปสการ์ดที่มีรูปถ่ายของสถานที่นั้น ๆ", score: [1, 4, 6] },
			{ text: "ของ handmade ที่มีเฉพาะในย่านนั้น", score: [3, 7] },
			{ text: "สินค้าแฟชั่น (หมวก,กระเป๋า,เสื้อผ้า)", score: [5] },
			{
				text: "หนังสือเกี่ยวกับตำนานเมือง ประวัติศาสตร์ เรื่องลี้ลับของสถานที่นั้น ๆ",
				score: [2],
			},
		],
	},
	// 13
	{
		title: "ถ้าย่านนี้เป็นบทที่เกี่ยวกับ\nหนังของชีวิตคุณ\nคุณอยากให้เป็นบทแบบไหน",
		choices: [
			{ text: "บทที่ได้ออกไปลองทำอะไรที่ท้าทาย", score: [5] },
			{ text: "บทที่ได้กลับมาอยู่กับตัวเอง", score: [4, 6] },
			{ text: "บทเริ่มต้นชีวิตใหม่", score: [1, 3] },
			{ text: "บทที่ต้องเจอกับความเปลี่ยนแปลง", score: [2, 7] },
		],
	},
];

const getChoiceColor = (index: number): string => {
	switch (index) {
		case 1:
			return "rgb(253, 244, 146)";
		case 2:
			return "rgb(155, 208, 255)";
		case 3:
			return "rgb(248, 41, 25)";
		case 4:
			return "rgb(204, 200, 255)";
		case 5:
			return "rgb(161, 206, 239)";
		case 6:
			return "rgb(27, 149, 75)";
		case 7:
			return "rgb(51, 21, 19)";
		case 8:
			return "rgb(25, 25, 41)";
		case 9:
			return "rgb(255, 243, 222)";
		case 10:
			return "rgb(27, 149, 75)";
		case 11:
			return "rgb(255, 152, 213)";
		case 12:
			return "rgb(255, 241, 119)";
		case 13:
			return "rgb(255, 243, 222)";
		default:
			return "";
	}
};

const getChoiceHeaderColor = (index: number): string => {
	switch (index) {
		case 1:
			return "rgb(155, 208, 255)";
		case 2:
			return "rgb(248, 41, 25)";
		case 3:
			return "rgb(51, 21, 19)";
		case 4:
			return "rgb(51, 21, 19)";
		case 5:
			return "rgb(25, 25, 41)";
		case 6:
			return "rgb(255, 241, 119)";
		case 7:
			return "rgb(255, 152, 213)";
		case 8:
			return "rgb(248, 41, 25)";
		case 9:
			return "rgb(255, 152, 213)";
		case 10:
			return "rgb(255, 241, 119)";
		case 11:
			return "rgb(51, 21, 19)";
		case 12:
			return "rgb(51, 21, 19)";
		case 13:
			return "rgb(51, 21, 19)";
		default:
			return "";
	}
};

const getQuestion = (index: number): Question => {
	return Questions[index - 1] as Question;
};

const calcResult = () => {
	const resCount: Map<number, number> = new Map();
	for (let i = 1; i <= 13; i++) {
		const ans = localStorage.getItem(`${i}`);
		if (!ans) continue;
		getQuestion(i).choices[parseInt(ans) - 1]!.score.forEach((s) => {
			const prev = resCount.get(s);
			if (!prev) {
				resCount.set(s, 1);
			} else {
				resCount.set(s, prev + 1);
			}
		});
	}
	const res = resCount
		.entries()
		.toArray()
		.sort((a, b) => b[1] - a[1])[0]![0];

	return res;
};

const getChoiceTitleTextColor = (index: number): string => {
	switch (index) {
		case 1:
			return "rgb(55, 65, 81)";
		case 2:
			return "rgb(31, 41, 55)";
		case 3:
			return "rgb(253, 244, 146)";
		case 4:
			return "rgb(253, 244, 146)";
		case 5:
			return "rgb(255, 243, 222)";
		case 6:
			return "rgb(51, 21, 19)";
		case 7:
			return "rgb(55, 65, 81)";
		case 8:
			return "rgb(155, 208, 255)";
		case 9:
			return "rgb(25, 25, 41)";
		case 10:
			return "rgb(51, 21, 19)";
		case 11:
			return "rgb(255, 241, 119)";
		case 12:
			return "rgb(255, 243, 222)";
		case 13:
			return "rgb(248, 41, 25)";
		default:
			return "";
	}
};

const getChoiceTextColor = (index: number): string => {
	switch (index) {
		case 1:
			return "rgb(55, 65, 81)";
		case 2:
			return "rgb(31, 41, 55)";
		case 3:
			return "rgb(253, 244, 146)";
		case 4:
			return "rgb(0, 0, 0)";
		case 5:
			return "rgb(0, 0, 0)";
		case 6:
			return "rgb(0, 0, 0)";
		case 7:
			return "rgb(255, 243, 222)";
		case 8:
			return "rgb(155, 208, 255)";
		case 9:
			return "rgb(25, 25, 41)";
		case 10:
			return "rgb(31, 41, 55)";
		case 11:
			return "rgb(31, 41, 55)";
		case 12:
			return "rgb(25, 25, 41)";
		case 13:
			return "rgb(248, 41, 25)";
		default:
			return "";
	}
};

export {
	Questions,
	getQuestion,
	type Question,
	type Choice,
	calcResult,
	getChoiceColor,
	getChoiceHeaderColor,
	getChoiceTitleTextColor,
	getChoiceTextColor,
};
