import CalendarItem from "@/components/CalendarItem";
import EventChild from "@/components/EventChild";
import FamilyItem from "@/components/FamilyItem";
import TimelineItem from "@/components/TimelineItem";
import calendar from "@assets/data/calendar";
import events from "@assets/data/events";
import family from "@assets/data/family";
import timelines from "@assets/data/timelines";
import { View } from "react-native";

export default function HomeScreen() {
  return (
    <View>
      <TimelineItem timeline={timelines[0]} />
      <EventChild event={events[0]} />
      <CalendarItem calendar={calendar[0]} />
      <FamilyItem family={family[0]} />
    </View>
  );
}
