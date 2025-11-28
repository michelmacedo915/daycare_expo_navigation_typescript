import EventChild from "@/components/EventChild";
import TimelineItem from "@/components/TimelineItem";
import events from "@assets/data/events";
import timelines from "@assets/data/timelines";
import { View } from "react-native";

export default function HomeScreen() {
  return (
    <View>
      <TimelineItem timeline={timelines[0]} />
      <EventChild event={events[0]} />
    </View>
  );
}
