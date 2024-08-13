"use client"

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { toast } from "@/components/ui/use-toast";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Link from "next/link";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { CalendarDatePicker } from "@/components/calendar-date-picker";
import { useState } from "react";


const tennisProfileFormSchema = z.object({
  ntrp: z.coerce.number().min(1.0).max(7.0).optional(),
  utr: z.coerce.number().min(1.0).max(16.5).optional(),
  wtn: z.coerce.number().min(1.0).max(40.0).optional(),
  handedness: z.string().optional(),
  backhand: z.string().optional(),
});

type TennisProfileFormValues = z.infer<typeof tennisProfileFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<TennisProfileFormValues> = {
};

export function TennisProfileForm() {

  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState<Date | null>(null);

  const form = useForm<TennisProfileFormValues>({
    resolver: zodResolver(tennisProfileFormSchema),
    defaultValues,
    mode: "onChange",
  });

  function onSubmit(data: TennisProfileFormValues) {
    console.log(JSON.stringify(data, null, 2));
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="backhand"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Backhand</FormLabel>
              <RadioGroup name="backhand" onValueChange={field.onChange} defaultValue={field.value}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="one-handed" id="backhand-one" />
                  <Label htmlFor="backhand-one">One-handed</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="two-handed" id="backhand-two" />
                  <Label htmlFor="backhand-two">Two-handed</Label>
                </div>
              </RadioGroup>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="handedness"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Handedness</FormLabel>
              <RadioGroup name="handedness" onValueChange={field.onChange} defaultValue={field.value}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="left" id="handedness-left" />
                  <Label htmlFor="handedness-left">Left-handed</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="right" id="handedness-right" />
                  <Label htmlFor="handedness-right">Right-handed</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="both" id="handedness-both" />
                  <Label htmlFor="handedness-both">Ambidextrous</Label>
                </div>
              </RadioGroup>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="ntrp"
          render={({ field }) => (
            <FormItem>
              <FormLabel>NTRP Rating</FormLabel>
              <FormControl>
                <Input type="number" placeholder="1.0...7.0" {...field} />
              </FormControl>
              <FormDescription>
                NTRP Rating is a numerical indicator of tennis-playing ability, from 1.0 (beginner) through 7.0 (touring pro).
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="utr"
          render={({ field }) => (
            <FormItem>
              <FormLabel>UTR Rating</FormLabel>
              <FormControl>
                <Input type="number" placeholder="1...16.5" {...field} />
              </FormControl>
              <FormDescription>
                UTR Rating is a system created by UTR Sports that promotes fair and competitive play across the tennis world. All players, regardless of age, gender, geography, or skill level, are rated on the same scale between 1.00 and 16.50 based on actual match results.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="wtn"
          render={({ field }) => (
            <FormItem>
              <FormLabel>WTN Rating</FormLabel>
              <FormControl>
                <Input type="number" placeholder="40...1" {...field} />
              </FormControl>
              <FormDescription>
                WTN Rating provides a global standard for players. It is a 40-1 scale, with 40 being a beginner player and 1 being an elite professional. This scale is for all players, regardless of age, gender, or ability. 
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Update tennis profile</Button>
      </form>
    </Form>
  );
};