import React, {useState, useEffect } from 'react';

interface Props {
    editor?: boolean;
    styles?: any;
    setStyles?(newStyles:any): Promise<void>;
}

class Atom3 extends React.Component {

    props: Props = {};

    name: string = "My Atom3";

    constructor(props:Props) {
        super(props);
        this.props = props;
        this.state = {
            divclass: {
                color: "red",
            },
            editorclass: {
                color: "green",
            },      
        };
        if (props.styles) this.state = props.styles;
        this.updateState = this.updateState.bind(this);
    }

    updateState(newStyles: any) {
        console.log("Setting styles to ", JSON.stringify(newStyles));
        this.setState(newStyles);
        if ((this.props as any).setStyles) (this.props as any).setStyles(newStyles);
    }

    render() {
    
        if (!this.props.editor) {
            return (
                <div style={(this.state as any).divclass}>
                    I am an atom renderer {this.name} from ReactJS!
                </div>
            )
        }

        else {
            return (
                <div style={(this.state as any).editorclass}>
                    I am an atom editor {this.name} from ReactJS!
                </div>
            )
        }
    }
}


export default Atom3;

