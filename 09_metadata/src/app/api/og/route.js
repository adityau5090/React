import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request) {
    const { searchParams } = new URL(request.url);

    const title = searchParams.get("title") || "My Default Title";
    const description = searchParams.get("description") || "My Default Description";
 
    return new ImageResponse(
        (
            <div
                style={{
                    display: "flex",
                    height: "100%",
                    width: "100%",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundImage: "linear-gradient(90deg, #007cf0, #00dfd8)",
                    fontSize: 60,
                    letterSpacing: -2,
                    fontWeight: 700,
                    textAlign: "center",
                    color: "white",
                    padding: "0 120px",
                }}>
                    <div style={{ marginBottom: 20}}>{title}</div>
                    <div style={{
                        fontSize: 30,
                        fontWeight: 400,
                        opacity: 0.8,
                        lineHeight: 1.4,
                    }}>
                        {description}   
                    </div>
            </div>
        ),
    {
        width: 1200,
        height: 630,
    }
)
}