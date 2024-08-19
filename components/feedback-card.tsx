import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "./ui/badge";

export function FeedbackCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Feedback</CardTitle>
      </CardHeader>
      <CardContent>
        <h3>
          Strengths
        </h3>
        <div className="flex space-x-4 m-4">
          <Badge className="text-xl bg-lime-600">Forehand</Badge>
          <Badge className="text-xl bg-green-600">Backhand</Badge>
          <Badge className="text-xl bg-emerald-600">Serve</Badge>
        </div>
        <h3>
          Weaknesses
        </h3>
        <div className="flex space-x-4 m-4">
          <Badge className="text-xl bg-red-600">Movement</Badge>
          <Badge className="text-xl bg-orange-600">Fitness</Badge>
          <Badge className="text-xl bg-amber-600">Mental</Badge>
        </div>
      </CardContent>
    </Card>
  );
};