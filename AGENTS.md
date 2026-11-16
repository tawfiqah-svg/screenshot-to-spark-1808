<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep shared business facts and page content in src/data/site.ts; routes consume them so repeated counts and program labels stay consistent.
- Model Academy progression as education, assessment, then applications to available roles; completing the Academy does not guarantee employment.
- Keep decorative home-page motion CSS-only, pausable on hover/focus and disabled for reduced motion so content remains accessible without extra runtime dependencies.
- Mount third-party review embeds after hydration in an isolated DOM container and destroy their controls on unmount to keep React and provider markup separate.
- Keep page heading scales in the shared layout components and CTA sizing in the Button variants; allow long labels to wrap so narrow screens and enlarged text do not clip.
