# Personal Growth OS — Base Login

- Next.js 15 + App Router + TypeScript
- NextAuth v5 (Google OAuth, JWT sessions)
- Protected /dashboard, single Navbar, server components

## Setup
1. Copy `.env.example` to `.env.local` and fill values.
2. Generate AUTH_SECRET:
   ```bash
   node -e "console.log(crypto.randomBytes(32).toString('hex'))"
   ```
3. Install & run:
   ```bash
   npm i
   npm run dev
   ```

## Notes
- Avoid duplicate Navbar definitions/imports. Only one `src/components/Navbar.tsx` exists and is imported in `layout.tsx`.
- API handlers are re-exported from `src/auth.ts`.

## Verify
Visiting `/dashboard` while signed out should redirect to `/`.
"Sign in with Google" starts OAuth and returns a session.
After sign-in, `/dashboard` shows your email.
