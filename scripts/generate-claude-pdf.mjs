import PDFDocument from "pdfkit";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const contentDir = path.join(__dirname, "..", "content");
const outputPath = path.join(__dirname, "..", "public", "guides", "claude-vs-chatgpt-decision-guide.pdf");

fs.mkdirSync(path.dirname(outputPath), { recursive: true });

const doc = new PDFDocument({
  size: "letter",
  margins: { top: 72, bottom: 72, left: 72, right: 72 },
});

doc.pipe(fs.createWriteStream(outputPath));

// Title page
doc.fontSize(36).font("Helvetica-Bold").text("Claude vs ChatGPT", { align: "center" });
doc.moveDown(0.5);
doc.fontSize(18).font("Helvetica").fillColor("#666666").text("The Decision Guide", { align: "center" });
doc.moveDown(0.3);
doc.fontSize(14).fillColor("#999999").text("Pick the Right AI for Your Workflow", { align: "center" });
doc.moveDown(2);
doc.fontSize(14).fillColor("#999999").text("30 Pages — 25 Minutes to Read", { align: "center" });
doc.moveDown(0.5);
doc.text("A Meshuga Guide — Crazy Simple Tech", { align: "center" });
doc.moveDown(0.5);
doc.text("Last Updated: February 20, 2026", { align: "center" });
doc.moveDown(4);
doc.fontSize(12).fillColor("#333333").text("© 2026 Meshuga. All rights reserved.", { align: "center" });
doc.text("meshuga.com", { align: "center", link: "https://meshuga.com" });

// Pages 1-10 (from guide data — preview content)
const pages1to10 = `# Claude vs ChatGPT — Quick Decision Framework

## 01 — The 30-Second Answer
ChatGPT is faster. Claude is deeper.

ChatGPT excels at speed, breadth, and ecosystem (plugins, DALL-E, Custom GPTs). Claude excels at analysis, writing quality, and handling large documents.

If you need one: pick based on your primary use case. If you can afford both ($20/mo each): use ChatGPT for speed tasks, Claude for quality tasks.

## 02 — Pricing Breakdown
Both have free tiers. Both charge $20/month for Pro/Plus.

ChatGPT Plus ($20/mo): GPT-4o, DALL-E image generation, Code Interpreter, Custom GPTs, 50 GPT-4 messages/3hr.

Claude Pro ($20/mo): Claude 3.5 Sonnet, 200K context window, Projects, Artifacts, priority access.

Free tiers: ChatGPT free gives GPT-4o mini. Claude free gives limited Claude 3.5 Sonnet messages.

## 03 — Writing Quality — Claude Wins
Claude writes like a human. ChatGPT writes like a good AI.

The difference shows up in: professional emails (Claude sounds more natural), long-form content (Claude maintains voice better), and sensitive communication (Claude reads the room).

ChatGPT is faster at generating drafts. But if you're sending it to a client, run it through Claude.

## 04 — Coding — It Depends
Quick bug fix? ChatGPT. It identifies issues faster and gives you working code with less back-and-forth.

Architectural decision? Claude. It asks clarifying questions, considers edge cases, and explains WHY, not just WHAT.

Prototype? ChatGPT (ships faster). Production code? Claude (more careful).

## 05 — Research & Analysis — Claude Wins
Give both a 50-page PDF. Claude reads it and gives you a structured analysis. ChatGPT summarizes the first few pages and starts making things up.

Claude's 200K context window means it can hold entire books, codebases, or research papers in a single conversation. ChatGPT's context is smaller and degrades faster.

## 06 — Speed & Ecosystem — ChatGPT Wins
ChatGPT responds faster. Period. For rapid-fire tasks, that speed compounds.

The ecosystem is massive: Custom GPTs for specialized tasks, DALL-E for images, Code Interpreter for data analysis, plugins for real-time data.

## 07 — Honesty & Hallucinations
Both hallucinate. Neither is a reliable source of truth.

Key difference: Claude tends to say "I'm not sure." ChatGPT tends to sound confident even when it's wrong.

For high-stakes tasks, Claude's uncertainty is actually a feature.

## 08 — The Decision Matrix
Use ChatGPT when: speed matters, you need images, you want Custom GPTs, you're brainstorming, you need real-time web data, or you're doing data analysis.

Use Claude when: quality matters, you're working with long documents, you need careful analysis, you're writing for humans, you want honest uncertainty, or you need the API.

Use both when: the task is important enough to cross-reference, or you want the two-pass workflow.

## 09 — The Two-Pass Workflow
Pass 1 (ChatGPT): Fast draft. Broad coverage. Multiple options.
Pass 2 (Claude): Refine. Add depth. Improve tone. Remove clichés.

This works for: emails, blog posts, code, research, business plans. ChatGPT generates. Claude polishes. Better than either alone.

## 10 — Cost Optimization
If you can only afford one ($20/mo): pick based on your #1 use case. Writing/analysis = Claude. Speed/variety = ChatGPT.

If you can afford both ($40/mo): use the two-pass workflow. ChatGPT for 80% (speed), Claude for 20% (quality).`;

