"use client"

import React, { useRef } from "react"
import { deleteHistoryAction } from "./action"

const ModalDeleteHistory = ({ id, judul }) => {
  const modalCheckbox = useRef()
  const handleDelete = async () => {
    const res = await deleteHistoryAction(id)
    modalCheckbox.current.checked = false
    alert(res.message)
  }

  return (
    <>
      <input
        type="checkbox"
        id={`delete_history_${id}`}
        ref={modalCheckbox}
        className="modal-toggle"
      />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="text-xl font-bold text-center mb-5">
            Anda yakin ingin menghapus Film {judul} dari riwayat anda?
          </h3>
          <form onSubmit={handleDelete} className="flex justify-center gap-10">
            <label htmlFor={`delete_history_${id}`} className="btn">
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

export default ModalDeleteHistory
