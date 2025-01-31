<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap/dist/gsap';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';
	import SplitType from 'split-type';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
		
		const title = document.querySelector<HTMLElement>('.letter-heading');
		const letterText = document.querySelectorAll<HTMLElement>('.animate-text');

		if (title) {
			gsap.from(title, {
				scrollTrigger: {
					trigger: title,
					start: 'top bottom-=100',
					toggleActions: 'restart pause reverse pause'
				},
				y: 50,
				opacity: 0,
				duration: 0.8
			});
		}

		letterText.forEach(text => {
			const splitText = new SplitType(text as HTMLElement, { types: 'chars' });
			
			gsap.from(splitText.chars, {
				scrollTrigger: {
					trigger: text,
					start: 'top bottom-=50',
					toggleActions: 'restart pause reverse pause'
				},
				opacity: 0,
				y: 20,
				stagger: 0.02,
				duration: 0.6,
				ease: 'power4.out'
			});
		});
	});
</script>

<section class="letter-section relative min-h-screen bg-gradient-to-br from-pink-50 to-blue-50 py-20 snap-start snap-always">
	<div class="absolute inset-0 overflow-hidden">
		<div class="hearts-bg absolute inset-0 opacity-10">
			{#each Array(20) as _, i}
				<i class="fa-solid fa-heart absolute text-pink-300" style="left: {Math.random() * 100}%; top: {Math.random() * 100}%; font-size: {8 + Math.random() * 16}px; animation: pulse {2 + Math.random() * 3}s infinite;"></i>
			{/each}
		</div>
	</div>

	<div class="container relative mx-auto px-4">
		<h2 class="letter-heading mb-16 text-center text-4xl font-bold text-pink-600">My Heart to Yours</h2>
		<div class="letter-content mx-auto max-w-2xl rounded-lg bg-white/80 p-8 shadow-xl backdrop-blur-sm">
			<div class="prose prose-lg prose-pink mx-auto">
				<p class="animate-text first-letter:float-left first-letter:mr-3 first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:text-pink-500">
					My dearest Kanmani,
				</p>
				<p class="animate-text mb-4">
					As I write this letter, my heart overflows with the countless memories we've created together. Each moment with you feels like a beautiful dream come true, and I find myself falling more in love with you every single day.
                    <br>Your smile brightens my darkest days, and your love gives me the strength to face any challenge. You're not just my partner; you're my best friend, my confidante, and my greatest blessing.
                    <br>I promise to cherish every moment with you, to hold your hand through life's ups and downs, and to love you more with each passing day. You make my world complete, and I'm incredibly grateful to have you in my life.
				</p>
				<p class="animate-text mb-4">
				</p>
				<p class="animate-text mb-4">
				</p>
				<p class="animate-text text-right font-serif text-lg">
					Forever yours,<br />
					<span class="mt-2 block text-xl font-semibold text-pink-600">Shri</span>
				</p>
			</div>
		</div>
	</div>
</section>

<style>
	@keyframes pulse {
		0%, 100% {
			transform: scale(1);
			opacity: 0.3;
		}
		50% {
			transform: scale(1.2);
			opacity: 0.6;
		}
	}

	.hearts-bg {
		filter: blur(1px);
	}
</style>