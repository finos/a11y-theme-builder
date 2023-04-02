import { createTheme,  darken, lighten } from "@mui/material/styles";
import { formLabelClasses } from "@mui/material";
import './Theme.css'
//import calcAstParser from "postcss-calc-ast-parser";
//import { transform } from "css-calc-transform";


export const getCssValue = (prop) => {
    //console.log(`ENTER - getCssValue(${prop})`);
    let v = document.documentElement.style.getPropertyValue(prop);
    if (!v) { 
        if (!rootStyleSheet) {
            rootStyleSheet = getStyleSheet(":root");
        }
        v = rootStyleSheet.style.getPropertyValue(prop);
    }
    if (typeof v == "string") {
        v = v.trim();
        if (v.indexOf("var(") > -1) {
            v = v.replace(/var\(([a-zA-Z0-9\-]+)\)/g, function(m, p1) {
                //console.log(" -- regex.replace =",m,"p1 =",p1)
                const val = getCssValue(p1)
                //console.log(" -- regex.replace returning =",val);
                return val;
            });
            //console.log(" -- found var in",prop," so replace with css value =",v);
        }
        // if (v.indexOf("calc(") > -1) {
        //     console.log(" -- calc found for v=",v)
        //     const t = transform( {
        //         prop: "width",
        //         value: v,
        //     })
        //     v = t + "px";
        //     console.log(" -- calc done for v=",v)
        // }
    }
    console.log(`getCssValue(${prop}) = ${v}`)
    return v;
}

export const setCssValues = (props) => {
    console.log(`setCssValues(${JSON.stringify(props)})`)
    for (const [prop, value] of Object.entries(props)) {
        setCssValue(prop, value);
    }
}

export const setCssValue = (prop, value) => {
    console.log(`setCssValue(${prop}, ${value})`);
    if (value == "TODO") return;
    if (!rootStyleSheet) {
        rootStyleSheet = getStyleSheet(":root");
    }
    rootStyleSheet.style.setProperty(prop, value);
}

let rootStyleSheet = null;

export const getStyleSheet = (selector) => {
    console.log(`getStyleSheet(${selector})`);
    for (var i = 0; i < document.styleSheets.length; i++) {
        var sheet = document.styleSheets[i];
        var rules = sheet.cssRules ? sheet.cssRules : sheet.rules;
        for (var j = 0; j < rules.length; j++) {
            if (rules[j].selectorText && rules[j].selectorText.toLowerCase() === selector) {
                return rules[j];
            }
        }
    }
};

const getStyleValue = (selector, prop) => {
    for (var i = 0; i < document.styleSheets.length; i++) {
        var sheet = document.styleSheets[i];
        var rules = sheet.cssRules ? sheet.cssRules : sheet.rules;
        for (var j = 0; j < rules.length; j++) {
            if (rules[j].selectorText && rules[j].selectorText.toLowerCase() === selector) {
                //console.log("rules=", rules[j]);
                var value = rules[j].style.getPropertyValue(prop).trim();
                // NOTE: could use setPropertyValue(prop, newValue) instead of setting :root on document
                console.log(`getStyleRuleValue ${selector} ${prop} = ${value}`);
                return value;
            }
        }
    }
};

export const themes = {};

