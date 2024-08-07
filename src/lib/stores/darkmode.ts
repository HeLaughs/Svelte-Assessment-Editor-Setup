import { writable } from 'svelte/store';

const storedDarkMode = typeof localStorage !== 'undefined' ? localStorage.getItem('theme') === 'dark' : false;

export const darkMode = writable<boolean>(storedDarkMode);

// Subscribe to changes and update localStorage
if (typeof localStorage !== 'undefined') {
  darkMode.subscribe(value => {
    localStorage.setItem('theme', value ? 'dark' : 'light');
  });
}