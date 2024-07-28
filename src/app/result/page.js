"use client";  // Tambahkan directive ini di bagian atas

import { Header } from "@/components/header";
import { useEffect, useState } from 'react';

const Recommendation = () => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const genre = urlParams.get('genre');
      const theme = urlParams.get('theme');
      const movies = urlParams.get('movies');

      // Simulasi pengambilan data berdasarkan query params
      if (genre && theme && movies) {
        const fetchedRecommendations = [
          {
            title: 'The Batman',
            genre: 'Dark, Thriller, Trilogy',
            releaseYear: 2023,
            rating: 4.5,
            synopsis: 'Ketika Riddler, seorang pembunuh berantai yang sadis mulai membunuh tokoh-tokoh politik penting di Gotham, Batman dituntut untuk menyelidiki korupsi tersembunyi di kota itu dan mempertanyakan keterlibatan keluarganya.'
          },
          // Tambahkan rekomendasi lainnya
        ];
        setRecommendations(fetchedRecommendations);
      }
    }
  }, []);

  return (
    <main className="bg-black min-h-screen py-8">
      <Header />

      <section className="container mx-auto px-4">
        <h2 className="text-3xl text-white font-bold mb-4">Berdasarkan informasi tersebut:</h2>
        <p className="text-gray-400 mb-8">Jangan lupa buat ditambahkan ke wishlist biar ga lupa xiixixi!</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recommendations.map((rec, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl text-white font-bold mb-2">{rec.title}</h3>
              <p className="text-gray-400 mb-2">Genre: {rec.genre}</p>
              <p className="text-gray-400 mb-2">Tahun Rilis: {rec.releaseYear}</p>
              <p className="text-gray-400 mb-4">Rating: {rec.rating} ⭐</p>
              <p className="text-gray-400 mb-4">{rec.synopsis}</p>
              <button className="bg-purple-600 py-2 px-4 rounded text-white font-bold hover:bg-purple-700 transition">Tambahkan Wishlist</button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Recommendation;
