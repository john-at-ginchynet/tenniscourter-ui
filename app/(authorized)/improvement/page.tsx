"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import ReactPlayer from "react-player";

export default function ImprovementPage() {
  return (
    <div className="hidden items-start justify-center gap-6 rounded-lg p-8 md:grid lg:grid-cols-2 xl:grid-cols-6">
      <div className="col-span-3 grid items-start gap-6">
        <Card className="bg-sky-700 border-white">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-white">Recommended Videos</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 p-0 m-0 mb-6 border-t border-b border-white">
            <Carousel
              opts={{
                align: "start",
              }}
              orientation="horizontal"
            >
              <CarouselContent>
                <CarouselItem>
                  <AspectRatio ratio={16 / 9}>
                    <ReactPlayer
                      url="https://www.youtube-nocookie.com/watch?v=bFwOLq5WYJU"
                      width="100%"
                      height="100%"
                      playing={false}          
                    />
                  </AspectRatio>              
                </CarouselItem>
                <CarouselItem>
                  <AspectRatio ratio={16 / 9}>
                    <ReactPlayer
                      url="https://www.youtube-nocookie.com/watch?v=r1GYkxKBP0Y"
                      width="100%"
                      height="100%"
                      playing={false}          
                    />
                  </AspectRatio>
                </CarouselItem>
                <CarouselItem>
                  <AspectRatio ratio={16 / 9}>
                    <ReactPlayer
                      url="https://www.youtube-nocookie.com/watch?v=gWB_7BR458E"
                      width="100%"
                      height="100%"
                      playing={false}          
                    />
                  </AspectRatio>              
                </CarouselItem>
                <CarouselItem>
                  <AspectRatio ratio={16 / 9}>
                    <ReactPlayer
                      url="https://www.youtube-nocookie.com/watch?v=LqK6YfcENXQ"
                      width="100%"
                      height="100%"
                      playing={false}          
                    />         
                  </AspectRatio>     
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="absolute left-4" />
              <CarouselNext className="absolute right-4" />
            </Carousel>
          </CardContent>
        </Card>
      </div>
      <div className="col-span-3 grid items-start gap-6">
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
      </div>
    </div>
  );
};