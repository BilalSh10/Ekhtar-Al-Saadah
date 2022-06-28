import GeneralForm from '../../components/formsFiles/GeneralForm';

function DonatePage() {
  return (
  	<div>
  	  <GeneralForm messageType='filled donation form message' 
  	    description='Donation description'
  	    title = 'Please fill this donation form, we will get back to you soon'
  	  />
  	</div>
  );
}

export default DonatePage;