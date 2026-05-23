type Result = {
	title: string;
	desc: string;
};

const Results: Result[] = [
	{
		title: "ปรีดา",
		desc: "The Daily Sunshine",
	},
	{
		title: "ลับแล",
		desc: "The Mysterious Chic",
	},
	{
		title: "วิมลปัญญา",
		desc: "The Peace of Mind",
	},
	{
		title: "รักษ์พฤกษ์",
		desc: "The Calm Keeper",
	},
	{
		title: "สุรศิลป์",
		desc: "The Free Mover",
	},
	{
		title: "อนันต์",
		desc: "The Hidden Sense",
	},
	{
		title: "กรุงเก่า",
		desc: "The Old Soul, the New Mind",
	},
];

const getResult = (index: number): Result => {
	return Results[index - 1] as Result;
};

export { Results, getResult };
