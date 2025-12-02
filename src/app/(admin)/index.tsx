import BottomItems from "@/components/BottomItems";
import ChildSelector from "@/components/ChildSelector";
import { View } from "react-native";

export default function HomeScreen() {
  return (
    <View>
      <ChildSelector />
      <BottomItems />
    </View>
  );
}
