import PaymentForm from "./components/PaymentForm";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24 bg-neutral-100 text-black">
			<PaymentForm />
		</main>
	);
}
