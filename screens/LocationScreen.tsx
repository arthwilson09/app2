import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";

const LocationScreen = () => {
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

      {/* Location Section */}
      <View style={styles.locationCard}>
        <Text style={styles.sectionTitle}>Location</Text>
        <View style={styles.row}>
          <Picker style={styles.picker}>
            <Picker.Item label="Select Action" value="" />
          </Picker>
          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitText}>Submit</Text>
          </TouchableOpacity>
        </View>

        {/* Locations List */}
        {['Somosh Nagar', 'Abids', 'Hyderabad', 'Koti', 'Malakpet'].map((location, index) => (
          <TouchableOpacity key={index} style={styles.locationItem}>
            <Text style={styles.locationText}>{location}</Text>
            <MaterialCommunityIcons name="radiobox-blank" size={20} color="#666" />
          </TouchableOpacity>
        ))}

        {/* Create Location Button */}
        <TouchableOpacity style={styles.createLocationButton}>
          <Text style={styles.createLocationText}>Create Location</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8F1F2",
  },
  header: {
    height: 120,
    justifyContent: "center",
    paddingHorizontal: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  welcomeText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  headerIcons: {
    flexDirection: "row",
  },
  locationCard: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginTop: -20,
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  picker: {
    flex: 1,
    height: 40,
  },
  submitButton: {
    backgroundColor: "#0B829E",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  submitText: {
    color: "#fff",
    fontWeight: "bold",
  },
  locationItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  locationText: {
    fontSize: 16,
    color: "#333",
  },
  createLocationButton: {
    marginTop: 20,
    backgroundColor: "#0B829E",
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 5,
  },
  createLocationText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default LocationScreen;
