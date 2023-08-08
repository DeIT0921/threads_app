import { SignIn } from "@clerk/nextjs";
import { dark } from '@clerk/themes';
import { colors } from "@clerk/themes/dist/clerk-js/src/ui/foundations/colors";
import { text } from "stream/consumers";

export default function Page() {
	return (
		<SignIn
			appearance={{
				baseTheme: dark,
				elements: {
					formButtonPrimary: 'bg-primary-500 hover:bg-primary-600',
				}
			}}
		/>
	)
}