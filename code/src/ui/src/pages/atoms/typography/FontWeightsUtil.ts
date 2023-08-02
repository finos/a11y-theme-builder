/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */

// Key is the font family
// Value is an array of numbers representing font weights that the font supports
const CommonFontsSupportedWeights = new Map<string, number[]>([
    ["Roboto",                         [100,            300,            500,            700,            900         ]],
    ["Open Sans",                      [                300,    400,    500,    600,    700,    800                 ]],
    ["Noto Sans Japanese",             [100,            300,    400,    500,            700,            900         ]],
    ["Montserrat",                     [100,    200,    300,    400,    500,    600,    700,    800,    900         ]],
    ["Lato",                           [100,            300,    400,                    700,            900         ]],
    ["Poppins",                        [100,    200,    300,    400,    500,    600,    700,    800,    900         ]],
    ["Roboto Condensed",               [                300,    400,                    700                         ]],
    ["Source Sans Pro",                [        200,    300,    400,            600,    700,            900         ]],
    ["Inter",                          [100,    200,    300,    400,    500,    600,    700,    800,    900         ]],
    ["Roboto Mono",                    [100,    200,    300,    400,    500,    600,    700                         ]],
    ["Oswald",                         [        200,    300,    400,    500,    600,    700                         ]],
    ["Raleway",                        [100,    200,    300,    400,    500,    600,    700,    800,    900         ]],
    ["Noto Sans",                      [100,    200,    300,    400,    500,    600,    700,    800,    900         ]],
    ["Ubuntu",                         [                300,    400,    500,            700                         ]],
    ["Roboto Slab",                    [100,    200,    300,    400,    500,    600,    700,    800,    900         ]],
    ["Nunito",                         [        200,    300,    400,    500,    600,    700,    800,    900         ]],
    ["Nunito Sans",                    [        200,    300,    400,            600,    700,    800,    900         ]],
    ["Playfair Display",               [                        400,    500,    600,    700,    800,    900         ]],
    ["Merriweather",                   [                300,    400,                    700,            900         ]],
    ["Rubik",                          [                300,    400,    500,    600,    700,    800,    900         ]],
    ["PT Sans",                        [                        400,                    700                         ]],
    ["Mukta",                          [                300,    400,    500,    600,    700,    800                 ]],
    ["Noto Sans Korean",               [100,            300,    400,    500,            700,            900         ]],
    ["Work Sans",                      [100,    200,    300,    400,    500,    600,    700,    800,    900         ]],
    ["Kanit",                          [100,    200,    300,    400,    500,    600,    700,    800,    900         ]],
    ["Lora",                           [                        400,    500,    600,    700                         ]],
    ["Fira Sans",                      [100,    200,    300,    400,    500,    600,    700,    800,    900         ]],
    ["Noto Sans Traditional Chinese",  [100,            300,    400,    500,            700,            900         ]],
    ["Quicksand",                      [                300,    400,    500,    600,    700                         ]],
    ["Mulish",                         [        200,    300,    400,    500,    600,    700,    800,    900         ]],
    ["Barlow",                         [100,    200,    300,    400,    500,    600,    700,    800,    900         ]],
    ["IBM Plex Sans",                  [100,    200,    300,    400,    500,    600,    700                         ]],
    ["Heebo",                          [100,    200,    300,    400,    500,    600,    700,    800,    900         ]],
    ["Noto Serif",                     [                        400,                    700                         ]],
    ["Libre Franklin",                 [100,    200,    300,    400,    500,    600,    700,    800,    900         ]],
    ["DM Sans",                        [                        400,    500,            700                         ]],
    ["Nanum Gothic",                   [                        400,                    700,    800                 ]],
    ["Manrope",                        [        200,    300,    400,    500,    600,    700,    800                 ]],
    ["Larla",                          [        200,    300,    400,    500,    600,    700,    800                 ]],
    ["Hind Siliguri",                  [                300,    400,    500,    600,    700                         ]],
    ["Josefin Sans",                   [100,    200,    300,    400,    500,    600,    700                         ]],
    ["Arimo",                          [                        400,    500,    600,    700                         ]],
    ["Dosis",                          [        200,    300,    400,    500,    600,    700,    800                 ]],
    ["PT Sans Narrow",                 [                        400,                    700                         ]],
    ["Libre Baskerville",              [                        400,                    700                         ]],
    ["Bitter",                         [100,    200,    300,    400,    500,    600,    700,    800,    900         ]],
    ["Source Serif Pro",               [        200,    300,    400,            600,    700,            900         ]],
    ["Oxygen",                         [                300,    400,                    700                         ]],
    ["Source Code Pro",                [        200,    300,    400,    500,    600,    700,    800,    900         ]],
    ["Cabin",                          [                        400,    500,    600,    700                         ]],
    ["Cairo",                          [        200,    300,    400,    500,    600,    700,    800,    900,    1000]],
    ["Anton",                          [                        400                                                 ]],
    ["Bebas Neue",                     [                        400                                                 ]],
    ["Noto Sans Simplified Chinese",   [100,    200,    300,    400,    500,    600,    700,    800,    900         ]],
    ["Abel",                           [                        400                                                 ]],
    ["Lobster",                        [                        400                                                 ]],
    ["Rajdhani",                       [                300,    400,    500,    600,    700                         ]],
    ["Prompt",                         [100,    200,    300,    400,    500,    600,    700,    800,    900         ]],
    ["Dancing Script",                 [                        400,    500,    600,    700                         ]],
    ["EB Garamond",                    [                        400,    500,    600,    700,    800                 ]],
    ["Barlow Condensed",               [100,    200,    300,    400,    500,    600,    700,    800,    900         ]],
    ["Exo 2",                          [100,    200,    300,    400,    500,    600,    700,    800,    900         ]],
    ["Comfort",                        [                300,    400,    500,    600,    700                         ]],
    ["Signika Negative",               [                300,    400,    500,    600,    700                         ]],
    ["Pacifico",                       [                        400                                                 ]],
    ["Varela Round",                   [                        400                                                 ]],
    ["Hind",                           [                300,    400,    500,    600,    700                         ]],
    ["Teko",                           [                300,    400,    500,    600,    700                         ]],
    ["Maven Pro",                      [                        400,    500,    600,    700,    800,    900         ]],
    ["Fjalla one",                     [                        400                                                 ]],
    ["Crimson Text",                   [                        400,            600,    700                         ]],
    ["Space Grotesk",                  [                300,    400,    500,    600,    700                         ]],
    ["Noto Serif Japanese",            [        200,    300,    400,    500,    600,    700,            900         ]],
    ["Jost",                           [100,    200,    300,    400,    500,    600,    700,    800,    900         ]],
    ["Arvo",                           [                        400,                    700                         ]],
    ["Merriweather Sans",              [                300,    400,    500,    600,    700,    800                 ]],
    ["Archivo",                        [100,    200,    300,    400,    500,    600,    700,    800,    900         ]],
    ["Abril Fatface",                  [                        400                                                 ]],
    ["Assistant",                      [        200,    300,    400,    500,    600,    700,    800                 ]],
    ["Asap",                           [100,    200,    300,    400,    500,    600,    700,    800,    900         ]],
    ["Hind Madurai",                   [                300,    400,    500,    600,    700                         ]],
    ["Shadows Into Light",             [                        400                                                 ]],
    ["Caveat",                         [                        400,    500,    600,    700                         ]],
    ["Noto Sans Hong Kong",            [100,            300,    400,    500,            700,            900         ]],
    ["Cormorant Garamond",             [                300,    400,    500,    600                                 ]],
    ["Kanone Kaffeesatz",              [        200,    300,    400,    500,    600,    700                         ]],
    ["Fira Sans Condensed",            [100,    200,    300,    400,    500,    600,    700,    800,    900         ]],
    ["Overpass",                       [100,    200,    300,    400,    500,    600,    700,    800,    900         ]],
    ["Tajawal",                        [        200,    300,    400,    500,    600,    700,    800,    900         ]],
    ["Public Sans",                    [100,    200,    300,    400,    500,    600,    700,    800,    900         ]],
    ["Righteous",                      [                        400                                                 ]],
    ["M PLUS Rounded 1c",              [100,            300,    400,    500,            700,    800,    900         ]],
    ["Slabo 27px",                     [                        400                                                 ]],
    ["Satisfy",                        [                        400                                                 ]],
    ["IBM Plex Mono",                  [100,    200,    300,    400,    500,    600,    700                         ]],
    ["Play",                           [                        400,                    700                         ]],
    ["Indie Flower",                   [                        400                                                 ]],
    ["Zilla Slab",                     [                300,    400,    500,    600,    700                         ]],
    ["Red Hat Display",                [                300,    400,    500,    600,    700,    800,    900         ]],
    ["Catamaran",                      [100,    200,    300,    400,    500,    600,    700,    800,    900         ]],
    ["Secular One",                    [                        400                                                 ]],
    ["Sarabun",                        [100,    200,    300,    400,    500,    600,    700,    800                 ]],
]);
						
