import { MatchListCard } from "@/components/match-list-card";
import { MatchListTabsCard } from "@/components/match-list-tabs-card";
import { MatchListRequestCard } from "@/components/match-list-request-card";
import { PlayerCard } from "@/components/player-card";
import { PlayerListCard } from "@/components/player-list-card";
import { VideoCard } from "@/components/video-card";
import { FeedbackCard } from "@/components/feedback-card";
import { FeedbackRadarCard } from "@/components/feedback-radar-card";

export default function HomePage() {
  return (
    <div className="hidden items-start justify-center gap-6 rounded-lg p-8 md:grid lg:grid-cols-2 xl:grid-cols-3">
      <div className="col-span-2 grid items-start gap-6 lg:col-span-1">
        <div>
          <PlayerCard />
        </div>
        <div className="">
          <PlayerListCard />
        </div>
      </div>
      <div className="col-span-2 grid items-start gap-6 lg:col-span-1">
        <div className="">
          <MatchListCard />
        </div>
      </div>
      <div className="col-span-2 grid items-start gap-6 lg:col-span-1">
        <div className="">
          <VideoCard />
        </div>
        <div>
          <FeedbackRadarCard />
        </div>
      </div>
    </div>
  );
};