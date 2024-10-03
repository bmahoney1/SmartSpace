// app/editor/page.tsx
"use client";
import './style.css';


import React, { useState } from 'react';
// import dynamic from 'next/dynamic';

// const Editor3D = dynamic(() => import('../components/Editor3D'), { ssr: false });

export default function EditorPage() {
  const [furniture, setFurniture] = useState('');
  const [furnitureList, setFurnitureList] = useState<string[]>([]);

  const handleAddFurniture = () => {
    if (furniture.trim()) {
      setFurnitureList([...furnitureList, furniture.trim()]);
      setFurniture('');
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">3D Room Editor</h1>

      <div className="mb-6">
        <h2 className="text-xl font-semibold">Tell us what furniture you want:</h2>
        <div className="flex gap-4 mt-2">
          <input 
            type="text" 
            placeholder="Enter furniture name (e.g., sofa, table)" 
            className="border rounded px-4 py-2 w-full"
            value={furniture}
            onChange={(e) => setFurniture(e.target.value)}
          />
          <button 
            className="bg-blue-500 text-white px-6 py-2 rounded"
            onClick={handleAddFurniture}
          >
            Add
          </button>
        </div>

        <div className="mt-4">
          <h3 className="text-lg font-semibold">Your Furniture List:</h3>
          <ul className="list-disc list-inside">
            {furnitureList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        {/* <Editor3D /> */}
        <p>3D editor will appear here for users to arrange their furniture in a room.</p>
      </div>
    </div>
  );
}
