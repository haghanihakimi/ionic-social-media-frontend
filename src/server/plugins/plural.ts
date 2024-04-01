export function plural(amount: number, text: string) {
    if (amount === 0) {
        return '';
    } else if (amount === 1) {
        return `0${amount} ${text}`;
    } else if (amount < 10) {
        return `0${amount} ${text}s`;
    } else {
        return `${amount} ${text}s`;
    }
    return text;
}