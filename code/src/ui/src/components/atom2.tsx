import React, {useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

interface Props {
    editor?: boolean;
    styles?: any;
    setStyles?(newStyles:any): Promise<void>;
}

let name = "My Atom2";

export const Atom2: React.FC<Props> = ({editor, styles, setStyles}) => {

    const navigate = useNavigate();
    const [_styles, _setStyles] = useState<any>({
        divclass: {
            color: "red",
        },
        editorclass: {
            color: "green",
        },
    });

    useEffect(() => {
        console.log("useEffect()")
        if (styles) _setStyles(styles);
    }, [])

    useEffect(() => {
        console.log("Setting styles to ", JSON.stringify(styles));
        if (setStyles) setStyles(styles);
    }, [_styles])

    const handleClick = () => {
        navigate("/designSystem/aaronDS");
    }

    if (!editor) {
        return (
            <div style={_styles.divclass}>
                I am an atom renderer {name} from ReactJS!
            </div>
        )
    }

    else {
        return (
            <div style={_styles.editorclass}>
                <button onClick={handleClick}>I am an atom editor {name} from ReactJS!</button>
            </div>
        )
    }
}



