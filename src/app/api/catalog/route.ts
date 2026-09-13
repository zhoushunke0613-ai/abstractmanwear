import { NextResponse } from "next/server";
import {
  getLocale,
  isSameOrigin,
  isValidEmail,
  readFormValue,
  sendFormEmail,
} from "@/lib/form-email";

function redirectToForm(request: Request, locale: string, status: string) {
  return NextResponse.redirect(new URL(`/${locale}/catalog?form=${status}#download`, request.url), 303);
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
  const interest = readFormValue(formData, "interest", 160);

  if (!name || !isValidEmail(email)) {
    return redirectToForm(request, locale, "invalid");
  }

  try {
    await sendFormEmail({
      subject: `Catalog request from ${company || name}`,
      replyTo: email,
      fields: [
        { label: "Name", value: name },
        { label: "Company / Brand", value: company },
        { label: "Email", value: email },
        { label: "Product interest", value: interest },
      ],
    });

    return redirectToForm(request, locale, "success");
  } catch (error) {
    console.error("Catalog form delivery failed", error instanceof Error ? error.message : "Unknown error");
    return redirectToForm(request, locale, "error");
  }
}
