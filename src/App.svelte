<script>
	export let edgeLen
	export let inputDisabled = false
	export const activeText = "Start Game!"
	export const inactiveText = "Change Board"
	$: columnSize = `${screen.width * 0.33 / edgeLen}px`
</script>

<main>
	<h1>Hello!</h1>
	<input type = "number" min = "3" max = "10" bind:value={edgeLen} disabled={inputDisabled}>
	<button on:click={() => {inputDisabled = !inputDisabled}}>
		{#if inputDisabled}
			Change Board
		{/if}
		{#if !inputDisabled}
			Start Game!
		{/if}
	</button>
	<div class = "minefield" style="--colWidth: {columnSize}; --edges: {edgeLen}"> 
		{#each {length: edgeLen ** 2} as _, i}
			<div class="patch">{i+1}</div>
		{/each}
	</div>
</main>

<style>	
	.minefield{
		display: grid;
		grid-template-columns: repeat(var(--edges), var(--colWidth));
		grid-template-rows: repeat(var(--edges), var(--colWidth));
	}
	.patch{
		border: 1px;
		border-color: black;
		border-style: solid;
	}
</style>