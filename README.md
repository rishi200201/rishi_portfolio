## Contact Form Integration (Backend Nodemailer)

The contact form uses a Node/Express backend in `server/` to send emails via Nodemailer. EmailJS logic has been removed.

## Structure

```
server/
	package.json
	index.js
	.env.example
```

## Setup (Windows PowerShell)

Install dependencies for frontend and backend:

```powershell
npm install
cd server; npm install; cd ..
```

Create `server/.env` from `.env.example` and set `GMAIL_ADDRESS` and `GMAIL_APP_PASSWORD`.

Run backend and frontend:

```powershell
cd server; npm run dev
# new terminal
npm run dev
```

Submitting the form makes a POST request to `http://localhost:3001/api/contact`.

## WhatsApp Integration

The contact section includes a "Chat on WhatsApp" button linking to:

```
https://wa.me/8248568354?text=Hi%20Rishi,%20I%20just%20visited%20your%20portfolio!
```

This opens a direct chat. For automated WhatsApp messaging you'd need the WhatsApp Business Cloud API (Meta developer account + access token)—not included here.

## Backend Endpoint

POST `/api/contact`

Request JSON:

```json
{ "name": "string", "email": "string", "message": "string" }
```

Responses:

```json
{ "success": true, "id": "<messageId>" }
```

Errors:

```json
{ "error": "Failed to send email." }
```

## Security Notes

- Keep Gmail app password only in `.env`.
- Consider rate limiting and CAPTCHA for spam protection.

## Future Enhancements

- Add rate limiting (`express-rate-limit`).
- Add CAPTCHA / honeypot field.
- Switch to Resend/Postmark for higher deliverability.


