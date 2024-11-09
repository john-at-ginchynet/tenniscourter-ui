import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import moment from "moment";

interface Player {
  id: string
}

export async function PlayerCard({ userId }) {

  console.log(`http://localhost:3003/api/users/${userId}`);

  let response = await fetch(`http://localhost:3003/api/users/${userId}`, { cache: 'no-store' });
  let data = await response.json();
  let user = data.user;

  return (
    <Card>
      <CardContent className="grid gap-4">
        <div className="flex justify-center p-4">
          <Avatar className="size-48 border-4 border-emerald-600">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>{ user.name }</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <p className="flex justify-center p-4">{ user.name }</p>
          <p>Date of birth: { moment(user.dateOfBirth).format('ll') }</p>
          <p>Gender: { user.gender }</p>
          <p>Zipcode: { user.zipcode }</p>
          <p>Handedness: { user.handedness }</p>
          <p>Backhand: { user.backhand }</p>
          <p>USTA: { user.ntrp }</p>
          <p>UTR: { user.utr }</p>
          <p>WTN: { user.wtn }</p>
          <p>Joined on { moment(user.createdAt).format('ll') }</p>
          <h3>Bio</h3>
          <p>{ user.bio }</p>
          <p>Badges: Spin Master</p>
          <p>Gear</p>
        </div>
      </CardContent>
      <CardFooter>
        <Link
          href="/me"
          className="w-full"
        >
          <Button className="w-full">See more...</Button>
        </Link>
      </CardFooter>
    </Card>    
  );
};