import type { Trainer } from "@/data/site";

export function TrainerName({ t }: { t: Trainer }) {
  if (t.underlineFullName) {
    return <span className="underline decoration-cta decoration-2 underline-offset-4">{t.name}</span>;
  }
  if (t.underlineWord && t.name.includes(t.underlineWord)) {
    const [before, after] = t.name.split(t.underlineWord);
    return <>{before}<span className="underline decoration-cta decoration-2 underline-offset-4">{t.underlineWord}</span>{after}</>;
  }
  if (t.underlineLastName) {
    return <>{t.firstName} <span className="underline decoration-cta decoration-2 underline-offset-4">{t.lastName}</span></>;
  }
  return (
    <>
      <span className="underline decoration-cta decoration-2 underline-offset-4">{t.firstName}</span>
      {t.lastName && <> {t.lastName}</>}
    </>
  );
}
