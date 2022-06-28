import GeneralForm from '../../components/formsFiles/GeneralForm';

function ContactUsPage() {
  return (
  	<div>
  	  <GeneralForm messageType='contact us message'
  	 	  description='Message'
  	  	title = "Please fill this form, we will get back to you soon"
  	  />
  	</div>
  );
}

export default ContactUsPage;