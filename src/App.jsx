import ReceiveMainInfo from "./components/ReceiveMainInfo";
import ShowMainInfo from "./components/ShowMainInfo";
import "./App.css";

function App() {
    return (
        <div className="flex flex-col items-center space-y-4">
            <h1 className="text-3xl font-bold text-center">
                Consulta tu ruta en la Tabla
            </h1>
            <ReceiveMainInfo />
            <h1 className="text-2xl font-bold text-center">
                Tabla de Carriles de Camiones
            </h1>
            <ShowMainInfo />
        </div>
    );
}

export default App;
