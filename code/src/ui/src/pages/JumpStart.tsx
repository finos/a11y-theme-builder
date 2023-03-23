import React from 'react';
import SystemCard from '../components/SystemCard';
import { Grid } from '@mui/material';


interface Props {
    user: any;
}

const JumpStart: React.FC<Props> = ({user}) => {
  
    return (
            <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="overline-large">
                        Sample and Template Design Systems
                    </div>
                    <h1>Jump Start</h1>
                    <div className="subtitle1">
                        Design Systems
                    </div>
                    <p>
                        Explore our sample design systems.  You can duplicate theme
                            to make your own or start from scratch to build your own systems.
                    </p>
                </div>
            </div>
            <div className="row top40">
                <div className="col-12">
                    <h5>Sample Design Systems</h5>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="card-area">
                        <Grid
                            container
                            spacing={3}
                        >
                            <Grid item xs={9} sm={7} md={5}>
                                <SystemCard 
                                    name="Sample"
                                    title="Sample"
                                    onClickHandler={async (event,name)=>{window.location.href="/designSystem/Sample"}}
                                />
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JumpStart;
