import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import { colors, spacing, radius, fontSize, fontWeight } from "../../src/ui/theme";

const categories = [
  { id: "transport", icon: "🚗", name: "Transportation", items: ["Car Drive", "Public Transit", "Flight", "Bike"] },
  { id: "home", icon: "🏠", name: "Home Energy", items: ["Electricity", "Heating", "Cooling", "Water"] },
  { id: "food", icon: "🥗", name: "Food & Diet", items: ["Meat", "Vegetables", "Dairy", "Takeout"] },
  { id: "shopping", icon: "🛍️", name: "Shopping", items: ["Clothing", "Electronics", "Furniture", "Other"] },
];

export default function TrackScreen() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [amount, setAmount] = useState("");

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.header}>Log Your Activity</Text>
      
      {/* Categories */}
      <Text style={styles.sectionTitle}>Category</Text>
      <View style={styles.categoryGrid}>
        {categories.map((cat) => (
          <TouchableOpacity key={cat.id} style={[styles.categoryCard, selectedCategory === cat.id && styles.categoryCardActive]} onPress={() => setSelectedCategory(cat.id)}>
            <Text style={styles.categoryIcon}>{cat.icon}</Text>
            <Text style={[styles.categoryName, selectedCategory === cat.id && styles.categoryNameActive]}>{cat.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Activity Type */}
      {selectedCategory && (
        <>
          <Text style={styles.sectionTitle}>Activity Type</Text>
          <View style={styles.activityGrid}>
            {categories.find(c => c.id === selectedCategory)?.items.map((item, i) => (
              <TouchableOpacity key={i} style={styles.activityCard}>
                <Text style={styles.activityName}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </>
      )}

      {/* Amount */}
      <Text style={styles.sectionTitle}>Amount / Duration</Text>
      <View style={styles.inputRow}>
        <TextInput style={styles.input} placeholder="e.g., 25" placeholderTextColor={colors.textTertiary} value={amount} onChangeText={setAmount} keyboardType="numeric" />
        <View style={styles.unitSelector}><Text style={styles.unitText}>km</Text></View>
      </View>

      {/* Log Button */}
      <TouchableOpacity style={styles.logButton} disabled={!selectedCategory || !amount}>
        <Text style={styles.logButtonText}>Log Activity</Text>
      </TouchableOpacity>

      {/* Recent */}
      <Text style={styles.sectionTitle}>Recent Activities</Text>
      {[
        { icon: "🚗", name: "Car Drive", date: "Today", co2: "2.1 kg" },
        { icon: "✈️", name: "Flight to NYC", date: "Yesterday", co2: "150 kg" },
        { icon: "💡", name: "Home Electricity", date: "2 days ago", co2: "0.8 kg" },
      ].map((item, i) => (
        <View key={i} style={styles.recentItem}>
          <Text style={styles.recentIcon}>{item.icon}</Text>
          <View style={styles.recentContent}>
            <Text style={styles.recentName}>{item.name}</Text>
            <Text style={styles.recentDate}>{item.date}</Text>
          </View>
          <Text style={styles.recentCO2}>{item.co2}</Text>
        </View>
      ))}

      <View style={styles.spacer} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.surface, padding: spacing.lg },
  header: { fontSize: fontSize.header, fontWeight: fontWeight.bold, color: colors.textPrimary, marginBottom: spacing.lg },
  sectionTitle: { fontSize: fontSize.body, fontWeight: fontWeight.semibold, color: colors.textPrimary, marginBottom: spacing.sm, marginTop: spacing.lg },
  categoryGrid: { flexDirection: "row", flexWrap: "wrap", gap: spacing.sm },
  categoryCard: { width: "47%", backgroundColor: colors.background, padding: spacing.lg, borderRadius: radius.md, alignItems: "center", borderWidth: 1, borderColor: colors.border },
  categoryCardActive: { borderColor: colors.primary, backgroundColor: colors.primary + "10" },
  categoryIcon: { fontSize: 32, marginBottom: spacing.xs },
  categoryName: { fontSize: fontSize.caption, color: colors.textSecondary, textAlign: "center" },
  categoryNameActive: { color: colors.primary, fontWeight: fontWeight.semibold },
  activityGrid: { flexDirection: "row", flexWrap: "wrap", gap: spacing.sm },
  activityCard: { backgroundColor: colors.background, paddingHorizontal: spacing.lg, paddingVertical: spacing.md, borderRadius: radius.full, borderWidth: 1, borderColor: colors.border },
  activityName: { fontSize: fontSize.caption, color: colors.textPrimary },
  inputRow: { flexDirection: "row", gap: spacing.sm },
  input: { flex: 1, backgroundColor: colors.background, padding: spacing.md, borderRadius: radius.md, fontSize: fontSize.title, borderWidth: 1, borderColor: colors.border },
  unitSelector: { backgroundColor: colors.background, padding: spacing.md, borderRadius: radius.md, justifyContent: "center", borderWidth: 1, borderColor: colors.border },
  unitText: { fontSize: fontSize.body, color: colors.textSecondary },
  logButton: { backgroundColor: colors.primary, padding: spacing.lg, borderRadius: radius.md, alignItems: "center", marginTop: spacing.xl },
  logButtonText: { color: colors.textInverse, fontSize: fontSize.body, fontWeight: fontWeight.semibold },
  recentItem: { flexDirection: "row", alignItems: "center", backgroundColor: colors.background, padding: spacing.lg, borderRadius: radius.md, marginBottom: spacing.sm, borderWidth: 1, borderColor: colors.border },
  recentIcon: { fontSize: 24, marginRight: spacing.md },
  recentContent: { flex: 1 },
  recentName: { fontSize: fontSize.body, fontWeight: fontWeight.medium, color: colors.textPrimary },
  recentDate: { fontSize: fontSize.caption, color: colors.textTertiary, marginTop: 2 },
  recentCO2: { fontSize: fontSize.body, fontWeight: fontWeight.semibold, color: colors.primary },
  spacer: { height: spacing.xxxl },
});
