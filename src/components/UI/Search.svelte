<script lang="ts">
    import { Icon } from "astro-iconset/svelte";

    let searchQuery: string = $state("");
    let showFuzzyOptions: boolean = $state(false);

    // toggle fuzzy options based on search query
    $effect(() => {
        if (searchQuery !== "") {
          showFuzzyOptions = true;
        } else {
          showFuzzyOptions = false;
        }
    })

</script>

<div class="w-full group flex border border-black/10 hover:border-black/40 duration-ui transition-all rounded-ui flex-col m-auto gap-4 font-ui">
    <div class="flex items-center bg-neutral-800 p-0 rounded-ui relative">
        <input bind:value={searchQuery} class="w-full m-0 px-4 p-ui outline-none text-ellipsis" placeholder="Search">
        <button class="group-hover:opacity-70 opacity-50 m-1 p-2 rounded-ui duration-ui transition-all hover:bg-white/12 text-[20px] flex gap-1">
            <Icon name="search"/>
        </button>
        
        {#if showFuzzyOptions}
            <div class="absolute z-10 top-12 rounded-b-ui w-full h-20 bg-neutral-800 p-ui flex gap-2 items-center">
                <h2 class="text-white/30">Search "{searchQuery}" in Mangas</h2>
                <span class="opacity-30">
                    <Icon name="link"/>
                </span>
            </div>
        {/if}
    </div>

</div>
