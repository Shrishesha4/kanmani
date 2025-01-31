<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap/dist/gsap';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
		const tl = gsap.timeline();
		
		tl.from('.hero-heading', {
			y: 100,
			opacity: 0,
			duration: 1.2,
			ease: 'power4.out'
		})
		.from('.hero-description', {
			y: 50,
			opacity: 0,
			duration: 1,
			delay: 0.3
		})
		.from('.scroll-down', {
			y: -20,
			opacity: 0,
			duration: 0.8
		});
	});
</script>

<section class="relative h-screen w-full overflow-hidden bg-blue-50 snap-start snap-always">
	<div class="container mx-auto flex h-full items-center justify-center px-4">
		<div class="text-center">
			<h1 class="hero-heading text-6xl font-bold text-pink-500">Happy Valentine's Day</h1>
			<h1 class="hero-heading mb-6 text-6xl font-bold text-pink-500">Kanmani</h1>
			<p class="hero-description text-xl text-pink-400">Scroll Down...</p>
		</div>
	</div>
	<div class="scroll-down absolute bottom-8 left-[45%] -translate-x-1/2 animate-bounce">
		<i class="fa-solid fa-chevron-down text-3xl text-pink-300"></i>
	</div>
</section>