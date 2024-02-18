import React from "react";

const page = () => {
  return (
    <div>
      <nav className="flex justify-end gap-20 mb-20">
        <a href="#" className="text-gray-400 hover:text-red-500">
          Home
        </a>
        <a href="#" className="text-gray-400 hover:text-red-500">
          Acerca
        </a>
      </nav>
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-5xl italic">Alfredo Ferrusca Enriquez</h1>
      </div>
    </div>
  );
};

export default page;
