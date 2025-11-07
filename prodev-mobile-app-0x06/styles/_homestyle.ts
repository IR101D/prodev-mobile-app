import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fafb", // tailwind: bg-gray-50
  },

  // 🔍 Search Section
  searchGroup: {
    padding: 16, // tailwind: p-4
    backgroundColor: "#fff", // tailwind: bg-white
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f3f4f6", // tailwind: bg-gray-100
    borderRadius: 9999, // tailwind: rounded-full
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  searchControlGroup: {
    flex: 1,
  },
  searchFormText: {
    color: "#374151", // tailwind: text-gray-700
    fontSize: 16,
    fontWeight: "600",
  },
  searchControl: {
    color: "#6b7280", // tailwind: text-gray-500
    fontSize: 14,
  },
  searchButton: {
    backgroundColor: "#000", // tailwind: bg-black
    borderRadius: 9999,
    padding: 8,
    marginLeft: 8,
  },

  // 🏷️ Filter Section
  filterGroup: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 12,
    gap: 20,
  },
  filterContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 80,
  },

  // 🏘️ Listing Section
  listingContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  paginationContainer: {
    alignItems: "center",
    marginTop: 24,
    marginBottom: 40,
  },
  showMoreButton: {
    backgroundColor: "#000",
    borderRadius: 9999,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  showMoreButtonText: {
    color: "#fff",
    fontWeight: "600",
    textAlign: "center",
  },
});
