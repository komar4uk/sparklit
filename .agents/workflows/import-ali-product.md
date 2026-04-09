---
description: Systematic workflow for extracting AliExpress products and deploying to Sparklit.
---

Follow this workflow strictly whenever AliExpress links are provided.

### STRICT RULES

1. **Use ONLY Real Data**: No guessing, no inventing.
2. **Keep EXACT products.json Schema**:
   - `id`: slug format
   - `name`: string
   - `category`: lowercase
   - `description`: short/natural
   - `size`: string
   - `difficulty`: "Beginner", "Medium", or "Advanced"
   - `price`: string like "$4.99"
   - `image`: string (main)
   - `images`: array of 3–5 strings
   - `affiliate_link`: clean .html URL
3. **Categories**: Use existing ones. Ask before creating a new one.
4. **No Code Changes**: Do not refactor, redesign, or touch i18n/admin.

### WORKFLOW STEPS

1. **Extract**: Use the browser tool to gather data from all links.
2. **Normalize**: Format the data according to the rules above.
3. **Show**: Present the JSON entries to the user.
4. **Wait**: Do NOT insert until the user approves.
5. **Insert**: Append approved entries to `src/data/products.json`.
6. **Deploy**:
   - `git add`
   - `git commit -m "feat: add products [names]"`
   - `git push origin main`
7. **Verify**: Confirm products are visible in UI, categories work, and images load.

### FINAL CHECK BEFORE PUSH
- Products are visible on Homepage and Shop.
- Category filters work correctly.
- Images load in both card and detail views correctly.
- Affiliate links work as intended.
