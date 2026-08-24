# GIANTS contact form setup

The contact form sends email through the server route at `app/api/contact/route.ts`.

Add these variables in Vercel under **Project Settings → Environment Variables**:

- `RESEND_API_KEY`: API key created in Resend
- `CONTACT_TO_EMAIL`: inbox that should receive GIANTS enquiries
- `CONTACT_FROM_EMAIL`: optional verified sender, for example `GIANTS Website <website@yourdomain.com>`

Until a sending domain is verified, omit `CONTACT_FROM_EMAIL` to use Resend's test sender. Resend may restrict the recipient while the account/domain is unverified.

Add the variables to Production, Preview and Development as needed, then redeploy.
