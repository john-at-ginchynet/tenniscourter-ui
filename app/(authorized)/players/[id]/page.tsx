import { FeedbackRadarCard } from "@/components/feedback-radar-card";
import { MatchListRecentCard } from "@/components/match-list-recent-card";
import { PlayerCard } from "@/components/player-card";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getAuthorizedUser } from "@/app/actions/auth";

export default async function PlayerPage({
  params,
}: {
  params: { id: string };
}) {
  let user = await getAuthorizedUser(cookies());
  if (!user) {
    return redirect("/login");
  }

  return (
    <div className="hidden items-start justify-center gap-6 rounded-lg p-8 md:grid lg:grid-cols-2 xl:grid-cols-3">
      <div className="col-span-1 grid items-start gap-6">
        <div>
          <PlayerCard userId={params.id} />
        </div>
      </div>
      <div className="col-span-1 grid items-start gap-6">
        <div>
          <MatchListRecentCard userId={params.id} />
        </div>
      </div>
      <div className="col-span-1 grid items-start gap-6">
        <div>
          <FeedbackRadarCard />
        </div>
      </div>
    </div>
  );
}
