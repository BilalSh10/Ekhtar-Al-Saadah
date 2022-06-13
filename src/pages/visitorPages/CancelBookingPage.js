import GeneralForm from '../../components/formsFiles/GeneralForm';

function CancelBookingPage() {
  return (
  	<div>
  	  <GeneralForm messageType='cancel booking a ticket message' 
  	              description='Mesage description'
  	              title = 'Please fill this following form if you wish to cancel a ticket you have already paid for, we will get back to you soon'
  	    />
  	</div>
  );
}

export default CancelBookingPage;