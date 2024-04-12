export function numToCurrency(value: number): string {
    let temp: string = value.toFixed(2);
    temp = temp.replace(/(\d)(?=(\d{3})+(\.(\d){0,2})$)/g, '$1,')
    return `$${temp}`
}

export function currencyToNum(value: string): number {
    return Number(value.replace(/[\$,-]/g, ''));
}