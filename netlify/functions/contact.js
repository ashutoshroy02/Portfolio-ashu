const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

exports.handler = async (event) => {
    // Only POST
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    let body;
    try {
        body = JSON.parse(event.body);
    } catch {
        return { statusCode: 400, body: JSON.stringify({ error: 'Invalid JSON' }) };
    }

    const { name, message } = body;

    if (!message || message.trim().length < 2) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: 'Message is required.' })
        };
    }

    const senderName = (name && name.trim()) ? name.trim() : 'Anonymous';

    const { data, error } = await resend.emails.send({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to:   ['ashu2003roy@gmail.com'],
        subject: `New message from ${senderName} — Portfolio`,
        html: `
            <div style="font-family: Inter, sans-serif; max-width: 520px; margin: 0 auto; padding: 32px; background: #f9f9f9; border-radius: 8px;">
                <h2 style="margin: 0 0 8px; color: #111;">New Portfolio Message</h2>
                <p style="margin: 0 0 24px; color: #666; font-size: 13px;">Sent from mitovoid.netlify.app</p>
                <table style="width:100%; border-collapse: collapse;">
                    <tr>
                        <td style="padding: 8px 0; font-weight: 600; color: #111; width: 80px;">From</td>
                        <td style="padding: 8px 0; color: #333;">${senderName}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; font-weight: 600; color: #111; vertical-align: top;">Message</td>
                        <td style="padding: 8px 0; color: #333; white-space: pre-wrap;">${message.trim()}</td>
                    </tr>
                </table>
            </div>
        `,
    });

    if (error) {
        console.error('Resend error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to send. Try again.' })
        };
    }

    return {
        statusCode: 200,
        body: JSON.stringify({ success: true, id: data?.id })
    };
};
