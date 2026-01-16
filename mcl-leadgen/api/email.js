// File: api/email.js (in your root folder)

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).send({ message: 'Only POST requests allowed' });
  }

  // We expect these values from the Frontend
  const { service_id, template_id, user_id, template_params } = req.body;

  try {
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id,
        template_id,
        user_id, 
        template_params,
      }),
    });

    if (response.ok) {
      return res.status(200).send('Message sent successfully');
    } else {
      const errorText = await response.text();
      return res.status(response.status).send(errorText);
    }
  } catch (error) {
    return res.status(500).send({ error: 'Failed to send email', details: error.message });
  }
}