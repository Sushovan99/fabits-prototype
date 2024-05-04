import { Dispatch, SetStateAction } from "react";

interface Props {
    currentSelection: string;
    id: string;
    expRange?: string;
    setCurrentSelection: Dispatch<SetStateAction<string>>;
}

const ButtonGroup: React.FunctionComponent<Props> = ({
    id,
    expRange,
    currentSelection,
    setCurrentSelection,
}) => {
    return (
        <label
            htmlFor={id}
            className={`btn-radio ${currentSelection === id ? "active" : ""}`.trim()}
        >
            <h6>{id}</h6>
            <span>{expRange}</span>
            <input
                type="radio"
                name="trading_exp"
                id={id}
                onChange={(e) => setCurrentSelection(e.target.id)}
            />
        </label>
    );
};

export default ButtonGroup;
