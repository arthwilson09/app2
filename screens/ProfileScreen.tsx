import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      {/* Top Header with Gradient */}
      <LinearGradient colors={["#0B829E", "#0B829E"]} style={styles.header}>
        <Text style={styles.headerText}>Profile</Text>
      </LinearGradient>

      {/* Profile Card */}
      <View style={styles.profileCard}>
        {/* User Image */}
        <View style={styles.imageWrapper}>
        <Image
  source={require("../assets/user.png")} // Ensure the correct path
  style={styles.profileImage}
/>

          <TouchableOpacity style={styles.editIcon}>
            <MaterialCommunityIcons name="pencil" size={16} color="#000" />
          </TouchableOpacity>
        </View>

        <Text style={styles.userName}>Mujeeb</Text>
        <Text style={styles.userEmail}>admin@admin.com</Text>

        {/* Menu Options */}
        <View style={styles.menu}>
          <MenuItem icon="account" title="User Details" />
          <MenuItem icon="cog" title="Profile Settings" />
          <MenuItem icon="lock" title="Change Password" />
          <MenuItem icon="logout" title="Logout" />
        </View>
      </View>
    </View>
  );
};

// Menu Item Component
const MenuItem = ({ icon, title }) => (
  <TouchableOpacity style={styles.menuItem}>
    <MaterialCommunityIcons name={icon} size={24} color="#666" />
    <Text style={styles.menuText}>{title}</Text>
    <MaterialCommunityIcons name="chevron-right" size={24} color="#bbb" />
  </TouchableOpacity>
);

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8F1F2",
  },
  header: {
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  profileCard: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginTop: -50,
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  imageWrapper: {
    position: "relative",
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  editIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 5,
    elevation: 5,
  },
  userName: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  userEmail: {
    fontSize: 14,
    color: "#666",
    marginBottom: 20,
  },
  menu: {
    width: "100%",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    color: "#333",
    marginLeft: 10,
  },
});

export default ProfileScreen;
