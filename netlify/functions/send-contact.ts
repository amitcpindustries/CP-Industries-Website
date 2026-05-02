import type { Handler, HandlerEvent } from '@netlify/functions'
import nodemailer from 'nodemailer'

const handler: Handler = async (event: HandlerEvent) => {
  // Only accept POST
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method Not Allowed' }) }
  }

  // Parse body
  let body: {
    name?: string
    phone?: string
    email?: string
    product?: string
    message?: string
  }
  try {
    body = JSON.parse(event.body ?? '{}')
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid JSON body' }) }
  }

  const { name, phone, email, product, message } = body

  // Basic validation
  if (!name || !phone || !product || !message) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Missing required fields: name, phone, product, message' }),
    }
  }

  // Pull credentials from environment variables (set in Netlify dashboard)
  const GMAIL_USER = process.env.GMAIL_USER
  const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD

  if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
    console.error('Missing GMAIL_USER or GMAIL_APP_PASSWORD env vars')
    return { statusCode: 500, body: JSON.stringify({ error: 'Server misconfiguration' }) }
  }

  // Create transporter
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // TLS
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_APP_PASSWORD,
    },
  })

  // Build email HTML
  const htmlBody = `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8" /><style>
  body { font-family: 'Segoe UI', Arial, sans-serif; background:#111; color:#e5e5e5; margin:0; padding:0; }
  .wrapper { max-width:600px; margin:40px auto; background:#151515; border:1px solid rgba(212,175,55,0.4); border-radius:16px; overflow:hidden; }
  .header { background:linear-gradient(135deg,#D4AF37,#b8962e); padding:28px 32px; }
  .header h1 { margin:0; color:#111; font-size:20px; font-weight:800; letter-spacing:0.5px; }
  .header p { margin:4px 0 0; color:#111111cc; font-size:13px; }
  .body { padding:32px; }
  .row { display:flex; gap:12px; margin-bottom:20px; }
  .field { flex:1; background:#1a1a1a; border:1px solid rgba(212,175,55,0.15); border-radius:10px; padding:14px 18px; }
  .label { font-size:10px; font-weight:700; letter-spacing:2px; text-transform:uppercase; color:#D4AF3799; margin-bottom:6px; }
  .value { font-size:14px; color:#e5e5e5; }
  .message-box { background:#1a1a1a; border:1px solid rgba(212,175,55,0.15); border-radius:10px; padding:18px; margin-bottom:20px; }
  .footer { border-top:1px solid rgba(212,175,55,0.1); padding:20px 32px; text-align:center; font-size:11px; color:#666; }
  .badge { display:inline-block; background:rgba(212,175,55,0.1); border:1px solid rgba(212,175,55,0.3); color:#D4AF37; border-radius:6px; padding:3px 10px; font-size:11px; font-weight:700; letter-spacing:1px; margin-bottom:8px; }
</style></head>
<body>
<div class="wrapper">
  <div class="header">
    <h1>📬 New Inquiry — CP Industries</h1>
    <p>A customer has submitted a product inquiry from the website.</p>
  </div>
  <div class="body">
    <div class="badge">PRODUCT: ${product.toUpperCase()}</div>
    <div class="row">
      <div class="field">
        <div class="label">Full Name</div>
        <div class="value">${name}</div>
      </div>
      <div class="field">
        <div class="label">Phone / WhatsApp</div>
        <div class="value">${phone}</div>
      </div>
    </div>
    ${
      email
        ? `<div class="row"><div class="field" style="flex:1">
        <div class="label">Email Address</div>
        <div class="value"><a href="mailto:${email}" style="color:#D4AF37;">${email}</a></div>
      </div></div>`
        : ''
    }
    <div class="message-box">
      <div class="label">Message / Requirements</div>
      <div class="value" style="line-height:1.7;white-space:pre-wrap;">${message}</div>
    </div>
  </div>
  <div class="footer">
    Sent from the CP Industries website contact form &nbsp;•&nbsp; ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST
  </div>
</div>
</body>
</html>
`

  // Plain-text fallback
  const textBody = [
    `New Inquiry — CP Industries`,
    `---------------------------`,
    `Product Interest: ${product}`,
    `Name:    ${name}`,
    `Phone:   ${phone}`,
    email ? `Email:   ${email}` : '',
    ``,
    `Message:`,
    message,
    ``,
    `Submitted: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST`,
  ]
    .filter((l) => l !== null)
    .join('\n')

  try {
    await transporter.sendMail({
      from: `"CP Industries Website" <${GMAIL_USER}>`,
      to: GMAIL_USER, // Send to yourself
      replyTo: email || GMAIL_USER, // Reply goes to the customer
      subject: `[Inquiry] ${product} — ${name}`,
      text: textBody,
      html: htmlBody,
    })

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: 'Inquiry sent successfully!' }),
    }
  } catch (err) {
    console.error('Nodemailer error:', err)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email. Please try again.' }),
    }
  }
}

export { handler }
