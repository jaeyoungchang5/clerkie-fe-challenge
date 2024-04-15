export function numToCurrency(value: number): string {
    let temp: string = value.toFixed(2);
    temp = temp.replace(/(\d)(?=(\d{3})+(\.(\d){0,2})$)/g, '$1,')
    return `$${temp}`
}

export function currencyToNum(value: string): number {
    return Number(value.replace(/[\$,-]/g, ''));
}

export function inputStringToCurrencyNum(value: string): number {
    let strippedString = `0${value.replace(/[\$,-.]/g, '')}`;
    let strippedLength = strippedString.length;
    let newString = [strippedString.slice(0, strippedLength-2), strippedString.slice(strippedLength-2)].join('.');
    return Number(newString);
}