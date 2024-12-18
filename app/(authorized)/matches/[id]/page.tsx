import { ConversationCard } from "@/components/conversation-card";
import { MatchListPendingCard } from "@/components/match-list-pending-card";
import { MatchListRecentCard } from "@/components/match-list-recent-card";
import { MatchListRequestCard } from "@/components/match-list-request-card";
import { MatchListTabsCard } from "@/components/match-list-tabs-card";
import { MatchListUpcomingCard } from "@/components/match-list-upcoming-card";
import { PlayerCard } from "@/components/player-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FormControl } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import moment from "moment";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getAuthorizedUser, getSessionCookie } from "@/app/actions/auth";

export default async function MatchPage({
  params,
}: {
  params: { id: string };
}) {
  let user = await getAuthorizedUser(cookies());
  if (!user) {
    return redirect("/login");
  }

  let sessionCookie = await getSessionCookie(cookies());
  let response = await fetch(`http://localhost:3003/api/matches/${params.id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Cookie: sessionCookie,
    },
    cache: "no-store",
  });
  let data = await response.json();
  let match = data.match;

  return (
    <div className="hidden items-start justify-center gap-6 rounded-lg p-8 md:grid lg:grid-cols-3">
      <div className="grid items-start gap-6 lg:col-span-1">
        <Card className="bg-sky-700 border-white">
          <CardHeader className="text-white">
            <CardTitle>
              <div className="flex items-stretch">
                <div className="w-1/2 text-left">
                  {match.side1_player1.name}
                </div>
                <div className="w-1/4 text-center">-vs-</div>
                <div className="w-1/2 text-right">
                  {match.side2_player1.name}
                </div>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="bg-white pt-5">
            <div className="flex items-stretch">
              <div className="w-1/2 text-left">
                {match.side1_player1.gender}, {match.side1_player1.handedness},{" "}
                {match.side1_player1.backhand}
              </div>
              <div className="w-1/2 text-right">
                {match.side2_player1.gender}, {match.side2_player1.handedness},{" "}
                {match.side2_player1.backhand}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-sky-700 border-white">
          <CardHeader className="text-white">
            <CardTitle>
              <div className="flex items-stretch">
                <div className="w-1/2 text-left">Time</div>
                <div className="w-1/2 text-right">Place</div>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="bg-white pt-5">
            <div className="flex items-stretch">
              <div className="w-1/2 text-left">
                {match?.date && moment(match.date).format("ddd, ll")}
              </div>
              <div className="w-1/2 text-right">
                {match?.date && "@" + match.location}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-sky-700 border-white">
          <CardHeader className="text-white">
            <CardTitle>
              <div className="flex items-stretch">
                <div className="w-1/2 text-left">Score</div>
                <div className="w-1/2 text-right">Winner</div>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="bg-white pt-5">
            {match.score && match.winningSide ? (
              <div className="flex items-stretch">
                <div className="w-1/2 text-left">{match.score}</div>
                <div className="w-1/2 text-right">
                  {match.winningSide == 1 && match.side1_player1.name}
                  {match.winningSide == 2 && match.side2_player1.name}
                </div>
              </div>
            ) : (
              <div className="flex items-stretch place-content-center">
                <Button className="bg-emerald-600 text-white w-full">
                  Complete match
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
      <div className="grid items-start gap-6 lg:col-span-1">
        <Card className="bg-sky-700 border-white">
          <CardHeader className="text-white">
            <CardTitle>Match Feedback</CardTitle>
          </CardHeader>
          <CardContent className="bg-white pt-5">
            <div>The quick brown fox jumps over the lazy dog.</div>
          </CardContent>
        </Card>

        <Card className="bg-sky-700 border-white">
          <CardHeader className="text-white">
            <CardTitle>Match Notes</CardTitle>
          </CardHeader>
          <CardContent className="pt-5 grid gap-4">
            <Textarea
              placeholder="Write match notes to yourself."
              className="resize-none"
            />
            <Button
              size="sm"
              className="w-full bg-white text-black hover:bg-yellow-300"
            >
              Save match notes
            </Button>
          </CardContent>
        </Card>
      </div>
      <div className="grid items-start gap-6 lg:col-span-1">
        <ConversationCard matchId={match.id} />
      </div>
    </div>
  );
}
