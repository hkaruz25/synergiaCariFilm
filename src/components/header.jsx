import Link from "next/link";
export const Header = () => {
  return (
    <header className="container mx-auto px-4 flex justify-between items-center mb-8">
      <h1 className="text-3xl text-white font-bold">CariFilm</h1>
      <nav>
        <ul className="flex space-x-4 text-white">
          <li>
            <a href="/wishlist">Wishlist</a>
          </li>
          <li>
            <a href="/recommendation">Recommendation</a>
          </li>
          <li>
            <a href="/history">Riwayat</a>
          </li>
        </ul>
      </nav>
      <div>
        <Link href="/wishlist/newWishlist">
          <button className="bg-purple-600 py-2 px-4 rounded text-white font-bold mr-4">Tambah Wishlist</button>
        </Link>
        <button className="bg-gray-800 py-2 px-4 rounded text-white font-bold">Logout</button>
      </div>
    </header>
  );
};
