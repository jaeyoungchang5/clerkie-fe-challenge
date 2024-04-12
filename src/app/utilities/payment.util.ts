import { AccountDetails } from "../types/";

export function isValidNumber(value: string): boolean {
    if (value === '') return true;
    if (isNaN(+value)) return false;
    const regex = new RegExp(/^\d+$/)
    return regex.test(value);
}

export function isValidAccount(value: string): boolean {
    if (!isValidNumber(value)) return false;
    const regex = new RegExp(/^\d{9,18}$/);
    return regex.test(value);
}

export function isValidRouting(value: string): boolean {
    if (!isValidNumber(value)) return false;
    const regex = new RegExp(/^\d{9}$/);
    return regex.test(value.toString());
}

export function isValidAccountPayment(account: AccountDetails) {
    return !(account.accountPayment > account.balance)
}