# Contributing to Guzoor

This site memorializes real people and reports on a real, ongoing conflict. Getting a name, date, or location wrong is not a cosmetic bug — it is a factual error about someone's life and death. This document exists because, during development, several published entries turned out to have incorrect names, years, and locations that had drifted from the original source posts. Follow this checklist before adding or editing any martyr, article, or lecture entry.

## Before adding a new martyr, article, or lecture

1. **Find the original post.** Every entry must trace back to a specific Telegram post (`t.me/rootsplatform/<id>`), Instagram post, or other identifiable source — not a paraphrase of a paraphrase. Record the source URL in the `source` field.

2. **Check for a linked long-form article.** Telegram teaser posts often link to a fuller Telegraph article (`telegra.ph/...`) with the complete story, correct full name, and exact dates. The teaser post alone is frequently missing details (or, worse, uses a nickname instead of the person's real name) that only the full article gets right. Always open the link before writing the bio.

3. **Verify the name independently.** If the person is referred to by more than one name across different posts (a formal name vs. a nickname/kunya), search the channel for an official obituary or announcement post — it will use the person's full legal name. Prefer that as the primary `name` field, and note the nickname in the bio text if it's genuinely how they're known.

4. **Verify the date.** Convert Hijri dates given in source posts to the Gregorian year yourself — don't assume the post's Telegram timestamp is the event date. Obituary/anniversary posts are often published well after the event and reference the actual date in the text.

5. **Verify the region/location.** A general campaign hashtag (e.g. `#تحرير_الخرطوم`) is not the same as a specific location. Look for an actual place name in the source text (a neighborhood, a landmark) before assigning a `region`.

6. **Cross-check secondary platforms.** Instagram and Facebook sometimes carry details that never made it to Telegram (nicknames, extra biographical color) — but also sometimes typos. Treat a detail as confirmed only if it appears in at least one dedicated source post, not just a passing mention.

## When translating to Arabic

- Prefer using the actual Arabic text from the source post/article over back-translating the English version — the source is more accurate and more authentically voiced.
- If no direct Arabic source exists for a passage (e.g. an English-only synthesis), write natural Arabic rather than a literal translation, and don't invent details the English didn't have either.

## Before publishing

- Read the finished bio back against the source one more time, paragraph by paragraph.
- If anything is uncertain (an unclear date, an ambiguous name), say so explicitly when proposing the change rather than presenting a guess as fact — and flag it for the person maintaining the channel to confirm.
- New martyr/article entries should default to `featured: false` (or omitted) unless there's a specific reason to feature them on the homepage.

## Adding real media

The sermon/lecture audio and video files currently in `src/data/sermons.ts` are **placeholder stock files** (SoundHelix samples, a public domain demo video), not real Guzoor recordings. Replace `src` with a real hosted recording URL as soon as one is available — the player already handles missing/broken media gracefully, but placeholder content should not stay in production indefinitely.
