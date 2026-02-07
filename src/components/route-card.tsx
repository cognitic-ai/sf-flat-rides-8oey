import { Image } from "expo-image";
import { Pressable, Text, View } from "react-native";
import * as AC from "@bacons/apple-colors";
import type { BikeRoute } from "@/data/routes";

export default function RouteCard({ route }: { route: BikeRoute }) {
  return (
    <Pressable
      style={({ pressed }) => ({
        backgroundColor: AC.secondarySystemGroupedBackground as any,
        borderRadius: 16,
        borderCurve: "continuous",
        overflow: "hidden",
        opacity: pressed ? 0.85 : 1,
        boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
      })}
    >
      <View
        style={{
          backgroundColor: route.color + "18",
          padding: 16,
          gap: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
            <View
              style={{
                width: 36,
                height: 36,
                borderRadius: 18,
                backgroundColor: route.color,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {process.env.EXPO_OS === "ios" ? (
                <Image
                  source="sf:bicycle"
                  style={{ fontSize: 16, color: "white" } as any}
                />
              ) : (
                <Text style={{ fontSize: 16 }}>🚲</Text>
              )}
            </View>
            <Text
              selectable
              style={{
                fontSize: 18,
                fontWeight: "700",
                color: AC.label as any,
                flexShrink: 1,
              }}
              numberOfLines={1}
            >
              {route.name}
            </Text>
          </View>
          <DifficultyBadge difficulty={route.difficulty} />
        </View>

        <Text
          selectable
          style={{
            fontSize: 14,
            lineHeight: 20,
            color: AC.secondaryLabel as any,
          }}
          numberOfLines={2}
        >
          {route.description}
        </Text>

        <View style={{ flexDirection: "row", gap: 16, flexWrap: "wrap" }}>
          <StatChip
            icon="sf:arrow.left.and.right"
            fallback="↔"
            label={route.distance}
          />
          <StatChip
            icon="sf:clock"
            fallback="⏱"
            label={route.duration}
          />
          <StatChip
            icon="sf:arrow.up.right"
            fallback="↗"
            label={route.elevationGain}
          />
        </View>

        <MiniElevation profile={route.elevationProfile} color={route.color} />
      </View>
    </Pressable>
  );
}

function DifficultyBadge({ difficulty }: { difficulty: string }) {
  const isEasy = difficulty === "Easy";
  return (
    <View
      style={{
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 12,
        borderCurve: "continuous",
        backgroundColor: isEasy ? "#34C75920" : "#FF950020",
      }}
    >
      <Text
        style={{
          fontSize: 12,
          fontWeight: "600",
          color: isEasy ? "#34C759" : "#FF9500",
        }}
      >
        {difficulty}
      </Text>
    </View>
  );
}

function StatChip({
  icon,
  fallback,
  label,
}: {
  icon: string;
  fallback: string;
  label: string;
}) {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
      {process.env.EXPO_OS === "ios" ? (
        <Image
          source={icon}
          style={{ fontSize: 12, color: AC.secondaryLabel } as any}
        />
      ) : (
        <Text style={{ fontSize: 12 }}>{fallback}</Text>
      )}
      <Text
        style={{
          fontSize: 13,
          fontWeight: "500",
          color: AC.secondaryLabel as any,
        }}
      >
        {label}
      </Text>
    </View>
  );
}

function MiniElevation({
  profile,
  color,
}: {
  profile: number[];
  color: string;
}) {
  const max = Math.max(...profile);
  const min = Math.min(...profile);
  const range = max - min || 1;

  return (
    <View
      style={{
        height: 28,
        flexDirection: "row",
        alignItems: "flex-end",
        gap: 2,
        paddingTop: 4,
      }}
    >
      {profile.map((val, i) => (
        <View
          key={i}
          style={{
            flex: 1,
            height: 4 + ((val - min) / range) * 20,
            backgroundColor: color + "60",
            borderRadius: 2,
            borderCurve: "continuous",
          }}
        />
      ))}
    </View>
  );
}
