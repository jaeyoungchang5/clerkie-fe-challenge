import { AccountDetails, RadioButtonOption } from "@/app/types";

export const demoOptions: RadioButtonOption[] = [
    { value: 'checkingaccount', title: 'Checking' },
    { value: 'savingsaccount', title: 'Savings' },
]

export const demoAccounts: AccountDetails[] = [
    { name: 'A', balance: 45156, isSelected: false, accountPayment: 0 },
    { name: 'B', balance: 14901, isSelected: false, accountPayment: 0 },
    { name: 'C', balance:  5438, isSelected: false, accountPayment: 0 },
]