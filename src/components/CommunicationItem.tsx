import Colors from "@constants/Colors";
import { Image, StyleSheet, Text, View } from "react-native";
import { Communication } from "../types";

type CommunicationItemProps = {
  communication: Communication;
};

const CommunicationItem = ({ communication }: CommunicationItemProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Communication</Text>
      <Text style={styles.communication}>{communication.comms}</Text>
      <Image
        source={require("@assets/images/comms.png")}
        style={styles.commsimage}
      />
    </View>
  );
};

export default CommunicationItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FF9A00",
    borderRadius: 20,
    marginHorizontal: 2,
    width: 170,
    padding: 10,
    justifyContent: "space-evenly",
    alignItems: "center",
    gap: 10,
  },
  title: {
    color: Colors.light.textInverted,
    fontSize: 18,
    marginTop: 10,
    fontWeight: "bold",
  },
  communication: {
    color: Colors.light.textInverted,
    fontSize: 12,
  },
  commsimage: {
    marginTop: 11,
    resizeMode: "contain",
  },
});
