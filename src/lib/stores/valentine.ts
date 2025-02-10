import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export const check_date = '2025-02-14T00:00:00';

function createValentineStore() {
    const { subscribe, set } = writable(false);

    function checkAccess() {
        if (!browser) return false;
        const now = new Date().getTime();
        const valentinesDay = new Date(check_date).getTime();
        return now >= valentinesDay;
    }

    return {
        subscribe,
        check: () => {
            const result = checkAccess();
            set(result);
            return result;
        }
    };
}

export const valentineAccess = createValentineStore();