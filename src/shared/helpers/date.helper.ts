const newDate = (date?: Date): Date => (!date ? new Date() : new Date(date));
const dateToISOString = (date: Date): string => date.toISOString();

const allMonthsShort: string[] = Array.from({length: 12}, (_item, index) =>
	new Date(0, index).toLocaleDateString("en-US", {month: "short"})
);
const allMonthsLong: string[] = Array.from({length: 12}, (_item, index) =>
	new Date(0, index).toLocaleDateString("en-US", {month: "long"})
);

const day = (date: Date): number => newDate(date).getDate();
const dd = (date: Date): string => String(day(date)).padStart(2, "0");

const shortMonth = (date: Date): string => allMonthsShort[date.getMonth()];

const longMonth = (date: Date): string => allMonthsLong[date.getMonth()];

const month = (date: Date): number => newDate(date).getMonth() + 1;
const mm = (date: Date): string => String(month(date)).padStart(2, "0");

const yyyy = (date: Date): number => newDate(date).getFullYear();

const yyyymmdd = (date: Date): string =>
	`${yyyy(date)}-${mm(date)}-${dd(date)}`;

const currentDay: string = yyyymmdd(newDate());

export {
	dateToISOString,
	dd,
	shortMonth,
	longMonth,
	allMonthsShort,
	yyyy,
	yyyymmdd,
	currentDay,
};
