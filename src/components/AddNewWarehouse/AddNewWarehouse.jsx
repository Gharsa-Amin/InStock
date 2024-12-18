import "./AddNewWarehouse.scss";

export default function AddNewWarehouse() {
  return (
    <div className="new-warehouse">
      <div className="new-warehouse__wrapper">
        <div className="header-wrapper">
          <h1 className="h1">
            <svg
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
            Add New Warehouse
          </h1>
        </div>
        <form className="new-warehouse__form">
          <div className="new-warehouse__form-wrapper">
            <div className="details details--warehouse">
              <h2 className="warehouse__header">Warehouse Details</h2>
              <div className="warehouse__info-wrapper">
                <label className="warehouse__label">Warehouse Name</label>
                <input
                  type="text"
                  className="warehouse__input"
                  placeholder="Warehouse Name"
                />
              </div>
              <div className="warehouse__info-wrapper">
                <label className="warehouse__label">Street Address</label>
                <input
                  type="text"
                  className="warehouse__input"
                  placeholder="Street Address"
                />
              </div>
              <div className="warehouse__info-wrapper">
                <label className="warehouse__label">City</label>
                <input
                  type="text"
                  className="warehouse__input"
                  placeholder="City"
                />
              </div>
              <div className="warehouse__info-wrapper">
                <label className="warehouse__label">Country</label>
                <input
                  type="text"
                  className="warehouse__input"
                  placeholder="Country"
                />
              </div>
            </div>
            <div className="details">
              <h2 className="warehouse__header">Contact Details</h2>
              <div className="warehouse__info-wrapper">
                <label className="warehouse__label">Contact Name</label>
                <input
                  type="text"
                  className="warehouse__input"
                  placeholder="Contact Name"
                />
              </div>
              <div className="warehouse__info-wrapper">
                <label className="warehouse__label">Position</label>
                <input
                  type="text"
                  className="warehouse__input"
                  placeholder="Position"
                />
              </div>
              <div className="warehouse__info-wrapper">
                <label className="warehouse__label">Phone Number</label>
                <input
                  type="text"
                  className="warehouse__input"
                  placeholder="Phone Number"
                />
              </div>
              <div className="warehouse__info-wrapper">
                <label className="warehouse__label">Email</label>
                <input
                  type="text"
                  className="warehouse__input"
                  placeholder="Email"
                />
              </div>
            </div>
          </div>
          <div className="buttons">
            <div className="buttons__wrapper">
              <button className="buttons__button cancel">Cancel</button>
              <button className="buttons__button add-warehouse">
                + Add Warehouse
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
