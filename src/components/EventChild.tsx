import Colors from "@constants/Colors";
import { Image, StyleSheet, Text, View } from "react-native";
import { Event } from "../types";

type EventChildProps = {
  event: Event;
};

const EventChild = ({ event }: EventChildProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.eventItem}>
        <Text style={styles.quantity}>{event.bottles}</Text>
        <Image
          source={require("@assets/images/icon_bottle.png")}
          style={styles.icon}
        />
        <Text style={styles.unit}>Bottles</Text>
      </View>
      <View style={styles.eventItem}>
        <Text style={styles.quantity}>{event.napTime}</Text>
        <Image
          source={require("@assets/images/icon_clock.png")}
          style={styles.icon}
        />
        <Text style={styles.unit}>Nap time</Text>
      </View>
      <View style={styles.eventItem}>
        <Text style={styles.quantity}>{event.nappies}</Text>
        <Image
          source={require("@assets/images/icon_nappys.png")}
          style={styles.icon}
        />
        <Text style={styles.unit}>Nappies</Text>
      </View>
    </View>
  );
};

export default EventChild;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginTop: 10,
  },
  eventItem: {
    flex: 1,
    backgroundColor: "#006DFF",
    marginHorizontal: 2,
    padding: 10,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    gap: 3,
  },
  quantity: {
    color: Colors.light.textInverted,
    fontSize: 36,
    fontWeight: "600",
  },
  icon: {},

  unit: {
    color: Colors.light.textInverted,
    fontWeight: "bold",
  },
  heartLogo: {
    height: 160,
    width: 165,
    right: 0,
  },
});
