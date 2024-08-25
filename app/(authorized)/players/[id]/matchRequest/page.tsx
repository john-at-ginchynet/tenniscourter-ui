import { PlayerCard } from "@/components/player-card";


export default function PlayerMatchRequestPage() {
  return (
    <div className="hidden items-start justify-center gap-6 rounded-lg p-8 md:grid lg:grid-cols-2 xl:grid-cols-3">
      <div className="col-span-3 grid items-start gap-6">
        <div>
          <PlayerCard />
        </div>
      </div>
    </div>
  );
};