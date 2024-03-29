import React from "react";

const Page = () => {
  return (
    <div>
      <nav className="flex justify-end gap-8 mb-10 bg-gray-200">
        <a
          href="#"
          className="text-gray-400 hover:text-red-500 transition duration-300 ease-in-out text-xl"
        >
          Home
        </a>
        <a
          href="#"
          className="text-gray-400 hover:text-red-500 transition duration-300 ease-in-out text-xl"
        >
          Acerca
        </a>
      </nav>

      <div className="flex items-center justify-center h-screen relative">
        <div className="inline-block bg-gradient-to-r from-blue-400 to-green-400 to-purple-400 shadow-lg rounded-lg p-4">
          <h1 className="text-5xl italic text-white relative z-10 mt-8">
            Alfredo Ferrusca Enriquez
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Page;
