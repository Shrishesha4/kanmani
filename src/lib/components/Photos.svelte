<script lang="ts">
    import { photos } from '$lib/stores/content';
	import { onMount } from 'svelte';
	import gsap from 'gsap/dist/gsap';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
		
		const photos = gsap.utils.toArray<HTMLElement>('.photo-item');
		const title = document.querySelector<HTMLElement>('.gallery-heading');

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

		photos.forEach((photo, index) => {
			gsap.from(photo, {
				scrollTrigger: {
					trigger: photo,
					start: 'top bottom-=50',
					toggleActions: 'restart pause reverse pause'
				},
				scale: 0.8,
				opacity: 0,
				duration: 0.4,
				delay: index * 0.1,
				ease: 'back.out(1.7)'
			});
		});
	});
</script>

<section class="photos-section min-h-screen bg-blue-50 py-20 snap-start snap-always">
    <div class="container mx-auto px-4">
        <h2 class="gallery-heading mb-16 text-center text-4xl font-bold text-pink-600">Our Photo Gallery</h2>
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {#each photos as photo, i}
                <div class="photo-item group relative aspect-square overflow-hidden rounded-lg shadow-lg transition-all hover:z-10 hover:scale-105">
                    <img
                        src={photo.imageUrl}
                        alt={photo.title}
                        class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <div class="absolute bottom-4 left-4 right-4">
                            <h3 class="text-xl font-semibold text-yellow-100">{photo.title}</h3>
                            <p class="text-yellow-200">{photo.description}</p>
                            <p class="mt-1 text-sm text-yellow-300">{photo.date}</p>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>