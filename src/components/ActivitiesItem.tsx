import Colors from "@constants/Colors";
import { Image, StyleSheet, Text, View } from "react-native";
import { Activities } from "../types";

type ActivitiesItemProps = {
  activities: Activities;
};

const ActivitiesItem = ({ activities }: ActivitiesItemProps) => {
  return (
    <View>
      <View style={styles.activitiesText}>
        <Text style={styles.title}>Activities</Text>
        <Text style={styles.headline}>{activities.headline}</Text>
        <Text style={styles.seemore}>See more...</Text>
      </View>
      <View style={styles.activitiesImage}>
        <Image
          source={require("@assets/images/heart.png")}
          style={styles.heartLogo}
        />
      </View>
    </View>
  );
};

export default ActivitiesItem;

const styles = StyleSheet.create({
  activitiesText: {
    backgroundColor: "#592EF2",
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 25,
    marginTop: 60,
    justifyContent: "center",
    height: 180,
  },
  activitiesImage: {
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
