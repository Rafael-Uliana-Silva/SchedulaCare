"use client"; // <- necessário para usar hooks

import { useState } from "react";

export default function AuthPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-blue-600">
      <h1 className="self-center place-self-center">SchedulaCare</h1>
      <div className="flex gap-10">
        <div className="bg-white p-8 rounded-lg shadow-md w-80">
          <h2 className="mb-4">Login</h2>
          <input
            type="email"
            placeholder="exemplo@email.com"
            className="w-full mb-3 p-2 border rounded"
          />
          <input
            type="password"
            placeholder="senha"
            className="w-full mb-3 p-2 border rounded"
          />
          <button className="w-full bg-blue-500 text-white py-2 rounded mb-2 hover:bg-blue-600">
            Login
          </button>
          <p className="text-center text-gray-500 my-2">Ou</p>
          <button className="w-full border py-2 rounded flex items-center justify-center gap-2 hover:bg-gray-100">
            <img src="/icnGoogle.svg" alt="Google" className="w-5 h-5" />
            Login com Google
          </button>
        </div>

        {/* Cadastro */}
        <div className="bg-white p-8 rounded-lg shadow-md w-80">
          <h2 className="text-xl font-semibold mb-4">Cadastre-se</h2>
          <input
            type="email"
            placeholder="exemplo@email.com"
            className="w-full mb-3 p-2 border rounded"
          />
          <input
            type="password"
            placeholder="Digite sua senha"
            className="w-full mb-3 p-2 border rounded"
          />
          <input
            type="password"
            placeholder="Digite sua senha novamente"
            className="w-full mb-3 p-2 border rounded"
          />
          <button className="w-full bg-blue-500 text-white py-2 rounded mb-2 hover:bg-blue-600">
            Cadastrar
          </button>
          <p className="text-center text-gray-500 my-2">Ou</p>
          <button className="w-full border py-2 rounded flex items-center justify-center gap-2 hover:bg-gray-100">
            <img src="/icnGoogle.svg" alt="Google" className="w-5 h-5" />
            Cadastro com Google
          </button>
        </div>
      </div>
    </div>
  );
}
