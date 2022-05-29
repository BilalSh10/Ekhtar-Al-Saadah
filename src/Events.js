import "./EventsV2.css";
import OneEvent from "./OneEvent";

function Events() {
  return (
    <div className="events-body">
      <h2 className="head">Events</h2>
      <div className="filter-cat">
        <form className="filter">
          <label for="cat" id="cat-label">Choose a category: &nbsp;&nbsp;</label>
          <select id="cat" name="category">
            <option value="cate" selected>Category</option>
            <option value="theatrical">Theatrical</option>
            <option value="musical">Musical</option>
          </select>
          {/* <input type="submit" /> */}
        </form>
      </div>
      <div className="events-list">
        <OneEvent className="single-event" />
        <OneEvent className="single-event" />
        <OneEvent className="single-event" />
      </div>
    </div>
  );
}

export default Events;
