import path from "node:path";

import nodemailer, { Transporter } from "nodemailer";
import hbs from "nodemailer-express-handlebars";

import { config } from "../configs/config";
import { emailConstant } from "../constants/email.constant";
import { EmailTypeEnum } from "../enums/email-type.enum";
import { EmailTypeToPayload } from "../types/email-type-to-payload.type";

class EmailService {
  private transporter: Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: "gmail",
      from: "",
      auth: {
        user: config.smtpEmail,
        pass: config.smtpPassword,
      },
    });

    const hbsOptions = {
      viewEngine: {
        extname: ".hbs",
        layoutsDir: path.join(
          process.cwd(),
          "backend",
          "src",
          "templates",
          "layouts",
        ),
        partialDir: path.join(
          process.cwd(),
          "backend",
          "src",
          "templates",
          "partials",
        ),
        defaultLayout: "main",
      },
      viewPath: path.join(
        process.cwd(),
        "backend",
        "src",
        "templates",
        "views",
      ),
      extName: ".hbs",
    };

    this.transporter.use("compile", hbs(hbsOptions));
  }

  public async sendEmail<T extends EmailTypeEnum>(
    type: T,
    email: string,
    context: EmailTypeToPayload[T],
  ): Promise<void> {
    const { subject, template } = emailConstant[type];
    const options = {
      to: email,
      subject,
      template,
      context,
    };
    await this.transporter.sendMail(options);
  }
}

export const emailService = new EmailService();
