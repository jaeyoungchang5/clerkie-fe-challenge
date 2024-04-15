import { AccountDetails, FormResponse, RadioButtonOption } from "./types"

export interface PaymentFormProps {
	onSubmit: (formData: FormResponse) => void
}

export interface PaymentInfoProps {
    updateValidity: (isValid: boolean) => void
}

export interface TitleProps {
	title: string,
}

export interface InputProps {
	name: string,
	label: string | undefined,
	defaultText: string,
	value: string | undefined, // pass undefined for value if you want the default text to show up
	errorMessage: string,
	disabled?: boolean,
	extraInputClasses?: string,
	onChange: (value: string) => void,
}

export interface CurrencyInputProps {
	name: string,
	label?: string,
	defaultText?: string,
	value: number,
	errorMessage: string,
	disabled: boolean,
	extraInputClasses?: string,
	onChange: (value: number) => void,
}

export interface ButtonProps {
    text: string,
    type: 'submit',
    disabled?: boolean,
}

export interface AccountProps {
    account: AccountDetails,
    updateChecked: (name: string, isChecked: boolean) => void,
    updatePaymentAmount: (name: string, value: number) => void
}

export interface AccountsHeaderProps {
    numSelectedAccounts: number,
    totalBalance: number
}

export interface AccountInfoProps {
    name: string,
    balance: number
}

export interface RadioGroupProps {
	label: string,
	name: string,
	options: RadioButtonOption[]
}

export interface RadioProps {
    name: string,
    value: string,
    title: string,
    isChecked: boolean, 
    onChange: (value: string) => void
}

export interface SuccessProps {
	successText: string,
}