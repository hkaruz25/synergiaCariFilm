"use client"

import React, { useRef, useState } from "react"
import { FaArrowCircleLeft } from "react-icons/fa"

const ModalAddWishlist = () => {
  const modalCheckbox = useRef(null)

  const genreFilm = [
    "Aksi",
    "Komedi",
    "Drama",
    "Sains Fiksi",
    "Fantasi",
    "Romantis",
    "Thriller",
    "Misteri",
    "Horror",
    "Petualangan",
    "Dokumentari",
    "Musikal",
  ]

  const [file, setFile] = useState(null)
  const [, setStatus] = useState("")

  const handleFileChange = (event) => {
    setFile(event.target.files[0])
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)
    if (file) {
      formData.append("image", file)
    }

    try {
      const response = await fetch("/api/wishlist", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()
      if (data.success) {
        alert("Wishlist added and file uploaded successfully.")
        modalCheckbox.current.checked = false
      } else {
        alert(`Operation failed: ${data.message}`)
      }
    } catch (error) {
      console.error("Error during the operation:", error)
      alert("Operation failed")
    }
  }

  return (
    <>
      <input
        ref={modalCheckbox}
        type="checkbox"
        id="modal_add_wishlist"
        className="modal-toggle"
      />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <div className="flex items-center gap-2 mb-4">
            <label htmlFor="modal_add_wishlist" className="cursor-pointer">
              <FaArrowCircleLeft size={28} />
            </label>
            <h3 className="text-2xl font-bold">Tambah Wishlist!</h3>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <div>
              <label>Rating</label>
              <input
                type="number"
                name="rating"
                className="input input-bordered w-full"
                placeholder="Masukan rating film"
                required
                max={5}
              />
            </div>
            <div>
              <label>Judul Film</label>
              <input
                type="text"
                name="judul"
                className="input input-bordered w-full"
                placeholder="Masukan Judul film"
                required
              />
            </div>
            <div>
              <label>Genre</label>
              <select
                className="select select-bordered w-full"
                name="genre"
                required
              >
                <option disabled value={" "}>
                  Pilih Genre Film
                </option>
                {genreFilm.map((value, idx) => (
                  <option key={idx} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label>Tahun Release</label>
              <input
                type="number"
                name="tahun"
                className="input input-bordered w-full"
                placeholder="Masukan Tahun Release film"
                required
              />
            </div>
            <div>
              <label>Sinopsis</label>
              <input
                type="text"
                name="sinopsis"
                className="input input-bordered w-full"
                placeholder="Masukan Sinopsis film"
                required
              />
            </div>
            <div>
              <label>Poster Movie</label>
              <input
                type="file"
                name="image"
                onChange={handleFileChange}
                className="file-input file-input-bordered w-full"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary mt-3">
              Tambahkan Wishlist
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default ModalAddWishlist
