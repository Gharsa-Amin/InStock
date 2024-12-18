import "./WarehouseDetails.scss";

const WarehouseDetails = () => {
  return (
    <>
      <header className="warehouse__header">
        <button className="warehouse__back-button">
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
        </button>
        <span className="warehouse__title">Washington</span>
        <button className="warehouse__edit-button">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04V7.04Z"
              fill="white"
            />
          </svg>
        </button>
      </header>

      <section className="warehouse__details">
        <div className="warehouse__address">
          <h2 className="warehouse__label">WAREHOUSE ADDRESS:</h2>
          <p className="warehouse__text">33 Pearl Street SW, Washington, USA</p>
        </div>

        <div className="warehouse__contact-wrapper">
          <div className="warehouse__information">
            <h2 className="warehouse__label">CONTACT NAME:</h2>
            <p className="warehouse__text">Graeme Lyon</p>
            <p className="warehouse__text">Warehouse Manager</p>
          </div>

          <div className="warehouse__information">
            <h2 className="warehouse__label">CONTACT INFORMATION:</h2>
            <p className="warehouse__text">+1 (647) 504-0911</p>
            <p className="warehouse__text">glyon@instock.com</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default WarehouseDetails;
