# Specification

## Summary
**Goal:** Remove the personalization UI and remove the word “flower”/“flowers” from all user-facing site text.

**Planned changes:**
- Remove the PersonalizationPanel entry point, including the fixed “Personalize” button and its sheet, and ensure no personalization UI components are rendered in App.tsx.
- Remove reliance on personalization state and local persistence (stop using the `valentine-personalization` localStorage key / `useLocalStorageState`) and render the Valentine page with a single default theme.
- Update all user-facing copy and relevant attributes (including image alt text and success-state text) to eliminate “flower”/“flowers” and replace with equivalent Valentine-themed wording.

**User-visible outcome:** The site no longer shows any personalization controls, uses one consistent default theme, and contains no visible text (or alt text) mentioning “flower”/“flowers” while preserving the Valentine interaction and tone.
