<script lang="ts">
    export let quiz: { questions: Array<{ text: string, score: number }> };
  
    let grades: { [key: number]: number } = {};
  
    function gradeQuestion(questionIndex: number, grade: number) {
      grades[questionIndex] = grade;
    }
  
    function submitGrades() {
      console.log('Submitted grades:', grades);
      // Here you would typically send the grades to a server
    }
  </script>
  
  <div class="mt-8">
    <h2 class="text-2xl font-bold mb-4">Tutor Grading</h2>
    {#each quiz.questions as question, index}
      <div class="mb-4">
        <h3 class="font-semibold">{question.text}</h3>
        <input
          type="number"
          bind:value={grades[index]}
          max={question.score}
          class="border p-2 rounded"
          placeholder="Grade"
        />
        <span class="ml-2">/ {question.score}</span>
      </div>
    {/each}
    <button on:click={submitGrades} class="bg-green-500 text-white px-4 py-2 rounded">
      Submit Grades
    </button>
  </div>