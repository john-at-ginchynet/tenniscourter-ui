"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import ReactPlayer from "react-player/lazy";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Link from "next/link";

export function VideoCard() {
  return (
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
              <ReactPlayer
                url="https://www.youtube-nocookie.com/watch?v=bFwOLq5WYJU"
                width="100%"
                playing={false}          
              />              
            </CarouselItem>
            <CarouselItem>
              <ReactPlayer
                url="https://www.youtube-nocookie.com/watch?v=r1GYkxKBP0Y"
                width="100%"
                playing={false}          
              />              
            </CarouselItem>
            <CarouselItem>
              <ReactPlayer
                url="https://www.youtube-nocookie.com/watch?v=gWB_7BR458E"
                width="100%"
                playing={false}          
              />              
            </CarouselItem>
            <CarouselItem>
              <ReactPlayer
                url="https://www.youtube-nocookie.com/watch?v=LqK6YfcENXQ"
                width="100%"
                playing={false}          
              />              
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="absolute left-4" />
          <CarouselNext className="absolute right-4" />
        </Carousel>
      </CardContent>
      <CardFooter>
        <Link
          href="/improvement"
          className="w-full"
        >
          <Button className="w-full bg-white text-black hover:bg-yellow-300">See more...</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};