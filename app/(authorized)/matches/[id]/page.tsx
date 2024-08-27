import { ConversationCard } from "@/components/conversation-card";
import { MatchListPendingCard } from "@/components/match-list-pending-card";
import { MatchListRecentCard } from "@/components/match-list-recent-card";
import { MatchListRequestCard } from "@/components/match-list-request-card";
import { MatchListTabsCard } from "@/components/match-list-tabs-card";
import { MatchListUpcomingCard } from "@/components/match-list-upcoming-card";
import { PlayerCard } from "@/components/player-card";

export default function MatchPage() {
  return (
    <div className="hidden items-start justify-center gap-6 rounded-lg p-8 md:grid lg:grid-cols-3">
      <div className="grid items-start gap-6 lg:col-span-1">
        <PlayerCard />
      </div>
      <div className="grid items-start gap-6 lg:col-span-1">
        <ConversationCard />
      </div>
      <div className="grid items-start gap-6 lg:col-span-1">
        <PlayerCard />
      </div>
    </div>
  );
};