try {
    // const c = calcAstParser.parse("calc(var(--radius-1) * 2)");
    // console.log(" radius c=",c);
    // console.log(" radius stringify=",calcAstParser.stringify(c.nodes[0]));

    // const r1 = getCssValue("--radius-1")
    // console.log(" radius r1=",r1);
    // const t = transform( {
    //     prop: "width",
    //     value: "calc("+r1+" * 2)",
    // })
    // console.log(" radius t=",t);
    

    const lightTheme = createTheme({
        // Can't change these, since css doesn't seem to be defined at this point
         palette: {
            primary: {
                main: getCssValue("--primary"),
            },
            // secondary: {
            //     main: "calc(var(--color)))",
            // },
            text: {
                fontFamily: getCssValue("--primaryFont"),
                color: "var(--on-background)",
                // primary: getCssValue("--primary"),
                // secondary: getCssValue("--secondary"),
                // disabled: getCssValue("--textDark"),
            },
            //divider: "",
            background: {
                //paper: "",
                default: getCssValue("--background"),
            },
            error: {
                main: getCssValue("--danger"),
            },
            warning: {
                main: getCssValue("--warning"),
            },
            success: {
                main: getCssValue("--success"),
            },
            info: {
                main: getCssValue("--info"),
            },
            action: {
                // active: "",
                // hover: "", 
                // hoverOpacity: "",
                // selected: "",
                // selectedOpacity: "",
                // disabled: "",
                // disabledBackground: "",
                // focus: "",
                // focusOpacity: "",
                // activatedOpacity: "",
            },
        },
        typography: {
            // allVariants: {
            //     color: "#000000"
            // },
            fontFamily: "var(--primaryFont)",
            //htmlFontSize: "var(--baseFont)", // must be a number
            htmlFontSize: parseInt(getCssValue("--baseFont")), // must be a number
            //fontSize: "var(--baseFont)", // must be a number
            fontSize: parseInt(getCssValue("--baseFont")), // must be a number
            // h1: {
            //     fontSize: "--h1",
            //     //color: "#00000",
            // },
            // h2: {
            //     fontSize: "--h2",
            // },
            // h3: {
            //     fontSize: "--h3",
            // },
            // h4: {
            //     fontSize: "--h4",
            // },
            // h5: {
            //     fontSize: "--h5",
            // },
            // h6: {
            //     fontSize: "--h6",
            // },
            // subtitle1: {
            // },
            // subtitle2: {
            // },
            // body1: {
            // },
            // body2: {
            // },
            // button: {
            //     /* fontStyle: "italic" */
            // },
            // caption: {
            // },
            // overline: {
            // },
            // overlineLarge: {
            //     fontFamily: "var(--primaryFont)",
            //     fontWeight: "var(--fontWeight-3)",
            //     fontSize: "calc(var(--baseFont) * .875)",
            //     lineHeight: "var(--standard-LineHeight)",
            //     letterSpacing: "1.5%",
            //     textTransform: "uppercase",    
            // },
        },
        shape: {
            //borderRadius:  parseInt(getCssValue("--radius-2")), // must be a number 
            //borderRadius:  "var(--radius-2)",
        },
        components: {
            // Style all react components using css root vars
            MuiAccordion: {
                styleOverrides: {
                    root: {
                        border: "1px solid var(--border)",
                        borderRadius: "var(--radius-1)",
                        padding: "var)--spacing-2)",
                        background: "var(--surface)",
                        margin: "var(--spacing-half)",
                        transition: "var(--animation-speed)",
                    }
                }
            },
            MuiButton: {
                defaultProps: {
                    variant: "contained"
                },
                styleOverrides: {
                    root: ({ ownerState }) => ({
                        ...(ownerState.variant === 'contained' && {
                                color: "var(--on-button)",
                                background: "var(--button)",
                            }),
                        ...(ownerState.variant === 'text' && {
                                color: "var(--button)",
                                background: "var(--on-button)"
                            }),
                        ...(ownerState.variant === 'outlined' && {
                                color: "var(--button) !important",
                                background: "none !important",
                            }),
                        borderRadius: "calc(var(--radius-1) * var(--button-radius))",
                        boxShadow: "var(--button-shadow)",
                        font: "var(--buttonTypography)",
                        letterSpacing: "var(--buttonCharcterSpacing)",
                        minHeight: "calc(var(--spacing-1) * var(--button-height))",
                        minWidth: "calc(var(--spacing-1) * var(--button-minwidth))",
                        /*
                        paddingLeft: "var(--spacing-3)", // var(--button-padding) // this is too small & not in px
                        paddingRight: "var(--spacing-3)",
                        */
                       padding: "0 calc(var(--spacing-1) * var(--button-padding))",
                       textDecoration: "var(--buttonTextDecoration)",
                       textTransform: "var(--buttonTextTransform)",
                        ":hover": {
                            background: "var(--on-button)",
                            color: "var(--button)",
                        },
                    }),
                }
            },
            MuiCard: {
                styleOverrides: {
                    root: {
                        //fontFamily: "Ariel", //"var(--fontFamily)",
                        border: "1px solid var(--border)",
                        borderRadius: "calc(var(--radius-1) * var(--card-radius))",
                        padding: "calc(var(--spacing-1) * var(--card-padding))",
                        gap: "calc(var(--spacing-1) * var(--card-gap))",
                        boxShadow: "var(--card-shadow)",
                        background: "var(--surface)",
                        minHeight: "var(--spacing-3)",
                    }
                }
            },
            MuiCheckbox: {
                styleOverrides: {
                    root: {
                        padding: "0 calc(var(--min-target) + var(--spacing-1))",
                        margin: "var(--spacing-half) 0",
                        height: "var(--min-target)",
                        "&.MuiCheckbox-root": {
                            backgroundColor: "var(--input)",
                            color: "var(--on-input)",
                        },
                        "&.Mui-checked": {
                            color: "var(--button) !important",
                        },
                        "&.Mui-disabled": {
                            color: "var(--input-disabled)"
                        },
                    }
                }
            },
            MuiOutlinedInput: {
                styleOverrides: {
                      root: {
                        borderRadius: "var(--radius-1)",
                        ".info &": {
                            color: "var(--on-info)",
                            backgroundColor: "var(--info)",
                        },
                        ".success &": {
                            color: "var(--on-success)",
                            backgroundColor: "var(--success)",
                        },
                        ".warning &": {
                            color: "var(--on-warning)",
                            backgroundColor: "var(--warning)",
                        },
                        ".danger &": {
                            color: "var(--on-danger)",
                            backgroundColor: "var(--danger)",
                        },
                        ".darkmode .info &": {
                            color: "var(--dm-on-info)",
                            backgroundColor: "var(--dm-info)",
                        },
                        ".darkmode .success &": {
                            color: "var(--dm-on-success)",
                            backgroundColor: "var(--dm-success)",
                        },
                        ".darkmode .warning &": {
                            color: "var(--dm-on-warning)",
                            backgroundColor: "var(--dm-warning)",
                        },
                        ".darkmode .danger &": {
                            color: "var(--dm-on-danger)",
                            backgroundColor: "var(--dm-danger)",
                        },
                    }
                }
            },
            MuiSelect: {
                defaultProps: {
                    MenuProps: {
                        PaperProps: {
                            sx: {
                                '& .MuiList-root.MuiMenu-list': {
                                    background: "var(--surface)",
                                    WebkitBoxShadow: "var(--elevation) !important",
                                    MozBoxShadow: "var(--elevation) !important",
                                },
                                '& .MuiList-root.MuiMenu-list .MuiMenuItem-root': {
                                    color: "var(--on-background)",
                                },
                                '& .MuiList-root.MuiMenu-list .MuiMenuItem-root:hover': {
                                    color: "var(--on-dropdown-hover-bg)",
                                    background: "var(--dropdown-hover-bg)",
                                },
                                borderRadius: "calc(var(--radius-1) * var(--dropdown-radius))",
                            },
                        },
                    },
                },
                styleOverrides: {
                    root: {
                        borderRadius: "calc(var(--radius-1) * var(--button-radius))",
                        boxShadow: "var(--button-shadow)",
                        letterSpacing: "var(--buttonCharcterSpacing)",
                        minHeight: "calc(var(--spacing-1) * var(--button-height))",
                        minWidth: "calc(var(--spacing-1) * var(--button-minwidth))",
                    },
                }
            },
            MuiAlert: {
                styleOverrides: {
                    root: {
                        "& .MuiAlert-icon":{
                            marginRight: "var(--toast-padding)",
                        },
                        borderRadius: "calc(var(--toast-radius) * var(--radius-1))",
                    },
                },
            },

            //.css-mc683d-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper

            MuiTextField: {
                styleOverrides: {
                    root: {
                        //fontFamily: "Ariel", //"var(--fontFamily)",
                        color: "var(--on-input)",
                        background: "var(--input)",
                        borderRadius: "var(--radius-1)",
                        padding: "var(spacing-1)",
                        "& .MuiInputBase-root.Mui-disabled": {
                            backgroundColor: "var(--input-disabled)",
                            color: "var(--on-input-disabled)",
                        },
                        "& .MuiInputBase-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            border: '1px auto var(--button)',
                            boxShadow: '0 0 var(--focusBlur) 1px var(--button-half)',
                        },
                        "& .MuiInputBase-root fieldset.MuiOutlinedInput-notchedOutline": {
                            /* without this, a 0px --focusBlur will erase the border
                             * of a Mui Textfield
                             */
                            boxShadow: '0 0 0 1px',
                        },
                    }
                }
            },
            MuiInputLabel: {
                styleOverrides: {
                    root: {
                        fontFamily: "var(--primaryFont)",
                        fontWeight: "var(--fontWeight-4)",
                        fontSize: "calc(var(--baseFont)* .875)",
                        //fontSize: "calc(var(--baseFont))",
                        lineHeight: "var(--standard-LineHeight)",
                        letterSpacing: "1.25%",
                        textTransform: "none",
                        marginBottom: "10px",
                    
                    }
                }
            },
            MuiFormLabel: {
                styleOverrides: {
                    root: {
                        fontFamily: "var(--primaryFont)",
                        fontWeight: "var(--fontWeight-4)",
                        fontSize: "calc(var(--baseFont)* .875)",
                        //fontSize: "calc(var(--baseFont))",
                        lineHeight: "var(--standard-LineHeight)",
                        letterSpacing: "1.25%",
                        textTransform: "none",
                        marginBottom: "10px",
                        color: "var(--on-background)",
                        [`&.${formLabelClasses.focused}`]: {
                            color: "var(--on-background)",
                        },
                    },
                },
            },
            MuiBreadcrumbs: {
                styleOverrides: {
                    root: {
                        
                    }
                }
            },
            "& .MuiTab-wrapper": {
                flexDirection: "row",
                justifyContent: "flex-start"
            },
            MuiTab: {
                styleOverrides: {
                    root: {
                        fontFamily: "var(--navbarPrimary-font)",
                        fontSize: "var(--baseFont)", //"calc(var(--baseFont)* .875)",
                        "&.Mui-selected, &.Mui-selected:hover": {
                            backgroundColor: "var(--secondary)",
                            color: "var(--on-secondary)",
                        },
                    }
                }
            },
            MuiChip: {
                styleOverrides: {
                    root: {
                        background: "transparent !important",
                        padding: "0 calc(var(--spacing-1) * var(--chip-padding))",
                        zIndex: 1,
                        position: "relative",
                        display: "flex",
                        color: "var(--on-gray-300)",
                        gap: "var(--spacing-1)",
                        alignItems: "center",
                        font: "var(--chipTypography)",
                        letterSpacing: "var(--chipLetterSpacing)",
                        textDecoration: "var(--chipTextDecoration)",
                        textTransform: "var(--chipTextTransform)",
                        minWidth: "var(--chip-minwidth)",
                        minHeight: "var(--min-target)",
                        boxShadow: "var(--chip-elevation)",
                        "&::after": {
                            position: "absolute",
                            top:    "calc(((var(--min-target) - (var(--spacing-1) * var(--chip-height)))/2) - (var(--border-1) * 2) - 3px)",
                            bottom: "calc(((var(--min-target) - (var(--spacing-1) * var(--chip-height)))/2) - (var(--border-1) * 2) - 1px)",
                            padding: "0 calc(var(--spacing-1) * var(--chip-padding))",
                            height: "calc((var(--spacing-1) * var(--chip-height)) + (var(--border-1) * 4) + 2px)",
                            left: "calc(-2px - (var(--border-1) * 2))",
                            right: "calc(-2px - (var(--border-1) * 2))",
                            borderRadius: "calc(var(--radius-1) * var(--chip-radius))",
                            border: "calc(var(--border-1) * var(--button-border)) solid var(--button)",
                            background: "transparent !important",
                            opacity: 0,
                            content: '""',
                        },
                        "&::before": {
                            position: "absolute",
                            top:    "calc((var(--min-target) - (var(--spacing-1) * var(--chip-height)))/2)",
                            bottom: "calc((var(--min-target) - (var(--spacing-1) * var(--chip-height)))/2)",
                            padding: "0 calc(var(--spacing-1) * var(--chip-padding))",
                            left: "0px",
                            right: "0px",
                            content: '""',
                            background: "var(--chip)",
                            color: "var(--onchip)",
                            borderRadius: "calc(var(--radius-1) * var(--chip-radius))",
                            zIndex: -1,
                            border: "none",
                            boxShadow: "var(--chip-shadow) !important",
                            minHeight: "calc(var(--spacing-1) * var(--chip-height))",
                        },
                        "&:hover::after": {
                            opacity: "var(--hover)",
                        },
                        "&:active::after": {
                            opacity: 1,
                        },
                        "&:hover .closeIt, &:focus .closeIt, &:active .closeIt": {
                            opacity: 1,
                        },
                        "&.inline-icon path": {
                            fill: "var(--on-chip)",
                        },
                        "& .MuiAvatar-root": {
                            border: "solid calc(var(--border-1) * var(--on-chip)) var(--accent)",
                        },
                        ".darkmode &::before": {
                            background: "var(--dm-chip)",
                            color: "var(--dm-onchip)",
                        },
                        ".darkmode & .MuiAvatar-root": {
                            border: "1px solid calc(var(--border-1) * var(--dm-on-chip)) var(--accent)",
                        },
                          
                          

                    },
                },
            },
            // MuiListItemButton: {
            //     styleOverrides: {
            //         root: {
            //             fontSize: "3em",
            //         }
            //     }
            // }
        },
    });

    themes["light"] = lightTheme;

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: getCssValue("--dm-primary"),
            },
            // secondary: {
            //     main: "calc(var(--color)))",
            // },
            text: {
                fontFamily: getCssValue("--primaryFont"),
                color: "var(--on-dm-background)",
                // primary: getCssValue("--primary"),
                // secondary: getCssValue("--secondary"),
                // disabled: getCssValue("--textDark"),
            },
            //divider: "",
            background: {
                //paper: "",
                default: getCssValue("--dm-background"),
            },
            error: {
                main: getCssValue("--dm-danger"),
            },
            warning: {
                main: getCssValue("--dm-warning"),
            },
            success: {
                main: getCssValue("--dm-success"),
            },
            info: {
                main: getCssValue("--dm-info"),
            },
        },
        typography: {
            allVariants: {
                color: "#ff0000"
            },
            // h1: {
            //     fontSize: "--h1",
            //     //color: "#ff0000",
            // },
        },
        components: {
            // Style all react components using css root vars
            MuiButton: {
                styleOverrides: {
                    root: {
                        color: "var(--textDark)",
                        background: "var(--dm-primary)",
                        ":hover": {
                            background: "var(--dm-on-primary)",
                        }
                    }
                }
            },
            MuiInputLabel: {
                styleOverrides: {
                    root: {
                        fontFamily: "var(--primaryFont)",
                        fontWeight: "var(--fontWeight-4)",
                        fontSize: "calc(var(--baseFont) * .875)",
                        lineHeight: "var(--standard-LineHeight)",
                        letterSpacing: "1.25%",
                        textTransform: "none",
                        marginBottom: "10px",
                        color: "#ff0000",
                    }
                }
            },
            MuiFormLabel: {
                styleOverrides: {
                    root: {
                        fontFamily: "var(--primaryFont)",
                        fontWeight: "var(--fontWeight-4)",
                        fontSize: "calc(var(--baseFont) * .875)",
                        lineHeight: "var(--standard-LineHeight)",
                        letterSpacing: "1.25%",
                        textTransform: "none",
                        marginBottom: "10px",
                        color: "#ff0000",
                        //color: "var(--on-dm-background)",
                        [`&.${formLabelClasses.focused}`]: {
                            color: "var(--on-dm-background)",
                        },
                    },
                },
            },
            "& .MuiTab-wrapper": {
                flexDirection: "row",
                justifyContent: "flex-start"
            },
            MuiTab: {
                styleOverrides: {
                    root: {
                        //color: "var(--on-dm-background)",
                        color: "#ff0000",
                        "&.Mui-selected": {
                            backgroundColor: "var(--dm-secondary)", //theme.palette.secondary.main,
                            color: "var(--on-dm-background)", //theme.palette.secondary.contrastText,
                        },                    
                    }
                }
            },
            // MuiListItemButton: {
            //     styleOverrides: {
            //         root: {
            //             fontSize: "3em",
            //         }
            //     }
            // }        
        }
    });

    themes["dark"] = darkTheme;

} catch (e) {
    console.error("Error in Theme.jsx: ", e);
}

