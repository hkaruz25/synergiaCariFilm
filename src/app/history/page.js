import { getDataHistoryByUserId, getUser } from "../../libs/data"
import { Header } from "../../components/header"
import React from "react"
import ModalDeleteHistory from "./ModalDeleteHistory"

const HistoryList = async () => {
  const user = await getUser()
  const history = await getDataHistoryByUserId(user?.id)

  return (
    <main className="bg-black min-h-screen py-8">
      <Header />
      <section className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {history.length > 0 ? (
          history.map((value, index) => (
            <div
              key={value.id}
              className="bg-gray-900 p-6 rounded-lg shadow-lg relative"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-white">
                  {value.movie.judul}
                </h2>
                <span className="text-yellow-500">{value.movie.rating} ★</span>
              </div>
              <p className="text-gray-400 mb-2">Genre: {value.movie.genre}</p>
              <p className="text-gray-400 mb-2">
                Tahun Rilis: {value.movie.tahun}
              </p>
              <p className="text-gray-400 mb-4">{value.review}</p>
              <div className="flex justify-between items-center">
                <button className="py-2 px-4 rounded bg-green-500 text-white font-bold">
                  Sudah Nonton
                </button>
                <label
                  htmlFor={`delete_history_${value.id}`}
                  className="btn border-none py-2 px-4 rounded bg-red-600 text-white font-bold"
                >
                  Hapus
                </label>
              </div>
              <ModalDeleteHistory id={value.id} judul={value.movie.judul} />
            </div>
          ))
        ) : (
          <p className="text-white text-center">
            No History found for this user.
          </p>
        )}
      </section>
    </main>
  )
}

export default HistoryList
