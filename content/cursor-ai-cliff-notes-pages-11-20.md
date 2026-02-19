# Cursor AI Cliff Notes — Pages 11-20
## Advanced Techniques & Workflows

**Continuation of Cursor AI Quick Start Guide**  
**Pages 11-20 of 40**

---

## Page 11: Advanced Prompting Techniques

### 21 — Layer Your Prompts

**Technique:** Don't try to do everything in one prompt. Build incrementally.

**Example:**
1. First prompt: "Add basic error handling"
2. Second prompt: "Add logging for the errors"
3. Third prompt: "Add retry logic with exponential backoff"

Each step is clearer than asking for all three at once.

---

### 22 — Use Comments as Specifications

**Best practice:** Write detailed comments first, then ask Cursor to implement them.

**Example:**
```python
# Authentication middleware that:
# 1. Checks for JWT token in Authorization header
# 2. Validates token signature and expiration
# 3. Extracts user_id and attaches to request context
# 4. Returns 401 if token is invalid or missing
# 5. Logs all authentication attempts (success and failure)
```

Highlight the comment, press `Cmd+K`, type "implement this middleware".

Cursor has a complete specification to work from.

---

## Page 12: Multi-File Refactoring

### 23 — How Cursor Sees Multiple Files

**By default:** Cursor only sees the file you're currently editing.

**To include other files:**
1. Open multiple files in tabs
2. Cursor will use them as context automatically
3. OR: Use `Cmd+L` and mention specific files: "Check how authentication is handled in auth.js"

**Pro tip:** Keep relevant files open in tabs before prompting.

---

### 24 — Refactor Across Files

**Scenario:** You want to rename a function used in multiple files.

**Steps:**
1. Open all affected files in tabs
2. Highlight the function in the main file
3. Press `Cmd+K`
4. Type: "Rename this function to `authenticateUser` and update all references"

Cursor will suggest changes across all open files. Review each one before accepting.

![Screenshot: Multi-file refactoring with changes shown in multiple tabs]

---

## Page 13: Custom AI Rules for Your Project

### 25 — Create a .cursorrules File

**What it does:** Tells Cursor about your project's conventions.

**How to create:**
1. Create a file called `.cursorrules` in your project root
2. Add rules in plain English

**Example .cursorrules:**
```
- Use ES6 arrow functions, not function keyword
- All API responses must include status, data, and error fields
- Error messages should be user-friendly, not technical
- Use async/await, not .then() chains
- All database queries must have timeout handling
```

**Result:** Cursor follows these rules when generating code.

---

### 26 — Project-Specific Patterns

**Add common patterns to .cursorrules:**

```
- React components: functional with hooks, no class components
- State management: use Context API, not Redux
- API calls: use our custom `apiClient.js` wrapper
- File naming: camelCase for files, PascalCase for components
- Testing: every new function needs a test in __tests__/
```

Cursor will match your team's style automatically.

![Screenshot: .cursorrules file in project root with sample rules]

---

## Page 14: Debugging with AI Assistance

### 27 — Ask Cursor to Debug

**Scenario:** Code breaks, error message is confusing.

**Steps:**
1. Highlight the broken code
2. Press `Cmd+L`
3. Paste the error message
4. Ask: "Why is this failing?"

**Example:**
```javascript
TypeError: Cannot read property 'name' of undefined
  at processUser (app.js:42)
```

**Cursor's response:**
> "The error occurs because `user` is undefined at line 42. This happens when the API call on line 38 fails or returns null. Add a check before accessing `user.name`."

Then it suggests the fix.

---

### 28 — Find Where Bugs Come From

**Technique:** Ask Cursor to trace the issue.

**Prompt:** "Where does the `user` variable come from and why might it be undefined?"

Cursor searches your codebase and explains:
> "The `user` variable is set on line 35 from `await fetchUser(id)`. The function is in `api/users.js` line 12. It returns null if the user isn't found. Add error handling after line 35."

You get the full path to the problem.

---

## Page 15: Team Workflows & Best Practices

### 29 — Share .cursorrules with Your Team

**Why:** Everyone gets consistent AI-generated code.

**How:**
1. Create `.cursorrules` in your repo
2. Commit it to version control
3. Team members pull it down
4. Cursor reads it automatically

**Result:** Junior devs get code that matches senior dev standards.

---

### 30 — Code Review AI-Generated Code

**Critical rule:** Treat AI code like code from a junior developer.

**Review checklist:**
- ✓ Does it handle edge cases?
- ✓ Are there security issues? (SQL injection, XSS, etc.)
- ✓ Does it match our coding style?
- ✓ Are variable names clear?
- ✓ Is error handling sufficient?
- ✓ Does it work with our existing code?

**Never merge AI code without review.**

---

## Page 16: CI/CD Integration

### 31 — Use Cursor in Automated Workflows

**Scenario:** You want AI to generate code during CI/CD.

