// pages/api/save-email.js
import fs from 'fs';
import emails from '../../../data/emails.json';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    // Define the path to the JSON file
    const filePath = emails.resolve('.', 'emails.json');

    try {
      // Read the existing emails from the file (or create it if it doesn't exist)
      let emails = [];
      if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath, 'utf8');
        emails = JSON.parse(data);
      }

      // Add the new email to the array
      emails.push({ email });

      // Write the updated email list back to the file
      fs.writeFileSync(filePath, JSON.stringify(emails, null, 2));

      return res.status(200).json({ message: 'Email saved successfully!' });
    } catch (error) {
      console.error('Error saving email:', error);
      return res.status(500).json({ error: 'Could not save email' });
    }
  } else {
    // Handle any other HTTP method
    return res.setHeader('Allow', ['POST']).status(405).end(`Method ${req.method} Not Allowed`);
  }
}
