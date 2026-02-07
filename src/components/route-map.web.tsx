import { useEffect, useRef } from "react";
import { View, useColorScheme } from "react-native";
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { BikeRoute } from "@/data/routes";

L.Icon.Default.mergeOptions({
  imagePath: window.location.origin,
  iconUrl: (require("leaflet/dist/images/marker-icon.png") as any).uri,
  iconRetinaUrl: (require("leaflet/dist/images/marker-icon-2x.png") as any)
    .uri,
  shadowUrl: (require("leaflet/dist/images/marker-shadow.png") as any).uri,
});

export default function RouteMap({ route }: { route: BikeRoute }) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const scheme = useColorScheme();

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    const map = L.map(mapRef.current).setView(
      [route.region.latitude, route.region.longitude],
      14
    );

    const tileUrl =
      scheme === "dark"
        ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        : "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png";

    L.tileLayer(tileUrl, {
      attribution: "&copy; <a href='https://carto.com/'>CARTO</a>",
    }).addTo(map);

    const latLngs = route.points.map(
      (p) => [p.latitude, p.longitude] as L.LatLngTuple
    );

    L.polyline(latLngs, {
      color: route.color,
      weight: 4,
      opacity: 0.85,
    }).addTo(map);

    const startIcon = L.divIcon({
      className: "",
      html: `<div style="width:14px;height:14px;border-radius:50%;background:#34C759;border:2px solid white;box-shadow:0 1px 4px rgba(0,0,0,0.3)"></div>`,
      iconSize: [14, 14],
      iconAnchor: [7, 7],
    });

    const endIcon = L.divIcon({
      className: "",
      html: `<div style="width:14px;height:14px;border-radius:50%;background:#FF3B30;border:2px solid white;box-shadow:0 1px 4px rgba(0,0,0,0.3)"></div>`,
      iconSize: [14, 14],
      iconAnchor: [7, 7],
    });

    L.marker(latLngs[0], { icon: startIcon }).addTo(map).bindPopup("Start");
    L.marker(latLngs[latLngs.length - 1], { icon: endIcon })
      .addTo(map)
      .bindPopup("End");

    map.fitBounds(L.latLngBounds(latLngs), { padding: [30, 30] });

    mapInstanceRef.current = map;

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, [route, scheme]);

  return (
    <View
      style={{
        height: 260,
        borderRadius: 16,
        overflow: "hidden",
      }}
    >
      <div ref={mapRef} style={{ width: "100%", height: "100%" }} />
    </View>
  );
}
