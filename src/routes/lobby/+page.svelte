<script lang="ts">
	import Header from '$lib/header.svelte'
</script>

<Header />

<video autoplay muted loop poster="/lobby/backgroundPosterDesktop.webp" class="fixed left-0 right-0 bottom-0 w-screen h-screen bg-cover object-cover">
  <source src="/lobby/backgroundVideoDesktop.mp4" type="video/mp4">
</video>

<div class="fixed w-screen h-screen">
	<a href="/exhibition" class="absolute cursor-pointer w-28 h-28 top-[40%] left-[calc(50%-12rem)]"></a>
	<a href="/conference" class="absolute cursor-pointer w-28 h-28 top-[40%] right-[calc(50%-12rem)]"></a>
	<a href="/information" class="absolute cursor-pointer w-32 h-32 top-[55%] left-[calc(50%-4rem)]"></a>
</div>
