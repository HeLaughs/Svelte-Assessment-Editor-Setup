<script lang="ts">
    import MediaUpload from './MediaUpload.svelte';
    import RichTextEditor from './RichTextEditor.svelte';
  
    export let questions: Array<{ id: number, text: string, options: Array<{ text: string, score: number }>, score: number, media: string | null }>;
  
    function addOption(questionIndex: number) {
      questions[questionIndex].options = [
        ...questions[questionIndex].options,
        { text: '', score: 0 }
      ];
    }
  
    function removeQuestion(index: number) {
      questions = questions.filter((_, i) => i !== index);
    }
  
    function removeOption(questionIndex: number, optionIndex: number) {
      questions[questionIndex].options = questions[questionIndex].options.filter((_, i) => i !== optionIndex);
    }
  
    function handleMediaUpload(questionIndex: number, mediaUrl: string) {
      questions[questionIndex].media = mediaUrl;
    }
  </script>
  
  <div class="space-y-4">
    {#each questions as question, questionIndex (question.id)}
      <div class="border p-4 rounded">
        <RichTextEditor bind:content={question.text} placeholder="Enter question" />
        
        <div class="mb-2">
          <label for="questionScore" class="block">Question Score:</label>
          <input
            type="number"
            id="questionScore"
            bind:value={question.score}
            class="border p-2 rounded"
          />
        </div>
        
        <MediaUpload on:upload={(event) => handleMediaUpload(questionIndex, event.detail.url)} />
        
        {#if question.media}
          <img src={question.media} alt="Question media" class="mt-2 max-w-full h-auto" />
        {/if}
        
        <div class="space-y-2 mt-4">
          {#each question.options as option, optionIndex}
            <div class="flex items-center space-x-2">
              <RichTextEditor bind:content={option.text} placeholder="Option text" />
              <input
                type="number"
                bind:value={option.score}
                class="w-20 p-2 border rounded"
                placeholder="Score"
              />
              <button on:click={() => removeOption(questionIndex, optionIndex)} class="bg-red-500 text-white px-2 py-1 rounded">
                Remove
              </button>
            </div>
          {/each}
        </div>
        
        <button on:click={() => addOption(questionIndex)} class="bg-blue-500 text-white px-4 py-2 rounded mt-2">
          Add Option
        </button>
        
        <button on:click={() => removeQuestion(questionIndex)} class="bg-red-500 text-white px-4 py-2 rounded mt-2 ml-2">
          Remove Question
        </button>
      </div>
    {/each}
  </div>
  