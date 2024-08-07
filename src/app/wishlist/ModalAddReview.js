"use client"

import React, { useActionState } from "react"
import { addReviewAction } from "./action"

const ModalAddReview = ({ id, judul }) => {
  const [state, formAction, pending] = useActionState(addReviewAction, null)

  return (
    <>
      <input
        type="checkbox"
        id={`modal_review_${id}`}
        className="modal-toggle"
      />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <label
            htmlFor={`modal_review_${id}`}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-xl font-bold">Selesai Menonton? {judul}</h3>
          <form action={formAction} className="flex flex-col">
            <p className="pt-4">Berikan Ulasan Anda</p>
            <input type="hidden" name="movie_id" value={id} />
            <input
              type="text"
              name="review"
              required
              placeholder="Ketik ulasan"
              className="input input-bordered w-full"
            />
            <button
              type="submit"
              disabled={pending}
              className="btn btn-primary mt-5"
            >
              {pending ? "loading..." : "Submit"}
            </button>
          </form>
          {state?.message && (
            <p
              className={`mt-2 ${
                state.success ? "text-green-600" : "text-red-600"
              }`}
            >
              {state.message}
            </p>
          )}
        </div>
      </div>
    </>
  )
}

export default ModalAddReview
