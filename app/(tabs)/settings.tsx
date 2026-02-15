import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import { colors, spacing, radius, fontSize, fontWeight } from "../../src/ui/theme";

export default function SettingsScreen() {
  const router = useRouter();
  const [notifications, setNotifications] = useState(true);

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.profileCard}>
        <View style={styles.avatar}><Text style={styles.avatarText}>U</Text></View>
        <View style={styles.profileInfo}><Text style={styles.profileName}>Eco Warrior</Text><Text style={styles.profileLevel}>Bronze Level • 12.5 kg saved</Text></View>
        <Text style={styles.profileArrow}>›</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.premiumBanner} onPress={() => router.push("/paywall")}>
        <Text style={styles.premiumIcon}>⚡</Text><View style={styles.premiumContent}><Text style={styles.premiumTitle}>Go Premium</Text><Text style={styles.premiumText}>Advanced analytics & AI tips</Text></View><Text style={styles.premiumArrow}>→</Text>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>Account</Text>
      <View style={styles.section}>
        <TouchableOpacity style={styles.menuItem}><Text style={styles.menuIcon}>👤</Text><Text style={styles.menuLabel}>Profile</Text><Text style={styles.menuArrow}>›</Text></TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}><Text style={styles.menuIcon}>🔔</Text><Text style={styles.menuLabel}>Notifications</Text><Switch value={notifications} onValueChange={setNotifications} trackColor={{false: colors.border, true: colors.primaryLight}} thumbColor={colors.background} /></TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Preferences</Text>
      <View style={styles.section}>
        <TouchableOpacity style={styles.menuItem}><Text style={styles.menuIcon}>🎯</Text><Text style={styles.menuLabel}>Daily Goal</Text><Text style={styles.menuValue}>10 kg</Text></TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}><Text style={styles.menuIcon}>🌍</Text><Text style={styles.menuLabel}>Units</Text><Text style={styles.menuValue}>Metric</Text></TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Support</Text>
      <View style={styles.section}>
        <TouchableOpacity style={styles.menuItem}><Text style={styles.menuIcon}>❓</Text><Text style={styles.menuLabel}>Help Center</Text><Text style={styles.menuArrow}>›</Text></TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}><Text style={styles.menuIcon}>📧</Text><Text style={styles.menuLabel}>Contact</Text><Text style={styles.menuArrow}>›</Text></TouchableOpacity>
      </View>

      <Text style={styles.version}>EcoFootprint v1.0.0</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.surface },
  profileCard: { flexDirection: "row", alignItems: "center", backgroundColor: colors.background, margin: spacing.lg, padding: spacing.lg, borderRadius: radius.md, borderWidth: 1, borderColor: colors.border },
  avatar: { width: 56, height: 56, borderRadius: 28, backgroundColor: colors.primary, alignItems: "center", justifyContent: "center", marginRight: spacing.md },
  avatarText: { fontSize: fontSize.title, fontWeight: fontWeight.bold, color: colors.textInverse },
  profileInfo: { flex: 1 },
  profileName: { fontSize: fontSize.body, fontWeight: fontWeight.semibold, color: colors.textPrimary },
  profileLevel: { fontSize: fontSize.caption, color: colors.primary, marginTop: spacing.xs },
  profileArrow: { fontSize: 24, color: colors.textTertiary },
  premiumBanner: { flexDirection: "row", alignItems: "center", backgroundColor: colors.primary, marginHorizontal: spacing.lg, marginBottom: spacing.lg, padding: spacing.lg, borderRadius: radius.md },
  premiumIcon: { fontSize: 24, marginRight: spacing.md },
  premiumContent: { flex: 1 },
  premiumTitle: { fontSize: fontSize.body, fontWeight: fontWeight.bold, color: colors.textInverse },
  premiumText: { fontSize: fontSize.caption, color: "rgba(255,255,255,0.8)", marginTop: spacing.xs },
  premiumArrow: { fontSize: 24, color: colors.textInverse },
  sectionTitle: { fontSize: fontSize.caption, fontWeight: fontWeight.medium, color: colors.textTertiary, marginHorizontal: spacing.lg, marginBottom: spacing.sm, textTransform: "uppercase" },
  section: { backgroundColor: colors.background, marginHorizontal: spacing.lg, borderRadius: radius.md, borderWidth: 1, borderColor: colors.border, overflow: "hidden" },
  menuItem: { flexDirection: "row", alignItems: "center", padding: spacing.lg, borderBottomWidth: 1, borderBottomColor: colors.border },
  menuIcon: { fontSize: 20, marginRight: spacing.md },
  menuLabel: { flex: 1, fontSize: fontSize.body, color: colors.textPrimary },
  menuValue: { fontSize: fontSize.body, color: colors.textTertiary },
  menuArrow: { fontSize: 24, color: colors.textTertiary },
  version: { textAlign: "center", fontSize: fontSize.caption, color: colors.textTertiary, marginTop: spacing.lg, marginBottom: spacing.xxxl },
});
