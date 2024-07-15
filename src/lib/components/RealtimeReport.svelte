<script lang="ts">
    import { onMount } from 'svelte';
    import * as d3 from 'd3';
  
    export let quiz: { questions: Array<{ score: number }> };
  
    let svg: SVGSVGElement;
  
    onMount(() => {
      const width = 400;
      const height = 300;
      const margin = { top: 20, right: 20, bottom: 30, left: 40 };
  
      const x = d3.scaleBand()
        .range([margin.left, width - margin.right])
        .padding(0.1);
  
      const y = d3.scaleLinear()
        .range([height - margin.bottom, margin.top]);
  
      const xAxis = (g: d3.Selection<SVGGElement, unknown, null, undefined>) => g
        .attr("transform", `translate(0,${height - margin.bottom})`)
        .call(d3.axisBottom(x).tickSizeOuter(0));
  
      const yAxis = (g: d3.Selection<SVGGElement, unknown, null, undefined>) => g
        .attr("transform", `translate(${margin.left},0)`)
        .call(d3.axisLeft(y))
        .call(g => g.select(".domain").remove());
  
      const svgElement = d3.select(svg);
  
      function update(data: Array<{ question: string, score: number }>) {
        x.domain(data.map(d => d.question));
        y.domain([0, d3.max(data, d => d.score) || 0]).nice();
  
        svgElement.select<SVGGElement>(".x-axis").call(xAxis);
        svgElement.select<SVGGElement>(".y-axis").call(yAxis);
  
        svgElement.select(".plot-area")
          .selectAll(".bar")
          .data(data)
          .join("rect")
          .attr("class", "bar")
          .attr("x", d => x(d.question) || 0)
          .attr("width", x.bandwidth())
          .attr("y", d => y(d.score))
          .attr("height", d => y(0) - y(d.score));
      }
  
      const data = quiz.questions.map((q, i) => ({ question: `Q${i+1}`, score: q.score }));
      update(data);
    });
  </script>
  
  <div class="mt-8">
    <h2 class="text-2xl font-bold mb-4">Realtime Report</h2>
    <svg bind:this={svg} width="400" height="300">
      <g class="plot-area" />
      <g class="x-axis" />
      <g class="y-axis" />
    </svg>
  </div>