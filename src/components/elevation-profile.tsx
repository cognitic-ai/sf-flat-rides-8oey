import { Text, View } from "react-native";
import * as AC from "@bacons/apple-colors";

export default function ElevationProfile({
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
    <View style={{ gap: 8 }}>
      <Text
        selectable
        style={{ fontSize: 15, fontWeight: "600", color: AC.label as any }}
      >
        Elevation Profile
      </Text>
      <View
        style={{
          height: 100,
          backgroundColor: AC.tertiarySystemGroupedBackground as any,
          borderRadius: 12,
          borderCurve: "continuous",
          padding: 12,
          flexDirection: "row",
          alignItems: "flex-end",
          gap: 3,
        }}
      >
        {profile.map((val, i) => {
          const normalized = (val - min) / range;
          return (
            <View
              key={i}
              style={{
                flex: 1,
                height: `${Math.max(8, normalized * 100)}%`,
                backgroundColor: color,
                borderRadius: 3,
                borderCurve: "continuous",
                opacity: 0.4 + normalized * 0.6,
              }}
            />
          );
        })}
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text
          selectable
          style={{
            fontSize: 12,
            color: AC.tertiaryLabel as any,
            fontVariant: ["tabular-nums"],
          }}
        >
          Min: {min} ft
        </Text>
        <Text
          selectable
          style={{
            fontSize: 12,
            color: AC.tertiaryLabel as any,
            fontVariant: ["tabular-nums"],
          }}
        >
          Max: {max} ft
        </Text>
      </View>
    </View>
  );
}
