# Production contact email setup

The form sends through Resend from `app/api/contact/route.ts`. Add these variables to the **Production** environment in Vercel, then redeploy:

```text
RESEND_API_KEY=re_...
CONTACT_TO_EMAIL=client@example.com
CONTACT_FROM_EMAIL=GIANTS Website <website@your-verified-domain.com>
```

- `CONTACT_TO_EMAIL` is the inbox that receives form submissions. Multiple recipients can be comma-separated.
- `CONTACT_FROM_EMAIL` must use a domain verified in Resend. Do not use `onboarding@resend.dev` in production; Resend restricts that test sender.
- A visitor's address is set as `reply_to`, so the client can press **Reply** in their inbox.
- Vercel environment variables only affect a deployment after a new deploy.

After redeploying, submit the form once and check the Vercel function log for either `Contact email configuration is incomplete` or `Resend rejected the email`. The log deliberately reports configuration state without printing secrets.
