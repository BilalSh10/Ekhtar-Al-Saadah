import { useParams } from 'react-router';

function BookTicketPage() {
  let {id} = useParams();
  return (
    <div>
      <h2>You can register to the event through Tathkirati Website: </h2>
      <h3>{id} </h3>
    </div>
  );
}

export default BookTicketPage;