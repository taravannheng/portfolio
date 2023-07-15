import Image from "next/image";

import classes from "./contact.module.scss";

const ContactSection = () => {
  return (
    <section className={classes.contact} id="contact">
      <div className={classes.contact__body}>
        <h1 className={classes.contact__title}>Mail</h1>
        <div className={classes.contact__form_container}>
          <form
            action={`https://formsubmit.co/${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
            method="POST"
            className={classes.form}
          >
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <textarea
              name="message"
              placeholder="Enter your message here..."
              required
            ></textarea>
            <input
              type="hidden"
              name="_autoresponse"
              value="Thanks for your email! Well Received!"
            ></input>
            <div className={classes.form__submit_button_container}>
              <button type="submit">SEND</button>
            </div>
          </form>
        </div>
        <hr className={classes.contact__divider} />
        <div className={classes.contact__social_container}>
          <a
            href="https://github.com/taravannheng"
            rel="noreferrer"
            target="_blank"
          >
            <div className={classes.contact__social_logo}>
              <Image
                loading="lazy"
                src="/images/social/github.svg"
                width={24}
                height={24}
                alt="github logo"
              />
            </div>
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/taravann-heng"
            rel="noreferrer"
            target="_blank"
          >
            <div className={classes.contact__social_logo}>
              <Image
                loading="lazy"
                src="/images/social/linkedin.svg"
                width={24}
                height={24}
                alt="github logo"
              />
            </div>
            LinkedIn
          </a>
          <a
            href="https://dribbble.com/taravann"
            rel="noreferrer"
            target="_blank"
          >
            <div className={classes.contact__social_logo}>
              <Image
                loading="lazy"
                src="/images/social/dribbble.png"
                width={24}
                height={24}
                alt="dribbble logo"
              />
            </div>
            Dribbble
          </a>
        </div>
      </div>
      <div className={classes.contact__illustration}>
        <Image
          loading="eager"
          layout="responsive"
          src="/images/illustrations/illustration-contact.png"
          width={100}
          height={100}
          alt="illustration of contact"
        />
      </div>
    </section>
  );
};

export default ContactSection;
