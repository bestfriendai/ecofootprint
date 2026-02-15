import { View, Text, StyleSheet, ScrollView } from "react-native";
import { colors, spacing, radius, fontSize, fontWeight } from "../../src/ui/theme";

export default function InsightsScreen() {
  const monthlyData = { total: "245 kg", avg: "8.2 kg/day", change: "-12%" };
  const breakdown = [
    { category: "Transportation", value: 45, color: "#3B82F6" },
    { category: "Home Energy", value: 25, color: "#F59E0B" },
    { category: "Food", value: 20, color: "#10B981" },
    { category: "Shopping", value: 10, color: "#8B5CF6" },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.header}>Your Impact</Text>

      {/* Monthly Summary */}
      <View style={styles.summaryCard}>
        <Text style={styles.summaryTitle}>This Month</Text>
        <Text style={styles.summaryValue}>{monthlyData.total}</Text>
        <View style={styles.summaryRow}>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>Daily Avg</Text>
            <Text style={styles.summaryItemValue}>{monthlyData.avg}</Text>
          </View>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>Change</Text>
            <Text style={[styles.summaryItemValue, { color: colors.success }]}>{monthlyData.change}</Text>
          </View>
        </View>
      </View>

      {/* Breakdown */}
      <Text style={styles.sectionTitle}>Carbon Footprint Breakdown</Text>
      <View style={styles.breakdownCard}>
        {breakdown.map((item, i) => (
          <View key={i} style={styles.breakdownRow}>
            <View style={[styles.breakdownDot, { backgroundColor: item.color }]} />
            <Text style={styles.breakdownLabel}>{item.category}</Text>
            <View style={styles.breakdownBar}>
              <View style={[styles.breakdownFill, { width: `${item.value}%`, backgroundColor: item.color }]} />
            </View>
            <Text style={styles.breakdownValue}>{item.value}%</Text>
          </View>
        ))}
      </View>

      {/* Achievements */}
      <Text style={styles.sectionTitle}>Eco Achievements</Text>
      <View style={styles.achievementsGrid}>
        {[
          { icon: "🌱", title: "First Step", earned: true },
          { icon: "🚶", title: "Walk 10km", earned: true },
          { icon: "🚴", title: "Bike 50km", earned: true },
          { icon: "🌳", title: "Plant a Tree", earned: false },
          { icon: "🏠", title: "Zero Energy Day", earned: false },
          { icon: "🥗", title: "Vegan Week", earned: false },
        ].map((a, i) => (
          <View key={i} style={[styles.achievementCard, !a.earned && styles.achievementLocked]}>
            <Text style={styles.achievementIcon}>{a.icon}</Text>
            <Text style={styles.achievementTitle}>{a.title}</Text>
          </View>
        ))}
      </View>

      <View style={styles.spacer} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.surface, padding: spacing.lg },
  header: { fontSize: fontSize.header, fontWeight: fontWeight.bold, color: colors.textPrimary, marginBottom: spacing.lg },
  summaryCard: { backgroundColor: colors.primary, padding: spacing.xl, borderRadius: radius.lg },
  summaryTitle: { fontSize: fontSize.body, color: "rgba(255,255,255,0.8)" },
  summaryValue: { fontSize: 40, fontWeight: fontWeight.bold, color: colors.textInverse, marginVertical: spacing.sm },
  summaryRow: { flexDirection: "row", marginTop: spacing.md },
  summaryItem: { marginRight: spacing.xl },
  summaryLabel: { fontSize: fontSize.caption, color: "rgba(255,255,255,0.8)" },
  summaryItemValue: { fontSize: fontSize.body, fontWeight: fontWeight.semibold, color: colors.textInverse },
  sectionTitle: { fontSize: fontSize.subtitle, fontWeight: fontWeight.semibold, color: colors.textPrimary, marginBottom: spacing.md, marginTop: spacing.lg },
  breakdownCard: { backgroundColor: colors.background, padding: spacing.lg, borderRadius: radius.lg, borderWidth: 1, borderColor: colors.border },
  breakdownRow: { flexDirection: "row", alignItems: "center", marginBottom: spacing.md },
  breakdownDot: { width: 12, height: 12, borderRadius: 6, marginRight: spacing.sm },
  breakdownLabel: { width: 100, fontSize: fontSize.caption, color: colors.textPrimary },
  breakdownBar: { flex: 1, height: 8, backgroundColor: colors.border, borderRadius: 4, marginRight: spacing.sm },
  breakdownFill: { height: "100%", borderRadius: 4 },
  breakdownValue: { width: 40, fontSize: fontSize.caption, color: colors.textSecondary, textAlign: "right" },
  achievementsGrid: { flexDirection: "row", flexWrap: "wrap", gap: spacing.sm },
  achievementCard: { width: "31%", backgroundColor: colors.background, padding: spacing.md, borderRadius: radius.md, alignItems: "center", borderWidth: 1, borderColor: colors.border },
  achievementLocked: { opacity: 0.5 },
  achievementIcon: { fontSize: 28, marginBottom: spacing.xs },
  achievementTitle: { fontSize: 10, color: colors.textPrimary, textAlign: "center" },
  spacer: { height: spacing.xxxl },
});
