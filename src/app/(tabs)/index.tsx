import CalendarItem from "@/components/CalendarItem";
import EventChild from "@/components/EventChild";
import TimelineItem from "@/components/TimelineItem";
import calendar from "@assets/data/calendar";
import events from "@assets/data/events";
import timelines from "@assets/data/timelines";
import { View } from "react-native";

export default function HomeScreen() {
  return (
    <View>
      <TimelineItem timeline={timelines[0]} />
      <EventChild event={events[0]} />
      <CalendarItem calendar={calendar[0]} />
    </View>
  );
}
