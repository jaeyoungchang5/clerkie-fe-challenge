'use client';
import PaymentForm from "./components/PaymentForm";
import { FormResponse } from "./types";

export default function Home() {
	function onSubmit(formData: FormResponse) {
		console.log('The following form data has been successfully submitted:');
		console.log(formData);
	}
	return (
		<main className="flex min-h-screen flex-col items-center p-4 md:p-24 bg-neutral-100">
			<PaymentForm onSubmit={onSubmit} />
		</main>
	);
}
