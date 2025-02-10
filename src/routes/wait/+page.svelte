<script lang="ts">
    import { onMount } from 'svelte';
    import gsap from 'gsap/dist/gsap';
    import { browser } from '$app/environment';
    import { logout } from '$lib/utils/logout';
    import { check_date } from '$lib/stores/valentine';

    onMount(() => {
        if (browser) {
            gsap.from('.message-container', {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: 'power4.out'
            });
        }
    });
</script>

<div class="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-pink-50 to-blue-50">
    <!-- svelte-ignore a11y_consider_explicit_label -->
    <button
        on:click={logout}
        class="absolute right-4 top-4 rounded-full bg-white/30 p-3 text-pink-500 backdrop-blur-sm transition-all hover:bg-white/50 hover:text-pink-600"
    >
        <i class="fa-solid fa-sign-out-alt"></i>
    </button>

    <div class="message-container text-center">
        <h1 class="mb-8 text-4xl font-bold text-pink-600">Munthiri Kotta</h1>
        <p class="mb-2 text-xl text-pink-500">This special message will be available on Valentine's Day 💝</p>
        
        <div class="mt-2">
            <i class="fa-solid fa-heart animate-pulse text-6xl text-pink-500"></i>
        </div>

        <p class="mt-4 text-lg text-pink-400">
            {new Date(check_date).toLocaleDateString('en-GB', {
                day: '2-digit',
                month: '2-digit',
                year: '2-digit'
            })}
            <br />
            {new Date(check_date).toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: '2-digit',
                hour12: true
            })}
        </p>
    </div>

    <div class="absolute inset-0 -z-10 overflow-hidden">
        {#each Array(12) as _, i}
            <div
                class="absolute text-pink-400/10"
                style="left: {Math.random() * 100}%; top: {Math.random() * 100}%; animation: float {3 + Math.random() * 4}s ease-in-out infinite {Math.random() * 5}s;"
            >
                <i class="fa-solid fa-heart text-{2 + Math.floor(Math.random() * 4)}xl"></i>
            </div>
        {/each}
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
</style>