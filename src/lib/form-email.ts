type EmailField = {
  label: string;
  value: string;
};

type SendFormEmailOptions = {
  subject: string;
  replyTo: string;
  fields: EmailField[];
};

export const FORM_VALUE_LIMIT = 2_000;

export function readFormValue(
  formData: FormData,
  name: string,
  maxLength = FORM_VALUE_LIMIT,
) {
  const value = formData.get(name);

  if (typeof value !== "string") {
    return "";
  }

  return value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "").trim().slice(0, maxLength);
}

export function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && value.length <= 254;
}

export function getLocale(formData: FormData) {
  return readFormValue(formData, "locale", 2) === "zh" ? "zh" : "en";
}

export function isSameOrigin(request: Request) {
  const origin = request.headers.get("origin");

  if (!origin) {
    return true;
  }

  try {
    return new URL(origin).host === new URL(request.url).host;
  } catch {
    return false;
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function sendFormEmail({ subject, replyTo, fields }: SendFormEmailOptions) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.FORM_FROM_EMAIL;
  const to = process.env.FORM_TO_EMAIL;

  if (!apiKey || !from || !to) {
    throw new Error("Form email delivery is not configured");
  }

  const text = fields.map(({ label, value }) => `${label}: ${value || "-"}`).join("\n");
  const html = `
    <div style="font-family: Arial, sans-serif; color: #1f1c19; line-height: 1.6">
      <h1 style="font-size: 20px; margin: 0 0 20px">${escapeHtml(subject)}</h1>
      <table style="border-collapse: collapse; width: 100%; max-width: 680px">
        ${fields
          .map(
            ({ label, value }) => `
              <tr>
                <th style="border-top: 1px solid #ddd6cd; padding: 10px 14px 10px 0; text-align: left; vertical-align: top; width: 160px">${escapeHtml(label)}</th>
                <td style="border-top: 1px solid #ddd6cd; padding: 10px 0; white-space: pre-wrap">${escapeHtml(value || "-")}</td>
              </tr>`,
          )
          .join("")}
      </table>
    </div>`;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: replyTo,
      subject,
      text,
      html,
    }),
  });

  if (!response.ok) {
    throw new Error(`Form email delivery failed with status ${response.status}`);
  }
}