**Limitation:** Cursor is a desktop app, not a CLI tool (yet).

**Workaround:** Use Cursor to generate code locally, commit, then CI/CD runs tests/builds as normal.

**Future:** Cursor API is coming (currently in beta). When available, you'll be able to call it from scripts.

---

### 32 — Pre-Commit Hooks with AI

**Idea:** Use Cursor to check code before committing.

**Example workflow:**
1. Write code
2. Before committing, ask Cursor: "Review this code for issues"
3. Fix issues it finds
4. Commit

**How to make this a habit:**
- Add a git pre-commit hook that reminds you to AI-review
- OR: Just make it part of your checklist

---

## Page 17: Privacy & Security Settings

### 33 — What Data Does Cursor Send?

**What gets sent to AI:**
- Code you highlight or ask about
- Context from open files (if needed)
- Your prompts and questions

**What doesn't get sent:**
- Files you don't open in Cursor
- Your entire hard drive
- Private keys or secrets (unless you paste them)

**Recommendation:** Don't highlight sensitive data (API keys, passwords, etc.) when prompting.

---

### 34 — Use .cursorignore to Block Files

**What it does:** Prevents Cursor from reading certain files.

**How to create:**
1. Create `.cursorignore` in your project root
2. List files/folders to ignore (same format as .gitignore)

**Example .cursorignore:**
```
.env
secrets/
config/production.yaml
*.key
*.pem
```

Cursor won't use these files as context, even if they're open.

---

## Page 18: Troubleshooting Common Issues

### 35 — Cursor Won't Start

**Symptoms:** App crashes on launch or won't open.

**Fixes:**
1. **Restart your computer** (classic, but works)
2. **Clear Cursor cache:**
   - Mac: `~/Library/Application Support/Cursor`
   - Windows: `%APPDATA%\Cursor`
   - Delete the folder, restart Cursor
3. **Reinstall Cursor:**
   - Download latest version from cursor.sh
   - Uninstall old version first

---

### 36 — AI Responses Are Slow

**Causes:**
- High server load (lots of users)
- Large codebase (Cursor is indexing)
- Slow internet connection

**Fixes:**
1. **Upgrade to Pro:** Pro tier gets priority responses
2. **Reduce context:** Close extra files you don't need
3. **Check internet speed:** Cursor needs decent connection
4. **Wait for indexing to finish:** First-time indexing takes 1-2 minutes

---

## Page 19: Power-User Shortcuts

### 37 — Keyboard Shortcuts You Should Memorize

**Essential:**
- `Cmd+K` — Generate/edit code
- `Cmd+L` — Open AI chat
- `Cmd+Shift+L` — Clear chat history
- `Esc` — Reject AI suggestion
- `Tab` — Accept AI suggestion (inline)

**Pro:**
- `Cmd+Option+K` — Generate in new tab
- `Cmd+Option+L` — Chat with new context
- `Cmd+/` — Comment/uncomment code (with AI context)

**Learn these and you'll be 10x faster.**

---

### 38 — Create Custom Snippets

**Technique:** Save common prompts as snippets.

**Example:**
Instead of typing "Add error handling with try-catch and log errors" every time, save it as a snippet.

**How:**
1. Use a snippet extension (like "Snippets" in VS Code extensions)
2. Add your common prompts
3. Trigger with short keyword

**Example snippet:**
- Trigger: `eh`
- Expands to: "Add comprehensive error handling with try-catch, log errors, and user-friendly messages"

---

## Page 20: Cursor vs. Other AI Tools

### 39 — Cursor vs. GitHub Copilot

**GitHub Copilot:**
- ✓ Inline autocomplete (types code as you write)
- ✓ $10/month (cheaper)
- ✗ No codebase context (sees one file at a time)
- ✗ No chat interface (just autocomplete)

**Cursor:**
- ✓ Full codebase context (reads entire project)
- ✓ Chat interface (ask questions about your code)
- ✓ Inline generation AND autocomplete
- ✗ $20/month (more expensive)

**Which to use:**
- Small projects, tight budget → Copilot
- Large codebases, need context → Cursor
- Maximum power → Use both (they work together)

---

### 40 — Cursor vs. ChatGPT/Claude

**ChatGPT/Claude (separate):**
- ✓ More powerful models (sometimes)
- ✓ Longer context windows
- ✗ No editor integration (copy-paste hell)
- ✗ No codebase context

**Cursor:**
- ✓ Lives in your editor (no copy-paste)
- ✓ Reads your entire project
- ✓ Generates code inline
- ✗ Slightly less powerful than GPT-4 Turbo or Claude Opus

**Best approach:**
- Use Cursor for 90% of coding tasks
- Use ChatGPT/Claude for complex architecture questions or design decisions

---

**Continue to Pages 21-30 →**

*This is part 2 of 4. Pages 21-40 coming next.*
