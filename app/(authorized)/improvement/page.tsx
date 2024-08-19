import { FeedbackCard } from "@/components/feedback-card";
import { FeedbackRadarCard } from "@/components/feedback-radar-card";
import { VideoCard } from "@/components/video-card";

export default function ImprovementPage() {
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
};