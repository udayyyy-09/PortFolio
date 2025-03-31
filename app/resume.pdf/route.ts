import { NextResponse } from "next/server"

// This is a simple route handler to simulate a resume download
// In a real application, you would serve an actual PDF file
export async function GET() {
  // Redirect to a placeholder PDF or serve a static PDF file
  return NextResponse.redirect("https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf")
}

