export function letterizeNumbers(num: number, max?: number): string {
    const abbreviations = ["", "K", "M", "B", "T"];
    let formattedNum = (max && num > max) ? `+${Math.min(num, max)}` : `${num}`;

    if (num >= 1000 && num <= 999999) {
        const temp = (Math.sign(num) * ((Math.abs(num) / 1000)));
        if (max && num > max) {
            formattedNum = `+${Math.min(temp, max).toFixed(0)}K`;
        } else {
            formattedNum = num >= 100000 ? `${temp.toFixed(0)}K` : `${temp.toFixed(1)}K`;
        }
    }
    if (num >= 1000000 && num <= 999999999) {
        const temp = (Math.sign(num) * ((Math.abs(num) / 1000000)));
        if (max && num > max) {
            formattedNum = `+${Math.min(temp, max).toFixed(0)}M`;
        } else {
            formattedNum = num >= 100000000 ? `${temp.toFixed(0)}M` : `${temp.toFixed(1)}M`;
        }
    }
    if (num >= 1000000000 && num <= 999999999999) {
        const temp = (Math.sign(num) * ((Math.abs(num) / 1000000000)));
        if (max && num > max) {
            formattedNum = `+${Math.min(temp, max).toFixed(0)}B`;
        } else {
            formattedNum = num >= 100000000000 ? `${temp.toFixed(0)}B` : `${temp.toFixed(1)}B`;
        }
    }

    return formattedNum;
}