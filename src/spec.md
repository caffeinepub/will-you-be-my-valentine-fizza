# Specification

## Summary
**Goal:** Add a subtle fade-in animation to the romantic hero image on the main (pre-Yes) screen so it appears smoothly on initial render.

**Planned changes:**
- Apply a gentle fade-in transition to the hero image when the main prompt screen first renders.
- Ensure the existing floating motion animation remains active alongside the fade-in.
- Respect reduced-motion preferences by disabling or minimizing the fade-in when reduced-motion is enabled.

**User-visible outcome:** On first load of the main prompt screen, the romantic hero image smoothly fades in without disrupting the existing floating effect, and users with reduced-motion enabled see no (or minimal) fade animation.
