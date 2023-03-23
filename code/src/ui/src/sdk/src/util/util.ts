export class Util {

    /*
     * Round to 2 decimal places.
     */
    public static round2(num: number): number {
        if (num === 0) {
            return 0;
        }
        return Math.round(num*100)/100;
    }

    public static num2hex(num: number): string {
        return num.toString(16).toUpperCase().padStart(2, "0");
    }

    /*
     * Given an hex value, return an RGB object.
     */
    public static hexToRgbArray(hex: string): number[] {
        // Initialize RGB (Red, Green, Blue) values
        // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
        const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        const hex2 = hex.replace(shorthandRegex, function(m, r, g, b) {
            return r + r + g + g + b + b;
        });
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex2);
        if (!result) {
            throw new Error("No result found when generating RGB for " + hex);
        }
        const R = parseInt(result[1], 16);
        const G = parseInt(result[2], 16);
        const B = parseInt(result[3], 16);
        return [R,G,B];
    }

    public static normalizeRgbArray(rgbArray: number[]): number[] {
        return rgbArray.map((val) => Math.round(Math.min(val)));
    }

    public static rgbArrayToHex(rgbArray: number[]): string {
        const R = rgbArray[0];
        const G = rgbArray[1];
        const B = rgbArray[2];
        return `#${Util.num2hex(R)}${Util.num2hex(G)}${Util.num2hex(B)}`;
    }

    /*
     * Convert first character of 's' to upper case
     */
    public static firstUpper(s: string): string {
        return s[0].toUpperCase() + s.slice(1);
    }

    public static formatDateTimeSeconds(d: number): string {
        if (!d) { return "" }
        var date = new Date(d);
        return (
            ("0" + (date.getMonth() + 1)).slice(-2) + "/" +
            ("0" + date.getDate()).slice(-2) + "/" +
            ("" + date.getFullYear()).slice(-4) + " " + date.getHours() + ":" + ("0" + date.getMinutes()).slice(-2) + ":" + ("0" + date.getSeconds()).slice(-2) + "." + date.getMilliseconds()
        )
    }

    public static formatNow(): string {
        return Util.formatDateTimeSeconds(Date.now());
    }

}