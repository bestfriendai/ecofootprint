import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { colors, spacing, radius, fontSize, fontWeight } from "../../src/ui/theme";

export default function DashboardScreen() {
  const router = useRouter();
  
  const stats = { carbonSaved: "12.5 kg", treesEquivalent: 0.5, streak: 7, rank: "Bronze" };
  const todayFootprint = { value: 8.2, goal: 10, unit: "kg CO2" };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Hero Card */}
      <View style={styles.heroCard}>
        <Text style={styles.heroTitle}>Today's Footprint</Text>
        <View style={styles.footprintCircle}>
          <Text style={styles.footprintValue}>{todayFootprint.value}</Text>
          <Text style={styles.footprintUnit}>{todayFootprint.unit}</Text>
        </View>
        <View style={styles.goalRow}>
          <View style={styles.goalBar}><View style={[styles.goalFill, {width: `${(todayFootprint.value/todayFootprint.goal)*100}%`}]} /></View>
          <Text style={styles.goalText}>Goal: {todayFootprint.goal} kg</Text>
        </View>
      </View>

      {/* Quick Stats */}
      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Text style={styles.statIcon}>🌱</Text>
          <Text style={styles.statValue}>{stats.carbonSaved}</Text>
          <Text style={styles.statLabel}>Carbon Saved</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statIcon}>🌳</Text>
          <Text style={styles.statValue}>{stats.treesEquivalent}</Text>
          <Text style={styles.statLabel}>Trees Equivalent</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statIcon}>🔥</Text>
          <Text style={styles.statValue}>{stats.streak}</Text>
          <Text style={styles.statLabel}>Day Streak</Text>
        </View>
      </View>

      {/* Quick Add */}
      <Text style={styles.sectionTitle}>Quick Log</Text>
      <View style={styles.quickGrid}>
        {[
          { icon: "🚗", label: "Drive", co2: "2.1 kg", id: "drive" },
          { icon: "✈️", label: "Flight", co2: "150 kg", id: "flight" },
          { icon: "💡", label: "Energy", co2: "0.5 kg", id: "energy" },
          { icon: "🥗", label: "Food", co2: "0.8 kg", id: "food" },
        ].map((item) => (
          <TouchableOpacity key={item.id} style={styles.quickCard} onPress={() => router.push("/track")}>
            <Text style={styles.quickIcon}>{item.icon}</Text>
            <Text style={styles.quickLabel}>{item.label}</Text>
            <Text style={styles.quickCO2}>{item.co2}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Impact */}
      <Text style={styles.sectionTitle}>Weekly Impact</Text>
      <View style={styles.impactCard}>
        {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => (
          <View key={i} style={styles.dayColumn}>
            <View style={[styles.dayBar, {height: 30 + Math.random() * 50}]} />
            <Text style={styles.dayLabel}>{day}</Text>
          </View>
        ))}
      </View>

      {/* Premium */}
      <TouchableOpacity style={styles.premiumBanner} onPress={() => router.push("/paywall")}>
        <Text style={styles.premiumIcon}>⚡</Text>
        <View style={styles.premiumContent}>
          <Text style={styles.premiumTitle}>Go Premium</Text>
          <Text style={styles.premiumText}>Advanced analytics & personalized tips</Text>
        </View>
        <Text style={styles.premiumArrow}>→</Text>
      </TouchableOpacity>

      <View style={styles.spacer} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.surface },
  heroCard: { backgroundColor: colors.primary, margin: spacing.lg, padding: spacing.xl, borderRadius: radius.lg, alignItems: "center" },
  heroTitle: { fontSize: fontSize.body, color: "rgba(255,255,255,0.8)" },
  footprintCircle: { marginVertical: spacing.lg },
  footprintValue: { fontSize: 56, fontWeight: fontWeight.bold, color: colors.textInverse, textAlign: "center" },
  footprintUnit: { fontSize: fontSize.body, color: "rgba(255,255,255,0.8)", textAlign: "center" },
  goalRow: { width: "100%", marginTop: spacing.md },
  goalBar: { height: 8, backgroundColor: "rgba(255,255,255,0.3)", borderRadius: 4, marginBottom: spacing.xs },
  goalFill: { height: "100%", backgroundColor: colors.textInverse, borderRadius: 4 },
  goalText: { fontSize: fontSize.caption, color: "rgba(255,255,255,0.8)", textAlign: "center" },
  statsRow: { flexDirection: "row", paddingHorizontal: spacing.lg, gap: spacing.sm },
  statCard: { flex: 1, backgroundColor: colors.background, padding: spacing.md, borderRadius: radius.md, alignItems: "center", borderWidth: 1, borderColor: colors.border },
  statIcon: { fontSize: 24, marginBottom: spacing.xs },
  statValue: { fontSize: fontSize.title, fontWeight: fontWeight.bold, color: colors.textPrimary },
  statLabel: { fontSize: 11, color: colors.textTertiary, marginTop: 2 },
  sectionTitle: { fontSize: fontSize.subtitle, fontWeight: fontWeight.semibold, color: colors.textPrimary, marginHorizontal: spacing.lg, marginBottom: spacing.md, marginTop: spacing.lg },
  quickGrid: { flexDirection: "row", flexWrap: "wrap", paddingHorizontal: spacing.lg, gap: spacing.sm },
  quickCard: { width: "47%", backgroundColor: colors.background, padding: spacing.lg, borderRadius: radius.md, alignItems: "center", borderWidth: 1, borderColor: colors.border },
  quickIcon: { fontSize: 28, marginBottom: spacing.xs },
  quickLabel: { fontSize: fontSize.body, fontWeight: fontWeight.semibold, color: colors.textPrimary },
  quickCO2: { fontSize: fontSize.caption, color: colors.textTertiary, marginTop: 2 },
  impactCard: { backgroundColor: colors.background, marginHorizontal: spacing.lg, padding: spacing.lg, borderRadius: radius.md, flexDirection: "row", justifyContent: "space-between", borderWidth: 1, borderColor: colors.border },
  dayColumn: { alignItems: "center" },
  dayBar: { width: 24, backgroundColor: colors.primaryLight, borderRadius: 4 },
  dayLabel: { fontSize: fontSize.caption, color: colors.textTertiary, marginTop: spacing.xs },
  premiumBanner: { backgroundColor: colors.background, margin: spacing.lg, padding: spacing.lg, borderRadius: radius.md, flexDirection: "row", alignItems: "center", borderWidth: 1, borderColor: colors.primary },
  premiumIcon: { fontSize: 24, marginRight: spacing.md },
  premiumContent: { flex: 1 },
  premiumTitle: { fontSize: fontSize.body, fontWeight: fontWeight.bold, color: colors.primary },
  premiumText: { fontSize: fontSize.caption, color: colors.textSecondary, marginTop: 2 },
  premiumArrow: { fontSize: 24, color: colors.primary },
  spacer: { height: spacing.xxxl },
});
