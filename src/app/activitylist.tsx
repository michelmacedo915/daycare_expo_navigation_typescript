import activities from "@assets/data/activities";
import Colors from "@constants/Colors";
import { Stack } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const ActivityList = () => {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerTitle: "",
          headerBackTitle: "Home",
          headerTransparent: true,
        }}
      />
      <ScrollView>
        <Image source={require("@assets/images/activity_header.png")} />
        <View style={styles.headlinecontainer}>
          <Text style={styles.headlinetext}>{activities[0].headline}</Text>
          <View style={styles.headlinedetails}>
            <Text style={styles.detail}>
              Date{"\n"}
              {activities[0].date}
            </Text>
            <Text style={styles.detail}>
              Educator{"\n"}
              {activities[0].educator}
            </Text>
            <Text style={styles.detail}>
              Room{"\n"}
              {activities[0].room}
            </Text>
          </View>
        </View>
        <Text style={styles.descriptiontitle}>Description/Aim</Text>
        <Text style={styles.description}>{activities[0].description}</Text>
      </ScrollView>
    </View>
  );
};

export default ActivityList;

const styles = StyleSheet.create({
  container: { flex: 1 },
  headlinecontainer: {
    backgroundColor: "#592EF2",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: -22,
  },
  headlinetext: {
    color: Colors.light.textInverted,
    textAlign: "center",
    fontSize: 18,
    marginTop: 24,
    marginHorizontal: 40,
  },
  headlinedetails: {
    flexDirection: "row",
    padding: 24,
    justifyContent: "center",
  },
  detail: {
    textAlign: "center",
    color: Colors.light.textInverted,
    marginHorizontal: 15,
  },
  descriptiontitle: { marginTop: 14, fontWeight: "bold", textAlign: "center" },
  description: {
    padding: 14,
  },
});
