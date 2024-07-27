<script lang="ts">
  import { darkMode } from '$lib/stores/darkmode';
  
  function toggleTheme() {
    darkMode.update(value => !value);
  }
  </script>
  
  <button on:click={toggleTheme} class="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
    {#if $darkMode}
      🌙
    {:else}
      ☀️
    {/if}
  </button>