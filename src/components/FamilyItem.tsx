import { Image, StyleSheet, Text, View } from "react-native";
import { Family } from "../types";

type FamilyItemProps = {
  family: Family;
};

const FamilyItem = ({ family }: FamilyItemProps) => {
  return (
    <>
      <Text style={styles.title}>Family</Text>
      <View style={styles.container}>
        <View style={styles.child1}>
          <Text style={styles.name}>{family.childname1}</Text>
          <Image
            source={require("@assets/images/child_mark.png")}
            style={styles.childimage}
          />
        </View>
        <View style={styles.child2}>
          <Text style={styles.name}>{family.childname2}</Text>
          <Image
            source={require("@assets/images/child_peter.png")}
            style={styles.childimage}
          />
        </View>
        <View style={styles.child3}>
          <Image
            source={require("@assets/images/child_placeholder.png")}
            style={styles.childimage}
          />
        </View>
      </View>
    </>
  );
};

export default FamilyItem;

const styles = StyleSheet.create({
  title: {
    marginHorizontal: 25,
    marginTop: 10,
    fontWeight: "bold",
  },
  container: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginTop: 3,
  },
  child1: {
    flexDirection: "row",
    minWidth: 110,
    backgroundColor: "#B4A0FF",
    marginHorizontal: 2,
    padding: 10,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  child2: {
    flexDirection: "row",
    minWidth: 110,
    backgroundColor: "#FFB748",
    marginHorizontal: 2,
    padding: 10,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  child3: {
    minWidth: 110,
    backgroundColor: "#038129",
    marginHorizontal: 2,
    padding: 10,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  name: { fontSize: 18 },
  childimage: {
    borderRadius: 20,
    resizeMode: "contain",
  },
});
