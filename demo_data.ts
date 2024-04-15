import { AccountDetails, AccountType, RadioButtonOption } from "@/app/types";

export const demoOptions: RadioButtonOption[] = [
    { value: AccountType.Checking, title: 'Checking' },
    { value: AccountType.Savings, title: 'Savings' },
]

export const demoAccounts: AccountDetails[] = [
    { name: 'A', balance: 45156, isSelected: false, accountPayment: 0 },
    { name: 'B', balance: 14901, isSelected: false, accountPayment: 0 },
    { name: 'C', balance:  5438, isSelected: false, accountPayment: 0 },
]