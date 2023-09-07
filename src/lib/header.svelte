<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms'

	let loading = false

	const handleSignOut: SubmitFunction = () => {
		loading = true
		return async ({ update }) => {
			loading = false
			update()
		}
	}
</script>

<div class="fixed z-30 top-0 right-0 w-screen bg-white flex justify-between items-center p-3">
	<div>
		<img class="w-32" src="/IFBC 2020 small.webp" />
	</div>

	<div class="flex flex-row gap-6">
		<a href="/exhibition" class="font-semibold">
			Exhibition
		</a>
		<a href="/conference" class="font-semibold">
			Conference
		</a>
		<a href="/information" class="font-semibold">
			Information
		</a>
	</div>

	<div>
		<form method="post" action="?/signout" use:enhance={handleSignOut}>
			<button class="button font-semibold px-4" disabled={loading}>
				Logout
			</button>
		</form>
	</div>
</div>