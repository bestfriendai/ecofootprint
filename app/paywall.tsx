import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { colors, spacing, radius, fontSize, fontWeight } from "../src/ui/theme";

export default function PaywallScreen() {
  const router = useRouter();
  const features = [
    { icon: "📊", title: "Advanced Analytics", desc: "Detailed breakdowns & trends" },
    { icon: "🤖", title: "AI Recommendations", desc: "Personalized eco tips" },
    { icon: "🌍", title: "Community Challenges", desc: "Compete with friends" },
    { icon: "🏆", title: "All Achievements", desc: "Unlock everything" },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerIcon}>⚡</Text>
        <Text style={styles.headerTitle}>EcoFootprint Premium</Text>
        <Text style={styles.headerSubtitle}>Maximize your environmental impact</Text>
      </View>
      <View style={styles.featuresSection}>
        <Text style={styles.featuresTitle}>Premium Features</Text>
        {features.map((f, i) => (
          <View key={i} style={styles.featureItem}>
            <View style={styles.featureIcon}><Text>{f.icon}</Text></View>
            <View style={styles.featureContent}><Text style={styles.featureTitle}>{f.title}</Text><Text style={styles.featureDesc}>{f.desc}</Text></View>
          </View>
        ))}
      </View>
      <View style={styles.pricingSection}>
        <TouchableOpacity style={styles.planCard}>
          <View style={styles.planBadge}><Text style={styles.planBadgeText}>BEST VALUE</Text></View>
          <Text style={styles.planName}>Annual</Text>
          <Text style={styles.priceAmount}>$29.99<Text style={styles.pricePeriod}>/year</Text></Text>
          <Text style={styles.priceSavings}>Save 50%</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.monthlyCard}><Text style={styles.monthlyName}>Monthly</Text><Text style={styles.monthlyAmount}>$4.99<Text style={styles.pricePeriod}>/mo</Text></Text></TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.ctaButton}><Text style={styles.ctaButtonText}>Start Free Trial</Text></TouchableOpacity>
      <TouchableOpacity style={styles.restoreButton}><Text style={styles.restoreButtonText}>Restore Purchases</Text></TouchableOpacity>
      <Text style={styles.terms}>By subscribing, you agree to our Terms. Subscription auto-renews.</Text>
      <TouchableOpacity style={styles.skipButton} onPress={() => router.back()}><Text style={styles.skipButtonText}>Maybe Later</Text></TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.surface },
  header: { backgroundColor: colors.primary, padding: spacing.xxl, alignItems: "center" },
  headerIcon: { fontSize: 48, marginBottom: spacing.sm },
  headerTitle: { fontSize: fontSize.header, fontWeight: fontWeight.bold, color: colors.textInverse },
  headerSubtitle: { fontSize: fontSize.body, color: "rgba(255,255,255,0.8)", marginTop: spacing.xs },
  featuresSection: { padding: spacing.lg },
  featuresTitle: { fontSize: fontSize.subtitle, fontWeight: fontWeight.semibold, color: colors.textPrimary, marginBottom: spacing.md },
  featureItem: { flexDirection: "row", alignItems: "center", backgroundColor: colors.background, padding: spacing.md, borderRadius: radius.md, marginBottom: spacing.sm, borderWidth: 1, borderColor: colors.border },
  featureIcon: { width: 40, height: 40, borderRadius: 20, backgroundColor: colors.primary + "15", alignItems: "center", justifyContent: "center", marginRight: spacing.md },
  featureContent: { flex: 1 },
  featureTitle: { fontSize: fontSize.body, fontWeight: fontWeight.semibold, color: colors.textPrimary },
  featureDesc: { fontSize: fontSize.caption, color: colors.textTertiary, marginTop: 2 },
  pricingSection: { padding: spacing.lg, gap: spacing.md },
  planCard: { backgroundColor: colors.primary, padding: spacing.xl, borderRadius: radius.lg, position: "relative" },
  planBadge: { position: "absolute", top: -10, right: spacing.lg, backgroundColor: colors.warning, paddingHorizontal: spacing.md, paddingVertical: spacing.xs, borderRadius: radius.full },
  planBadgeText: { fontSize: 10, fontWeight: fontWeight.bold, color: colors.textPrimary },
  planName: { fontSize: fontSize.title, fontWeight: fontWeight.bold, color: colors.textInverse },
  priceAmount: { fontSize: 36, fontWeight: fontWeight.bold, color: colors.textInverse, marginTop: spacing.xs },
  pricePeriod: { fontSize: fontSize.body, color: "rgba(255,255,255,0.8)" },
  priceSavings: { fontSize: fontSize.caption, color: "rgba(255,255,255,0.7)", marginTop: spacing.xs },
  monthlyCard: { backgroundColor: colors.background, padding: spacing.lg, borderRadius: radius.lg, borderWidth: 1, borderColor: colors.border },
  monthlyName: { fontSize: fontSize.title, fontWeight: fontWeight.bold, color: colors.textPrimary },
  monthlyAmount: { fontSize: 28, fontWeight: fontWeight.bold, color: colors.textPrimary, marginTop: spacing.xs },
  ctaButton: { backgroundColor: colors.primary, marginHorizontal: spacing.lg, padding: spacing.lg, borderRadius: radius.md, alignItems: "center" },
  ctaButtonText: { fontSize: fontSize.body, fontWeight: fontWeight.bold, color: colors.textInverse },
  restoreButton: { alignItems: "center", marginTop: spacing.md },
  restoreButtonText: { fontSize: fontSize.body, color: colors.textSecondary },
  terms: { fontSize: fontSize.caption, color: colors.textTertiary, textAlign: "center", marginHorizontal: spacing.lg, marginTop: spacing.lg, lineHeight: 18 },
  skipButton: { alignItems: "center", marginTop: spacing.xl, marginBottom: spacing.lg },
  skipButtonText: { fontSize: fontSize.body, color: colors.textTertiary },
});
