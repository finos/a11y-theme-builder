import { Card, CardContent, CardHeader, IconButton } from "@mui/material";
import React from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ColorBand from "./ColorBand";

interface Props {
    name: string;
    title?: any;
    system?: any;
    styles?: any;
    setStyles?(newStyles:any): Promise<void>;
    onClickHandler?(event: any, newTabIndex: string): Promise<void>;
}

export const SystemCard: React.FC<Props> = ({name, title, system, styles, setStyles, onClickHandler}) => {

    const handleClick = (event: React.MouseEvent) => {
        if (onClickHandler) {
            onClickHandler(event, name);
        }
    }

    return (
        <div className="custom-card">
            <Card onClick={handleClick}>
                <CardHeader
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon></MoreVertIcon>
                        </IconButton>
                    }
                    title={
                        <h5>{title}</h5>
                    }
                    subheader={
                        <div className="date caption quiet">
                            June 1st, 2020
                        </div>
                    }
                >
                </CardHeader>
                <CardContent>
                    <h6>Themes (1):</h6>
                    <ColorBand/>
                </CardContent>
            </Card>
        </div>
    );
}

export default SystemCard;