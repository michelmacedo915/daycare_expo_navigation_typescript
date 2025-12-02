import child from "@assets/data/child";
import Colors from "@constants/Colors";
import { Stack } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const ChildrenList = () => {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerTitle: "",
          headerBackTitle: "Admin",
          headerTransparent: true,
        }}
      />
      <ScrollView>
        <Image source={require("@assets/images/activity_header.png")} />
        <View style={styles.headlinecontainer}>
          <Text style={styles.headlinetext}>{child[0].name}</Text>
          <View style={styles.headlinedetails}>
            <Text style={styles.detail}>
              Educator{"\n"}
              {child[0].educator}
            </Text>
            <Text style={styles.detail}>
              Room{"\n"}
              {child[0].room}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ChildrenList;

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
});
