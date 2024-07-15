<script lang="ts">
    import { createEventDispatcher } from 'svelte';
  
    const dispatch = createEventDispatcher();
  
    function handleFileUpload(event: Event) {
      const input = event.target as HTMLInputElement;
      const file = input.files?.[0];
      if (file) {
        const url = URL.createObjectURL(file);
        dispatch('upload', { url });
      }
    }
  </script>
  
  <div class="mt-2">
    <label for="mediaUpload" class="block mb-2">Upload Media:</label>
    <input type="file" id="mediaUpload" accept="image/*,video/*" on:change={handleFileUpload} class="border p-2 rounded" />
  </div>