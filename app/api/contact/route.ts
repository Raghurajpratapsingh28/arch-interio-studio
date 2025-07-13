import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, mobile, city, projectSize, projectLocation, requirements } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: "New Contact Form Submission for Arch Interio Studio",
      text: `
        Name: ${name}
        Mobile: ${mobile}
        City: ${city}
        Project Size: ${projectSize}
        Project Location: ${projectLocation}
        Requirements: ${requirements}
      `,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; background: #f9f9f9; padding: 32px; border-radius: 12px; max-width: 500px; margin: auto; box-shadow: 0 2px 12px rgba(0,0,0,0.07);">
          <div style="text-align: center; margin-bottom: 24px;">
            <img src="https://placehold.co/600x120?text=Arch+Interio+Studio" alt="Arch Interio Studio" style="max-width: 100%; border-radius: 8px;" />
          </div>
          <h2 style="color: #2d3748; text-align: center; margin-bottom: 24px;">New Contact Form Submission  for Arch Interio Studio</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: 600; color: #4a5568;">Name:</td>
              <td style="padding: 8px 0; color: #2d3748;">${name}</td>
            </tr>
            <tr style="background: #f1f5f9;">
              <td style="padding: 8px 0; font-weight: 600; color: #4a5568;">Mobile:</td>
              <td style="padding: 8px 0; color: #2d3748;">${mobile}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: 600; color: #4a5568;">City:</td>
              <td style="padding: 8px 0; color: #2d3748;">${city}</td>
            </tr>
            <tr style="background: #f1f5f9;">
              <td style="padding: 8px 0; font-weight: 600; color: #4a5568;">Project Size:</td>
              <td style="padding: 8px 0; color: #2d3748;">${projectSize}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: 600; color: #4a5568;">Project Location:</td>
              <td style="padding: 8px 0; color: #2d3748;">${projectLocation}</td>
            </tr>
            <tr style="background: #f1f5f9;">
              <td style="padding: 8px 0; font-weight: 600; color: #4a5568;">Requirements:</td>
              <td style="padding: 8px 0; color: #2d3748;">${requirements}</td>
            </tr>
          </table>
          <div style="margin-top: 32px; text-align: center; color: #a0aec0; font-size: 13px;">
            <em>Arch Interio Studio Contact Form</em>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 });
  }
} 