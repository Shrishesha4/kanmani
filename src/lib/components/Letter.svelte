<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap/dist/gsap';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';
	import { letter } from '$lib/stores/content';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
		
		const title = document.querySelector<HTMLElement>('.letter-heading');
		const paragraphs = gsap.utils.toArray<HTMLElement>('.animate-text');

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

		paragraphs.forEach((para, index) => {
			const words = para.textContent?.split(' ') || [];
			para.textContent = '';
			
			words.forEach((word) => {
				const span = document.createElement('span');
				span.textContent = word + ' ';
				span.style.display = 'inline-block';
				span.className = 'word-span';
				para.appendChild(span);
			});

			gsap.from(para.children, {
				scrollTrigger: {
					trigger: para,
					start: 'top bottom-=50',
					toggleActions: 'restart pause reverse pause'
				},
				opacity: 0,
				x: -20,
				duration: 1.5,
				stagger: {
					each: 0.05,
					from: "start"
				},
				ease: 'power2.out',
                delay: index === paragraphs.length - 1 ? 7.0 : 0
			});
		});
	});
</script>

<section class="letter-section relative min-h-screen bg-gradient-to-br from-pink-100 to-blue-100 py-20 snap-start snap-always backdrop-blur-md">
    <div class="absolute inset-0 overflow-hidden">
        <div class="hearts-bg absolute inset-0 opacity-40">
            {#each Array(40) as _, i}
                <i 
                    class="fa-solid fa-heart absolute text-pink-400" 
                    style="left: {Math.random() * 100}%; top: {Math.random() * 100}%; font-size: {12 + Math.random() * 20}px; animation: pulse {2 + Math.random() * 4}s infinite {Math.random() * 2}s;"
                ></i>
            {/each}
        </div>
        <div class="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent backdrop-blur-[2px]"></div>
    </div>

	<div class="container relative mx-auto px-4">
		<h2 class="letter-heading mb-16 text-center text-4xl font-bold text-pink-600">My Heart to Yours</h2>
		<div class="letter-content mx-auto max-w-2xl rounded-lg bg-white/80 p-8 shadow-xl backdrop-blur-sm">
			<div class="prose prose-lg prose-pink mx-auto">
				<p class="animate-text first-letter:float-left first-letter:mr-3 first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:text-pink-500">
					{letter.to},
				</p>
				<p class="animate-text mb-4">
					{letter.para}
				</p>
				<p class="animate-text mb-4">
				</p>
				<p class="animate-text mb-4">
				</p>
				<p class="animate-text text-right font-serif text-lg">
					Forever yours, <br/>
					<span class="mt-6 block text-3xl font-bold text-pink-600 tracking-wide">Shrishesha</span>
				</p>
			</div>
		</div>
	</div>
</section>

<style>
    @keyframes pulse {
        0%, 100% {
            transform: scale(1);
            opacity: 0.4;
        }
        50% {
            transform: scale(1.2);
            opacity: 0.8;
        }
    }


	:global(.word-span) {
		display: inline-block;
		padding: 0 2px;
		transform-style: preserve-3d;
		backface-visibility: hidden;
		color: rgb(98, 75, 0);
	}

	.letter-content {
		perspective: 1000px;
	}

    .hearts-bg {
        filter: blur(1.5px);
    }
</style>