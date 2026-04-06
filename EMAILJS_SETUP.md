# 📧 EmailJS Contact Form Setup Guide

Your contact form is now fully integrated with **EmailJS**. Follow these steps to make it work and receive emails at **anshp2931@gmail.com**.

## Step 1: Create an EmailJS Account

1. Go to [https://emailjs.com/](https://emailjs.com/)
2. Click **"Sign Up Free"**
3. Sign up with your Google account or email
4. **Verify your email** (check your inbox)

## Step 2: Set Up Email Service

1. Log in to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Click on **"Email Services"** (left sidebar)
3. Click **"Create New Service"**
4. Select **"Gmail"** (or your email provider)
5. Click **"Connect Account"**
6. A popup will appear - select **anshp2931@gmail.com**
7. Authorize EmailJS to use your Gmail account
8. Click **"Create Service"**
9. **Copy the Service ID** - it looks like `service_xxxxxxxxxx`

## Step 3: Create Email Template

1. Go to **"Email Templates"** (left sidebar)
2. Click **"Create New Template"**
3. Use this template format:

```
Subject: New Contact Form Message from {{from_name}}

From: {{from_name}} ({{from_email}})

Message:
{{message}}
```

4. Make sure the email is set to send to: **{{to_email}}**
5. Click **"Save"**
6. **Copy the Template ID** - it looks like `template_xxxxxxxxxx`

## Step 4: Get Your API Keys

1. Go to **"Account"** (left sidebar)
2. Click on **"API Keys"** tab
3. **Copy the Public Key** - this is your public key

## Step 5: Configure the Portfolio

1. Open this file in your editor:
   ```
   src/config/emailConfig.js
   ```

2. Replace the placeholders with your actual credentials:

   ```javascript
   export const emailConfig = {
     // From Step 4: Your Public Key
     PUBLIC_KEY: "paste_your_public_key_here",
     
     // From Step 2: Your Service ID
     SERVICE_ID: "paste_your_service_id_here",
     
     // From Step 3: Your Template ID
     TEMPLATE_ID: "paste_your_template_id_here",
     
     // Your email address
     RECIPIENT_EMAIL: "anshp2931@gmail.com",
   };
   ```

3. **Save the file**

## Step 6: Test the Form

1. Go to your portfolio website
2. Scroll to the **"Let's Connect"** section
3. Fill in the contact form with test data
4. Click **"Send Message"**
5. Check your email inbox (anshp2931@gmail.com) for the message

## ✅ Success!

Your contact form is now fully functional! When someone fills out the form:
- ✔️ They will see a "Message Sent!" confirmation
- ✔️ You will receive an email at anshp2931@gmail.com
- ✔️ The email includes their name, email, and message

## Troubleshooting

### "Setup Required" warning appears
- You haven't filled in the credentials in `src/config/emailConfig.js`
- Make sure all 4 values are filled in correctly

### "Failed to send message" error
- Check that your Public Key, Service ID, and Template ID are correct
- Make sure Gmail service is connected in EmailJS
- Verify that the template includes the variables: `{{to_email}}`, `{{from_name}}`, `{{from_email}}`, `{{message}}`

### Email not received
- Check spam/promotions folder
- Make sure Gmail has authorized EmailJS
- Try sending a test email from EmailJS dashboard itself

## 📚 Useful Links

- [EmailJS Dashboard](https://dashboard.emailjs.com/)
- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [Gmail Connection Setup](https://www.emailjs.com/docs/service/gmail/)

---

**Need help?** The form will display helpful error messages if something goes wrong.
