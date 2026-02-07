import { Image } from "expo-image";
import { Stack, useLocalSearchParams } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import * as AC from "@bacons/apple-colors";
import ElevationProfile from "@/components/elevation-profile";
import RouteHighlights from "@/components/route-highlights";
import RouteMap from "@/components/route-map";
import { ROUTES } from "@/data/routes";

export default function RouteDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const route = ROUTES.find((r) => r.id === id);

  if (!route) {
    return (
      <View
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        <Text style={{ fontSize: 17, color: AC.secondaryLabel as any }}>
          Route not found
        </Text>
      </View>
    );
  }

  return (
    <>
      <Stack.Screen options={{ title: route.name }} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{ flex: 1 }}
        contentContainerStyle={{ padding: 16, gap: 20, paddingBottom: 48 }}
      >
        <RouteMap route={route} />

        <View
          style={{
            backgroundColor: AC.secondarySystemGroupedBackground as any,
            borderRadius: 16,
            borderCurve: "continuous",
            padding: 16,
            gap: 12,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
            }}
          >
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: route.color,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {process.env.EXPO_OS === "ios" ? (
                <Image
                  source="sf:bicycle"
                  style={{ fontSize: 18, color: "white" } as any}
                />
              ) : (
                <Text style={{ fontSize: 18 }}>🚲</Text>
              )}
            </View>
            <View style={{ flex: 1 }}>
              <Text
                selectable
                style={{
                  fontSize: 22,
                  fontWeight: "700",
                  color: AC.label as any,
                }}
              >
                {route.name}
              </Text>
              <DifficultyBadge difficulty={route.difficulty} />
            </View>
          </View>

          <Text
            selectable
            style={{
              fontSize: 15,
              lineHeight: 22,
              color: AC.secondaryLabel as any,
            }}
          >
            {route.description}
          </Text>

          <View
            style={{
              flexDirection: "row",
              gap: 8,
              flexWrap: "wrap",
            }}
          >
            <StatPill
              icon="sf:arrow.left.and.right"
              fallback="↔"
              label="Distance"
              value={route.distance}
              color={route.color}
            />
            <StatPill
              icon="sf:clock"
              fallback="⏱"
              label="Duration"
              value={route.duration}
              color={route.color}
            />
            <StatPill
              icon="sf:arrow.up.right"
              fallback="↗"
              label="Elevation"
              value={route.elevationGain}
              color={route.color}
            />
          </View>
        </View>

        <View
          style={{
            backgroundColor: AC.secondarySystemGroupedBackground as any,
            borderRadius: 16,
            borderCurve: "continuous",
            padding: 16,
          }}
        >
          <ElevationProfile
            profile={route.elevationProfile}
            color={route.color}
          />
        </View>

        <View
          style={{
            backgroundColor: AC.secondarySystemGroupedBackground as any,
            borderRadius: 16,
            borderCurve: "continuous",
            padding: 16,
          }}
        >
          <RouteHighlights highlights={route.highlights} color={route.color} />
        </View>

        <View
          style={{
            backgroundColor: AC.tertiarySystemGroupedBackground as any,
            borderRadius: 12,
            borderCurve: "continuous",
            padding: 14,
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          {process.env.EXPO_OS === "ios" ? (
            <Image
              source="sf:info.circle"
              style={{ fontSize: 16, color: AC.secondaryLabel } as any}
            />
          ) : (
            <Text style={{ fontSize: 14 }}>ℹ️</Text>
          )}
          <Text
            selectable
            style={{
              fontSize: 13,
              color: AC.secondaryLabel as any,
              flex: 1,
              lineHeight: 18,
            }}
          >
            Routes are optimized for minimal hills. Actual conditions may vary.
            Always wear a helmet and follow local cycling laws.
          </Text>
        </View>
      </ScrollView>
    </>
  );
}

function DifficultyBadge({ difficulty }: { difficulty: string }) {
  const isEasy = difficulty === "Easy";
  return (
    <View
      style={{
        alignSelf: "flex-start",
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderRadius: 10,
        borderCurve: "continuous",
        backgroundColor: isEasy ? "#34C75920" : "#FF950020",
        marginTop: 4,
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

function StatPill({
  icon,
  fallback,
  label,
  value,
  color,
}: {
  icon: string;
  fallback: string;
  label: string;
  value: string;
  color: string;
}) {
  return (
    <View
      style={{
        flex: 1,
        minWidth: 90,
        backgroundColor: color + "12",
        borderRadius: 12,
        borderCurve: "continuous",
        padding: 12,
        alignItems: "center",
        gap: 4,
      }}
    >
      {process.env.EXPO_OS === "ios" ? (
        <Image
          source={icon}
          style={{ fontSize: 16, color } as any}
        />
      ) : (
        <Text style={{ fontSize: 16 }}>{fallback}</Text>
      )}
      <Text
        selectable
        style={{
          fontSize: 15,
          fontWeight: "700",
          color: AC.label as any,
          fontVariant: ["tabular-nums"],
        }}
      >
        {value}
      </Text>
      <Text
        style={{
          fontSize: 11,
          color: AC.tertiaryLabel as any,
          fontWeight: "500",
        }}
      >
        {label}
      </Text>
    </View>
  );
}
