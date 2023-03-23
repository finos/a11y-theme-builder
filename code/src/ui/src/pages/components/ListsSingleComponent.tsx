import React, { useState } from 'react';
import { HeadingSection } from '../content/HeadingSection';
import { ExampleSection } from '../content/ExampleSection';
import { Avatar, Checkbox, FormControlLabel, Grid, Radio, RadioGroup } from '@mui/material';
import { SettingsSection } from '../content/SettingsSection';
import ErrorIcon from '@mui/icons-material/Error';


interface Props {
}

export const ListsSingleComponent: React.FC<Props> = ({ }) => {


    const [isClickable, setIsClickable] = useState(false)
    async function handleChange(event: any): Promise<void> {
        const value = event.target.value;
        if (value == "clickable") {
            setIsClickable(true)
            return
        }
        setIsClickable(false)
    }

    return (
        <div className="content">
            <HeadingSection title='Desktop' heading='Lists - Single Line'></HeadingSection>
            <SettingsSection>
            <RadioGroup 
                aria-labelledby="isClickable-button-group-label"
                name="isClickable-buttons-group"
                defaultValue="non-clickable"
                onChange={handleChange}
            >
                <FormControlLabel value="non-clickable" control={<Radio />} label="Non-Clickable"/>
                <FormControlLabel value="clickable" control={<Radio />} label="Clickable List" disabled/>
            </RadioGroup>
            </SettingsSection>
            <ExampleSection>
                <section>
                    <div className="row">
                        <div className="col-6">
                            <div className="sample">
                                <h6>Single Line Lists without Checkbox</h6>
                                <div className="subtitle1">Single Line - Style 1</div>
                                <div className="list">
                                    <div className="list-body">
                                        <div className="body2">List Title</div>
                                    </div>
                                </div>
                            </div>
                            <div className="sample">
                                <div className="subtitle1">List - Style 2</div>
                                <div className="list">
                                    <div className="list-body">
                                        <div className="subtitle1">List Title</div>
                                    </div>
                                </div>
                            </div>
                            <div className="sample">
                                <div className="subtitle1">Style 1 - with Avatar</div>
                                <div className="list avatared">
                                    <Avatar/>
                                    <div className="list-body">
                                        <div className="body2">List Title</div>
                                    </div>
                                </div>
                            </div>
                            <div className="sample">
                                <div className="subtitle1">Style 2 - with Avatar</div>
                                <div className="list avatared">
                                    <Avatar/>
                                    <div className="list-body">
                                        <div className="subtitle1">List Title</div>
                                    </div>
                                </div>
                            </div>
                            <div className="sample">
                                <div className="subtitle1">Style 1 - with Square Image</div>
                                <div className="list">
                                    <img src="/image-1.jpeg"
                                        style={{objectFit: "cover",width: "60px", height: "60px"}}/>
                                    <div className="list-body">
                                        <div className="body2">List Title</div>
                                    </div>
                                </div>
                            </div>
                            <div className="sample">
                                <div className="subtitle1">Style 2 - with Square Image</div>
                                <div className="list">
                                    <img src="/image-1.jpeg"
                                        style={{objectFit: "cover",width: "60px", height: "60px"}}/>
                                    <div className="list-body">
                                        <div className="subtitle1">List Title</div>
                                    </div>
                                </div>
                            </div>
                            <div className="sample">
                                <div className="subtitle1">Style 1 - with Wide Image</div>
                                <div className="list">
                                    <img src="/image-1.jpeg"
                                        style={{objectFit: "cover",width: "100px", height: "60px"}}/>
                                    <div className="list-body">
                                        <div className="body2">List Title</div>
                                    </div>
                                </div>
                            </div>
                            <div className="sample">
                                <div className="subtitle1">Style 2 - with Wide Image</div>
                                <div className="list">
                                    <img src="/image-1.jpeg"
                                        style={{objectFit: "cover",width: "100px", height: "60px"}}/>
                                    <div className="list-body">
                                        <div className="subtitle1">List Title</div>
                                    </div>
                                </div>
                            </div>
                            <div className="sample">
                                <div className="subtitle1">Style 1 - with Icon</div>
                                <div className="list">
                                    <ErrorIcon color='error'/>
                                    <div className="list-body">
                                        <div className="body2">List Title</div>
                                    </div>
                                </div>
                            </div>
                            <div className="sample">
                                <div className="subtitle1">Style 2 - with Icon</div>
                                <div className="list">
                                    <ErrorIcon color='error'/>
                                    <div className="list-body">
                                        <div className="subtitle1">List Title</div>
                                    </div>
                                </div>
                            </div>
                            <div className="sample">
                                <div className="subtitle1">Style 1 - with Large Icon</div>
                                <div className="list">
                                    <ErrorIcon color='error' fontSize='large'/>
                                    <div className="list-body">
                                        <div className="body2">List Title</div>
                                    </div>
                                </div>
                            </div>
                            <div className="sample">
                                <div className="subtitle1">Style 2 - with Large Icon</div>
                                <div className="list">
                                    <ErrorIcon color='error' fontSize='large'/>
                                    <div className="list-body">
                                        <div className="subtitle1">List Title</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="row">
                        <div className="col-6">
                            <div className="sample">
                                <h6>Single Line Lists with Checkbox</h6>
                                <div className="subtitle1">Single Line - Style 1</div>
                                <div className="list">
                                    <div className="list-body">
                                        <Grid container spacing={6}>
                                            <Grid item xs={6}><div className="body2">List Title</div></Grid>
                                            <Grid item xs={4}><FormControlLabel control={<Checkbox defaultChecked />} label="One" /></Grid>
                                        </Grid>
                                    </div>
                                </div>
                            </div>
                            <div className="sample">
                                <div className="subtitle1">List - Style 2</div>
                                <div className="list">
                                    <div className="list-body">
                                        <Grid container spacing={6}>
                                            <Grid item xs={6}><div className="subtitle1">List Title</div></Grid>
                                            <Grid item xs={4}><FormControlLabel control={<Checkbox defaultChecked />} label="One" /></Grid>
                                        </Grid>
                                    </div>
                                </div>
                            </div>
                            <div className="sample">
                                <div className="subtitle1">Style 1 - with Avatar</div>
                                <div className="list avatared">
                                    <Avatar/>
                                    <div className="list-body">
                                        <Grid container spacing={6}>
                                            <Grid item xs={6}><div className="body2">List Title</div></Grid>
                                            <Grid item xs={4}><FormControlLabel control={<Checkbox defaultChecked />} label="One" /></Grid>
                                        </Grid>
                                    </div>
                                </div>
                            </div>
                            <div className="sample">
                                <div className="subtitle1">Style 2 - with Avatar</div>
                                <div className="list avatared">
                                    <Avatar/>
                                    <div className="list-body">
                                        <Grid container spacing={6}>
                                            <Grid item xs={6}><div className="subtitle1">List Title</div></Grid>
                                            <Grid item xs={4}><FormControlLabel control={<Checkbox defaultChecked />} label="One" /></Grid>
                                        </Grid>
                                    </div>
                                </div>
                            </div>
                            <div className="sample">
                                <div className="subtitle1">Style 1 - with Square Image</div>
                                <div className="list">
                                    <img src="/image-1.jpeg"
                                        style={{objectFit: "cover",width: "60px", height: "60px"}}/>
                                    <div className="list-body">
                                        <Grid container spacing={6}>
                                            <Grid item xs={6}><div className="body2">List Title</div></Grid>
                                            <Grid item xs={4}><FormControlLabel control={<Checkbox defaultChecked />} label="One" /></Grid>
                                        </Grid>
                                    </div>
                                </div>
                            </div>
                            <div className="sample">
                                <div className="subtitle1">Style 2 - with Square Image</div>
                                <div className="list">
                                    <img src="/image-1.jpeg"
                                        style={{objectFit: "cover",width: "60px", height: "60px"}}/>
                                    <div className="list-body">
                                        <Grid container spacing={6}>
                                            <Grid item xs={6}><div className="subtitle1">List Title</div></Grid>
                                            <Grid item xs={4}><FormControlLabel control={<Checkbox defaultChecked />} label="One" /></Grid>
                                        </Grid>
                                    </div>
                                </div>
                            </div>
                            <div className="sample">
                                <div className="subtitle1">Style 1 - with Wide Image</div>
                                <div className="list">
                                    <img src="/image-1.jpeg"
                                        style={{objectFit: "cover",width: "100px", height: "60px"}}/>
                                    <div className="list-body">
                                        <Grid container spacing={6}>
                                            <Grid item xs={6}><div className="body2">List Title</div></Grid>
                                            <Grid item xs={4}><FormControlLabel control={<Checkbox defaultChecked />} label="One" /></Grid>
                                        </Grid>
                                    </div>
                                </div>
                            </div>
                            <div className="sample">
                                <div className="subtitle1">Style 2 - with Wide Image</div>
                                <div className="list">
                                    <img src="/image-1.jpeg"
                                        style={{objectFit: "cover",width: "100px", height: "60px"}}/>
                                    <div className="list-body">
                                        <Grid container spacing={6}>
                                            <Grid item xs={6}><div className="subtitle1">List Title</div></Grid>
                                            <Grid item xs={4}><FormControlLabel control={<Checkbox defaultChecked />} label="One" /></Grid>
                                        </Grid>
                                    </div>
                                </div>
                            </div>
                            <div className="sample">
                                <div className="subtitle1">Style 1 - with Icon</div>
                                <div className="list">
                                    <ErrorIcon color='error'/>
                                    <div className="list-body">
                                        <Grid container spacing={6}>
                                            <Grid item xs={6}><div className="body2">List Title</div></Grid>
                                            <Grid item xs={4}><FormControlLabel control={<Checkbox defaultChecked />} label="One" /></Grid>
                                        </Grid>
                                    </div>
                                </div>
                            </div>
                            <div className="sample">
                                <div className="subtitle1">Style 2 - with Icon</div>
                                <div className="list">
                                    <ErrorIcon color='error'/>
                                    <div className="list-body">
                                        <Grid container spacing={6}>
                                            <Grid item xs={6}><div className="subtitle1">List Title</div></Grid>
                                            <Grid item xs={4}><FormControlLabel control={<Checkbox defaultChecked />} label="One" /></Grid>
                                        </Grid>
                                    </div>
                                </div>
                            </div>
                            <div className="sample">
                                <div className="subtitle1">Style 1 - with Large Icon</div>
                                <div className="list">
                                    <ErrorIcon color='error' fontSize='large'/>
                                    <div className="list-body">
                                    <Grid container spacing={6}>
                                            <Grid item xs={6}><div className="body2">List Title</div></Grid>
                                            <Grid item xs={4}><FormControlLabel control={<Checkbox defaultChecked />} label="One" /></Grid>
                                        </Grid>
                                    </div>
                                </div>
                            </div>
                            <div className="sample">
                                <div className="subtitle1">Style 2 - with Large Icon</div>
                                <div className="list">
                                    <ErrorIcon color='error' fontSize='large'/>
                                    <div className="list-body">
                                        <Grid container spacing={6}>
                                            <Grid item xs={6}><div className="subtitle1">List Title</div></Grid>
                                            <Grid item xs={4}><FormControlLabel control={<Checkbox defaultChecked />} label="One" /></Grid>
                                        </Grid>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </ExampleSection>

        </div>
    )
}
