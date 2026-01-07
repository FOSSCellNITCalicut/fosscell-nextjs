"use client";
import { useEffect, useState } from "react";

export default function FossmeetBanner() {
  const targetDate = new Date("2026-02-27T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      const diff = targetDate - Date.now();

      if (diff <= 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) return null;

  return (
    <div style={{ background: "#000000ff", color: "#000000ff", padding: "40px 20px", borderRadius: "0px" }}>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 40,
        maxWidth: 1000,
        margin: "0 auto",
        flexWrap: "wrap"
      }}>
        <div style={{ textAlign: "left", flex: 1, minWidth: 250 }}>
          <h1 style={{ margin: 0, fontSize: "62px", fontWeight: "bold" }}>
            <span style={{ color: "#FA8860" }}>FOSS</span>
            <span style={{ color: "#ffffff" }}>Meet'26</span>
          </h1>
          <p style={{ margin: "8px 0 0",color:"#FA8860",fontSize: "20px", opacity: 0.8 }}>27 Feb – 1 Mar</p>
        </div>

        <div style={{
          textAlign: "center",
          minWidth: 280
        }}>
          
          <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
            <div style={{ background: "rgba(250, 136, 96, 0.2)", padding: "24px 32px", borderRadius: "8px", border: "1px solid #FA8860" }}>
              <p style={{ margin: 0, fontSize: "48px", fontWeight: "bold", color: "#ffffff" }}>{timeLeft.days}</p>
              <p style={{ margin: "12px 0 0", fontSize: "14px", color: "#FA8860", textTransform: "uppercase" }}>Days</p>
            </div>
            <div style={{ background: "rgba(250, 136, 96, 0.2)", padding: "24px 32px", borderRadius: "8px", border: "1px solid #FA8860" }}>
              <p style={{ margin: 0, fontSize: "48px", fontWeight: "bold", color: "#ffffff" }}>{timeLeft.hours}</p>
              <p style={{ margin: "12px 0 0", fontSize: "14px", color: "#FA8860", textTransform: "uppercase" }}>Hours</p>
            </div>
            <div style={{ background: "rgba(250, 136, 96, 0.2)", padding: "24px 32px", borderRadius: "8px", border: "1px solid #FA8860" }}>
              <p style={{ margin: 0, fontSize: "48px", fontWeight: "bold", color: "#ffffff" }}>{timeLeft.minutes}</p>
              <p style={{ margin: "12px 0 0", fontSize: "14px", color: "#FA8860", textTransform: "uppercase" }}>Mins</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
