import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#e9e6c7ff"
  },
  header: {
    backgroundColor: "#160e02ff"
  },

  headerTitle: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#f9fceeff"
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  title: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "bold",
    color: "#1b5e20"
  },

  searchInput: {
    backgroundColor: "#f9fceeff",
    padding: 12,
    marginBottom: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fffffeff",
    elevation: 2
  },

  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#f9fceeff",
    padding: 15,
    marginBottom: 12,
    borderRadius: 12,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5
  },

  cardInfo: {
    flex: 1
  },

  cardActions: {
    justifyContent: "space-around",
    marginLeft: 10
  },

  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#252203ff"
  },

  email: {
    fontSize: 13,
    color: "#555"
  },

  phone: {
    fontSize: 13,
    color: "#777",
    marginTop: 2
  },

  button: {
    padding: 15,
    backgroundColor: "#ad9767ff",
    borderRadius: 10,
    alignItems: "center",
    elevation: 3
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14
  },

  editButton: {
    backgroundColor: "#1d1b02ff",
    padding: 8,
    borderRadius: 8,
    alignItems: "center"
  },

  deleteButton: {
    backgroundColor: "#806e48ff",
    padding: 8,
    borderRadius: 8,
    alignItems: "center"
  },

  input: {
    backgroundColor: "#f9fceeff",
    padding: 12,
    marginBottom: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fffffeff",
    elevation: 2
  },

  saveButton: {
    backgroundColor: "#1d1b02ff",
    padding: 15,
    borderRadius: 10,
    alignItems: "center"
  },

  cancelButton: {
    backgroundColor: "#806e48ff",
    padding: 15,
    borderRadius: 10,
    alignItems: "center"
  },

  errorText: {
    color: "#160e02ff",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10
  }
});