function renderMarkdown(text) {
  const lines = text.split("\\n");

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
      doc.fontSize(16).font("Helvetica-Bold").fillColor("#111827").text(trimmed.slice(3));
      doc.moveDown(0.3);
    } else if (trimmed.startsWith("### ")) {
      doc.moveDown(0.8);
      doc.fontSize(13).font("Helvetica-Bold").fillColor("#2563EB").text(trimmed.slice(4));
      doc.moveDown(0.3);
    } else if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
      doc.fontSize(11).font("Helvetica-Bold").fillColor("#333333").text(trimmed.slice(2, -2));
      doc.moveDown(0.2);
    } else if (trimmed.startsWith("- ") || trimmed.startsWith("* ") || trimmed.startsWith("✓ ") || trimmed.startsWith("✗ ")) {
      const bullet = trimmed.startsWith("✓") ? "✓" : trimmed.startsWith("✗") ? "✗" : "•";
      const content = trimmed.replace(/^[-*✓✗]\s+/, "");
      doc.fontSize(11).font("Helvetica").fillColor("#333333").text(\`  \${bullet}  \${content}\`, { indent: 12 });
      doc.moveDown(0.15);
    } else if (/^\\d+\\.\\s/.test(trimmed)) {
      doc.fontSize(11).font("Helvetica").fillColor("#333333").text(\`  \${trimmed}\`, { indent: 12 });
      doc.moveDown(0.15);
    } else if (trimmed.startsWith("---")) {
      doc.moveDown(0.5);
      doc.moveTo(72, doc.y).lineTo(540, doc.y).stroke("#e5e7eb");
      doc.moveDown(0.5);
    } else {
      doc.fontSize(11).font("Helvetica").fillColor("#333333").text(trimmed, { lineGap: 3 });
    }
  }
}

// Render pages 1-10
renderMarkdown(pages1to10);

// Render pages 11-30 from Mark's content
const pages11to30Path = path.join(contentDir, "claude-vs-chatgpt-pages-11-30.md");
if (fs.existsSync(pages11to30Path)) {
  const content = fs.readFileSync(pages11to30Path, "utf-8");
  renderMarkdown(content);
}

// Final page
doc.addPage();
doc.moveDown(4);
doc.fontSize(24).font("Helvetica-Bold").fillColor("#111827").text("You Made the Right Choice", { align: "center" });
doc.moveDown(1);
doc.fontSize(14).font("Helvetica").fillColor("#666666").text(
  "You now know more about ChatGPT and Claude than 95% of users.\\nThe real power? Knowing WHEN to use which tool.\\n\\nPick one task this week. Try both tools on it. Compare the results.\\nYou'll see the difference immediately.",
  { align: "center", lineGap: 4 }
);
doc.moveDown(2);
doc.fontSize(12).fillColor("#2563EB").text("Browse more guides at meshuga.com", {
  align: "center",
  link: "https://meshuga.com",
  underline: true,
});
doc.moveDown(1);
doc.fontSize(11).fillColor("#999999").text("Questions? support@techcliffnotes.com", { align: "center" });

doc.end();
console.log(\`PDF generated: \${outputPath}\`);
