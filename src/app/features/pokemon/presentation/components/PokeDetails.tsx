export const PokeDetails = () => {
  return (
    <div className="h-[300px] bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-2xl shadow-lg">
      <div className="h-full flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Detalhes do Pokémon
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Componente de exemplo com 300px de altura
          </p>
          <div className="bg-white rounded-xl p-4 shadow-md">
            <p className="text-gray-700">
              Este é um componente simples usando apenas HTML e CSS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
