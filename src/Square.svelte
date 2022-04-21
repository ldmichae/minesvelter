<script>
    import { tick} from 'svelte';
    export let hasBomb
    export let searched = false

</script>


<main>
    <div class = "square" on:click={() => { searched = true}}>
        {#if searched === true && hasBomb === true }
            X
        {/if}
        {#if searched === true && hasBomb === false}
            O
        {/if}
    </div>
</main>


<style>
    .square{
        height: 100%;
        width: 100% ;
		border: 1px;
		border-color: black;
		border-style: solid;
        cursor: pointer;
        display: grid;
        align-items: center;
        justify-self: center;
        text-align: center;
	}
</style>