import type { Trainer } from "@/data/site";

export function TrainerName({ t }: { t: Trainer }) {
  if (t.underlineFullName) {
    return <span className="underline decoration-cta decoration-2 underline-offset-4">{t.name}</span>;
  }
  return (
    <>
      <span className="underline decoration-cta decoration-2 underline-offset-4">{t.firstName}</span>
      {t.lastName && <> {t.lastName}</>}
    </>
  );
}
