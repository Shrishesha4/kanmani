import { writable } from 'svelte/store';
import { browser } from '$app/environment';

function createCountdownStore() {
    const { subscribe, set } = writable({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    let interval: number;

    function start() {
        if (!browser) return;
        
        function update() {
            const now = new Date();
            const target = new Date('2024-02-14T00:00:00');
            target.setHours(0, 0, 0, 0);
            const diff = target.getTime() - now.getTime();
            
            if (diff > 0) {
                const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((diff % (1000 * 60)) / 1000);
                set({ days, hours, minutes, seconds });
            } else {
                set({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                stop();
            }
        }

        update();
        interval = window.setInterval(update, 1000);
    }

    function stop() {
        if (interval) window.clearInterval(interval);
    }

    return {
        subscribe,
        start,
        stop
    };
}

export const countdown = createCountdownStore();