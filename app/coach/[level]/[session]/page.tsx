import { notFound } from "next/navigation";
import { curriculum } from "@/lib/curriculum-data";
import SessionDetail from "@/components/SessionDetail";

export default function SessionPage({ params }: { params: { level: string; session: string } }) {
  const levelNum = parseInt(params.level);
  const sessionNum = parseInt(params.session);
  const level = curriculum[levelNum];
  if (!level) notFound();

  const session = level.sessions.find(s => s.num === sessionNum);
  if (!session) notFound();

  const prevSession = level.sessions.find(s => s.num === sessionNum - 1) ?? null;
  const nextSession = level.sessions.find(s => s.num === sessionNum + 1) ?? null;

  return (
    <SessionDetail
      session={session}
      levelNum={levelNum}
      levelName={level.name}
      levelDuration={level.duration}
      prevNum={prevSession?.num ?? null}
      nextNum={nextSession?.num ?? null}
    />
  );
}
