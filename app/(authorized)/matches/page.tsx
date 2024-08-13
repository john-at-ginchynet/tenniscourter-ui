import { MatchListPendingCard } from "@/components/match-list-pending-card";
import { MatchListRecentCard } from "@/components/match-list-recent-card";
import { MatchListRequestCard } from "@/components/match-list-request-card";
import { MatchListTabsCard } from "@/components/match-list-tabs-card";
import { MatchListUpcomingCard } from "@/components/match-list-upcoming-card";

export default function MatchesPage() {
  return (
    <div className="hidden items-start justify-center gap-6 rounded-lg p-8 md:grid lg:grid-cols-2">
      <div className="col-span-2 grid items-start gap-6 lg:col-span-1">
        <MatchListPendingCard />
        <MatchListRequestCard />
      </div>
      <div className="col-span-2 grid items-start gap-6 lg:col-span-1">
        <MatchListUpcomingCard />
        <MatchListRecentCard />
      </div>
    </div>
  );
};