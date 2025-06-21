import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    streetAddress: "",
    city: "",
    state: "",
    pinCode: "",
    comments: false,
    candidates: false,
    offers: false,
    pushNotifications: "",
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Parth"
          value={formData.firstName}
          onChange={changeHandler}
        />

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Katariya"
          value={formData.lastName}
          onChange={changeHandler}
        />

        <label htmlFor="email">Email Id</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="parth.katariya87@gmail.com"
          value={formData.email}
          onChange={changeHandler}
        />

        <label htmlFor="country">Country</label>
        <select
          name="country"
          id="country"
          value={formData.country}
          onChange={changeHandler}
        >
          <option>India</option>
          <option>USA</option>
          <option>Russia</option>
          <option>China</option>
          <option>Pakistan</option>
          <option>Nepal</option>
          <option>Dubai</option>
        </select>

        <label htmlFor="streetAddress">Street Address</label>
        <input
          type="text"
          name="streetAddress"
          id="streetAddress"
          placeholder="48, Anandvan st"
          value={formData.streetAddress}
          onChange={changeHandler}
        />

        <label htmlFor="city">City</label>
        <input
          type="text"
          name="city"
          id="city"
          placeholder="Vadodara"
          value={formData.city}
          onChange={changeHandler}
        />

        <label htmlFor="state">State</label>
        <input
          type="text"
          name="state"
          id="state"
          placeholder="Gujarat"
          value={formData.state}
          onChange={changeHandler}
        />

        <label htmlFor="pinCode">Pin Code</label>
        <input
          type="number"
          name="pinCode"
          id="pinCode"
          placeholder="380009"
          value={formData.pinCode}
          onChange={changeHandler}
        />

        <fieldset>
          <legend>By Email</legend>

          <div>
            <input
              type="checkbox"
              name="comments"
              id="comments"
              value={formData.comments}
              onChange={changeHandler}
            />
            <label htmlFor="comments">Get Notified On Comments</label>
          </div>

          <div>
            <input
              type="checkbox"
              name="candidates"
              id="candidates"
              value={formData.candidates}
              onChange={changeHandler}
            />
            <label htmlFor="candidates">
              Get Notified On Candidates Application
            </label>
          </div>

          <div>
            <input
              type="checkbox"
              name="offers"
              id="offers"
              value={formData.offers}
              onChange={changeHandler}
            />
            <label htmlFor="offers">Get Notified On Offers</label>
          </div>
        </fieldset>

        <fieldset>
          <legend>Push Notifications Via SMS</legend>

          <div>
            <input
              type="radio"
              name="pushNotifications"
              id="pushEverything"
              value="Everything"
              onChange={changeHandler}
            />
            <label htmlFor="pushEverything">Everything</label>
          </div>

          <div>
            <input
              type="radio"
              name="pushNotifications"
              id="pushEmail"
              value="Same As Email"
              onChange={changeHandler}
            />
            <label htmlFor="pushEmail">Same As Email</label>
          </div>

          <div>
            <input
              type="radio"
              name="pushNotifications"
              id="pushNothing"
              value="No Push Notifications"
              onChange={changeHandler}
            />
            <label htmlFor="pushNothing">No Push Notifications</label>
          </div>
        </fieldset>

        <button>Save</button>
      </form>
    </>
  );
}

export default App;
