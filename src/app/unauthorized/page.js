const Unauthorized = () => {
  return (
    <div>
      <div className="h-[70px]"></div>
      <div class="bg-gray-200 h-screen flex justify-center items-center">
        <div class="bg-white p-8 rounded-lg shadow-md">
          <h1 class="text-2xl font-semibold mb-4">¡Acceso no autorizado!</h1>
          <p class="text-gray-600 mb-4">Debes iniciar sesión para acceder a esta página.</p>
          <a href="/" class="text-blue-500 hover:underline">
            Volver al inicio
          </a>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;
