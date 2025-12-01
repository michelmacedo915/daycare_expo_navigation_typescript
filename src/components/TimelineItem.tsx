import Colors from "@constants/Colors";
import { Image, StyleSheet, Text, View } from "react-native";
import { Timeline } from "../types";

type TimelineItemProps = {
  timeline: Timeline;
};

const TimelineItem = ({ timeline }: TimelineItemProps) => {
  return (
    <View>
      <View style={styles.timelineText}>
        <Text style={styles.title}>Timeline</Text>
        <Text style={styles.headline}>{timeline.headline}</Text>
        <Text style={styles.seemore}>See more...</Text>
      </View>
      <View style={styles.timelineImage}>
        <Image
          source={require("@assets/images/heart.png")}
          style={styles.heartLogo}
        />
      </View>
    </View>
  );
};

export default TimelineItem;

const styles = StyleSheet.create({
  timelineText: {
    backgroundColor: "#B2A1FF",
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 25,
    marginTop: 60,
    justifyContent: "center",
    height: 180,
  },
  timelineImage: {
    position: "absolute",
    marginHorizontal: 10,
    marginTop: 45,
    justifyContent: "center",
    right: 0,
    height: 180,
  },
  title: {
    color: Colors.light.textInverted,
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 24,
  },
  headline: {
    color: Colors.light.textInverted,
    fontSize: 12,
    marginBottom: 24,
    marginRight: 140,
  },
  seemore: {
    color: Colors.light.textInverted,
    fontWeight: "bold",
  },
  heartLogo: {
    height: 160,
    width: 165,
    right: 0,
  },
});
