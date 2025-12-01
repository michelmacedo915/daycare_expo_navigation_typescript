import { Image, StyleSheet, Text, View } from "react-native";
import { Gallery } from "../types";

type GalleryItemProps = {
  gallery: Gallery;
};

const GalleryItem = ({ gallery }: GalleryItemProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.textcontainer}>
        <Text style={styles.title}>Gallery</Text>
        <Text style={styles.gallery}>{gallery.gallerytext}</Text>
      </View>
      <Image
        source={require("@assets/images/flower.png")}
        style={styles.galleryimage}
      />
    </View>
  );
};

export default GalleryItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#FFCD36",
    borderRadius: 20,
    marginHorizontal: 2,
    width: 170,
    padding: 10,
  },
  textcontainer: { marginRight: 60 },
  title: {
    fontSize: 18,
    marginTop: 10,
    fontWeight: "bold",
  },
  gallery: { fontSize: 12, marginTop: 10 },
  galleryimage: {
    marginTop: 45,
    marginLeft: -90,
    resizeMode: "contain",
  },
});
