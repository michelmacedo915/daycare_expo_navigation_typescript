import CommunicationItem from "@/components/CommunicationItem";
import GalleryItem from "@/components/GalleryItem";
import communication from "@assets/data/communication";
import gallery from "@assets/data/gallery";

import { StyleSheet, View } from "react-native";

const BottomItems = () => {
  return (
    <View style={styles.container}>
      <CommunicationItem communication={communication[0]} />
      <GalleryItem gallery={gallery[0]} />
    </View>
  );
};

export default BottomItems;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginTop: 8,
    height: 150,
    bottom: 0,
  },
});
