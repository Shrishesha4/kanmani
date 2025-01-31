<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { isAuthenticated } from '$lib/utils/auth';

	onMount(() => {
		if (!isAuthenticated() && $page.url.pathname !== '/login') {
			goto('/login');
		}
	});
</script>

<slot />
