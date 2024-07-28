"use client";

import React from 'react';
import Modal from 'react-modal';

const EventFormModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Create Event"
      className="Modal"
      overlayClassName="Overlay"
    >
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Create an Event</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Name Event</label>
            <input className="w-full p-2 rounded bg-gray-100 focus:bg-blue-100" type="text" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Event Speaker</label>
            <input className="w-full p-2 rounded bg-gray-100 focus:bg-blue-100" type="text" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Date</label>
            <input className="w-full p-2 rounded bg-gray-100 focus:bg-blue-100" type="date" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Time</label>
            <input className="w-full p-2 rounded bg-gray-100 focus:bg-blue-100" type="time" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Event Author</label>
            <input className="w-full p-2 rounded bg-gray-100 focus:bg-blue-100" type="text" />
          </div>
          <div className="flex justify-end space-x-4">
            <button type="button" className="px-4 py-2 bg-gray-300 rounded" onClick={onRequestClose}>Cancel</button>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Create</button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default EventFormModal;
