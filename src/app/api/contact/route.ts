import { NextResponse } from "next/server";
import {
  getLocale,
  isSameOrigin,
  isValidEmail,
  readFormValue,
  sendFormEmail,
} from "@/lib/form-email";

function redirectToForm(request: Request, locale: string, status: string) {
  return NextResponse.redirect(new URL(`/${locale}/contact?form=${status}`, request.url), 303);
}

export async function POST(request: Request) {
  if (!isSameOrigin(request)) {
    return new Response("Forbidden", { status: 403 });
  }

  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > 20_000) {
    return new Response("Payload too large", { status: 413 });
  }

  const formData = await request.formData();
  const locale = getLocale(formData);

  if (readFormValue(formData, "website", 200)) {
    return redirectToForm(request, locale, "success");
  }

  const name = readFormValue(formData, "name", 120);
  const company = readFormValue(formData, "company", 160);
  const email = readFormValue(formData, "email", 254);
  const country = readFormValue(formData, "country", 120);
  const projectType = readFormValue(formData, "projectType", 120);
  const productCategory = readFormValue(formData, "productCategory", 120);
  const volume = readFormValue(formData, "volume", 120);
  const timeline = readFormValue(formData, "timeline", 120);
  const message = readFormValue(formData, "message");
  const nda = formData.get("nda") === "on" ? "Yes" : "No";

  if (!name || !message || !isValidEmail(email)) {
    return redirectToForm(request, locale, "invalid");
  }

  try {
    await sendFormEmail({
      subject: `Website inquiry from ${company || name}`,
      replyTo: email,
      fields: [
        { label: "Name", value: name },
        { label: "Company / Brand", value: company },
        { label: "Email", value: email },
        { label: "Country", value: country },
        { label: "Project type", value: projectType },
        { label: "Product category", value: productCategory },
        { label: "Target volume", value: volume },
        { label: "Launch timeline", value: timeline },
        { label: "NDA requested", value: nda },
        { label: "Message", value: message },
      ],
    });

    return redirectToForm(request, locale, "success");
  } catch (error) {
    console.error("Contact form delivery failed", error instanceof Error ? error.message : "Unknown error");
    return redirectToForm(request, locale, "error");
  }
}
