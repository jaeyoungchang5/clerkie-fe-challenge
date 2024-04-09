# Clerkie Frontend Coding Challenge
## Instructions
In this task, you'll experience a condensed version of a real problem we've tackled at Clerkie. It's designed to simulate a day in the life of our engineering team, giving you a taste of the practical challenges and scenarios you might encounter working with us.

At Clerkie Engineering, we value team members who:
  - Demonstrate strong independent problem solving skills, while also recognizing when to ask for help.
  - Deliver well written, thoroughly tested code, even under tight deadlines.
  - Have a passion for product development, combining exceptional engineering skills with a dedication to producing pixel-perfect layouts.

Your challenge is to build a simple payment form, enabling users to manage payments towards various accounts.

Here are your task requirements:
  - When a user updates the payment amount input or selects an account, individual account inputs should update with a prorated amount. This calculation will depend on the original balance of the account, other selected accounts, and the payment amount entered.
  - The total payment by a user should not exceed the cumulative balance of the selected accounts.
  - Users must not be able to pay more than the original balance of any single account.
  - At least one account must be selected for payment.

Watch out for the following:
  - Accurately handle rounding errors, especially with large numbers.
  - Ensure thorough validation of all input fields.
  - The form should be non-submittable if it's in an invalid state.

Additional Notes:
  - While you may use libraries for logic where necessary, we're eager to see your individual problem solving skills in action.
  - Frameworks like Tailwind are acceptable for styling. However, please avoid using comprehensive component frameworks.
  - Some details are intentionally left open ended. We're interested in your understanding of UX and adherence to industry best practices.

Good luck, and we look forward to seeing your submission!

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
