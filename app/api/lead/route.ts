import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, project, notes } = body;

    if (!phone) {
      return NextResponse.json(
        { error: "Phone number is required" },
        { status: 400 },
      );
    }

    const now = new Date();
    const formattedDate = now.toLocaleString("ar-EG", {
      timeZone: "Africa/Cairo",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });

    const lead = {
      date: formattedDate,
      timestamp: now.toISOString(),
      name: name?.trim() || "بدون اسم",
      phone: phone.trim(),
      project: project || "فندق ومنتجع جي-رتاج",
      notes: notes?.trim() || "",
    };

    // 1. Local backup in data/leads_backup.json
    try {
      const filePath = path.join(process.cwd(), "data", "leads_backup.json");
      let leads = [];
      if (fs.existsSync(filePath)) {
        const fileData = fs.readFileSync(filePath, "utf-8");
        leads = JSON.parse(fileData || "[]");
      }
      leads.push(lead);
      fs.writeFileSync(filePath, JSON.stringify(leads, null, 2), "utf-8");
    } catch (fsErr) {
      console.error("Failed to save lead locally:", fsErr);
    }

    // 2. Google Sheets Webhook integration
    const webhookUrl =
      process.env.GOOGLE_SHEET_WEBHOOK_URL ||
      "https://script.google.com/macros/s/AKfycbzNIstcaaJjjmeHJZ3GipqHKlGvueYEmjzQSOVN65o7z9hGy3FkKNnBnueLqINpLfI/exec";
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(lead),
          redirect: "follow",
        });
      } catch (sheetErr) {
        console.error("Failed to post to Google Sheets webhook:", sheetErr);
      }
    }

    return NextResponse.json({ success: true, lead });
  } catch (err: unknown) {
    const message =
      err instanceof Error ? err.message : "Internal Server Error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
