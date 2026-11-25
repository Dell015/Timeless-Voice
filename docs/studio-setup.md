# Connect Sander’s studio

The client pages, estimator, downloadable briefs and demo inbox work without an account. The live inbox connects to the project's Supabase instance. No credentials belong in Git.

1. In your Supabase project, run `supabase/migrations/001_booking_inquiries.sql` once. This creates a private inquiry table and its indexes.
2. Create Sander's password-based user in Supabase Authentication. Copy his user UUID.
3. Set these server environment variables in `.env.local` for development and your deployment environment for production.

| Variable | Value |
| --- | --- |
| `SUPABASE_URL` | Project URL |
| `SUPABASE_PUBLISHABLE_KEY` | Project publishable key, or legacy anon key |
| `SUPABASE_SECRET_KEY` | Server secret key, or legacy service-role key |
| `SANDER_ADMIN_USER_ID` | Sander’s Auth user UUID |

4. Restart the local server or redeploy over HTTPS. Open `/admin` and sign in as Sander. The session expires after at most one hour.
5. From `/plan`, prepare a brief, review it, grant permission and select **Send inquiry**. The confirmation appears after storage succeeds. Refresh the inbox and change its status to **In review**.

Only the configured owner can read or update inquiries through the app. The public demo at `/admin/demo` contains fictional records and keeps edits in memory. Inbox statuses track follow-up. Sander confirms scheduling directly with the client.
