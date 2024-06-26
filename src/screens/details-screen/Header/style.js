import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "10%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#fff",
    elevation: 4,
    paddingTop:20
  },
  titleBox: {
    height: "100%",
    width: "70%",
    justifyContent: "center",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  title: {
    fontSize: 18,
    fontWeight: "800",
    color: "black",
  },
  description: {
    fontSize: 12,
    color: "gray",
    fontWeight: "600",
    marginTop: "2%",
  },
});

export default styles;
