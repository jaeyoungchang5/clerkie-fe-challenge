export type Value = {
    value: number,
    errorMessage?: string,
}

export type AccountDetails = {
    name: string,
    balance: number,
    isSelected: boolean,
    accountPayment: number,
}

export type RadioButtonOption = {
    value: string,
    title: string,
}