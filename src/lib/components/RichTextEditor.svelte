<script>
  import { onMount } from 'svelte';
  let quill;

  onMount(async () => {
    if (typeof window !== 'undefined') {
      const Quill = (await import('quill')).default;
      quill = new Quill('#editor', {
        theme: 'snow'
      });
    }
  });
</script>

<div id="editor">
  <!-- This div will become the editor -->
</div>

<style>
  @import 'quill/dist/quill.snow.css';
</style>