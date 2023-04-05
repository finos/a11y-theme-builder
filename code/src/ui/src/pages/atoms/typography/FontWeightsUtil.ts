/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
// Key is the font family converted to lower case
// Value is an array of numbers representing font weights that the font supports
const CommonFontsSupportedWeights = new Map<string, number[]>([
    ["roboto",                         [100,            300,            500,            700,            900         ]],
    ["open sans",                      [                300,    400,    500,    600,    700,    800                 ]],
    ["noto sans japanese",             [100,            300,    400,    500,            700,            900         ]],
    ["montserrat",                     [100,    200,    300,    400,    500,    600,    700,    800,    900         ]],
    ["lato",                           [100,            300,    400,                    700,            900         ]],
    ["poppins",                        [100,    200,    300,    400,    500,    600,    700,    800,    900         ]],
    ["roboto condensed",               [                300,    400,                    700                         ]],
    ["source sans pro",                [        200,    300,    400,            600,    700,            900         ]],
    ["inter",                          [100,    200,    300,    400,    500,    600,    700,    800,    900         ]],
    ["roboto mono",                    [100,    200,    300,    400,    500,    600,    700                         ]],
    ["oswald",                         [        200,    300,    400,    500,    600,    700                         ]],
    ["raleway",                        [100,    200,    300,    400,    500,    600,    700,    800,    900         ]],
    ["noto sans",                      [100,    200,    300,    400,    500,    600,    700,    800,    900         ]],
    ["ubuntu",                         [                300,    400,    500,            700                         ]],
    ["roboto slab",                    [100,    200,    300,    400,    500,    600,    700,    800,    900         ]],
    ["nunito",                         [        200,    300,    400,    500,    600,    700,    800,    900         ]],
    ["nunito sans",                    [        200,    300,    400,            600,    700,    800,    900         ]],
    ["playfair display",               [                        400,    500,    600,    700,    800,    900         ]],
    ["merriweather",                   [                300,    400,                    700,            900         ]],
    ["rubik",                          [                300,    400,    500,    600,    700,    800,    900         ]],
    ["pt sans",                        [                        400,                    700                         ]],
    ["mukta",                          [                300,    400,    500,    600,    700,    800                 ]],
    ["noto sans korean",               [100,            300,    400,    500,            700,            900         ]],
    ["work sans",                      [100,    200,    300,    400,    500,    600,    700,    800,    900         ]],
    ["kanit",                          [100,    200,    300,    400,    500,    600,    700,    800,    900         ]],
    ["lora",                           [                        400,    500,    600,    700                         ]],
    ["fira sans",                      [100,    200,    300,    400,    500,    600,    700,    800,    900         ]],
    ["noto sans traditional chinese",  [100,            300,    400,    500,            700,            900         ]],
    ["quicksand",                      [                300,    400,    500,    600,    700                         ]],
    ["mulish",                         [        200,    300,    400,    500,    600,    700,    800,    900         ]],
    ["barlow",                         [100,    200,    300,    400,    500,    600,    700,    800,    900         ]],
    ["ibm plex sans",                  [100,    200,    300,    400,    500,    600,    700                         ]],
    ["heebo",                          [100,    200,    300,    400,    500,    600,    700,    800,    900         ]],
    ["noto serif",                     [                        400,                    700                         ]],
    ["libre franklin",                 [100,    200,    300,    400,    500,    600,    700,    800,    900         ]],
    ["dm sans",                        [                        400,    500,            700                         ]],
    ["nanum gothic",                   [                        400,                    700,    800                 ]],
    ["manrope",                        [        200,    300,    400,    500,    600,    700,    800                 ]],
    ["karla",                          [        200,    300,    400,    500,    600,    700,    800                 ]],
    ["hind siliguri",                  [                300,    400,    500,    600,    700                         ]],
    ["josefin sans",                   [100,    200,    300,    400,    500,    600,    700                         ]],
    ["arimo",                          [                        400,    500,    600,    700                         ]],
    ["dosis",                          [        200,    300,    400,    500,    600,    700,    800                 ]],
    ["pt sans narrow",                 [                        400,                    700                         ]],
    ["libre baskerville",              [                        400,                    700                         ]],
    ["bitter",                         [100,    200,    300,    400,    500,    600,    700,    800,    900         ]],
    ["source serif pro",               [        200,    300,    400,            600,    700,            900         ]],
    ["oxygen",                         [                300,    400,                    700                         ]],
    ["source code pro",                [        200,    300,    400,    500,    600,    700,    800,    900         ]],
    ["cabin",                          [                        400,    500,    600,    700                         ]],
    ["cairo",                          [        200,    300,    400,    500,    600,    700,    800,    900,    1000]],
    ["anton",                          [                        400                                                 ]],
    ["bebas neue",                     [                        400                                                 ]],
    ["noto sans simplified chinese",   [100,    200,    300,    400,    500,    600,    700,    800,    900         ]],
    ["abel",                           [                        400                                                 ]],
    ["lobster",                        [                        400                                                 ]],
    ["rajdhani",                       [                300,    400,    500,    600,    700                         ]],
    ["prompt",                         [100,    200,    300,    400,    500,    600,    700,    800,    900         ]],
    ["dancing script",                 [                        400,    500,    600,    700                         ]],
    ["eb garamond",                    [                        400,    500,    600,    700,    800                 ]],
    ["barlow condensed",               [100,    200,    300,    400,    500,    600,    700,    800,    900         ]],
    ["exo 2",                          [100,    200,    300,    400,    500,    600,    700,    800,    900         ]],
    ["comfort",                        [                300,    400,    500,    600,    700                         ]],
    ["signika negative",               [                300,    400,    500,    600,    700                         ]],
    ["pacifico",                       [                        400                                                 ]],
    ["varela round",                   [                        400                                                 ]],
    ["hind",                           [                300,    400,    500,    600,    700                         ]],
    ["teko",                           [                300,    400,    500,    600,    700                         ]],
    ["maven pro",                      [                        400,    500,    600,    700,    800,    900         ]],
    ["fjalla one",                     [                        400                                                 ]],
    ["crimson text",                   [                        400,            600,    700                         ]],
    ["space grotesk",                  [                300,    400,    500,    600,    700                         ]],
    ["noto serif japanese",            [        200,    300,    400,    500,    600,    700,            900         ]],
    ["jost",                           [100,    200,    300,    400,    500,    600,    700,    800,    900         ]],
    ["arvo",                           [                        400,                    700                         ]],
    ["merriweather sans",              [                300,    400,    500,    600,    700,    800                 ]],
    ["archivo",                        [100,    200,    300,    400,    500,    600,    700,    800,    900         ]],
    ["abril fatface",                  [                        400                                                 ]],
    ["assistant",                      [        200,    300,    400,    500,    600,    700,    800                 ]],
    ["asap",                           [100,    200,    300,    400,    500,    600,    700,    800,    900         ]],
    ["hind madurai",                   [                300,    400,    500,    600,    700                         ]],
    ["shadows into light",             [                        400                                                 ]],
    ["caveat",                         [                        400,    500,    600,    700                         ]],
    ["noto sans hong kong",            [100,            300,    400,    500,            700,            900         ]],
    ["cormorant garamond",             [                300,    400,    500,    600                                 ]],
    ["kanone kaffeesatz",              [        200,    300,    400,    500,    600,    700                         ]],
    ["fira sans condensed",            [100,    200,    300,    400,    500,    600,    700,    800,    900         ]],
    ["overpass",                       [100,    200,    300,    400,    500,    600,    700,    800,    900         ]],
    ["tajawal",                        [        200,    300,    400,    500,    600,    700,    800,    900         ]],
    ["public sans",                    [100,    200,    300,    400,    500,    600,    700,    800,    900         ]],
    ["righteous",                      [                        400                                                 ]],
    ["m plus rounded 1c",              [100,            300,    400,    500,            700,    800,    900         ]],
    ["slabo 27px",                     [                        400                                                 ]],
    ["satisfy",                        [                        400                                                 ]],
    ["ibm plex mono",                  [100,    200,    300,    400,    500,    600,    700                         ]],
    ["play",                           [                        400,                    700                         ]],
    ["indie flower",                   [                        400                                                 ]],
    ["zilla slab",                     [                300,    400,    500,    600,    700                         ]],
    ["red hat display",                [                300,    400,    500,    600,    700,    800,    900         ]],
    ["catamaran",                      [100,    200,    300,    400,    500,    600,    700,    800,    900         ]],
    ["secular one",                    [                        400                                                 ]],
    ["sarabun",                        [100,    200,    300,    400,    500,    600,    700,    800                 ]],
]);
						
export class FontWeightsUtil {

    /*
    / this should be ran first to check the font is in this list before running anything else
    */
    public static isFontCommon(font: string): boolean {
        const key = font.toLowerCase().trim()
        return CommonFontsSupportedWeights.has(key)
    }

    /*
    / returns null if the font weight is supported,
    / otherwise returns the list of suported weights so we can alert the user
    / in the rare case the font is not in the list (wasn't checked first), return an emtpy array
    */
    public static getFontWeightsIfUnsupported(font: string, weight: number): number[] | null {
        const key = font.toLowerCase().trim()
        const weightArray = CommonFontsSupportedWeights.get(key) as number[]
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
    / otherwise returns the list of suported weights
    */
    public static getFontWeights(font: string): number[] | null {
        const key = font.toLowerCase().trim()
        return CommonFontsSupportedWeights.get(key) as number[]
    }

    /*
    / returns true if the weight is supported in the font
    */
    public static isWeightSupported(font: string, weight: number): boolean {
        const key = font.toLowerCase().trim()
        const weightArray = CommonFontsSupportedWeights.get(key) as number[]
        return weightArray?.includes(weight)
    }

}