"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { ChatMessageList } from "@/components/ui/chat/chat-message-list";
import { ChatBubble, ChatBubbleAvatar, ChatBubbleMessage, ChatBubbleTimestamp } from "@/components/ui/chat/chat-bubble";
import { ChatInput } from "@/components/ui/chat/chat-input";
import { CornerDownLeft } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect, useRef } from "react";

export function ConversationCard() {

  const lastMessageRef = useRef(null);

  const scrollToLastMessage = () => {    
    lastMessageRef.current.scrollIntoView(false);
  };

  useEffect(() => {
    scrollToLastMessage();
  }, []);

  return (
    <Card className="bg-sky-700 border-white">
      <CardHeader className="">
        <CardTitle className="text-2xl text-white">
          Conversation
        </CardTitle>
      </CardHeader>
      <CardContent className="m-0 p-0 mb-4 bg-white">
        <ScrollArea className="h-64 whitespace-nowrap m-0 p-0" type="always">
          <ChatMessageList>
            <ChatBubble variant="received">
              <ChatBubbleAvatar fallback="JD" />
              <ChatBubbleMessage variant="received">
                Hello world!
                <ChatBubbleTimestamp timestamp="yesterday" />
              </ChatBubbleMessage>
            </ChatBubble>
            <ChatBubble variant="sent">
              <ChatBubbleAvatar fallback="Me" src="https://github.com/shadcn.png" />
              <ChatBubbleMessage variant="sent">
                Hello too!
                <ChatBubbleTimestamp timestamp="11:23a" />
              </ChatBubbleMessage>
            </ChatBubble>
            <ChatBubble variant="received">
              <ChatBubbleAvatar fallback="JD" />
              <ChatBubbleMessage variant="received">
                Are you free next Tuesday in the evening?
                <ChatBubbleTimestamp timestamp="12:10p" />
              </ChatBubbleMessage>
            </ChatBubble>
            <ChatBubble variant="sent">
              <ChatBubbleAvatar fallback="Me" src="https://github.com/shadcn.png" />
              <ChatBubbleMessage variant="sent">
                I am free around 7p.  Where should we meet up?
                <ChatBubbleTimestamp timestamp="2:02p" />
              </ChatBubbleMessage>
            </ChatBubble>
            <ChatBubble variant="received">
              <ChatBubbleAvatar fallback="JD" />
              <ChatBubbleMessage variant="received">
                How about Generic Park with the lights?
                <ChatBubbleTimestamp timestamp="3:38p" />
              </ChatBubbleMessage>
            </ChatBubble>
            <ChatBubble variant="sent">
              <ChatBubbleAvatar fallback="Me" src="https://github.com/shadcn.png" />
              <ChatBubbleMessage variant="sent">
                Kk
                <ChatBubbleTimestamp timestamp="3:50p" />
              </ChatBubbleMessage>
            </ChatBubble>
            <div ref={lastMessageRef} />
          </ChatMessageList>
        </ScrollArea>
      </CardContent>
      <CardFooter className="grid gap-4">
        <ChatInput
          placeholder="Type your message here..."
        />
        <Button
          size="sm" className="w-full bg-white text-black hover:bg-yellow-300">
          Send Message
          <CornerDownLeft className="size-3.5" />
        </Button>
      </CardFooter>
    </Card>    
  );
};