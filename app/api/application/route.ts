import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const {
            name,
            pronouns,
            email,
            platformUsername,
            timezone,
            discoverSource,
            interestReason,
            occupation,
            weeklybudget,
            hobbies,
            dynamicStrengths,
            birthday,
            message,
        } = body;

        // Validate required fields
        if (!name || !email || !message || !birthday) {
            return new Response(
                JSON.stringify({
                    error: 'The following fields are required: name, email, message, and birthday.',
                }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
        }

        // Confirmation email to the sender
        await resend.emails.send({
            from: process.env.EMAIL_FROM!,
            to: email,
            subject: 'Your Form Submission Has Been Received',
            html: `
        <p>Hi ${name},</p>
        <p>Thank you for reaching out! We’ve received your submission and will respond shortly.</p>
        <p><strong>Submitted Birthday:</strong> ${birthday}</p>
        <p>Best regards,<br />Silver</p>
      `,
        });

        // Forward submission details to the designated recipient
        await resend.emails.send({
            from: process.env.EMAIL_FROM!,
            to: process.env.FORWARD_TO!,
            subject: 'New Submission Received',
            html: `
        <h2>New Submission Details</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Pronouns:</strong> ${pronouns || 'Not provided'}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Preferred Platform and Username:</strong> ${platformUsername || 'Not provided'}</p>
        <p><strong>Timezone and Active Time:</strong> ${timezone || 'Not provided'}</p>
        <p><strong>Discovered Via:</strong> ${discoverSource || 'Not provided'}</p>
        <p><strong>Interest Reason:</strong> ${interestReason || 'Not provided'}</p>
        <p><strong>Occupation:</strong> ${occupation || 'Not provided'}</p>
        <p><strong>Weekly Budget:</strong> ${weeklybudget || 'Not provided'}</p>
        <p><strong>Hobbies:</strong> ${hobbies || 'Not provided'}</p>
        <p><strong>D/S Strengths:</strong> ${dynamicStrengths || 'Not provided'}</p>
        <p><strong>Birthday:</strong> ${birthday}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
        });

        return new Response(
            JSON.stringify({ message: 'Application submitted successfully!' }),
            {
                status: 200,
                headers: { 'Content-Type': 'application/json' },
            }
        );
    } catch (error) {
        console.error('Error sending email:', error);
        return new Response(
            JSON.stringify({ error: 'Failed to submit application.' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}
