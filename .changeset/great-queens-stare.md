---
'tings': major
---

Changed boolean check functions' names to allow for easier result naming. e.g.
`const isCompactCase = checkCompactCase(input)`. All functions starting with
`is` changed to `check`, except `isBrowser` which is now
`checkRunningInBrowser`, and `isUniq` is now `checkUnique`.
