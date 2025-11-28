import TimelineItem from "@/components/TimelineItem";
import timelines from "@assets/data/timelines";
import { View } from "react-native";

export default function HomeScreen() {
  return (
    <View>
      <TimelineItem timeline={timelines[0]} />
    </View>
  );
}
