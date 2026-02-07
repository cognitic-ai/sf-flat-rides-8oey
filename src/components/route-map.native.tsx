import { View } from "react-native";
import MapView, { Polyline, Marker } from "react-native-maps";
import type { BikeRoute } from "@/data/routes";

export default function RouteMap({ route }: { route: BikeRoute }) {
  const startPoint = route.points[0];
  const endPoint = route.points[route.points.length - 1];

  return (
    <View
      style={{
        height: 260,
        borderRadius: 16,
        borderCurve: "continuous",
        overflow: "hidden",
      }}
    >
      <MapView
        style={{ flex: 1 }}
        initialRegion={route.region}
        showsUserLocation={false}
        showsCompass={false}
        pitchEnabled={false}
      >
        <Polyline
          coordinates={route.points}
          strokeColor={route.color}
          strokeWidth={4}
        />
        <Marker
          coordinate={startPoint}
          title="Start"
          pinColor="#34C759"
        />
        <Marker
          coordinate={endPoint}
          title="End"
          pinColor="#FF3B30"
        />
      </MapView>
    </View>
  );
}
