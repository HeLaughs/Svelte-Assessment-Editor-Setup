<script lang="ts">
    export let title: string;
  </script>
  
  <div class="mb-4">
    <label for="quizTitle" class="block mb-2 text-lg font-semibold">Quiz Title:</label>
    <input
      type="text"
      id="quizTitle"
      bind:value={title}
      class="w-full p-2 border rounded text-black"
      placeholder="Enter quiz title"
    />
  </div>
  