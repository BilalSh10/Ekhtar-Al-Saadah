import "./ContactUs.css";

function ContactUs() {
  return (
    <div className="donate-form">
      <h2 className="head">Contact us</h2>
      <p className="para">
        Please fill this form and provide us with your contact information
        so we <br /> can get back to you as soon as possible.
      </p>
      <div className="form">
        <label for="fname" id="form-label">
          First name
        </label>
        <input type="text" id="form-field" name="fname" />
        <br />
        <br />
        <label for="lname" id="form-label">
          Last name
        </label>
        <input type="text" id="form-field" name="lname" />
        <br />
        <br />
        <label for="phone-number" id="form-label">
          Phone number
        </label>
        <input type="text" id="form-field" name="phone-number" />
        <br />
        <br />
        <label for="E-mail" id="form-label">
          E-mail
        </label>
        <input type="text" id="form-field" name="E-mail" className="mail" />
        <br />
        <br />
        <label for="description" id="form-label" className="des">
          Description
        </label>
        <textarea
          id="form-field"
          name="description"
          className="describe"
          rows={5}
          cols={42}
        />
        <br />
        <br />
        <input type="submit" value="Send" className="btn" />
      </div>
    </div>
  );
}

export default ContactUs;
