import { FeedbackRadarCard } from "@/components/feedback-radar-card";
import { MatchListRecentCard } from "@/components/match-list-recent-card";
import { PlayerCard } from "@/components/player-card";


export default function PlayerPage() {
  return (
    <div className="hidden items-start justify-center gap-6 rounded-lg p-8 md:grid lg:grid-cols-2 xl:grid-cols-3">
    <div className="col-span-1 grid items-start gap-6">
      <div>
        <PlayerCard />
      </div>
    </div>
      <div className="col-span-1 grid items-start gap-6">
        <div>
          <MatchListRecentCard />
        </div>
      </div>
      <div className="col-span-1 grid items-start gap-6">
        <div>
          <FeedbackRadarCard />
        </div>
      </div>
    </div>
  );
};