import "./../index.css";

function ShowMainInfo() {
    return (
        <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
            <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse border border-gray-300 shadow-md">
                    <thead className="bg-gray-200 text-gray-700">
                        <tr>
                            <th className="px-4 py-2 border">Fila</th>
                            <th className="px-4 py-2 border">Carril 1</th>
                            <th className="px-4 py-2 border">Carril 2</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600">
                        <tr className="hover:bg-gray-100 transition">
                            <td className="px-4 py-2 border">Fila 1</td>
                            <td className="px-4 py-2 border">
                                Unidad02 - Arcos
                            </td>
                            <td className="px-4 py-2 border">
                                Unidad06 - Guadalajara
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-100 transition">
                            <td className="px-4 py-2 border">Fila 2</td>
                            <td className="px-4 py-2 border">
                                Unidad03 - Treboles
                            </td>
                            <td className="px-4 py-2 border">
                                Unidad01 - Zalate
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-100 transition">
                            <td className="px-4 py-2 border">Fila 3</td>
                            <td className="px-4 py-2 border">
                                Unidad04 - Zapopan
                            </td>
                            <td className="px-4 py-2 border">
                                Unidad05 - Tesistan
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ShowMainInfo;
