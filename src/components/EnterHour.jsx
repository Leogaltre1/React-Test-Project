import "./../index.css";

function EnterHour() {
    return (
        <div class="w-64">
            <div class="flex items-center space-x-2 border border-gray-300 rounded-2xl p-2 shadow-md focus-within:ring-2 focus-within:ring-blue-500 transition h-10">
                <input
                    type="time"
                    list="routes"
                    placeholder="  Unidad..."
                    class="outline-none bg-transparent w-full h-full text-gray-700 placeholder-gray-400 focus:ring-0"
                />
            </div>
        </div>
    );
}

export default EnterHour;
