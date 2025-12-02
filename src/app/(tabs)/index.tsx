import ActivitiesItem from "@/components/ActivitiesItem";
import BottomItems from "@/components/BottomItems";
import CalendarItem from "@/components/CalendarItem";
import EventChild from "@/components/EventChild";
import FamilyItem from "@/components/FamilyItem";
import calendar from "@assets/data/calendar";
import events from "@assets/data/events";
import family from "@assets/data/family";
import { View } from "react-native";

export default function HomeScreen() {
  return (
    <View>
      <ActivitiesItem />
      <EventChild event={events[0]} />
      <CalendarItem calendar={calendar[0]} />
      <FamilyItem family={family[0]} />
      <BottomItems />
    </View>
  );
}
