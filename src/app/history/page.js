
import { Header } from "@/components/header";
import React from 'react';
import Link from 'next/link';

const MovieCard = ({ title, genre, releaseYear, synopsis, rating, watched }) => (
  <div className="bg-gray-900 p-6 rounded-lg shadow-lg relative">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-bold text-white">{title}</h2>
      <span className="text-yellow-500">{rating} ★</span>
    </div>
    <p className="text-gray-400 mb-2">Genre: {genre}</p>
    <p className="text-gray-400 mb-2">Tahun Rilis: {releaseYear}</p>
    <p className="text-gray-400 mb-4">{synopsis}</p>
    <div className="flex justify-between items-center">
      <button className={`py-2 px-4 rounded ${watched ? 'bg-green-500' : 'bg-purple-600'} text-white font-bold`}>
        {watched ? 'Sudah!' : 'Sudah Nonton?'}
      </button>
      <button className="py-2 px-4 rounded bg-red-600 text-white font-bold">Hapus</button>
    </div>
  </div>
);

const MovieList = () => {
  const movies = [
    {
      title: 'The Batman',
      genre: 'Dark, Thriller, Trilogy',
      releaseYear: 2023,
      synopsis: 'Menurut saya, filmya terlalu dark dan cukup membosankan dengan durasi 3 jam.',
      rating: 4.5,
      watched: true,
    },
    // Tambahkan film lainnya sesuai kebutuhan
  ];

  return (
    <main className="bg-black min-h-screen py-8">
      <Header />
      <section className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {movies.map((movie, index) => (
          <MovieCard key={index} {...movie} />
        ))}
      </section>
    </main>
  );
};

export default MovieList;
