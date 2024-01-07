interface IProgressBar {
  progress: number;
}

export function ProgressBar({ progress }: IProgressBar) {
  return (
    <div className="h-3 rounded-xl bg-zinc-700 w-full mt-4">
      <div
        role="progressbar"
        aria-label="Progresso de hábitos completados nesse dia"
        aria-valuenow={75}
        aria-valuemax={100}
        className="h-3 rounded-xl bg-violet-600"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
