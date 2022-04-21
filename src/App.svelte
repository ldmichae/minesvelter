<script>
	import Square from './Square.svelte'
	import Stopwatch from './Stopwatch.svelte';

	export let edgeLen
	export let gameStarted = false
	export const activeText = "Start Game!"
	export const inactiveText = "Change Board"
	$: columnSize = `${screen.width * 0.33 / edgeLen}px`
	
</script>

<main>
	<h1>Minesvelter</h1>
	<h3>Set board size to generate game</h3>
	{#key gameStarted}
		{#if gameStarted}
			<Stopwatch/>
		{/if}
	{/key}
	<input type = "number" min = "3" max = "10" bind:value={edgeLen} disabled={gameStarted} />
	<button on:click={() => {gameStarted = !gameStarted}}>
		{#if gameStarted}
			Change Board
		{/if}
		{#if !gameStarted}
			Start Game!
		{/if}
	</button>
	<div class = "minefield" style="--colWidth: {columnSize}; --edges: {edgeLen}"> 
		{#key edgeLen}
			{#each {length: edgeLen ** 2} as _, i}
				{#if i === 5}
					<Square class = "square" hasBomb={true} inPlay={gameStarted}/>
				{/if}
				{#if i !== 5}
					<Square class = "square" hasBomb={false} inPlay={gameStarted}/>
				{/if}
			{/each}
		{/key}
	</div>
</main>

<style>	
	.minefield{
		display: grid;
		grid-template-columns: repeat(var(--edges), var(--colWidth));
		grid-template-rows: repeat(var(--edges), var(--colWidth));
	}
</style>