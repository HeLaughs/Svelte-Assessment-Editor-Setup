<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import Papa from 'papaparse';
  
    const dispatch = createEventDispatcher();
  
    function handleFileUpload(event: Event) {
      const input = event.target as HTMLInputElement;
      const file = input.files?.[0];
      if (file) {
        Papa.parse(file, {
          complete: (results) => {
            const importedQuestions = (results.data as string[][]).map((row) => ({
              id: Date.now() + Math.random(),
              text: row[0] || '',
              options: row.slice(1, -1).map((option, index) => ({
                text: option,
                score: parseInt(row[row.length - 1]?.split(',')[index] || '0') || 0
              })),
              score: row[row.length - 1]?.split(',').reduce((acc, curr) => acc + parseInt(curr), 0) || 0,
              media: null
            }));
            dispatch('import', importedQuestions);
          }
        });
      }
    }
  </script>
  
  <div class="mb-4">
    <label for="bulkImport" class="block mb-2">Bulk Import Questions (CSV):</label>
    <input type="file" id="bulkImport" accept=".csv" on:change={handleFileUpload} class="border p-2 rounded" />
  </div>