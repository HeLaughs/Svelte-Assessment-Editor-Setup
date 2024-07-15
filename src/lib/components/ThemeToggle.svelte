<script lang="ts">
    import { onMount } from 'svelte';
    import type { Writable } from 'svelte/store';
  
    export let darkMode: Writable<boolean>;
  
    let checked = false;
  
    onMount(() => {
      const unsubscribe = darkMode.subscribe(value => {
        checked = value;
      });
  
      return unsubscribe;
    });
  
    function toggleTheme() {
      darkMode.update(value => !value);
      localStorage.setItem('theme', checked ? 'light' : 'dark');
    }
  </script>
  
  <label class="switch flex items-center cursor-pointer">
    <input type="checkbox" bind:checked on:change={toggleTheme} class="sr-only">
    <div class="relative w-10 h-4 bg-gray-400 rounded-full">
      <div class="dot absolute left-0 top-[-3px] w-5 h-5 bg-white rounded-full shadow transition" class:translate-x-6={checked}></div>
    </div>
    <div class="ml-3 text-gray-700 font-medium">
      {checked ? 'Dark Mode' : 'Light Mode'}
    </div>
  </label>
  
  <style>
    .dot {
      transition: transform 0.3s ease-in-out;
    }
  </style>