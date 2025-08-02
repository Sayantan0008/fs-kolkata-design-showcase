# Font Usage Guide for F.S. Infrastructure Website

## New Font System

### 1. Main Headings (H1) - Italianno, serif

**Usage:** Primary page titles, hero headings, major section titles
**CSS Class:** `font-main-heading`
**Example:**

```html
<h1 className="font-main-heading text-4xl text-gold">Luxury & Comfort</h1>
```

### 2. Sub Headings (H2, H3, H4) - Helvetica-C, sans-serif

**Usage:** Section headings, card titles, form section titles
**CSS Class:** `font-sub-heading`
**Example:**

```html
<h2 className="font-sub-heading text-2xl text-gold">Your Details</h2>
```

### 3. Paragraphs & Body Text - Times New Roman, serif

**Usage:** All paragraph text, descriptions, body content
**CSS Class:** `font-paragraph`
**Example:**

```html
<p className="font-paragraph text-base text-gray-300">
  Your description text here...
</p>
```

## Implementation Instructions

### Step 1: Replace Existing Font Classes

- Replace `font-royal` with `font-main-heading` for main titles
- Replace `font-elegant` with `font-sub-heading` for section headings
- Replace `font-clean` with `font-paragraph` for body text

### Step 2: Update Components

Apply these classes to the following components:

#### Hero Section

- Main title: `font-main-heading`
- Subtitle/description: `font-paragraph`

#### Cards & Sections

- Card titles: `font-sub-heading`
- Card descriptions: `font-paragraph`

#### Forms

- Form titles: `font-main-heading`
- Section headings: `font-sub-heading`
- Labels and descriptions: `font-paragraph`

#### Footer

- Section headings: `font-sub-heading`
- Links and text: `font-paragraph`

### Step 3: Pages to Update

1. **Home Page** (`src/pages/Home.tsx`)
2. **About Page** (`src/pages/About.tsx`)
3. **Projects Page** (`src/pages/Projects.tsx`)
4. **Contact Page** (`src/pages/Contact.tsx`)
5. **All Components** in `src/components/`

### Example Replacements:

```html
<!-- OLD -->
<h1 className="font-royal text-4xl">Title</h1>
<h2 className="font-elegant text-2xl">Subtitle</h2>
<p className="font-clean text-base">Description</p>

<!-- NEW -->
<h1 className="font-main-heading text-4xl">Title</h1>
<h2 className="font-sub-heading text-2xl">Subtitle</h2>
<p className="font-paragraph text-base">Description</p>
```

## Font Fallbacks

- **Italianno**: Falls back to generic serif
- **Helvetica-C**: Falls back to Helvetica, Arial, then sans-serif
- **Times New Roman**: Falls back to Times, then serif

## Notes

- Fonts are loaded via Google Fonts for Italianno
- Times New Roman is a system font (widely available)
- Helvetica-C may need to be replaced with standard Helvetica if not available
