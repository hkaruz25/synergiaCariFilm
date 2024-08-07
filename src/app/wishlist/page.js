import { Header } from "../../components/header"
import { getDataMovieByUserId, getUser } from "../../libs/data"
import React from "react"
import ModalAddReview from "./ModalAddReview"
import ModalDeleteWishlist from "./ModalDeleteWishlist"

const MovieCard = ({
  id,
  judul,
  genre,
  tahun,
  sinopsis,
  rating,
  image,
  watched,
}) => (
  <div className="bg-gray-900 p-6 rounded-lg shadow-lg relative">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-bold text-white">{judul}</h2>
      <span className="text-yellow-500">{rating} ★</span>
    </div>
    <div className="overflow-hidden w-full h-52 rounded-lg mb-4">
      <img
        src={image}
        alt={judul}
        className="block object-cover w-full h-full"
      />
    </div>
    <p className="text-gray-400 mb-2">Genre: {genre}</p>
    <p className="text-gray-400 mb-2">Tahun Rilis: {tahun}</p>
    <p className="text-gray-400 mb-4">{sinopsis}</p>
    <div className="flex justify-between items-center">
      {watched ? (
        <label className="py-2 px-4 rounded bg-green-500 text-white font-bold">
          Sudah!
        </label>
      ) : (
        <label
          htmlFor={`modal_review_${id}`}
          className="cursor-pointer py-2 px-4 rounded bg-purple-600 hover:bg-purple-700 text-white font-bold"
        >
          Sudah Nonton?
        </label>
      )}
      <label
        htmlFor={`modal_delete_${id}`}
        className="btn border-none py-2 px-4 rounded bg-red-600 text-white font-bold"
      >
        Hapus
      </label>
      <ModalAddReview id={id} judul={judul} />
      <ModalDeleteWishlist id={id} judul={judul} />
    </div>
  </div>
)

const WishList = async () => {
  const user = await getUser()
  const movies = await getDataMovieByUserId(user?.id)

  return (
    <main className="bg-black min-h-screen py-8">
      <Header />
      <section className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.id}>
              <MovieCard {...movie} />
            </div>
          ))
        ) : (
          <p className="text-white text-center">
            No movies found for this user.
          </p>
        )}
      </section>
    </main>
  )
}

export default WishList
