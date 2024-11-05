'use server';
import ContactFormEmail from '@/components/form-email';
import { getErrorMessage, validateString } from '@/lib/utils';
import React from 'react';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (formData: FormData) => {
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  // simple server-side validation
  if (!validateString(email, 500)) {
    throw new Error('invalid email');
  }
  if (!validateString(message, 5000)) {
    throw new Error('invalid message');
  }

  let data;
  try {
    data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'mollenaezra@gmail.com',
      subject: 'Message from contact form',
      replyTo: email,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: email,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return { data };
};

export { sendEmail };
