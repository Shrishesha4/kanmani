<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import gsap from 'gsap/dist/gsap';

	let password = '';
	let error = '';
	const correctPassword = 'whysoserious?';

	function handleSubmit() {
		if (password === correctPassword) {
			gsap.to('.login-card', {
				scale: 1.1,
				opacity: 0,
				duration: 0.8,
				ease: 'back.in(1.7)',
				onComplete: () => {
					localStorage.setItem('isAuthenticated', 'true');
					goto('/');
				}
			});
		} else {
			error = 'Incorrect password. Please try again.';
			password = '';
			
			const card = document.querySelector('.login-card');
			if (card) {
				const timeline = gsap.timeline();
				timeline.to(card, {
					x: -10,
					duration: 0.1,
					ease: 'power2.out'
				})
				.to(card, {
					x: 10,
					duration: 0.1,
					ease: 'power2.out'
				})
				.to(card, {
					x: -10,
					duration: 0.1,
					ease: 'power2.out'
				})
				.to(card, {
					x: 10,
					duration: 0.1,
					ease: 'power2.out'
				})
				.to(card, {
					x: 0,
					duration: 0.1,
					ease: 'power2.out'
				});
			}
		}
	}

	onMount(() => {
		if (localStorage.getItem('isAuthenticated') === 'true') {
			goto('/');
		}

		gsap.from('.login-card', {
			y: 50,
			opacity: 0,
			duration: 1,
			ease: 'power4.out'
		});

		gsap.from('.floating-hearts', {
			y: 100,
			opacity: 0,
			stagger: 0.2,
			duration: 1.5,
			ease: 'power2.out'
		});
	});
</script>

<!-- svelte-ignore element_invalid_self_closing_tag -->
<div class="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-pink-50 to-yellow-50 backdrop-blur-3xl">
	<div class="absolute inset-0 -z-10 backdrop-blur-xl"></div>
	
	<div class="absolute inset-0 overflow-hidden">
		{#each Array(12) as _, i}
			<div
				class="floating-hearts absolute text-pink-400/20"
				style="left: {Math.random() * 100}%; top: {Math.random() * 100}%; animation: float {3 + Math.random() * 4}s ease-in-out infinite {Math.random() * 5}s;"
			>
				<i class="fa-solid fa-heart text-{2 + Math.floor(Math.random() * 4)}xl"></i>
			</div>
		{/each}
	</div>

	<div class="login-card relative w-full max-w-md rounded-[2rem] bg-white/60 p-10 shadow-xl backdrop-blur-lg">
		<div class="absolute -top-8 left-1/2 -translate-x-1/2 transform text-5xl">
			<i class="fa-solid fa-heart text-pink-500 drop-shadow-lg"></i>
		</div>
		<h1 class="mb-6 text-center text-3xl font-bold text-blue-600">Welcome, My Love</h1>
		<form on:submit|preventDefault={handleSubmit} class="space-y-6">
			<input
				type="text"
				id="username"
				name="username"
				autocomplete="username"
				class="hidden"
				aria-hidden="true"
				tabindex="-1"
			/>
			<div>
				<label for="password" class="block text-sm font-medium text-gray-700"></label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    bind:value={password}
                    class="mt-1 block w-full rounded-md border border-pink-200 bg-white/50 px-3 py-2 shadow-sm backdrop-blur-sm transition-all focus:border-pink-500 focus:outline-none focus:ring-pink-500"
                    required
                    autocomplete="new-password"
                />
			</div>
			{#if error}
				<p class="text-sm text-pink-600">{error}</p>
			{/if}
			<button
				type="submit"
				class="group relative w-full overflow-hidden rounded-md bg-gradient-to-r from-pink-500 to-blue-500 px-4 py-2 text-white transition-all hover:from-pink-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
			>
				<span class="relative z-10">Begin Our Journey</span>
				<div class="absolute inset-0 -z-10 bg-gradient-to-r from-blue-500 to-pink-500 opacity-0 transition-opacity group-hover:opacity-100" />
			</button>
		</form>
	</div>
</div>

<style>
	@keyframes float {
		0%, 100% {
			transform: translateY(0) rotate(0deg);
		}
		50% {
			transform: translateY(-20px) rotate(10deg);
		}
	}

	.floating-hearts {
		pointer-events: none;
	}
</style>