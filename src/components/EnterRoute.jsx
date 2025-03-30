import "./../index.css";

function EnterRoute() {
    return (
        <div class="w-64">
            <div class="flex items-center space-x-2 border border-gray-300 rounded-2xl p-2 shadow-md focus-within:ring-2 focus-within:ring-blue-500 transition h-10">
                <input
                    type="text"
                    list="routes"
                    placeholder="  Ruta..."
                    class="outline-none bg-transparent w-full h-full text-gray-700 placeholder-gray-400 focus:ring-0"
                />
            </div>
            <datalist id="routes">
                <option value="Tesistan"></option>
                <option value="Treboles"></option>
                <option value="Zalate"></option>
                <option value="Arcos de Zapopan"></option>
                <option value="Colon"></option>
            </datalist>
        </div>
    );
}

export default EnterRoute;
