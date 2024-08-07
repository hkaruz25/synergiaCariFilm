"use client"

import React, { useRef } from "react"
import { deleteWishlistAction } from "./action"

const ModalDeleteWishlist = ({ id, judul }) => {
  const modalCheckbox = useRef(null)
  const handleDelete = async () => {
    const res = await deleteWishlistAction(id)
    modalCheckbox.current.checked = false
    alert(res.message)
  }

  return (
    <>
      <input
        type="checkbox"
        id={`modal_delete_${id}`}
        ref={modalCheckbox}
        className="modal-toggle"
      />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="text-xl font-bold text-center mb-5">
            Anda yakin ingin menghapus Film {judul} dari wishlist?
          </h3>
          <form onSubmit={handleDelete} className="flex justify-center gap-10">
            <label htmlFor={`modal_delete_${id}`} className="btn">
              Cancel
            </label>
            <button type="submit" className="btn btn-error">
              Yes
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default ModalDeleteWishlist
