import { AccountType } from "./enums"

export type FormResponse = {
    accountNumber: string | null,
    routingNumber: string | null,
    accountType: AccountType | null,
    paymentAmount: number | null,
    accountPayments: Account[],
    errors: string[],
}

export type Account = {
    name: string,
    accountPayment: number
}

export type AccountDetails = Account & {
    balance: number,
    isSelected: boolean,
}

export type RadioButtonOption = {
    value: AccountType,
    title: string,
}