import { generateDates } from "../utils/generate-dates";
import { HabitDay } from "./HabitDay";

export function SummaryTable() {
  const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];
  const summaryDates = generateDates();

  const minuimumSummaryDatesSize = 18 * 7;
  const ammountOfDaysToFill = minuimumSummaryDatesSize - summaryDates.length;

  return (
    <div className="w-full flex ">
      <div className="grid grid-rows-7 grid-flow-row gap-3">
        {weekDays.map((item, index) => {
          return (
            <div
              key={`${item}_${index}`}
              className="text-zinc-400 text-xl h-10 w-10 flex items-center justify-center"
            >
              {item}
            </div>
          );
        })}
      </div>
      <div className="grid grid-rows-7 grid-flow-col gap-3">
        {summaryDates.map((item, index) => {
          return (
            <HabitDay
              key={`${item}_${index}`}
              completed={9}
              amount={10}
              date={item}
            />
          );
        })}

        {ammountOfDaysToFill > 0 &&
          Array.from({ length: ammountOfDaysToFill }).map((_, i) => {
            return (
              <div
                key={i}
                className="bg-zinc-900 w-10 h-10 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed"
              />
            );
          })}
      </div>
    </div>
  );
}
