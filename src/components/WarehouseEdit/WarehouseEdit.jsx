import { useEffect, useState } from "react";
import "./WarehouseEdit.scss";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

const WarehouseEdit = () => {
  const [warehouse, setWarehouse] = useState([]);
  const { id } = useParams();

  const [warehouseName, setWarehouseName] = useState("");
  const [warehouseNameError, setWarehouseNameError] = useState(false);
  const [streetAddress, setStreetAddress] = useState("");
  const [streetAddressError, setStreetAddressError] = useState(false);
  const [city, setCity] = useState("");
  const [cityError, setCityError] = useState(false);
  const [country, setCountry] = useState("");
  const [countryError, setCountryError] = useState(false);
  const [contactName, setContactName] = useState("");
  const [contactNameError, setContactNameError] = useState(false);
  const [position, setPosition] = useState("");
  const [positionError, setPositionError] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  useEffect(() => {
    const url = `http://localhost:8080/api/warehouses/${id}`;
    const fetchWarehouseDetails = async () => {
      try {
        const response = await axios.get(url);
        const data = response.data[0];
        setWarehouse(data);
        setWarehouseName(data.warehouse_name || "");
        setStreetAddress(data.address || "");
        setCity(data.city || "");
        setCountry(data.country || "");
        setContactName(data.contact_name || "");
        setPosition(data.contact_position || "");
        setPhoneNumber(data.contact_phone || "");
        setEmail(data.contact_email || "");
      } catch (error) {
        console.error("Cannot fetch warehouse details", error);
      }
    };
    fetchWarehouseDetails();
  }, [id]);

  if (!warehouse) {
    return <>Loading warehouse details...</>;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("button clicked");

    const isPhoneNumberValid = (number) => {
      const withoutDashFormat = /^\d{10}$/;
      const apiFormat = /^\+1 \(\d{3}\) \d{3}-\d{4}$/;
      return withoutDashFormat.test(number) || apiFormat.test(number);
    };

    setWarehouseNameError(!warehouseName);
    setStreetAddressError(!streetAddress);
    setCityError(!city);
    setCountryError(!country);
    setContactNameError(!contactName);
    setPositionError(!position);
    setPhoneNumberError(!phoneNumber || !isPhoneNumberValid(phoneNumber));
    setEmailError(!email || !email.includes("@"));

    if (
      !warehouseName ||
      !streetAddress ||
      !city ||
      !country ||
      !contactName ||
      !position ||
      !phoneNumber ||
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

    const url = `http://localhost:8080/api/warehouses/${id}`;
    console.log(url);
    console.log(newWarehouseInfo);

    try {
      await axios.patch(url, newWarehouseInfo);

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

    if (!warehouse) {
      return <>Loading warehouse details...</>;
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
            Edit Warehouse
          </h1>
        </div>
        <form onSubmit={handleSubmit} className="new-warehouse__form">
          <div className="new-warehouse__form-wrapper">
            <div className="details details--warehouse">
              <h2 className="warehouse__header">Warehouse Details</h2>
              <div className="warehouse__info-wrapper">
                <label className="warehouse__label">Warehouse Name</label>
                <input
                  type="text"
                  name="warehouseName"
                  //placeholder={warehouse.warehouse_name}
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
                  //placeholder={warehouse.address}
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
                  //placeholder={warehouse.city}
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
                  //placeholder={warehouse.country}
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
              <h2 className="warehouse__header">Contact Details</h2>
              <div className="warehouse__info-wrapper">
                <label className="warehouse__label">Contact Name</label>
                <input
                  type="text"
                  name="contactName"
                  //placeholder={warehouse.contact_name}
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
                  //placeholder={warehouse.contact_position}
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
                  //placeholder={warehouse.contact_phone}
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
                  //placeholder={warehouse.contact_email}
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
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WarehouseEdit;
