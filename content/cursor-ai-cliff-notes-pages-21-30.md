# Cursor AI Cliff Notes — Pages 21-30
## Team Collaboration & Enterprise Features

**Continuation of Cursor AI Guide**  
**Pages 21-30 of 40**

---

## Page 21: Working with Teams

### 41 — Team License ($40/user/month)

**What you get:**
- Everything in Pro ($20/month)
- Centralized billing
- Admin dashboard (manage team members)
- Usage analytics (who's using it, how much)
- Shared .cursorrules (enforce team standards)

**When to upgrade:**
- Team of 5+ developers
- Need usage tracking
- Want enforced coding standards

---

### 42 — Onboard New Team Members Fast

**Problem:** New hire doesn't know the codebase.

**Solution:** Cursor becomes their guide.

**Onboarding workflow:**
1. New hire installs Cursor
2. Clone the repo
3. Ask Cursor: "Give me an overview of this codebase"
4. Ask: "Where is user authentication handled?"
5. Ask: "How do I add a new API endpoint?"

They're productive in hours, not weeks.

---

## Page 22: Code Style Enforcement

### 43 — Use .cursorrules for Style Consistency

**Problem:** Every dev codes differently.

**Solution:** Define style in .cursorrules.

**Example rules:**
```
- Functions must have JSDoc comments
- All variables use camelCase
- No magic numbers — use named constants
- Database queries must have error handling
- API responses follow {status, data, error} format
```

Cursor enforces these automatically.

---

### 44 — Lint Before Accepting AI Code

**Best practice:** Run linter on AI-generated code before merging.

**Workflow:**
1. Cursor generates code
2. Save file
3. Linter runs (ESLint, Prettier, etc.)
4. Fix lint errors
5. Commit

**Pro tip:** Configure Cursor to auto-format on save.

---

## Page 23: Handling Large Codebases

### 45 — Cursor Gets Slow on Big Projects

**Why:** Indexing millions of lines takes time.

**Solutions:**
1. **Use .cursorignore:** Exclude node_modules, build folders, test data
2. **Close unused files:** Only keep relevant tabs open
3. **Split into smaller contexts:** Work on one module at a time
4. **Upgrade to Pro:** Faster indexing and responses

---

### 46 — Ask About Specific Modules

**Instead of:** "How does authentication work?"

**Try:** "How does authentication work in src/auth/login.js?"

Being specific = faster, more accurate answers.

---

## Page 24: Version Control Best Practices

### 47 — Commit AI Code in Separate Commits

**Why:** Makes code review easier.

**Workflow:**
1. Human-written code → commit
2. AI-generated code → separate commit with clear message

**Example commit messages:**
- "Add user authentication (human-written)"
- "Add error handling to auth flow (AI-assisted)"

Reviewers know what to scrutinize.

---

### 48 — Use Branches for AI Experiments

**Best practice:** Don't let AI commit directly to main.

**Workflow:**
1. Create feature branch: `git checkout -b feature/ai-refactor`
2. Use Cursor to refactor
3. Test thoroughly
4. Code review
5. Merge to main

Protects main branch from AI mistakes.

---

## Page 25: Testing AI-Generated Code

### 49 — AI Code Needs Tests (Duh)

**Rule:** Every AI-generated function gets a test.

**Why:** AI doesn't always consider edge cases.

**Example:**
AI generates a function that divides two numbers. Did it handle division by zero? Write a test to find out.

---

### 50 — Ask Cursor to Write Tests

**Technique:** After generating code, immediately ask for tests.

**Workflow:**
1. Generate function with `Cmd+K`
2. Highlight the function
3. Press `Cmd+L`
4. Ask: "Write unit tests for this function"

Cursor generates test cases based on the code.

**Review the tests.** AI might miss edge cases.

---

## Page 26: Security Considerations

### 51 — Don't Paste Secrets into Cursor

**Bad:**
```javascript
const API_KEY = "sk-proj-abc123def456..."
// Don't ask Cursor to refactor this
```

**Good:**
```javascript
const API_KEY = process.env.API_KEY
// Safe to refactor — no actual secret exposed
```

Cursor sends highlighted code to the cloud. Keep secrets in environment variables.

---

### 52 — Review AI Code for Security Issues

**Common AI security mistakes:**
- SQL injection vulnerabilities
- XSS vulnerabilities
- Missing authentication checks
- Exposing sensitive data in logs

**Always review AI code for security before deploying.**

---

## Page 27: Performance Optimization

### 53 — Ask Cursor to Optimize Slow Code

**Scenario:** Function is slow, you don't know why.

**Steps:**
1. Highlight the slow function
2. Press `Cmd+L`
3. Ask: "Why is this function slow? How can I optimize it?"

**Example response:**
> "This function makes N+1 database queries. Instead of querying inside the loop, fetch all records at once and use a lookup table."

Cursor suggests the optimization.

---

### 54 — Benchmark Before and After

**Best practice:** Measure performance before trusting AI optimizations.

**Workflow:**
1. Benchmark current code (e.g., `console.time()`)
2. Ask Cursor to optimize
3. Benchmark optimized code
4. Compare results

Sometimes AI "optimizations" are actually slower.

---

## Page 28: Debugging Cursor Itself

### 55 — Check Cursor's Status

**If something feels off:**
1. Click your profile icon (top-right)
2. Select "Check for Updates"
3. Look at server status

**Common issues:**
- Outdated version → update
- Server downtime → wait
- Account issue → check billing

---

### 56 — Clear Cursor Cache

**When to do this:** Cursor behaves strangely (wrong suggestions, crashes, etc.)

**How:**
1. Close Cursor
2. Delete cache folder:
   - Mac: `~/Library/Application Support/Cursor`
   - Windows: `%APPDATA%\Cursor`
   - Linux: `~/.config/Cursor`
3. Restart Cursor

**Note:** You'll need to re-index your projects.

---

## Page 29: Advanced Configuration

### 57 — Customize AI Model Settings

**Location:** Settings → Cursor → Model

**Options:**
- **Model temperature:** Higher = more creative, Lower = more deterministic
- **Max tokens:** How long responses can be
- **Context window:** How much code Cursor reads

**Recommendation:** Leave defaults unless you know what you're doing.

---

### 58 — Set Up Custom Keybindings

**Why:** Default shortcuts might conflict with your habits.

**How:**
1. Open Settings → Keyboard Shortcuts
2. Search for "cursor"
3. Rebind `Cmd+K` or `Cmd+L` if needed

**Example custom bindings:**
- `Cmd+Shift+A` → AI code generation
- `Cmd+Shift+Q` → AI chat

---

## Page 30: Language-Specific Tips (Part 1)

### 59 — Python: Use Type Hints

**Why:** Cursor generates better code when it knows types.

**Bad:**
```python
def process_data(data):
    # Cursor doesn't know what 'data' is
    pass
```

**Good:**
```python
def process_data(data: list[dict]) -> dict:
    # Cursor knows it's a list of dicts
    pass
```

Ask Cursor to add type hints to existing code.

---

### 60 — JavaScript: Specify ES Version

**In .cursorrules:**
```
- Use ES6 syntax (arrow functions, const/let, template literals)
- Avoid var keyword
- Use async/await instead of promises
```

Cursor will match your project's JavaScript style.

---

**Continue to Pages 31-40 →**

*This is part 3 of 4. Final pages 31-40 coming next.*
