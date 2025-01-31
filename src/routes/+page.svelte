<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import Memory from '$lib/components/Memory.svelte';
	import Photos from '$lib/components/Photos.svelte';
	import Letter from '$lib/components/Letter.svelte';
	import { onMount } from 'svelte';
	import Lenis from '@studio-freight/lenis';
	import Logout from '$lib/components/Logout.svelte';
	import gsap from 'gsap/dist/gsap';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
		
		const lenis = new Lenis({
			duration: 1.2,
			easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
			orientation: 'vertical',
			smoothWheel: true,
			touchMultiplier: 2,
			wheelMultiplier: 1,
			gestureOrientation: 'vertical',
			infinite: false
		});

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	});
</script>

<main class="relative snap-y snap-mandatory">
	<Hero />
	<Memory />
	<Photos />
	<Letter />
	<Logout/>
</main>

<style lang="postcss">
	:global(html) {
		scroll-behavior: smooth;
		height: 100%;
		overflow-y: auto;
		overscroll-behavior-y: none;
	}

	:global(body) {
		overflow-x: hidden;
		overscroll-behavior-y: none;
	}
</style>
