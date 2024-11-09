import { FeedbackCard } from "@/components/feedback-card";
import { FeedbackRadarCard } from "@/components/feedback-radar-card";
import { VideoCard } from "@/components/video-card";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getAuthorizedUser } from "@/app/actions/auth";

export default async function ImprovementPage() {
  let user = await getAuthorizedUser(cookies());
  if (!user) {
    return redirect("/login");
  }
  return (
    <div className="hidden items-start justify-center gap-6 rounded-lg p-8 md:grid lg:grid-cols-2 xl:grid-cols-6">
      <div className="col-span-3 grid items-start gap-6">
        <VideoCard />
      </div>
      <div className="col-span-3 grid items-start gap-6">
        <FeedbackCard />
        <FeedbackRadarCard />
      </div>
    </div>
  );
}
