/**
 * EmailJS Configuration
 * 
 * SETUP INSTRUCTIONS:
 * 1. Go to https://emailjs.com/ and sign up for a free account
 * 2. Verify your email
 * 3. Go to Dashboard → Email Services → Add New Service
 *    - Select "Gmail" (or your email provider)
 *    - Connect your email (anshp2931@gmail.com)
 * 4. Copy the Service ID from the dashboard
 * 5. Go to Dashboard → Email Templates → Create New Template
 *    - Template should include these variables:
 *      {{from_name}} - Sender's name
 *      {{from_email}} - Sender's email
 *      {{message}} - Sender's message
 * 6. Copy the Template ID
 * 7. Go to Dashboard → Account → API Keys
 * 8. Copy the Public Key
 * 9. Fill in the values below:
 */

export const emailConfig = {
  // Get from: https://dashboard.emailjs.com/account/keys
  PUBLIC_KEY: "YOUR_PUBLIC_KEY_HERE",
  
  // Get from: https://dashboard.emailjs.com/services
  SERVICE_ID: "service_YOUR_SERVICE_ID",
  
  // Get from: https://dashboard.emailjs.com/templates
  TEMPLATE_ID: "template_YOUR_TEMPLATE_ID",
  
  // Your email address where messages will be sent
  RECIPIENT_EMAIL: "anshp2931@gmail.com",
};

export default emailConfig;
