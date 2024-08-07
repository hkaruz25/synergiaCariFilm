"use client"

import ModalAddWishlist from "../app/wishlist/ModalAddWishList"
import { logoutAction } from "../libs/action"

export const Header = () => {
  const handleLogout = async () => {
    await logoutAction()
    window.location.href = "/authen/login"
  }

  return (
    <>
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
          <label
            htmlFor="modal_add_wishlist"
            className="btn border-none bg-purple-600 hover:bg-purple-700 py-2 px-4 rounded text-white font-bold mr-4"
          >
            Tambah Wishlist
          </label>
          <button
            className="btn border-none bg-gray-800 hover:bg-gray-900 py-2 px-4 rounded text-white font-bold"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </header>
      <ModalAddWishlist id={"modal_add_wishlist"} />
    </>
  )
}
