import React, { useEffect, useState } from "react";
import "./DeleteInventoryItem.scss";

export default function DeleteInventoryItem({
  item,
  handleClose,
  handleDelete,
}) {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <div className="modal__close">
          <svg
            onClick={handleClose}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
              fill="#13182C"
            />
          </svg>
        </div>
        <div className="modal__content">
          <div className="modal__content-wrapper">
            <h1 className="modal__header">
              Delete {item.item_name} inventory item?
            </h1>
            <p className="modal__text">
              Please confirm that you would like to delete {item.item_name} from
              the inventory list. You won't be able to undo this action.
            </p>
          </div>
          <div className="modal-buttons">
            <button onClick={handleClose} className="modal-buttons__cancel">
              Cancel
            </button>
            <button onClick={handleDelete} className="modal-buttons__delete">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
