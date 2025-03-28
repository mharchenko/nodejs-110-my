import nodemailer from 'nodemailer';

import { getEnvVar } from '../utils/getEnvVar.js';
// const transporter = nodemailer.createTransport({
//   host: getEnvVar('SMTP_HOST'),
//   port: getEnvVar('SMTP_PORT'),
//   secure: false, // true for port 465, false for other ports
//   auth: {
//     user: getEnvVar('SMTP_USER'),
//     pass: getEnvVar('SMTP_PASSWORD'),
//   },
//   startTls: { minVersion: 'TLSv1.2' },
// });

// export function sendMail(too, subject, content) {
//   return transporter.sendMail({
//     from: getEnvVar('SENDER_EMAIL'),
//     too,
//     subject,
//     html: content,
//   });
// }
const transporter = nodemailer.createTransport({
  host: getEnvVar('SMTP_HOST'),
  port: getEnvVar('SMTP_PORT'),
  secure: false, // true for port 465, false for other ports
  auth: {
    user: getEnvVar('SMTP_USER'),
    pass: getEnvVar('SMTP_PASSWORD'),
  },
});

export function sendEmail(to, subject, content) {
  return transporter.sendMail({
    from: getEnvVar('SENDER_EMAIL'),
    to,
    subject,
    html: content,
  });
}
