export const correctPassword = 'whysoserious';
export function isAuthenticated(): boolean {
	if (typeof window === 'undefined') return false;
	return localStorage.getItem('isAuthenticated') === 'true';
}