import { StyleSheet } from "react-native";

export const headerStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#EEE",
    alignItems: "center",
    justifyContent: "space-around",
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  flagContainer: {
    flexDirection: "row",
    margin: 30,
  },
  flagButton: {
    marginTop: 10,
    minWidth: 30,
  },
  flagsLeft: {
    fontSize: 30,
    fontWeight: "bold",
    paddingTop: 5,
    marginLeft: 20,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#999",
    padding: 5,
    borderRadius: 5,
    borderColor: "#393939",
    borderWidth: 1,
    shadowColor: "#393939",
    shadowRadius: 3,
    shadowOpacity: 0.7,
  },
  buttonLabel: {
    fontSize: 20,
    color: "#DDD",
    fontWeight: "bold",
  },
  hamburguer: {
    flex: 1,
  }
});
