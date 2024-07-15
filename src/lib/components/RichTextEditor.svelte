<script lang="ts">
    import Quill from 'quill';
    import { onMount } from 'svelte';
  
    export let content = '';
    export let placeholder = '';
  
    let quill: Quill;
    let element: HTMLDivElement;
  
    onMount(() => {
      quill = new Quill(element, {
        theme: 'snow',
        placeholder: placeholder,
      });
  
      quill.root.innerHTML = content;
  
      quill.on('text-change', () => {
        content = quill.root.innerHTML;
      });
  
      return () => {
        quill.off('text-change');
      };
    });
  
    $: if (quill && content !== quill.root.innerHTML) {
      quill.root.innerHTML = content;
    }
  </script>
  
  <div bind:this={element}></div>