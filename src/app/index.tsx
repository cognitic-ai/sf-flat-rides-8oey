import { Image } from "expo-image";
import { Link } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";
import * as AC from "@bacons/apple-colors";
import RouteCard from "@/components/route-card";
import { ROUTES } from "@/data/routes";

export default function IndexRoute() {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={{ flex: 1 }}
      contentContainerStyle={{ padding: 16, gap: 12, paddingBottom: 40 }}
    >
      <View
        style={{
          backgroundColor: AC.secondarySystemGroupedBackground as any,
          borderRadius: 14,
          borderCurve: "continuous",
          padding: 14,
          flexDirection: "row",
          alignItems: "center",
          gap: 12,
        }}
      >
        <View
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: "#34C75920",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {process.env.EXPO_OS === "ios" ? (
            <Image
              source="sf:leaf.fill"
              style={{ fontSize: 18, color: "#34C759" } as any}
            />
          ) : (
            <Text style={{ fontSize: 18 }}>🍃</Text>
          )}
        </View>
        <View style={{ flex: 1 }}>
          <Text
            selectable
            style={{
              fontSize: 14,
              fontWeight: "600",
              color: AC.label as any,
            }}
          >
            Low-incline routes for easy riding
          </Text>
          <Text
            selectable
            style={{
              fontSize: 13,
              color: AC.secondaryLabel as any,
              marginTop: 2,
            }}
          >
            Curated flat paths across San Francisco
          </Text>
        </View>
      </View>

      {ROUTES.map((route) => (
        <Link key={route.id} href={`/route/${route.id}`} asChild>
          <Link.Trigger>
            <Pressable>
              <RouteCard route={route} />
            </Pressable>
          </Link.Trigger>
          <Link.Preview />
        </Link>
      ))}
    </ScrollView>
  );
}
