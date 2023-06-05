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
