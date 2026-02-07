import { Image } from "expo-image";
import { Text, View } from "react-native";
import * as AC from "@bacons/apple-colors";

export default function RouteHighlights({
  highlights,
  color,
}: {
  highlights: string[];
  color: string;
}) {
  return (
    <View style={{ gap: 8 }}>
      <Text
        selectable
        style={{ fontSize: 15, fontWeight: "600", color: AC.label as any }}
      >
        Highlights
      </Text>
      <View style={{ gap: 6 }}>
        {highlights.map((item, i) => (
          <View
            key={i}
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              backgroundColor: AC.tertiarySystemGroupedBackground as any,
              padding: 12,
              borderRadius: 10,
              borderCurve: "continuous",
            }}
          >
            <View
              style={{
                width: 28,
                height: 28,
                borderRadius: 14,
                backgroundColor: color + "20",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {process.env.EXPO_OS === "ios" ? (
                <Image
                  source="sf:mappin.and.ellipse"
                  style={{ fontSize: 13, color } as any}
                />
              ) : (
                <Text style={{ fontSize: 12 }}>📍</Text>
              )}
            </View>
            <Text
              selectable
              style={{
                fontSize: 15,
                color: AC.label as any,
                flexShrink: 1,
              }}
            >
              {item}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}
