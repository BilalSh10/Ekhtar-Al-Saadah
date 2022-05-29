import "./Donate.css";

function Donate() {
  return (
    <div className="donate-form">
      <h2 className="head">Buy Us Coffee!</h2>
      <p className="para">
        If you want to make a donation for us, please fill the following form,
        including <br /> your contact information, so we can get back to you and
        process the donation.
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
        {/* <input
          type="text"
          id="form-field"
          name="description"
          className="desc"
        /> */}
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

export default Donate;
