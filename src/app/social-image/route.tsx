import { ImageResponse } from "next/og";
export const dynamic = "force-static";
export function GET() {
 return new ImageResponse(<div style={{ display: "flex", width: "100%", height: "100%", background: "#FBF4EF", color: "#295C50", alignItems: "center", justifyContent: "center", flexDirection: "column", borderBottom: "24px solid #EA6F32" }}><div style={{ fontSize: 160, fontWeight: 800 }}>AVRA</div><div style={{ fontSize: 48 }}>Activa lo natural</div></div>, { width: 1200, height: 630 });
}
