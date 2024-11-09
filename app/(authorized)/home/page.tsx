import { MatchListCard } from "@/components/match-list-card";
import { MatchListTabsCard } from "@/components/match-list-tabs-card";
import { MatchListRequestCard } from "@/components/match-list-request-card";
import { PlayerCard } from "@/components/player-card";
import { PlayerListCard } from "@/components/player-list-card";
import { VideoCard } from "@/components/video-card";
import { FeedbackCard } from "@/components/feedback-card";
import { FeedbackRadarCard } from "@/components/feedback-radar-card";
import { MatchListRecentCard } from "@/components/match-list-recent-card";
import { MatchListUpcomingCard } from "@/components/match-list-upcoming-card";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getAuthorizedUser } from "@/app/actions/auth";
import { Badge } from "@/components/ui/badge";

export default async function HomePage() {
  let user = await getAuthorizedUser(cookies());
  if (!user) {
    return redirect("/login");
  }

  return (
    <>
      <div className="grid grid-cols-9 gap-4 p-4">
        <div className="col-span-2">
          <p className="flex justify-center items-center">
            <Avatar className="w-1/2 h-auto border-4 border-white object-center">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>{user?.name}</AvatarFallback>
            </Avatar>
          </p>
          <p className="pt-2 text-center text-white text-3xl font-semibold leading-none tracking-tight">
            {user?.name}
          </p>
          <p className="pt-2 text-center text-white text-xl font-semibold leading-none tracking-tight">
            {user?.location}
          </p>
        </div>
        <div className="col-span-2">
          <Card className="h-full">
            <CardHeader className="space-y-1">
              <CardTitle className="">My Tennis Profile</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 grid-cols-2">
              <div className="col">
                <h3 className="text-lg font-semibold leading-none tracking-tight border-b-2 border-emerald-600 pb-2 mb-2">
                  Details
                </h3>
                <ul>
                  <span className="capitalize">
                    {user?.handedness}y Forehand, {user?.backhand} Backhand
                  </span>
                </ul>
              </div>
              <div className="col">
                <h3 className="text-lg font-semibold leading-none tracking-tight border-b-2 border-emerald-600 pb-2 mb-2">
                  Interested In
                </h3>
                <ul>
                  <li>Matches</li>
                  <li>Practices</li>
                  <li>Singles</li>
                  <li>Doubles</li>
                </ul>
              </div>
              <div className="col-span-2">
                <h3 className="text-lg font-semibold leading-none tracking-tight border-b-2 border-emerald-600 pb-2 mb-2">
                  Gear
                </h3>
                <ul>
                  <li>Racquet: </li>
                  <li>String: </li>
                  <li>Tension: </li>
                  <li>Shoes: </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="col-span-2">
          <Card className="h-full">
            <CardHeader className="space-y-1">
              <CardTitle className="">My Groups</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <ul>
                <li>AAA County 3.0 Summer 2024 League</li>
                <li></li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <div className="col-span-3">
          <Card className="h-full">
            <CardHeader className="space-y-1">
              <CardTitle className="">My Skills</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 grid-cols-3">
              <div className="col">
                <h3 className="text-lg font-semibold leading-none tracking-tight border-b-2 border-emerald-600 pb-2 mb-2">
                  Physical
                </h3>
                <ul>
                  <li>
                    <Badge className="bg-rose-300 text-black">Power</Badge>
                  </li>
                  <li>
                    <Badge className="bg-rose-500">Speed &amp; Agility</Badge>
                  </li>
                  <li>
                    <Badge className="bg-rose-700">Endurance</Badge>
                  </li>
                </ul>
                <h3 className="text-lg font-semibold leading-none tracking-tight border-b-2 border-emerald-600 pb-2 mb-2 pt-4">
                  Mental
                </h3>
                <ul>
                  <li>Mental Toughness</li>
                  <li>Emotional Control</li>
                  <li>Focus</li>
                  <li>Confidence</li>
                </ul>
              </div>
              <div className="col">
                <h3 className="text-lg font-semibold leading-none tracking-tight border-b-2 border-emerald-600 pb-2 mb-2">
                  Technical
                </h3>
                <ul>
                  <li>
                    <Badge className="bg-emerald-500">Forehand</Badge>
                  </li>
                  <li>
                    <Badge className="bg-amber-300 text-black">Backhand</Badge>
                  </li>
                  <li>
                    <Badge className="bg-rose-500">Serve</Badge>
                  </li>
                  <li>Volley</li>
                  <li>Overhead</li>
                  <li>Lob</li>
                  <li>Drop Shot</li>
                  <li>Footwork</li>
                </ul>
              </div>
              <div className="col">
                <h3 className="text-lg font-semibold leading-none tracking-tight border-b-2 border-emerald-600 pb-2 mb-2">
                  Tactical
                </h3>
                <ul>
                  <li>Shot Selection</li>
                  <li>Court Positioning</li>
                </ul>
                <h3 className="text-lg font-semibold leading-none tracking-tight border-b-2 border-emerald-600 pb-2 mb-2 pt-16">
                  Legend
                </h3>
                <ul>
                  <li>
                    <Badge className="bg-emerald-600">Strengths</Badge>
                  </li>
                  <li>
                    <Badge className="bg-amber-300 text-black">Neutral</Badge>
                  </li>
                  <li>
                    <Badge className="bg-rose-600">Weaknesses</Badge>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="grid grid-cols-9 gap-4 px-4">
        <div className="col-span-6">
          <Card className="h-full">
            <CardHeader className="space-y-1">
              <CardTitle className="">My Bio</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4"></CardContent>
          </Card>
        </div>
        <div className="col-span-3">
          <VideoCard />
        </div>
      </div>
      <div className="grid grid-cols-9 gap-4 p-4">
        <div className="col-span-6">
          <MatchListUpcomingCard userId={user?.id} />
        </div>
        <div className="col-span-3">
          <PlayerListCard userId={user?.id} />
        </div>
      </div>
    </>
  );
}
