"use client" // Tambahkan directive ini di bagian atas

import { Header } from "../../components/header"
import { useState } from "react"
import Link from "next/link"

export default function Home() {
  const [genre, setGenre] = useState([])
  const [theme, setTheme] = useState("")
  const [movies, setMovies] = useState("")

  const handleGenreClick = (selectedGenre) => {
    setGenre((prev) =>
      prev.includes(selectedGenre)
        ? prev.filter((g) => g !== selectedGenre)
        : [...prev, selectedGenre]
    )
  }

  const buildQueryString = () => {
    const params = new URLSearchParams()
    if (genre.length > 0) params.append("genre", genre.join(","))
    if (theme) params.append("theme", theme)
    if (movies) params.append("movies", movies)
    return params.toString()
  }

  return (
    <main className="bg-black min-h-screen py-8">
      <Header />

      <section className="container mx-auto px-4 bg-gray-900 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl text-white font-bold mb-4 text-center">
          Cari Film Sesukamu!
        </h2>
        <p className="text-gray-400 mb-8 text-center">
          Masukkan data supaya kami bisa carikan film yang sesuai untukmu!
        </p>

        <div className="mb-6">
          <h3 className="text-xl text-white font-bold mb-2">Genre</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
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
            ].map((genreItem) => (
              <button
                key={genreItem}
                onClick={() => handleGenreClick(genreItem)}
                className={`py-2 px-4 rounded border ${
                  genre.includes(genreItem) ? "bg-gray-700" : "bg-gray-800"
                } text-white hover:bg-gray-700 transition`}
              >
                {genreItem}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-xl text-white font-bold mb-2">Tema</h3>
          <input
            type="text"
            placeholder="Masukkan tema yang kamu inginkan!"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="w-full p-3 rounded bg-gray-800 text-white focus:bg-gray-700 focus:outline-none"
          />
        </div>

        <div className="mb-8">
          <h3 className="text-xl text-white font-bold mb-2">
            Film yang Kamu Nikmati
          </h3>
          <input
            type="text"
            placeholder="Masukkan 3 judul film yang pernah ditonton dan menarik!"
            value={movies}
            onChange={(e) => setMovies(e.target.value)}
            className="w-full p-3 rounded bg-gray-800 text-white focus:bg-gray-700 focus:outline-none"
          />
        </div>

        <div className="text-center">
          <Link href={`/result?${buildQueryString()}`}>
            <button className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded transition">
              Cari Kuy!
            </button>
          </Link>
        </div>
      </section>
    </main>
  )
}
