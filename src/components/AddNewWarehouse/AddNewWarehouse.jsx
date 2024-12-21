import { useState } from "react";
import "./AddNewWarehouse.scss";
import axios from "axios";
import { Link } from "react-router-dom";

export default function AddNewWarehouse() {
  const [warehouseName, setWarehouseName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [contactName, setContactName] = useState("");
  const [position, setPosition] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const [warehouseNameError, setWarehouseNameError] = useState(false);
  const [streetAddressError, setStreetAddressError] = useState(false);
  const [cityError, setCityError] = useState(false);
  const [countryError, setCountryError] = useState(false);
  const [contactNameError, setContactNameError] = useState(false);
  const [positionError, setPositionError] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setWarehouseNameError(!warehouseName);
    setStreetAddressError(!streetAddress);
    setCityError(!city);
    setCountryError(!country);
    setContactNameError(!contactName);
    setPositionError(!position);
    setPhoneNumberError(!phoneNumber || phoneNumber.length !== 10);
    setEmailError(!email || !email.includes("@"));

    if (
      !warehouseName ||
      !streetAddress ||
      !city ||
      !country ||
      !contactName ||
      !position ||
      !phoneNumber ||
      phoneNumber.length !== 10 ||
      !email ||
      !email.includes("@")
    ) {
      return;
    }

    const newWarehouseInfo = {
      warehouse_name: warehouseName,
      address: streetAddress,
      city: city,
      country: country,
      contact_name: contactName,
      contact_position: position,
      contact_phone: phoneNumber,
      contact_email: email,
    };

    const url = "http://localhost:8080/api/warehouses";

    try {
      await axios.post(url, newWarehouseInfo);

      setWarehouseName("");
      setStreetAddress("");
      setCity("");
      setCountry("");
      setContactName("");
      setPosition("");
      setPhoneNumber("");
      setEmail("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="new-warehouse">
      <div className="new-warehouse__wrapper">
        <div className="header-wrapper">
          <h1 className="h1">
            <Link to="/">
              <svg
                className="arrow-back"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
                  fill="#2E66E6"
                />
              </svg>
            </Link>
            Add New Warehouse
          </h1>
        </div>
        <form onSubmit={handleSubmit} className="new-warehouse__form">
          <div className="new-warehouse__form-wrapper">
            <div className="details details--warehouse">
              <h2 className="add-warehouse__header">Warehouse Details</h2>
              <div className="warehouse__info-wrapper">
                <label className="warehouse__label">Warehouse Name</label>
                <input
                  type="text"
                  name="warehouseName"
                  placeholder="Warehouse Name"
                  value={warehouseName}
                  className={`warehouse__input ${
                    warehouseNameError ? "error" : ""
                  } `}
                  onChange={(event) => {
                    setWarehouseName(event.target.value);
                    setWarehouseNameError(false);
                  }}
                />
                {warehouseNameError && (
                  <p className="error-message">
                    <svg
                      className="error-svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
                        fill="#C94515"
                      />
                    </svg>
                    This field is required
                  </p>
                )}
              </div>
              <div className="warehouse__info-wrapper">
                <label className="warehouse__label">Street Address</label>
                <input
                  type="text"
                  name="streetAddress"
                  placeholder="Street Address"
                  value={streetAddress}
                  className={`warehouse__input ${
                    streetAddressError ? "error" : ""
                  } `}
                  onChange={(event) => {
                    setStreetAddress(event.target.value);
                    setStreetAddressError(false);
                  }}
                />
                {streetAddressError && (
                  <p className="error-message">
                    <svg
                      className="error-svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
                        fill="#C94515"
                      />
                    </svg>
                    This field is required
                  </p>
                )}
              </div>
              <div className="warehouse__info-wrapper">
                <label className="warehouse__label">City</label>
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={city}
                  className={`warehouse__input ${cityError ? "error" : ""} `}
                  onChange={(event) => {
                    setCity(event.target.value);
                    setCityError(false);
                  }}
                />
                {cityError && (
                  <p className="error-message">
                    <svg
                      className="error-svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
                        fill="#C94515"
                      />
                    </svg>
                    This field is required
                  </p>
                )}
              </div>
              <div className="warehouse__info-wrapper">
                <label className="warehouse__label">Country</label>
                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  value={country}
                  className={`warehouse__input ${countryError ? "error" : ""} `}
                  onChange={(event) => {
                    setCountry(event.target.value);
                    setCountryError(false);
                  }}
                />
                {countryError && (
                  <p className="error-message">
                    <svg
                      className="error-svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
                        fill="#C94515"
                      />
                    </svg>
                    This field is required
                  </p>
                )}
              </div>
            </div>
            <div className="details">
              <h2 className="add-warehouse__header">Contact Details</h2>
              <div className="warehouse__info-wrapper">
                <label className="warehouse__label">Contact Name</label>
                <input
                  type="text"
                  name="contactName"
                  placeholder="Contact Name"
                  value={contactName}
                  className={`warehouse__input ${
                    contactNameError ? "error" : ""
                  } `}
                  onChange={(event) => {
                    setContactName(event.target.value);
                    setContactNameError(false);
                  }}
                />
                {contactNameError && (
                  <p className="error-message">
                    <svg
                      className="error-svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
                        fill="#C94515"
                      />
                    </svg>
                    This field is required
                  </p>
                )}
              </div>
              <div className="warehouse__info-wrapper">
                <label className="warehouse__label">Position</label>
                <input
                  type="text"
                  name="position"
                  placeholder="Position"
                  value={position}
                  className={`warehouse__input ${
                    positionError ? "error" : ""
                  } `}
                  onChange={(event) => {
                    setPosition(event.target.value);
                    setPositionError(false);
                  }}
                />
                {positionError && (
                  <p className="error-message">
                    <svg
                      className="error-svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
                        fill="#C94515"
                      />
                    </svg>
                    This field is required
                  </p>
                )}
              </div>
              <div className="warehouse__info-wrapper">
                <label className="warehouse__label">Phone Number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  value={phoneNumber}
                  className={`warehouse__input ${
                    phoneNumberError ? "error" : ""
                  } `}
                  onChange={(event) => {
                    setPhoneNumber(event.target.value);
                    setPhoneNumberError(false);
                  }}
                />
                {phoneNumberError && (
                  <p className="error-message">
                    <svg
                      className="error-svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
                        fill="#C94515"
                      />
                    </svg>
                    This field is required: must be a valid phone number
                  </p>
                )}
              </div>
              <div className="warehouse__info-wrapper">
                <label className="warehouse__label">Email</label>
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={email}
                  className={`warehouse__input ${emailError ? "error" : ""} `}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    setEmailError(false);
                  }}
                />
                {emailError && (
                  <p className="error-message">
                    <svg
                      className="error-svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
                        fill="#C94515"
                      />
                    </svg>
                    This field is required: must be a valid email
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="buttons">
            <div className="buttons__wrapper">
              <Link to="/">
                <button className="buttons__button cancel">Cancel</button>
              </Link>
              <button type="submit" className="buttons__button add-warehouse">
                + Add Warehouse
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
