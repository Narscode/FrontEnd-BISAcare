import React from "react"
import { View, Text, Image, FlatList, StyleSheet, Dimensions } from "react-native"

const { width } = Dimensions.get("window")

const testimonials = [
  {
    id: "1",
    image: require("./assets/testimoni.jpg"),
    quote:
      "Berkat bantuan asuransi, ibu saya berhasil sembuh dari stroke karena layanan operasi yang optimal.",
    author: "Hanifah",
  },
  {
    id: "2",
    image: require("./assets/testimoni.jpg"),
    quote:
      "Saya merasa tenang karena semua biaya ditanggung, benar-benar perlindungan nyata.",
    author: "Budi",
  },
  {
    id: "3",
    image: require("./assets/testimoni.jpg"),
    quote:
      "Asuransi ini membuat keluarga saya terbantu dalam kondisi darurat.",
    author: "Siti",
  },
]

const TestimonialCard = ({ item }: { item: (typeof testimonials)[0] }) => {
  return (
    <View style={styles.card}>
      {/* Left Image */}
      <Image source={item.image} style={styles.image} />

      {/* Right Text */}
      <View style={styles.textContainer}>
        <Text style={styles.quote} numberOfLines={5}>
          “{item.quote}”
        </Text>
        <Text style={styles.author}>- {item.author}</Text>
      </View>
    </View>
  )
}

export default function TestimonialSection() {
  return (
    <View style={styles.container}>
      {/* Heading */}
      <Text style={styles.title}>Kisah Nyata. Perlindungan Nyata.</Text>
      <Text style={styles.subtitle}>
        Di saat sulit, perlindungan bukan cuma janji. Ini buktinya.
      </Text>

      {/* Horizontal Scroll */}
      <FlatList
        data={testimonials}
        renderItem={({ item }) => <TestimonialCard item={item} />}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10 }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f3f4f6", // bg-gray-100
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#000",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: "#374151",
    marginBottom: 15,
  },
  card: {
    flexDirection: "row",
    width: width * 0.65,
    height: 170,
    backgroundColor: "#fff",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#D4DFFF",
    overflow: "hidden",
    marginRight: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3, // Android shadow
  },
  image: {
    width: 110,
    height: "100%",
    resizeMode: "cover",
    borderRightWidth: 1,
    borderRightColor: "#D4DFFF",
  },
  textContainer: {
    flex: 1,
    backgroundColor: "#F1F5FF",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  quote: {
    fontSize: 12,
    color: "#000",
    textAlign: "center",
    marginBottom: 6,
  },
  author: {
    fontSize: 12,
    fontStyle: "italic",
    color: "#374151",
  },
})

