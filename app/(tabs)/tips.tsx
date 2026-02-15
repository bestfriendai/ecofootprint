import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { colors, spacing, radius, fontSize, fontWeight } from "../../src/ui/theme";

const tips = [
  { icon: "🚶", title: "Walk More", desc: "Replace short car trips with walking. Save 0.5 kg CO2 per km.", impact: "High" },
  { icon: "💡", title: "LED Bulbs", desc: "Switch to LED bulbs. Save 80% on lighting energy.", impact: "Medium" },
  { icon: "🌡️", title: "Thermostat", desc: "Lower heating by 2°C. Save 300 kg CO2/year.", impact: "High" },
  { icon: "🥗", title: "Meatless Monday", desc: "Skip meat once a week. Save 2 kg CO2 per meal.", impact: "High" },
  { icon: "🧺", title: "Reusable Bags", desc: "Use cloth bags. Save 3 plastic bags per week.", impact: "Low" },
  { icon: "🚿", title: "Shorter Showers", desc: "5-min showers vs 10-min. Save 30% water energy.", impact: "Medium" },
];

export default function TipsScreen() {
  const router = useRouter();
  const getImpactColor = (impact: string) => {
    if (impact === "High") return colors.success;
    if (impact === "Medium") return colors.warning;
    return colors.textTertiary;
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.header}>Eco Tips</Text>
      <Text style={styles.subheader}>Personalized suggestions to reduce your footprint</Text>

      <View style={styles.tipsList}>
        {tips.map((tip, i) => (
          <TouchableOpacity key={i} style={styles.tipCard}>
            <Text style={styles.tipIcon}>{tip.icon}</Text>
            <View style={styles.tipContent}>
              <Text style={styles.tipTitle}>{tip.title}</Text>
              <Text style={styles.tipDesc}>{tip.desc}</Text>
            </View>
            <View style={[styles.impactBadge, { backgroundColor: getImpactColor(tip.impact) + "20" }]}>
              <Text style={[styles.impactText, { color: getImpactColor(tip.impact) }]}>{tip.impact}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.premiumBanner} onPress={() => router.push("/paywall")}>
        <Text style={styles.premiumIcon}>⚡</Text>
        <View style={styles.premiumContent}>
          <Text style={styles.premiumTitle}>Get Premium</Text>
          <Text style={styles.premiumText}>AI-powered personalized recommendations</Text>
        </View>
        <Text style={styles.premiumArrow}>→</Text>
      </TouchableOpacity>

      <View style={styles.spacer} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.surface, padding: spacing.lg },
  header: { fontSize: fontSize.header, fontWeight: fontWeight.bold, color: colors.textPrimary },
  subheader: { fontSize: fontSize.body, color: colors.textTertiary, marginBottom: spacing.lg },
  tipsList: { gap: spacing.sm },
  tipCard: { flexDirection: "row", alignItems: "center", backgroundColor: colors.background, padding: spacing.lg, borderRadius: radius.md, borderWidth: 1, borderColor: colors.border },
  tipIcon: { fontSize: 28, marginRight: spacing.md },
  tipContent: { flex: 1 },
  tipTitle: { fontSize: fontSize.body, fontWeight: fontWeight.semibold, color: colors.textPrimary },
  tipDesc: { fontSize: fontSize.caption, color: colors.textTertiary, marginTop: 2 },
  impactBadge: { paddingHorizontal: spacing.sm, paddingVertical: spacing.xs, borderRadius: radius.full },
  impactText: { fontSize: 11, fontWeight: fontWeight.semibold },
  premiumBanner: { flexDirection: "row", alignItems: "center", backgroundColor: colors.background, marginTop: spacing.lg, padding: spacing.lg, borderRadius: radius.md, borderWidth: 1, borderColor: colors.primary },
  premiumIcon: { fontSize: 24, marginRight: spacing.md },
  premiumContent: { flex: 1 },
  premiumTitle: { fontSize: fontSize.body, fontWeight: fontWeight.bold, color: colors.primary },
  premiumText: { fontSize: fontSize.caption, color: colors.textSecondary, marginTop: 2 },
  premiumArrow: { fontSize: 24, color: colors.primary },
  spacer: { height: spacing.xxxl },
});
