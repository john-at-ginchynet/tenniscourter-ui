"use client"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { skill: "Forehand", rating: 24 },
  { skill: "Fitness", rating: -9 },
  { skill: "Backhand", rating: 19 },
  { skill: "Movement", rating: -5 },
  { skill: "Serve", rating: 11 },
  { skill: "Mental", rating: -16 },
  { skill: "Volley", rating: 3 },
  { skill: "Friendliness", rating: 6 },
]
const chartConfig = {
  rating: {
    label: "Rating",
    color: "rgb(29,105,159)",
  },  
} satisfies ChartConfig

export function FeedbackRadarCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Feedback Visual</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-w-full"
        >
          <RadarChart data={chartData}>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarGrid gridType="circle" />
            <PolarAngleAxis dataKey="skill" />
            <Radar
              dataKey="rating"
              fill="var(--color-rating)"
              fillOpacity={0.8}
              dot={{
                r: 0,
                fillOpacity: 1,
              }}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};