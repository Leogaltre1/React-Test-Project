import EnterUnity from "./EnterUnity";
import EnterLane from "./EnterLane";
import EnterRoute from "./EnterRoute";
import EnterHour from "./EnterHour";
import "./../index.css";

function ReceiveMainInfo() {
    return (
        <div className="w-74 bg-white border border-gray-300 rounded-2xl p-4 shadow-lg">
            <h2 className="text-lg font-semibold text-gray-700">
                Registra los datos de la Unidad
            </h2>
            <div className="space-y-3 mt-2">
                <EnterUnity />
                <EnterLane />
                <EnterRoute />
                <EnterHour />
            </div>
        </div>
    );
}

export default ReceiveMainInfo;
