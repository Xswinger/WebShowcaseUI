import React, {useState} from "react";
import ColorSquareComponent from "./squarecomponent/ColorSquareComponent";


const colorComponent = (props) => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [showTable, setShowTable] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [page, setPage] = useState(1);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedColor, setSelectedColor] = useState(null);



    const handleColorSelection = (color) => {
        setSelectedColor(color);
        console.log(color);
        props.onChange("color", color);
    };

    const itemsPerPage = 4; // Change this value to adjust number of items per page

    const handleClick = () => {
        setShowTable((actual) => !actual);
    }

    const handlePrevClick = () => {
        setPage((actual) => Math.max(actual - 1, 1));
    }

    const handleNextClick = () => {
        setPage((actual) => actual + 1);
    }

    const tableData = [
        { id: 1, color1: 'red', color2: 'green', color3: 'yellow', color4: 'blue'},
        { id: 2, color1: '#C71585', color2: '#FF6347', color3: '#F0E68C', color4: '#FF00FF'},
        { id: 3, color1: '#ADFF2F', color2: '#8B0000', color3: '#FF8C00', color4: '#F0E68C'},
        { id: 4, color1: '#A52A2A', color2: '#A52A2A', color3: '#B8860B', color4: '#6A5ACD'},
        { id: 5, color1: '#ADFF2F', color2: '#8B0000', color3: '#FF8C00', color4: '#F0E68C'},
        { id: 6, color1: '#ADFF2F', color2: '#8B0000', color3: '#FF8C00', color4: '#F0E68C'},
        { id: 7, color1: 'red', color2: 'green', color3: 'yellow', color4: 'blue'},
        { id: 8, color1: 'red', color2: 'green', color3: 'yellow', color4: 'blue'},
    ];

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const tableRows = tableData.slice(startIndex, endIndex).map(row => (
        <tr key={row.id}>
            <td><ColorSquareComponent color={row.color1} onClick={() => handleColorSelection(row.color1)} isSquareSelected={row.color1 === selectedColor}/></td>
            <td><ColorSquareComponent color={row.color2} onClick={() => handleColorSelection(row.color2)} isSquareSelected={row.color2 === selectedColor}/></td>
            <td><ColorSquareComponent color={row.color3} onClick={() => handleColorSelection(row.color3)} isSquareSelected={row.color3 === selectedColor}/></td>
            <td><ColorSquareComponent color={row.color4} onClick={() => handleColorSelection(row.color4)} isSquareSelected={row.color4 === selectedColor}/></td>
        </tr>
    ));

    return (
        <>
            <button className="button" onClick={handleClick}>Color Table</button>
            {showTable && (
                <>
                    <table className="table">
                        <tbody>
                        {tableRows}
                        </tbody>
                    </table>
                    <div>
                        <button className="button" onClick={handlePrevClick} disabled={page === 1}>Previous Page</button>
                        <button className="button" onClick={handleNextClick} disabled={endIndex >= tableData.length}>Next Page</button>
                    </div>
                </>
            )}
        </>
    );
}

export default colorComponent;
