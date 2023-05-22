import React, {useState} from "react";
import ColorSquareComponent from "./squarecomponent/ColorSquareComponent";


const colorComponent = (props) => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [showTable, setShowTable] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [page, setPage] = useState(1);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedColor, setSelectedColor] = useState(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [tableColor] = useState(props.colors.data.reduce((result, _, index) => {
        if (index % 4 === 0 && index + 3 < props.colors.data.length) {
            const subArray = props.colors.data.slice(index, index + 4);
            const item = {
                id: Math.ceil(index / 4),
                color1: subArray[0].image,
                id1: subArray[0].id,
                color2: subArray[1].image,
                id2: subArray[1].id,
                color3: subArray[2].image,
                id3: subArray[2].id,
                color4: subArray[3].image,
                id4: subArray[3].id,
            };
            result.push(item);
        }
        return result;
    }, []));

    const handleColorSelection = (color) => {
        setSelectedColor(color);
        props.onChange("color", color);
    };

    const itemsPerPage = 3; // Change this value to adjust number of items per page

    const handleClick = () => {
        setShowTable((actual) => !actual);
    }

    const handlePrevClick = () => {
        setPage((actual) => Math.max(actual - 1, 1));
    }

    const handleNextClick = () => {
        setPage((actual) => actual + 1);
    }

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const tableRows = tableColor.slice(startIndex, endIndex).map(row => (
        <tr key={row.id}>
            <td><ColorSquareComponent color={row.color1} onClick={() => handleColorSelection(row.id1)} isSquareSelected={row.id1 === selectedColor}/></td>
            <td><ColorSquareComponent color={row.color2} onClick={() => handleColorSelection(row.id2)} isSquareSelected={row.id2 === selectedColor}/></td>
            <td><ColorSquareComponent color={row.color3} onClick={() => handleColorSelection(row.id3)} isSquareSelected={row.id3 === selectedColor}/></td>
            <td><ColorSquareComponent color={row.color4} onClick={() => handleColorSelection(row.id4)} isSquareSelected={row.id4 === selectedColor}/></td>
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
                        <button className="button" onClick={handleNextClick} disabled={endIndex >= tableColor.length}>Next Page</button>
                    </div>
                </>
            )}
        </>
    );
}

export default colorComponent;
