import { MatchListPendingCard } from "@/components/match-list-pending-card";
import { MatchListRecentCard } from "@/components/match-list-recent-card";
import { MatchListRequestCard } from "@/components/match-list-request-card";
import { MatchListTabsCard } from "@/components/match-list-tabs-card";
import { MatchListUpcomingCard } from "@/components/match-list-upcoming-card";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getAuthorizedUser } from "@/app/actions/auth";

export default async function MatchesPage() {
  let user = await getAuthorizedUser(cookies());
  if (!user) {
    return redirect("/login");
  }
  return (
    <div className="hidden items-start justify-center gap-6 rounded-lg p-8 md:grid lg:grid-cols-2">
      <div className="col-span-2 grid items-start gap-6 lg:col-span-1">
        <MatchListPendingCard userId={user?.id} />
        <MatchListRequestCard userId={user?.id} />
      </div>
      <div className="col-span-2 grid items-start gap-6 lg:col-span-1">
        <MatchListUpcomingCard userId={user?.id} />
        <MatchListRecentCard userId={user?.id} />
      </div>
    </div>
  );
}
