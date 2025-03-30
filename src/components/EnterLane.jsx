import "./../index.css";

function EnterLane() {
    return (
        <div class="w-64">
            <div class="flex items-center space-x-2 border border-gray-300 rounded-2xl p-2 shadow-md focus-within:ring-2 focus-within:ring-blue-500 transition h-10">
                <input
                    type="text"
                    list="routes"
                    placeholder="  Carril..."
                    class="outline-none bg-transparent w-full h-full text-gray-700 placeholder-gray-400 focus:ring-0"
                />
            </div>
            <datalist id="routes">
                <option value="Carril01"></option>
                <option value="Carril02"></option>
                <option value="Carril03"></option>
                <option value="Carril04"></option>
                <option value="Carril05"></option>
            </datalist>
        </div>
    );
}

export default EnterLane;
