import PaymentForm from "./components/PaymentForm";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center p-4 md:p-24 bg-neutral-100">
			<PaymentForm />
		</main>
	);
}
