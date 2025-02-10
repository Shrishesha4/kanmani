import { writable } from 'svelte/store';
import { browser } from '$app/environment';

function createValentineStore() {
    const { subscribe, set } = writable(false);

    function checkAccess() {
        if (!browser) return false;
        const now = new Date();
        const valentinesDay = new Date('2024-02-14T00:00:00');
        return now >= valentinesDay;
    }

    return {
        subscribe,
        check: () => set(checkAccess())
    };
}

export const valentineAccess = createValentineStore();