import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    width: "100%",
    // height:height,
    // flexGrow: 1,
    flex: 1,
    // padding:20,
  },
  header: {
    width: "100%",
    height: 40,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: "6%",
    flexDirection: "row",
    // backgroundColor:"red"
  },
  title: {
    fontSize: 17,
    fontWeight: "700",
    color: "black",
  },
  box: {
    width: width / 2.3,
    height: width / 2.2,
    borderRadius: 10,
    backgroundColor: "#fff",
    margin: 7,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    // marginTop: "8%",
    alignItems: "center",
  },
  icon: {
    width: 100,
    height: 100,
    bottom: "5%",
  },
  description: {
    width: "100%",
    padding: "10%",
  },
  name: {
    fontSize: 16,
    fontWeight: "700",
    color: "black",
  },
  count: {
    fontSize: 12,
    fontWeight: "600",
    color: "gray",
    marginTop: "3%",
  },

  buttonText: {
    color: "white",
    fontSize: 16,
  },
  text: {
    marginBottom: 100,
    fontSize: 18,
    color: "white",
  },
  languagesList: {
    // flex: 1,
    height: "100%",
    // justifyContent: 'center',
    padding: 10,
    backgroundColor: "#d3d3d3",
  },
  button: {
    backgroundColor: "#6258e8",
    padding: 10,
    borderRadius: 50,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  languageButton: {
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
    alignItems: "center",
    color: "black",
    backgroundColor: "#86B6F6",
    width: 200,
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
  },
  lngName: {
    fontSize: 20,
    color: "black",
  },
});

export default styles;
