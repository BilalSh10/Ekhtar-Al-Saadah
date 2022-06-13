import { useRef } from "react";
import { DeleteDocumentFromDB } from "../dbOperations/DeleteDocumentFromDB";
import { db } from "../../firebase-config";
import { updateDoc, doc } from "firebase/firestore";
import "./EditButton.css";

function EditButton(props) {
  const document = doc(db, props.collectionName, props.id);

  const titleInputRef = useRef();
  const priorityInputRef = useRef();
  const timeInputRef = useRef();
  const descriptionInputRef = useRef();
  const cityInputRef = useRef();
  const venueInputRef = useRef();
  const typeInputRef = useRef();
  const categoryInputRef = useRef();
  const registrationLinkInputRef = useRef();

  function deleteHandler() {
    DeleteDocumentFromDB(props.collectionName, props.id);
  }

  async function editTitle(newValue) {
    await updateDoc(document, { title: titleInputRef.current.value });
  }

  async function editPriority(newValue) {
    await updateDoc(document, { priority: priorityInputRef.current.value });
  }

  async function editTime(newValue) {
    await updateDoc(document, { time: timeInputRef.current.value });
  }

  async function editDescrption(newValue) {
    await updateDoc(document, {
      description: descriptionInputRef.current.value,
    });
  }

  async function editCity(newValue) {
    await updateDoc(document, { city: cityInputRef.current.value });
  }

  async function editVenue(newValue) {
    await updateDoc(document, { venue: venueInputRef.current.value });
  }

  async function editType(newValue) {
    await updateDoc(document, { type: typeInputRef.current.value });
  }

  async function editCategory(newValue) {
    await updateDoc(document, { category: categoryInputRef.current.value });
  }

  async function editRegistrationLink(newValue) {
    await updateDoc(document, {
      registrationLink: registrationLinkInputRef.current.value,
    });
  }

  if (props.edit === "yes") {
    return (
      <div className="EventEditCont">
        {/* <div>    */}
        {/* <h4>title: {props.title}</h4> */}
        {/* <h4>priority: {props.priority}</h4> */}
        {/* <h4>time: {props.time}</h4> */}
        {/* <p>description: {props.description}</p> */}
        {/* <h4>city: {props.city}</h4> */}
        {/* <h4>venue: {props.venue}</h4> */}
        {/* <h4>type: {props.type}</h4> */}
        {/* <h3>category: {props.category}</h3> */}
        {/* <h4>registrationLink: {props.registrationLink}</h4> */}
        {/* </div>   */}

        <div>
          <button className="EventDeleteButton" onClick={deleteHandler}>
            Delete event
          </button>
        </div>
        <div>
          <div>
            <h4 className="PreviousDetails">Title: {props.title}</h4>
            <label className="NewEventDetailsLabel" htmlFor="title">
              New title
            </label>
            <div className="InputAndBtnCont">
              <input
                className="NewEventDetailsInput"
                type="text"
                required
                id="title"
                ref={titleInputRef}
              />
              <button
                className="NewEventDetailsBtn"
                onClick={() => {
                  editTitle();
                }}
              >
                Edit
              </button>
            </div>
          </div>
          <div>
            <h4 className="PreviousDetails">Priority: {props.priority}</h4>
            <label className="NewEventDetailsLabel" htmlFor="priority">
              Priority
            </label>
            <div className="InputAndBtnCont">
              <input
                className="NewEventDetailsInput"
                type="number"
                required
                id="priority"
                ref={priorityInputRef}
              />
              <button
                className="NewEventDetailsBtn"
                onClick={() => {
                  editPriority();
                }}
              >
                Edit
              </button>
            </div>
          </div>
          <div>
            <h4 className="PreviousDetails">Time: {props.time}</h4>
            <label className="NewEventDetailsLabel" htmlFor="time">
              Time
            </label>
            <div className="InputAndBtnCont">
              <input
                className="NewEventDetailsInput"
                type="datetime-local"
                required
                id="time"
                ref={timeInputRef}
              />
              <button
                className="NewEventDetailsBtn"
                onClick={() => {
                  editTime();
                }}
              >
                Edit
              </button>
            </div>
          </div>

          <div>
            <h4 className="PreviousDetails">City: {props.city}</h4>
            <label className="NewEventDetailsLabel" htmlFor="city">
              City
            </label>
            <div className="InputAndBtnCont">
              <input
                className="NewEventDetailsInput"
                type="text"
                required
                id="city"
                ref={cityInputRef}
              />
              <button
                className="NewEventDetailsBtn"
                onClick={() => {
                  editCity();
                }}
              >
                Edit
              </button>
            </div>
          </div>
          <div>
            <h4 className="PreviousDetails">Venue: {props.venue}</h4>
            <label className="NewEventDetailsLabel" htmlFor="venue">
              Venue
            </label>
            <div className="InputAndBtnCont">
              <input
                className="NewEventDetailsInput"
                type="text"
                required
                id="venue"
                ref={venueInputRef}
              />
              <button
                className="NewEventDetailsBtn"
                onClick={() => {
                  editVenue();
                }}
              >
                Edit
              </button>
            </div>
          </div>
          <div>
            <h4 className="PreviousDetails">Type: {props.type}</h4>
            <label className="NewEventDetailsLabel" htmlFor="type">
              Type
            </label>
            <div className="InputAndBtnCont">
              <input
                className="NewEventDetailsInput"
                type="text"
                required
                id="Type"
                ref={typeInputRef}
              />
              <button
                className="NewEventDetailsBtn"
                onClick={() => {
                  editType();
                }}
              >
                Edit
              </button>
            </div>
          </div>
          <div>
            <h3 className="PreviousDetails">Category: {props.category}</h3>
            <label className="NewEventDetailsLabel" htmlFor="category">
              Category
            </label>
            <div className="InputAndBtnCont">
              <input
                className="NewEventDetailsInput"
                type="text"
                required
                id="category"
                ref={categoryInputRef}
              />
              <button
                className="NewEventDetailsBtn"
                onClick={() => {
                  editCategory();
                }}
              >
                Edit
              </button>
            </div>
          </div>
          <div>
            <h4 className="PreviousDetails">
              Registration link: {props.registrationLink}
            </h4>
            <label className="NewEventDetailsLabel" htmlFor="registrationLink">
              Registration link
            </label>
            <div className="InputAndBtnCont">
              <input
                className="NewEventDetailsInput"
                type="text"
                required
                id="registrationLink"
                ref={registrationLinkInputRef}
              />
              <button
                className="NewEventDetailsBtn"
                onClick={() => {
                  editRegistrationLink();
                }}
              >
                Edit
              </button>
            </div>
          </div>
          {/* <div>
            <p className="PreviousDetails">Description: {props.description}</p>
            <label className="NewEventDetailsLabel" htmlFor="description">
              Description
            </label>
            <div className="InputAndBtnCont">
              <input
                className="NewEventDetailsInput"
                type="text"
                required
                id="description"
                ref={descriptionInputRef}
              />
              <button
                className="NewEventDetailsBtn"
                onClick={() => {
                  editDescrption();
                }}
              >
                Edit
              </button>
            </div>
          </div> */}
          <div>
            <p className="PreviousDetails">Description: {props.description}</p>
            <label className="NewEventDetailsLabel" htmlFor="description">
              Description
            </label>
            <div className="InputAndBtnCont">
              <textarea
                className="NewEventDetailsInput"
                type="text"
                rows="4"
                required
                id="description"
                ref={descriptionInputRef}
              />
              <button
                className="NewEventDetailsBtn"
                onClick={() => {
                  editDescrption();
                }}
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditButton;
