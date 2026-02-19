import PDFDocument from "pdfkit";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const contentDir = path.join(__dirname, "..", "content");
const outputPath = path.join(__dirname, "..", "public", "guides", "cursor-ai-complete-guide.pdf");

// Ensure output dir exists
fs.mkdirSync(path.dirname(outputPath), { recursive: true });

const doc = new PDFDocument({
  size: "letter",
  margins: { top: 72, bottom: 72, left: 72, right: 72 },
});

doc.pipe(fs.createWriteStream(outputPath));

// Title page
doc.fontSize(36).font("Helvetica-Bold").text("Cursor AI", { align: "center" });
doc.moveDown(0.5);
doc.fontSize(18).font("Helvetica").fillColor("#666666").text("The AI Code Editor That Writes With You", { align: "center" });
doc.moveDown(2);
doc.fontSize(14).fillColor("#999999").text("The Complete Cliff Notes — 40 Pages", { align: "center" });
doc.moveDown(0.5);
doc.text("A Meshuga Guide — Crazy Simple Tech", { align: "center" });
doc.moveDown(0.5);
doc.text("Last Updated: February 19, 2026", { align: "center" });
doc.moveDown(4);
doc.fontSize(12).fillColor("#333333").text("© 2026 Meshuga. All rights reserved.", { align: "center" });
doc.text("meshuga.com", { align: "center", link: "https://meshuga.com" });

// Read and process content files
const files = [
  "cursor-ai-cliff-notes-pages-11-20.md",
  "cursor-ai-cliff-notes-pages-21-30.md",
  "cursor-ai-cliff-notes-pages-31-40.md",
];

// Also include pages 1-10 content inline (from the guide data)
const pages1to10 = `# Cursor AI Cliff Notes — Pages 1-10
## Quick Start Guide

### 01 — It's VS Code, But Smarter
Cursor is a code editor built on top of VS Code. It looks identical. Your extensions work. Your settings import. The difference? AI lives inside it. Press Cmd+K and type what you want. Cursor writes the code. Press Cmd+L and ask it to explain something. It reads your entire codebase to answer.

### 02 — Who Should Use Cursor
You'll love it if you write code daily, waste time Googling syntax, copy-paste from Stack Overflow, work on unfamiliar codebases, or want AI help without leaving your editor.

### 03 — Download and Install
Visit cursor.sh, download for your OS, drag to Applications (Mac) or run installer (Windows). Open Cursor — it imports VS Code settings automatically.

### 04 — Sign In
Click Sign In top-right. Use Google, GitHub, or email. Free tier: 2,000 completions/month. Pro ($20/mo): unlimited.

### 05 — Cmd+K: AI Code Generation
Highlight code or place cursor. Press Cmd+K. Type instruction in plain English. Press Enter. Review generated code. Accept or reject.

### 06 — Cmd+L: AI Chat (Codebase-Aware)
Press Cmd+L. Chat panel opens. Ask about your code. Cursor searches your project and responds with file references.

### 07 — Write New Code from Scratch
Type a comment describing what you need. Highlight it. Press Cmd+K. Type "write this function." Cursor generates it with error handling.

### 08 — Refactor Existing Code
Highlight messy code. Press Cmd+K. Type "refactor this to be more readable." Cursor rewrites with better names and modern syntax.

### 13 — Be Specific, Not Vague
Bad: "make this better." Good: "add input validation for email and phone number." Specificity = better results.

### 15 — Reject and Refine
Wrong output? Press Esc. Try Cmd+K again with more detail. Most code improves with one refinement.

### 16 — Check Generated Code Before Running
Always review. Check: correct libraries? Consistent names? Error handling? Security issues? Treat AI code like code from a smart but careless colleague.`;

function renderMarkdown(text) {
  const lines = text.split("\n");

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) {
      doc.moveDown(0.3);
      continue;
    }

    if (trimmed.startsWith("# ")) {
      doc.addPage();
      doc.fontSize(24).font("Helvetica-Bold").fillColor("#111827").text(trimmed.slice(2));
      doc.moveDown(0.5);
    } else if (trimmed.startsWith("## ")) {
      doc.moveDown(0.5);
      doc.fontSize(18).font("Helvetica-Bold").fillColor("#111827").text(trimmed.slice(3));
      doc.moveDown(0.3);
    } else if (trimmed.startsWith("### ")) {
      doc.moveDown(0.8);
      doc.fontSize(14).font("Helvetica-Bold").fillColor("#2563EB").text(trimmed.slice(4));
      doc.moveDown(0.3);
    } else if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
      doc.fontSize(11).font("Helvetica-Bold").fillColor("#333333").text(trimmed.slice(2, -2));
      doc.moveDown(0.2);
    } else if (trimmed.startsWith("```")) {
      // Skip code fence markers
    } else if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
      doc.fontSize(11).font("Helvetica").fillColor("#333333").text(`  •  ${trimmed.slice(2)}`, { indent: 12 });
      doc.moveDown(0.15);
    } else if (/^\d+\.\s/.test(trimmed)) {
      doc.fontSize(11).font("Helvetica").fillColor("#333333").text(`  ${trimmed}`, { indent: 12 });
      doc.moveDown(0.15);
    } else {
      doc.fontSize(11).font("Helvetica").fillColor("#333333").text(trimmed, { lineGap: 3 });
    }
  }
}

// Render pages 1-10
renderMarkdown(pages1to10);

// Render remaining pages
for (const file of files) {
  const filePath = path.join(contentDir, file);
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, "utf-8");
    renderMarkdown(content);
  }
}

// Final page
doc.addPage();
doc.moveDown(4);
doc.fontSize(24).font("Helvetica-Bold").fillColor("#111827").text("Thank You", { align: "center" });
doc.moveDown(1);
doc.fontSize(14).font("Helvetica").fillColor("#666666").text(
  "You now have everything you need to master Cursor AI.\nPractice on a real project — that's the fastest way to learn.",
  { align: "center", lineGap: 4 }
);
doc.moveDown(2);
doc.fontSize(12).fillColor("#2563EB").text("Browse more guides at meshuga.com", {
  align: "center",
  link: "https://meshuga.com",
  underline: true,
});

doc.end();
console.log(`PDF generated: ${outputPath}`);
