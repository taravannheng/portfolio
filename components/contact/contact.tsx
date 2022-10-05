import Image from 'next/image';

import classes from './contact.module.scss';

const ContactSection = () => {
  return (
    <div className={classes.contact}>
      <h2 className={classes.contact__title}>Contact</h2>
      <div className={`${classes.contact__content} ${classes.content}` }>
        <div className={classes.content__illustration}>
          <Image layout='responsive' src='/images/illustrations/illustration-contact.png' width={800} height={800} alt="illustration of contact" />
        </div>
        <div className={classes.content__form_container}>
          <form
            action={`https://formsubmit.co/${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
            method="POST"
            className={classes.form}
          >
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <textarea name="message" placeholder="Enter your message here..." required></textarea>
            <input type="hidden" name="_autoresponse" value="Thanks for your email! Well Received!"></input>
            <div className={classes.form__submit_button_container}>
              <button type="submit">SEND</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
