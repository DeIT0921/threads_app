import { SignUp } from "@clerk/nextjs";
import { dark } from '@clerk/themes';

export default function Page() {
	return (
		<SignUp
			appearance={{
				baseTheme: dark,
				elements: {
					formButtonPrimary: 'bg-primary-500 hover:bg-primary-600',
				}
			}}
		/>
	)
}