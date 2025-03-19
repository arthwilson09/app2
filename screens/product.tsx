import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";

const DashboardScreen = () => {
      const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Top Header */}
      <LinearGradient colors={["#0B829E", "#0B829E"]} style={styles.header}>
        <View style={styles.headerContent}>
          <Image source={require("../assets/user.png")} style={styles.profileImage} />
          <Text style={styles.welcomeText}>Welcome Back 👋{"\n"}Mujeeb</Text>
          <View style={styles.headerIcons}>
            <MaterialCommunityIcons name="bell-outline" size={24} color="#fff" />
            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                          <MaterialCommunityIcons name="cog-outline" size={24} color="#fff" style={{ marginLeft: 15 }} />
                        </TouchableOpacity>
        </View>
        </View>
      </LinearGradient>

      {/* Action Buttons */}
      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.publishButton}><Text style={styles.buttonText}>Publish (10)</Text></TouchableOpacity>
        <TouchableOpacity style={styles.addButton}><Text style={styles.buttonText}>Add New</Text></TouchableOpacity>
        <TouchableOpacity style={styles.importButton}><Text style={styles.buttonText}>Import</Text></TouchableOpacity>
      </View>

      {/* Search & Filter Section */}
      <View style={styles.searchSection}>
        <TextInput style={styles.searchInput} placeholder="Search..." />
        <TouchableOpacity style={styles.searchButton}><MaterialCommunityIcons name="magnify" size={20} color="#fff" /></TouchableOpacity>
      </View>
      <View style={styles.row}>
        <Picker style={styles.picker}><Picker.Item label="Select Action" value="" /></Picker>
        <TouchableOpacity style={styles.submitButton}><Text style={styles.submitText}>Submit</Text></TouchableOpacity>
      </View>

      {/* Product List */}
      <View style={styles.productList}>
        {['Black Analog Watch', 'MacBook Pro M1 2020 Edition'].map((product, index) => (
          <View key={index} style={styles.productItem}>
            <MaterialCommunityIcons name="checkbox-blank-outline" size={20} color="#666" />
            <Text style={styles.productText}>{product}</Text>
          </View>
        ))}
      </View>

      {/* Floating Action Button */}
      <TouchableOpacity style={styles.fab}>
        <MaterialCommunityIcons name="plus" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#E8F1F2" },
  header: { height: 120, justifyContent: "center", paddingHorizontal: 20, borderBottomLeftRadius: 30, borderBottomRightRadius: 30 },
  headerContent: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  profileImage: { width: 40, height: 40, borderRadius: 20 },
  welcomeText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  headerIcons: { flexDirection: "row" },
  actionButtons: { flexDirection: "row", justifyContent: "space-around", marginVertical: 10 },
  publishButton: { backgroundColor: "#007BFF", padding: 10, borderRadius: 5 },
  addButton: { backgroundColor: "#28A745", padding: 10, borderRadius: 5 },
  importButton: { backgroundColor: "#17A2B8", padding: 10, borderRadius: 5 },
  buttonText: { color: "#fff", fontWeight: "bold" },
  searchSection: { flexDirection: "row", marginHorizontal: 20, alignItems: "center", backgroundColor: "#fff", borderRadius: 10, padding: 5, elevation: 3 },
  searchInput: { flex: 1, height: 40, paddingHorizontal: 10 },
  searchButton: { backgroundColor: "#0B829E", padding: 10, borderRadius: 5 },
  row: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", margin: 10 },
  picker: { flex: 1, height: 40 },
  submitButton: { backgroundColor: "#0B829E", paddingVertical: 8, paddingHorizontal: 15, borderRadius: 5 },
  submitText: { color: "#fff", fontWeight: "bold" },
  productList: { backgroundColor: "#fff", marginHorizontal: 20, borderRadius: 10, padding: 10, shadowOpacity: 0.1, elevation: 3 },
  productItem: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: "#eee" },
  productText: { fontSize: 16, color: "#333" },
  fab: { position: "absolute", bottom: 20, right: 20, backgroundColor: "#0B829E", padding: 15, borderRadius: 50, elevation: 5 },
});

export default DashboardScreen;
