import * as Popover from "@radix-ui/react-popover";
import { ProgressBar } from "./ProgressBar";
import clsx from "clsx";

interface IHabitDayProps {
  date: Date;
  completed: number;
  amount: number;
}

export function HabitDay({ completed, amount, date }: IHabitDayProps) {
  const percentageOfProgress =
    completed && amount ? Math.round((completed / amount) * 100) : 0;

  return (
    <Popover.Root>
      <Popover.Trigger
        className={clsx("w-10 h-10 border-2 rounded-lg", {
          "bg-violet-800 border-violet-700":
            percentageOfProgress >= 90 && percentageOfProgress <= 100,
          "bg-violet-800 border-violet-600":
            percentageOfProgress >= 70 && percentageOfProgress < 90,
          "bg-violet-700 border-violet-500":
            percentageOfProgress >= 50 && percentageOfProgress < 70,
          "bg-custom border-violet-500":
            percentageOfProgress >= 30 && percentageOfProgress < 50,
          "bg-violet-500 border-violet-400":
            percentageOfProgress > 0 && percentageOfProgress < 30,
          "bg-zinc-900  border-zinc-800": percentageOfProgress === 0,
        })}
      />
      <Popover.Portal>
        <Popover.Content className="min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col">
          <Popover.Arrow className="fill-zinc-900 h-2 w-4" />
          <span className="font-semibold text-zinc-400">Segunda-feira</span>
          <span className="mt-1 font-extrabold leading-tight text-3xl">
            08/01
          </span>
          <ProgressBar progress={percentageOfProgress} />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
