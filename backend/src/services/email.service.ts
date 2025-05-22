import nodemailer, { Transporter } from "nodemailer";

class EmailService {
  private transporter: Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: "gmail",
      from: "",
      auth: {
        user: "",
        pass: "",
      },
    });
  }

  public async sendEmail(email: string): Promise<void> {
    await this.transporter.sendMail({
      to: email,
      subject: "test",
      text: "test",
    });
  }
}

export const emailService = new EmailService();
