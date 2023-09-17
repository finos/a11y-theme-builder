/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React from 'react';
import { useEffect, useState } from 'react';
import { DesignSystem} from 'a11y-theme-builder-sdk';
import { List, Collapse, RadioGroup, Radio, FormControlLabel, Checkbox, FormGroup, Grid, Breadcrumbs, Button, Link, Typography, Divider, Avatar } from '@mui/material';
import { LeftNavHeader, LeftNavItem, LeftNavText } from '../../../components/LeftNavTabs';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { NavSwitch } from '../../../components/NavSwitch';
import { ResponsiveAppBar } from '../../../pages/components/ResponsiveAppBar';
import { Hero } from "../../../mui-a11y-tb/components/Hero";
import { Preferences } from '../../../Preferences';
import { ListComponent } from '../../../pages/components/ListComponent';
import { CardSample } from '../../../pages/components/cards/CardSample';
import { CardPricing } from '../../../pages/components/cards/CardPricing';

interface Props {
    user: any;
    designSystem: DesignSystem;
}

export const PreviewContent: React.FC<Props> = ({ user, designSystem }) => {
    const pref = new Preferences(designSystem.name);

    let desktopPreviewSelected = false;
    if (pref.get("preview-desktopPreview-selected") == "true") {
        desktopPreviewSelected = true;
    }
    const [displayDesktopPreview, setDisplayDesktopPreview] = useState<boolean>(desktopPreviewSelected);
    useEffect(() => {
        console.log("displayDesktopPreview=",displayDesktopPreview)
        pref.set("preview-desktopPreview-selected", ""+displayDesktopPreview)
    }, [displayDesktopPreview])

    let mobilePreviewSelected = false;
    if (pref.get("preview-mobilePreview-selected") == "true") {
        mobilePreviewSelected = true;
    }
    const [displayMobilePreview, setDisplayMobilePreview] = useState<boolean>(mobilePreviewSelected);
    useEffect(() => {
        console.log("displayMobilePreview=",displayMobilePreview)
        pref.set("preview-mobilePreview-selected", ""+displayMobilePreview)
    }, [displayMobilePreview])

    const [darkMode, setDarkMode] = useState<boolean>(pref.get("preview-mode-selected") == "true" || false);
    useEffect(() => {
        pref.set("preview-mode-selected", ""+darkMode);
    }, [darkMode]);

    const divStyle = {
        paddingLeft: "30px"
    }

    const divLabelStyle = {
        //textTransform: "uppercase"
        fontWeight: "bold",
    }

    return (
        <React.Fragment>
            <div className="design-system-editor-right-content">
              <Grid justifyContent="center" className="v-center" container spacing={2} columns={12} >
                <Grid item  className="v-center" lg={2} md={4} sm={6}>
                      <NavSwitch leftLabel="Light" rightLabel="Dark" inputProps={{ 'aria-label': '' }} checked={darkMode} onChange={()=>setDarkMode(!darkMode)} />
                </Grid>
              </Grid>
              <div className="computer"><img src="/computer.png" /></div>
              <div className="screen">
                <div className="screenHolder">
                  <div className={"screenContent " + (darkMode ? "darkmode" : "")}>

                      <ResponsiveAppBar color="colored" />
                      <Hero color='black' >
                        <Grid container spacing={2} columns={12} margin={2}>
                          <Grid xs={12}>
                            <Breadcrumbs aria-label="breadcrumb" className="breadcrumbs">
                                <Link>Home</Link>
                                <Link>Page</Link>
                                <Typography>Page</Typography>
                            </Breadcrumbs>
                          </Grid>
                          <Grid spacing={2} className="heroBox" lg={8} md={10} sm={12}>
                            <h1>Hero title</h1>
                            <div className="body1">
                              <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                              </p>
                              <Button>Get Started</Button>
                            </div>
                          </Grid>
                        </Grid>
                      </Hero>
                      <section data-background="primary">
                        <Grid className="v-center" container spacing={2} columns={12} margin={2}>
                          <Grid item className="v-center" lg={4} md={6} sm={12}>
                            <div className="inline-image" style={{ width: '100%', height: 'auto' }}>
                                <img src="/sample.jpg" />
                            </div>
                          </Grid>
                          <Grid item className="v-center" lg={8} md={6} sm={12}>
                            <h2>Title</h2>
                            <div className="body1">
                              <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                              </p>
                            </div>
                          </Grid>
                        </Grid>
                      </section>
                      <section data-background="alt"  className="centered">
                        <Grid  justifyContent="center"  container spacing={2} columns={12} margin={2}>
                          <Grid  justifyContent="center"  item spacing={2} xl={10} sm={12}>
                            <h2>Title</h2>
                            <div className="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </div>
                          </Grid>
                          <Grid  justifyContent="center" item spacing={2} xl={10} sm={12} className="cardSection">
                            <CardSample color="primary" icon={true}  stat={true} className="fixed" title="85%"  clickable={false}   hideSecondary={true}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua
                            </CardSample>
                            <CardSample color="primary" icon={true}  stat={true} className="fixed"  title="5M"   hideSecondary={true}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua
                            </CardSample>
                            <CardSample color="primary" icon={true}  stat={true} className="fixed"  title="130%"   hideSecondary={true}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua
                            </CardSample>

                          </Grid>
                        </Grid>
                      </section>
                      <section data-background="colored">
                        <Grid className="v-center" container spacing={2} columns={12} margin={2}>
                          <Grid item spacing={2} className="v-center" lg={6}  sm={12}>
                            <h2>Title</h2>
                            <div className="body1">
                              <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                              </p>
                              <Button>Get Started</Button>
                            </div>
                          </Grid>
                          <Grid item spacing={2} className="v-center" lg={6} sm={12}>
                             <video src="/video.mp4" controls></video>
                          </Grid>
                        </Grid>
                      </section>
                      <section data-background="primary" className="centered">
                        <Grid justifyContent="center" container spacing={2} columns={12} margin={2} >
                          <Grid item spacing={2} lg={8} md={12} sm={12}>
                            <h2>Title</h2>
                            <div className="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </div>
                          </Grid>
                        </Grid>
                        <Grid justifyContent="center" container spacing={2} columns={12} margin={2}  className="pricingSection">
                          <Grid item spacing={2} xl={3} lg={4} md={6} sm={12} xs={12}>
                            <CardPricing className="black" title="Standard" cost="Free" billing="No Bill" button="Get Standard" hotlink="Learn more" color="grey">
                              <ul>
                                <li>Feature description</li>
                                <li>Feature description</li>
                                <li>Feature description</li>
                                <li>Feature description</li>
                                <li>Feature description</li>
                                <li>Feature description</li>
                              </ul>
                            </CardPricing>
                          </Grid>
                          <Grid item spacing={2} xl={3} lg={4} md={6} sm={12} xs={12} className="cardSection">
                            <CardPricing className="black" title="Pro" cost="$149 Monlth" billing="Billed Annually" button="Get Pro" hotlink="Learn more" color="primary">
                              <ul>
                                <li>Feature description</li>
                                <li>Feature description</li>
                                <li>Feature description</li>
                                <li>Feature description</li>
                                <li>Feature description</li>
                                <li>Feature description</li>
                                <li>Feature description</li>
                              </ul>
                            </CardPricing>
                          </Grid>
                          <Grid item spacing={2} xl={3} lg={4}  md={6} sm={12} xs={12} className="cardSection">
                            <CardPricing className="black" title="Enterprise" cost="$199 Monlth" billing="Billed Annually" button="Get Enterprise" hotlink="Learn more" color="primary">
                                <ul>
                                  <li>Feature description</li>
                                  <li>Feature description</li>
                                  <li>Feature description</li>
                                  <li>Feature description</li>
                                  <li>Feature description</li>
                                  <li>Feature description</li>
                                  <li>Feature description</li>
                                  <li>Feature description</li>
                                  <li>Feature description</li>
                                </ul>
                            </CardPricing>
                          </Grid>
                        </Grid>
                      </section>
                      <section data-background="alt">
                        <Grid className="v-center" container spacing={2} columns={12} margin={2}>
                          <Grid item spacing={2} className="v-center backgroundImage paralux" lg={12} style={{backgroundImage: "url(/sample.jpg)"}}>
                          </Grid>
                        </Grid>
                      </section>
                      <section data-background="primary">
                        <Grid justifyContent="center"  container spacing={2} columns={12} margin={2}>
                            <Grid item className="center" xl={3} lg={4} md={6} sm={12}>
                              <Avatar className="avatar xxl"  />
                            </Grid>
                            <Grid item className="v-center" xl={8} lg={8} md={6} sm={12}>
                            <div className="body quote">
                              <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                              </p>
                              <div className="subtitle1">John Doe</div>
                              <div className="body2">Job Title</div>

                            </div>
                            </Grid>
                        </Grid>
                      </section>
                      <footer data-background='black'>
                        <Grid className="v-center" container spacing={2} columns={{ lg: 7, md: 5, sm: 3 }} margin={2}>
                          <Grid item spacing={2}  className="v-center" lg={2} md={5} sm={3}>
                            <h5>Company Name</h5>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                            <div className="socialIcons">
                            <Button variant="contained" className="icon"><i className="fa-brands fa-twitter"></i></Button>
                            <Button variant="contained" className="icon"><i className="fa-brands fa-linkedin"></i></Button>
                            <Button variant="contained" className="icon"><i className="fa-brands fa-square-facebook"></i></Button>
                            </div>
                          </Grid>
                          <Grid item spacing={2}  className="v-center" lg={1} sm={1}>
                            <div className="subtitle1">Catagory Title</div>
                            <ListComponent isClickable={true} type={1} title={'Section'}  overline={''}  body={''}  ></ListComponent>
                            <ListComponent isClickable={true} type={1} title={'Section'}  overline={''}  body={''}  ></ListComponent>
                            <ListComponent isClickable={true} type={1} title={'Section'}  overline={''}  body={''}  ></ListComponent>
                            <ListComponent isClickable={true} type={1} title={'Section'}  overline={''}  body={''}  ></ListComponent>
                          </Grid>
                          <Grid item spacing={2}  className="v-center" lg={1} sm={1}>
                            <div className="subtitle1">Catagory Title</div>
                            <ListComponent isClickable={true} type={1} title={'Section'}  overline={''}  body={''}  ></ListComponent>
                            <ListComponent isClickable={true} type={1} title={'Section'}  overline={''}  body={''}  ></ListComponent>
                            <ListComponent isClickable={true} type={1} title={'Section'}  overline={''}  body={''}  ></ListComponent>
                            <ListComponent isClickable={true} type={1} title={'Section'}  overline={''}  body={''}  ></ListComponent>
                            <ListComponent isClickable={true} type={1} title={'Section'}  overline={''}  body={''}  ></ListComponent>
                            <ListComponent isClickable={true} type={1} title={'Section'}  overline={''}  body={''}  ></ListComponent>
                            <ListComponent isClickable={true} type={1} title={'Section'}  overline={''}  body={''}  ></ListComponent>
                          </Grid>
                          <Grid item spacing={2}  className="v-center" lg={1} sm={1}>
                            <div className="subtitle1">Catagory Title</div>
                            <ListComponent isClickable={true} type={1} title={'Section'}  overline={''}  body={''}  ></ListComponent>
                            <ListComponent isClickable={true} type={1} title={'Section'}  overline={''}  body={''}  ></ListComponent>
                            <ListComponent isClickable={true} type={1} title={'Section'}  overline={''}  body={''}  ></ListComponent>
                            <ListComponent isClickable={true} type={1} title={'Section'}  overline={''}  body={''}  ></ListComponent>
                            <ListComponent isClickable={true} type={1} title={'Section'}  overline={''}  body={''}  ></ListComponent>
                          </Grid>
                          <Grid item spacing={2}  className="v-center" lg={1} sm={1}>
                            <div className="subtitle1">Catagory Title</div>
                            <ListComponent isClickable={true} type={1} title={'Section'}  overline={''}  body={''}  ></ListComponent>
                            <ListComponent isClickable={true} type={1} title={'Section'}  overline={''}  body={''}  ></ListComponent>
                            <ListComponent isClickable={true} type={1} title={'Section'}  overline={''}  body={''}  ></ListComponent>
                            <ListComponent isClickable={true} type={1} title={'Section'}  overline={''}  body={''}  ></ListComponent>
                            <ListComponent isClickable={true} type={1} title={'Section'}  overline={''}  body={''}  ></ListComponent>
                          </Grid>
                          <Grid item spacing={2}  className="v-center" lg={1} sm={1}>
                            <div className="subtitle1">Catagory Title</div>
                            <ListComponent isClickable={true} type={1} title={'Section'}  overline={''}  body={''}  ></ListComponent>
                            <ListComponent isClickable={true} type={1} title={'Section'}  overline={''}  body={''}  ></ListComponent>
                            <ListComponent isClickable={true} type={1} title={'Section'}  overline={''}  body={''}  ></ListComponent>
                            <ListComponent isClickable={true} type={1} title={'Section'}  overline={''}  body={''}  ></ListComponent>
                            <ListComponent isClickable={true} type={1} title={'Section'}  overline={''}  body={''}  ></ListComponent>
                          </Grid>
                          <Grid item spacing={2}  className="v-center" lg={7} md={5} sm={3}>
                            <Divider/>
                            <div className="copyright">&#169; Copyright Company Name. All rights reserved.</div>
                          </Grid>
                        </Grid>
                      </footer>
                  </div>
                </div>
              </div>
              <div className="comingsoon">Sample Template - more coming soon</div>
            </div>
        </React.Fragment>
    );
}
