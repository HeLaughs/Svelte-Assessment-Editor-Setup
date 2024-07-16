<script lang="ts">
    import { writable } from 'svelte/store';
    import { dndzone } from 'svelte-dnd-action';
    import QuizTitle from '$lib/components/QuizTitle.svelte';
    import QuestionList from '$lib/components/QuestionList.svelte';
    import ThemeToggle from '$lib/components/ThemeToggle.svelte';
    import BulkImport from '$lib/components/BulkImport.svelte';
    import TutorGrading from '$lib/components/TutorGrading.svelte';
    import RealtimeReport from '$lib/components/RealtimeReport.svelte';
    import { onMount } from 'svelte';
  
    let darkMode = writable(false);
  
    onMount(() => {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') {
        darkMode.set(true);
      }
    });
  
    $: if (typeof document !== 'undefined') {
      document.body.classList.toggle('dark', $darkMode);
    }
  
    let quiz = {
      title: '',
      questions: [],
      targetScore: 0,
      submissionDate: '',
    };
  
    function handleQuestionDrop(event CustomEvent<{ items: any[] }>) {
      quiz.questions = event.detail.items;
    }
    quiz.questions = [

    function addQuestion() {
      quiz.questions = [
        ...quiz.questions,
        { id: Date.now(), text: '', options: [], score: 0, media: null }
      ];
    }
    
    function saveQuiz() {
      // Implement save functionality
      console.log('Saving quiz:', quiz);
    }
  
    function handleBulkImport(event: CustomEvent<any[]>) {
      quiz.questions = [...quiz.questions, ...event.detail];
    }]

  <main class="container mx-auto p-4">
    <ThemeToggle bind:darkMode />
    
    <QuizTitle bind:title={quiz.title} />
    
    <BulkImport on:import={handleBulkImport} />
    
    <div use:dndzone={{items: quiz.questions}} on:consider={handleQuestionDrop} on:finalize={handleQuestionDrop}>
      <QuestionList bind:questions={quiz.questions} />
    </div>
    
    <button on:click={addQuestion} class="bg-blue-500 text-white px-4 py-2 rounded mt-4">
      Add Question
    </button>
    
    <div class="mt-4">
      <label for="targetScore" class="block">Target Score:</label>
      <input type="number" id="targetScore" bind:value={quiz.targetScore} class="border p-2 rounded">
    </div>
    
    <div class="mt-4">
      <label for="submissionDate" class="block">Submission Date:</label>
      <input type="date" id="submissionDate" bind:value={quiz.submissionDate} class="border p-2 rounded">
    </div>
    
    <button on:click={saveQuiz} class="bg-green-500 text-white px-4 py-2 rounded mt-4">
      Save Quiz
    </button>
  
    <TutorGrading {quiz} />
    
    <RealtimeReport {quiz} />
  </main>
  
  <style lang="postcss">
    :global(body) {
      @apply bg-white text-black transition-colors duration-200;
    }
    :global(body.dark) {
      @apply bg-gray-900 text-white;
    }
  </style>



