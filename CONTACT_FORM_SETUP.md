# 📧 Contact Form - Email Setup Guide

Your contact form needs ONE simple step to work. Follow this:

## Quick Setup (Takes 1 minute):

### Option 1: Using Formspree (RECOMMENDED - Easiest)

1. Go to [formspree.io](https://formspree.io/)
2. Click **"Create Free"**
3. Enter your email: **anshp2931@gmail.com**
4. Click **"Sign up"**
5. Verify your email (check inbox)
6. You'll get a **Form ID** that looks like: `f_xxxxxxxxx`
7. Update the file: `src/components/Contact.jsx`

Replace this line (around line 28):
```javascript
access_key: "YOUR_API_KEY_HERE",
```

With your Form ID:
```javascript
endpoint: "https://formspree.io/f/YOUR_FORM_ID",
```

**Done!** Your emails will now work.

---

## How It Works:

1. Visitor fills out the form
2. Message sent to anshp2931@gmail.com
3. You receive email notification
4. Click reply to respond

---

## Troubleshooting:

**Q: I don't see the email?**
- Check spam/promotions folder
- Make sure you verified the Formspree email

**Q: Still not working?**
- Clear browser cache (Ctrl+F5)
- Open browser DevTools (F12) → Console tab
- Try submitting form and check for error messages

---

## Get Your Form ID:

1. Sign in to [formspree.io](https://formspree.io/)
2. Your Form ID is shown in the dashboard
3. Looks like: `f_abc123xyz`

Then update Contact.jsx with this line:
```javascript
endpoint: "https://formspree.io/f_abc123xyz",
```

That's it! ✅