export class FontWeightsUtil {

    /*
    / this should be ran first to check the font is in this list before running anything else
    */
    public static isFontCommon(font: string): boolean {
        return CommonFontsSupportedWeights.has(font)
    }

    /*
    / returns null if the font weight is supported,
    / otherwise returns the list of supported weights so we can alert the user
    / in the rare case the font is not in the list (wasn't checked first), return an emtpy array
    */
    public static getFontWeightsIfUnsupported(font: string, weight: number): number[] | null {
        const weightArray = CommonFontsSupportedWeights.get(font) as number[]
        if (!weightArray) {
            return []
        }
        if (weightArray.includes(weight)) {
            return null
        }
        return weightArray
    }

    /*
    / returns null if the font weight is unsupported,
    / otherwise returns the list of supported weights
    */
    public static getFontWeights(font: string): number[] | null {
        return CommonFontsSupportedWeights.get(font) as number[]
    }

    /*
    / returns true if the weight is supported in the font
    */
    public static isWeightSupported(font: string, weight: number): boolean {
        const weightArray = CommonFontsSupportedWeights.get(font) as number[]
        return weightArray?.includes(weight)
    }

    public static listCommonFonts(): string[] {
        var r = [] as string[];
        r = Array.from( CommonFontsSupportedWeights.keys() );
        return r.sort();
    }

}