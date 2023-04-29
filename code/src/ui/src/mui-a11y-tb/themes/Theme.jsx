/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import { createTheme,  darken, lighten } from "@mui/material/styles";
import { formLabelClasses } from "@mui/material";
import './Theme.css'
import './TB.css'

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
                const val = getCssValue(p1)
                return val;
            });
        }
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
                        marginTop: "var(--spacing-half)",
                        /*
                        paddingLeft: "var(--spacing-3)", // var(--button-padding) // this is too small & not in px
                        paddingRight: "var(--spacing-3)",
                        */
                       padding: "0 calc(var(--spacing-1) * var(--button-padding))",
                       textDecoration: "var(--buttonTextDecoration)",
                       textTransform: "var(--buttonTextTransform)",
                        // ":hover": {
                        //     background: "var(--on-button)",
                        //     color: "var(--button)",
                        // },
                    }),
                }
            },
            MuiIconButton: {
                styleOverrides: {
                    root: {
                        "& .inline-icon": {
                          height: "var(--spacing-2)",
                          width: "var(--spacing-2)",
                          justifyContent: "center",
                          display: "flex",
                        }
                    }
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
                        display: "flex",
                        flexDirection: "column",
                        minWidth: "290px",
                    }
                }
            },
            MuiCheckbox: {
                styleOverrides: {
                    root: {
                        padding: "0 calc(var(--min-target) + var(--spacing-1))",
                        margin: "var(--spacing-half) 0",
                        height: "var(--min-target)",
                        width: "var(--min-target)",
                        height:  "var(--min-target)",
                        padding: 0,
                        "&.MuiCheckbox-root": {
                            backgroundColor: "var(--input)",
                            color: "var(--on-input)",
                        },
                        "&.Mui-checked": {
                            color: "var(--button) !important",
                        },
                    }
                }
            },
            MuiDivider: {
                styleOverrides: {
                    root: {
                        borderColor: "var(--on-background)",
                        opacity: ".6",
                    }
                }
            },
            MuiPaper: {
                styleOverrides: {
                    root: {
                        marginTop: "2px",
                    }
                }
            },
            MuiOutlinedInput: {
                styleOverrides: {
                      root: {
                        borderRadius: "var(--spacing-1)",
                        minHeight: "calc(var(--spacing-1) * var(--button-height))",
                        padding: "0",
                        border: "1px solid var(--borrder)",
                        "& input": {
                            padding: "0 var(--spacing-2)",
                        },
                        "&.dropdownFocus": {
                          borderRadius: "var(--spacing-1)",
                          "&.Mui-focused fieldset": {
                            border: '1px auto var(--button)',
                            boxShadow: '0 0 var(--focusBlur) 1px var(--button-half)',
                          },
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            border: '1px solid var(--button)',
                            boxShadow: '0 0 var(--focusBlur) 1px var(--button-half)',
                        },
                        "& fieldset": {
                          border: '1px solid var(--border)',
                          borderRadius: "var(--spacing-1)",
                          borderColor: "var(--border)",
                          boxShadow: "none",
                        //   background: "var(--surface)",
                        //  color: "var(--on-surface)",
                        },
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
                                    borderRadius: "var(--spacing-Half)",
                                },
                                '& .MuiList-root.MuiMenu-list .MuiMenuItem-root': {
                                    color: "var(--on-background)",
                                    minHeight: "var(--min-target)",
                                    display: "flex",
                                    gap: "var(--spacing-1)",
                                    opacity: "var(--quiet)",
                                    '& .MuiButtonBase': {
                                      padding: "0px",
                                      width: "var(--min-target)",
                                    },

                                },
                                '& .MuiList-root.MuiMenu-list .MuiMenuItem-root:has(.Hex)': {
                                    opacity: "1",
                                },
                                '& .MuiList-root.MuiMenu-list .MuiMenuItem-root:hover': {
                                    color: "var(--on-dropdown-hover-bg)",
                                    background: "var(--dropdown-hover-bg)",
                                    opacity: "1",
                                },
                                '& .MuiList-root.MuiMenu-list .MuiMenuItem-root:focus': {
                                    color: "var(--on-dropdown-focus-bg)",
                                    background: "var(--dropdown-focus-bg)",
                                    opacity: "1",
                                },
                                '& .MuiList-root.MuiMenu-list .MuiMenuItem-root.Mui-selected': {
                                    color: "var(--on-dropdown-focus-bg)",
                                    background: "var(--dropdown-focus-bg)",
                                    opacity: "1",
                                },
                                borderRadius: "var(--spacing-half)",
                            },
                        },
                    },
                },
                styleOverrides: {
                    root: {
                        borderRadius: "var(--spacing-half)",
                        minHeight: "calc(var(--spacing-1) * var(--button-height))",
                        minWidth: "calc(var(--spacing-1) * var(--button-minwidth))",
                        background: "var(--surface)",
                        border: "1px solid var(--border)",
                        position: "relative",
                        "& .MuiOutlinedInput-input": {
                          padding: "0 var(--spacing-6) 0 var(--spacing-2) !important",

                        },
                        minHeight: "var(--min-target)",
                        lineHeight: "var(--min-target)",
                    },
                }
            },
            MuiRadio: {
                styleOverrides: {
                    root: {
                        "&.Mui-checked":{
                            color: "var(--button)",
                        },
                        "&.Mui-checked.Mui-disabled":{
                            color: "var(--button)",
                        },
                    },
                },
            },
            MuiCheckbox: {
                styleOverrides: {
                    root: {
                        "&.Mui-checked":{
                            color: "var(--button)",
                        },
                    },
                },
            },
            MuiGrid: {
                styleOverrides: {
                    root: {
                        flexWrap: "wrap",
                    },
                },
            },
            MuiSwitch: {
                styleOverrides: {
                    root: {
                        height: "var(--min-target)",
                        padding: "0",
                        position: "relative",
                        overflow: "visible !important",
                        display: "flex",
                        alignItems: "center",
                    },
                    "& .MuiSwitch-switchBase": {
                        backgroundColor: "var(--button)",
                        color: "var(--button)",
                        "&.Mui-checked": {
                            backgroundColor: "var(--button)",
                            color: "var(--button)",
                        },
                    },
                },
            },
            MuiFormHelperText  : {
              styleOverrides: {
                  root: {
                    fontSize: "var(-smallFontSize)",
                    fontWeight: "var(--smallFontWeight)",
                    fontFamily: "var(--smallFontFamily)",
                    letterSpacing: "var(--smallLetterSpacing)",
                    lineHeight: "var(--smallLineHeight)",
                    padding: "var(--spacing-1) 0",
                    margin: "0",
                  }

              }
            },
            //.css-mc683d-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper
            MuiOutlinedInput: {
              styleOverrides: {
                  root: {
                      //fontFamily: "Ariel", //"var(--fontFamily)",
                      color: "var(--on-input)",
                      background: "var(--input)",
                      borderRadius: "var(--spacing-half)",
                      padding: "var(spacing-1)",
                      "& .MuiInputBase-root": {
                          borderRadius: "var(--spacing-half)",
                      },
                      "& .MuiInputBase-root.Mui-disabled": {
                          backgroundColor: "var(--input-disabled)",
                          color: "var(--on-input-disabled)",
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                          border: 'none',
                      },
                  }
              }
            },
            MuiTextField: {
                styleOverrides: {
                    root: {
                        //fontFamily: "Ariel", //"var(--fontFamily)",
                        color: "var(--on-input)",
                        background: "var(--input)",
                        borderRadius: "var(--spacing-half)",
                        padding: "var(spacing-1)",
                        "& .MuiInputBase-root": {
                            borderRadius: "var(--spacing-half)",
                        },
                        "& .MuiInputBase-root.Mui-disabled": {
                            backgroundColor: "var(--input-disabled)",
                            color: "var(--on-input-disabled)",
                        },
                        "& .MuiInputBase-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            border: '1px solid var(--button)',
                            boxShadow: '0 0 var(--focusBlur) 1px var(--button-half)',
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
                        marginBottom: "0px",

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
            MuiInputAdornment: {
                styleOverrides: {
                    root: {
                        marginRight: "var(--spacing-2)",
                    }
                }
            },
            MuiBreadcrumbs: {
                styleOverrides: {
                    root: {

                    }
                }
            },
            "& .MuiTab-wrapper": {
                flexDirection: "row",
                justifyContent: "flex-start",
                background: "var(--button)",
            },
            MuiAccordion: {
                styleOverrides: {
                    root: {
                        margin: "0",
                        marginBottom: "var(--spacing-1)",
                        border: "1px solid var(--border)",
                        background: "var(--surface)",
                        color: "var(--on-surface)",
                        borderRadius: "var(--spacing-1) !important",
                        position: "relative",
                        zIndex: "1",
                        "& svg path": {
                            fill: "var(--on-surface)" ,
                        },
                        "& .MuiAccordionSummary-root": {
                          minHeight: "var(--min-target)",
                          padding: "0 var(--spacing-2)",
                        },
                        "& .MuiAccordionDetails-root": {
                          padding: "var(--spacing-1) var(--spacing-2) var(--spacing-2)",
                        }
                    }
                }
            },
            MuiTabs: {
                styleOverrides: {
                    root: {
                        background: "var(--button)",
                        "& .MuiTabs-indicator": {
                            background: "var(--on-button)" ,
                            height: "var(--spacing-half)",
                            bottom:   "2px !important",
                        },

                    }
                }
            },
            MuiTab: {
                styleOverrides: {
                    root: {
                        fontFamily: "var(--navbarPrimary-font)",
                        fontSize: "var(--baseFont)", //"calc(var(--baseFont)* .875)",
                        background: "var(--button)",
                        opacity: "var(--quiet)",
                        padding: "0 var(--spacing-2)",
                        "&:hover": {
                            opacity: "1"
                        },
                        "&:focus": {
                            opacity: "1"
                        },
                        "&.Mui-selected, &.Mui-selected:hover": {
                            opacity: "1"
                        },
                        "&::after": {
                          height: "var(--spacing-half)",
                          left: "0",
                          right: "0",
                          bottom: "0px",
                          opacity: "0.5",
                          content: "''",
                          position: "absolute",
                          border: "none",
                          top: "unset",
                          borderBottom: "var(--spacing-half) solid transparent",
                          borderRadius: "0px",
                        },
                        "&:hover::after": {
                          height: "var(--spacing-half)",
                          left: "0",
                          right: "0",
                          bottom: "2px",
                          opacity: "0.5",
                          content: "''",
                          position: "absolute",
                          border: "none",
                          top: "unset",
                          borderBottom: "var(--spacing-half) solid var(--on-button)",
                          borderRadius: "0px",
                        },
                        "&:focus::after": {
                          opacity: "0 !important",

                        },
                        "&.Mui-selected, &.Mui-selected:focus": {
                            opacity: "1"
                        },
                    }
                }
            },
            MuiFormControl: {
                styleOverrides: {
                    root: {
                      margin: "var(--spacing-3) 0 0 important" ,
                    },
                },
            },
            MuiFormControlLabel: {
                styleOverrides: {
                    root: {
                      background: "transparent !important",
                      color: "var(--on-background)",
                      "& .MuiTypography-root": {
                        color: "var(--on-background)",
                      },
                      ".darkmode & .MuiTypography-root": {
                        color: "var(--dm-on-background)",
                      },
                      "&.black": {
                        background: "transparent !important",
                        color: "var(--black) !important",
                        "& svg path": {
                          fill: "var(--black) !important",
                        },
                        "& .MuiTypography-root": {
                          color: "var(--black) !important",
                        },
                      },
                      "&.white": {
                        background: "transparent !important",
                        color: "var(--white) !important",
                        "& svg path": {
                          fill: "var(--white) !important",
                        },
                        "& .MuiTypography-root": {
                          color: "var(--white) !important",
                        },
                      },
                      "&.Mui-disabled": {
                        opacity: "var(--disabled)",
                      },
                    }
                }
            },
            MuiPagination: {
                styleOverrides: {
                    root: {
                      "& .MuiPagination-ul": {
                        gap: "var(--spacing-half)",
                      }
                    }
                }
            },
            MuiPaginationItem: {
                styleOverrides: {
                    root: {
                      padding: "0",
                      minWidth: "var(--min-target)",
                      height: "var(--min-target)",
                      borderRadius: "calc( var(--radius-1) * var(--button-radius))",
                      background: "var(--transparent) !important",
                      color: "var(--button) !important",
                      border: "calc(var(--border-1) * var(--button-border)) solid var(--button)",
                      "&.Mui-selected": {
                        background: "var(--button) !important",
                        color: "var(--on-button) !important",
                      },
                      "& span": {
                        padding: "0 var(--spacing-half)",
                      },
                      "& .MuiPagination-ul": {
                        gap: "var(--spacing-half)",
                      },
                      "&.MuiPaginationItem-ellipsis": {
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "center",
                        paddingBottom: "20%",
                      }
                    }
                }
            },
            MuiList: {
                styleOverrides: {
                    root: {
                        "& .MuiListSubheader-root": {
                          background: "var(--background-secondary)",
                          color: "var(--on-background-secondary)",
                          fontWeight: "500",
                        },
                        "& .MuiListItemButton-root:active": {
                          background: '#000000'
                        }
                    }
                }
            },
            MuiListSubheader: {
                styleOverrides: {
                    root: {
                        background: "transparent",
                        fontWeight: "font-weight: 500",
                        "& .MuiListItemText-root": {
                          "& .MuiTypography-root": {
                            textTransform: "none",
                          },
                        },
                    }
                }
            },
            MuiAlert: {
                styleOverrides: {
                    root: {
                        background: "var(--surface)",
                        color: "var(--on-surface)",
                        border: "1px solid var(--border)",
                        padding: "var(--spacing-1) calc(var(--toast-padding) * var(--spacing-1)) !important",
                        paddingLeft: "calc(calc(2 * var(--spacing-1)) + var(--spacing-1) + var(--spacing-half)) !important",
                        borderRadius: "calc(var(--toast-radius) * var(--radius-1))",
                        boxShadow: "var(--toast-boxshadow)",
                        position: "relative",
                        borderRadius: "calc(var(--toast-radius) * var(--radius-1))",
                        alignItems: "center",
                        "& .MuiAlert-icon":{
                            marginRight: "calc(var(--toast-padding) * var(--spacing-1))",
                            alignSelf: "center",
                            padding: "0",

                        },
                        "& .MuiAlert-message": {
                          overflow: "visible !important",
                        },
                        "&::after": {
                            position: "absolute",
                            top:   "var(--spacing-1)",
                            left: "var(--spacing-1)",
                            width: "var(--spacing-half)",
                            bottom: "var(--spacing-1)",
                            borderRadius: "calc(var(--toast-radius) * var(--radius-1))",
                            content: '""',
                            background: "var(--danger)",
                        },
                        "&.MuiAlert-standardError .overline": {
                          color: "var(--danger)",
                        },
                        "&.MuiAlert-standardError::after": {
                            background: "var(--danger)",
                        },
                        "&.MuiAlert-standardError .MuiAlert-icon": {
                            color: "var(--danger)",
                        },
                        "&.MuiAlert-standardWarning::after": {
                            background: "var(--warning)",
                            "& .MuiAlert-icon ": {
                                color: "var(--warning) !important",
                            },
                        },
                        "&.MuiAlert-standardWarning .overline": {
                          color: "var(--warning)",
                        },
                        "&.MuiAlert-standardWarning .MuiAlert-icon": {
                          color: "var(--warning) !important",
                        },

                        "&.MuiAlert-standardSuccess .overline": {
                          color: "var(--success)",
                        },
                        "&.MuiAlert-standardSuccess::after": {
                            background: "var(--success)",
                        },
                        "&.MuiAlert-standardInfo .overline": {
                          color: "var(--info)",
                        },
                        "&.MuiAlert-standardInfo::after": {
                            background: "var(--info)",
                        },
                      },
                }
            },
            MuiListItemButton: {
              styleOverrides: {
                  root: {
                    "& .MuiListItemText-primary": {
                       textDecoration: "none",
                       textTransform: "none",
                    },
                },
              },
            },
            MuiSlider: {
              styleOverrides: {
                  root: {
                    height: "var(--min-target)",
                    "& .MuiSlider-rail": {
                       height: "calc(var(--sliderbarHeight) * var(--spacing-1))",
                       borderRadius: "calc(var(--sliderhandleRadius) * var(--radius-1))",
                       boxShadow: "var(--barInBevel)",
                       marginTop: "  margin-top: calc( calc(var(--min-target) - calc( var(--sliderbarHeight) * var(--spacing-1) ))/2)",
                       background: "var(--on-background)",
                       opacity: "var(--disabled)",
                    },
                    "& .MuiSlider-track": {
                       backgroundColor: "var(--button)",
                       height: "calc(var(--sliderbarHeight) * var(--spacing-1))",
                       marginTop: "  margin-top: calc( calc(var(--min-target) - calc( var(--sliderbarHeight) * var(--spacing-1) ))/2)",
                    },
                    "& .MuiSlider-thumb": {
                        height: "calc(var(--sliderhandleHeight) * var(--spacing-1))",
                        width: "calc(var(--sliderhandleHeight) * var(--spacing-1) )",
                        borderRadius: "calc(var(--sliderhandleRadius) * var(--radius-1))",
                       boxShadow: "var(--sliderhandleElevation)",
                       backgroundColor: "var(--button)",
                       position: "absolute",
                       top: "50%",
                       transform: "translate(0, -50%)",
                       "&::after": {
                         position: "absolute",
                         height: "var(--min-target)",
                         width: "var(--min-target)",
                         right: "calc(0px - calc(var(--focusBorder) + 2px + var(--animation-focus-distance)))",
                         bottom: "calc(0px - calc(var(--focusBorder) + 2px + var(--animation-focus-distance)))",
                         content: "''",
                         background: '#000000',
                         pointerEvents: "none",
                         borderRadius: "calc(calc(var(--sliderhandleRadius) * var(--radius-1))  + 1.6px)",
                         border: "var(--focusBorder) solid var(--button)",
                         background: "transparent !important",
                         opacity: "0",
                         transition: "var(--animation-speed) cubic-bezier(0.68, -0.55, 0.265, 1.55) all",
                         zIndex: "-1",
                       },
                       "&:hover::after": {
                         position: "absolute",
                         height: "calc(var(--spacing-3) + 3px)",
                         width: "calc(var(--spacing-3) + 3px)",
                         right: "calc(0px - calc(var(--focusBorder) + 2px))",
                         bottom: "calc(0px - calc(var(--focusBorder) + 2px))",
                         opacity: ".5",
                       },
                       "&:focus::after": {
                         position: "absolute",
                         height: "calc(var(--spacing-3) + 3px)",
                         width: "calc(var(--spacing-3) + 3px)",
                         right: "calc(0px - calc(var(--focusBorder) + 2px))",
                         bottom: "calc(0px - calc(var(--focusBorder) + 2px))",
                         opacity: "1",
                       },
                    },
                },
              },
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
                        "&::after": {
                            position: "absolute",
                            top:    "calc(((var(--min-target) - (var(--spacing-1) * var(--chip-height)))/2) - (var(--border-1) * 2) - 3px - var(--animation-focus-distance))",
                            bottom: "calc(((var(--min-target) - (var(--spacing-1) * var(--chip-height)))/2) - (var(--border-1) * 2) - 1px - var(--animation-focus-distance))",
                            padding: "0 calc(var(--spacing-1) * var(--chip-padding))",
                            left: "calc(-2px - calc(var(--border-1) * 2) - var(--animation-focus-distance))",
                            right: "calc(-2px - calc(var(--border-1) * 2) - var(--animation-focus-distance))",
                            borderRadius: "calc(var(--button-radius) * var(--radius-1) + 1.6px)",
                            border: "calc(var(--border-1) * var(--button-border)) solid var(--button)",
                            background: "transparent !important",
                            opacity: 0,
                            content: '""',
                            transition: "var(--animation-speed) cubic-bezier(0.68, -0.55, 0.265, 1.55) all"
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
                            boxShadow: "var(--chip-elevation)",
                            color: "var(--onchip)",
                            borderRadius: "calc(var(--button-radius) * var(--radius-1) + 1.6px)",
                            zIndex: -1,
                            border: "none",
                            boxShadow: "var(--chip-shadow) !important",
                            minHeight: "calc(var(--spacing-1) * var(--chip-height))",
                        },
                        "&:hover::after": {
                            opacity: "var(--hover)",
                            top:    "calc(((var(--min-target) - (var(--spacing-1) * var(--chip-height)))/2) - 4px)",
                            bottom: "calc(((var(--min-target) - (var(--spacing-1) * var(--chip-height)))/2) - 4px)",
                            left: "calc(-2px - calc(var(--border-1) * 2))",
                            right: "calc(-2px - calc(var(--border-1) * 2))",
                        },
                        "&:active::after": {
                            opacity: 1,
                        },
                        "&:hover .closeIt, &:focus .closeIt, &:active .closeIt": {
                            opacity: 1,
                        },
                        "& .MuiChip-label": {
                            paddingLeft: "var(--spacing-half)",
                            paddingLeft: "var(--spacing-half)",
                        },
                        "&.inline-icon path": {
                            fill: "var(--on-chip)",
                        },
                        "& .MuiAvatar-root": {
                            border: "solid calc(var(--border-1) * var(--avatar-border)) var(--on-chip) !important",
                            magin: "0px !important",
                        },
                        ".darkmode &::before": {
                            background: "var(--dm-chip)",
                            color: "var(--dm-onchip)",
                        },
                        ".darkmode & .MuiAvatar-root": {
                            border: "1px solid calc(var(--border-1) * var(--avatar-border)) var(--dm-white) !important",
                        },
                    },
                },
            },
            MuiInputAdornment: {
              styleOverrides: {
                  root: {
                    "& p": {
                        padding: "0px var(--spacing-1) !important",
                    },
                  },
              },
            },
            MuiAvatar: {
                styleOverrides: {
                    root: {
                      backgroundColor: "var(--button)",
                      boxShadow: "var(--avatar-shadow)",
                      border: "solid calc(var(--border-1) * var(--avatar-border-lg)) var(--button) !important",
                      "&.xxs": {
                        border: "solid calc(var(--border-1) * var(--avatar-border)) var(--button) !important",
                      },
                      "&.xs": {
                        border: "solid calc(var(--border-1) * var(--avatar-border)) var(--button) !important",
                      },
                      "&.sm": {
                        border: "solid calc(var(--border-1) * var(--avatar-border)) var(--button) !important",
                      },
                      "&.md": {
                        border: "solid calc(var(--border-1) * var(--avatar-border)) var(--button) !important",
                      },
                      "& svg path": {
                          fill: "var(--on-button)",
                      },
                      "&.black" : {
                        background: "var(--black)",
                        border: "solid calc(var(--border-1) * var(--avatar-border-lg)) var(--black) !important",
                        "& svg path": {
                            fill: "var(--white)",
                        },
                        "&.xxs": {
                          border: "solid calc(var(--border-1) * var(--avatar-border)) var(--black) !important",
                        },
                        "&.xs": {
                          border: "solid calc(var(--border-1) * var(--avatar-border)) var(--black) !important",
                        },
                        "&.sm": {
                          border: "solid calc(var(--border-1) * var(--avatar-border)) var(--black) !important",
                        },
                        "&.md": {
                          border: "solid calc(var(--border-1) * var(--avatar-border)) var(--black) !important",
                        }
                      },
                      "&.white" : {
                        backgroundColor: "var(--white)",
                        border: "solid calc(var(--border-1) * var(--avatar-border-lg)) var(--white) !important",
                        "& svg path": {
                            fill: "var(--black)",
                        },
                        "&.xxs": {
                          border: "solid calc(var(--border-1) * var(--avatar-border)) var(--white) !important",
                        },
                        "&.xs": {
                          border: "solid calc(var(--border-1) * var(--avatar-border)) var(--white) !important",
                        },
                        "&.sm": {
                          border: "solid calc(var(--border-1) * var(--avatar-border)) var(--white) !important",
                        },
                        "&.md": {
                          border: "solid calc(var(--border-1) * var(--avatar-border)) var(--white) !important",
                        }
                      },
                    },
                },
            },
        },
    });

    themes["light"] = lightTheme;

} catch (e) {
    console.error("Error in Theme.jsx: ", e);
}
