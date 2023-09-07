<script lang="ts">
  import { enhance, applyAction } from '$app/forms'
  export let form

  let backgroundVideo
  let transitionVideo
  let content

  let loading = false

  const handleLogin: SubmitFunction = () => {
    loading = true

    return async ({ result }) => {
      loading = false

      if (result.type === 'success') {
        backgroundVideo.style.display = 'none'
        content.style.display = 'none'
        transitionVideo.play()

        window.setTimeout(() => {
          window.location.href = '/lobby'
        }, 3600)
      }
    }
  }
</script>

<video bind:this={transitionVideo} muted poster="/venue/backgroundPosterDesktop.webp" class="fixed left-0 right-0 bottom-0 w-screen h-screen object-cover">
  <source src="/venue/transitionVideoDesktop.mp4" type="video/mp4">
</video>

<video bind:this={backgroundVideo} autoplay muted loop poster="/venue/backgroundPosterDesktop.webp" class="fixed left-0 right-0 bottom-0 w-screen h-screen bg-cover object-cover">
  <source src="/venue/backgroundVideoDesktop.mp4" type="video/mp4">
</video>

<div bind:this={content} class="fixed w-screen h-screen flex justify-center items-center">
  <div class="bg-white w-80 p-6 rounded-md">
    <div class="text-2xl font-bold text-bold text-neutral-900 pb-8">
      Virtual Expo
    </div>

    <form class="space-y-6" action="?/login" method="POST"
      use:enhance={handleLogin}
    >
      <div>
        <label for="email" class="block text-sm font-medium leading-6 text-neutral-900">Email address</label>
        <div class="mt-2">
          <input disabled={loading} id="email" name="email" type="email" autocomplete="email" value={form?.email ?? 'demo@nickyirawan.id'} required class="block w-full rounded-md border-0 py-1.5 px-2 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-900 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6">
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label for="password" class="block text-sm font-medium leading-6 text-neutral-900">Password</label>
        </div>
        <div class="mt-2">
          <input disabled={loading} id="password" name="password" type="password" value={form?.email ?? '12345678'} autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 px-2 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6">
        </div>
      </div>

      <div>
        <button disabled={loading} type="submit" class="flex w-full justify-center rounded-md bg-blue-600 px-3 py-4 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:bg-neutral-800 disabled:text-white">
          {loading ? 'Loading...' : 'Sign in'}
        </button>
      </div>
    </form>
  </div>
</div>