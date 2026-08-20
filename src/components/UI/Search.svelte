<script lang="ts">
    import { Icon} from "astro-iconset/svelte";

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

<div class="w-full flex flex-col gap-4 font-ui">
    <div class="flex items-center bg-neutral-800 p-0 rounded-ui relative">
        <input bind:value={searchQuery} class="w-full m-0 p-ui outline-none" placeholder="Search for Manga, Webcomics and more..">
        <span class="group-hover:opacity-100 opacity-100 mx-4 text-[20px]">
            <Icon name="search"/>
        </span>
        {#if showFuzzyOptions}
            <div class="absolute z-10 top-12 rounded-b-ui w-full h-20 bg-neutral-800 p-ui flex gap-2 items-center">
                <h2 class="text-white/30">Search "{searchQuery}" in Mangas</h2>
                <span class="opacity-30">
                    <Icon name="link"/>
                </span>
            </div>
        {/if}
    </div>
        
    <div class="flex gap-1 justify-center z-1">
        <a href="/home" class="material-glass text-center shrink-0 flex p-2 select-none">browse library</a>
        <a href="/create" class="material-glass text-center shrink-0 flex p-2 select-none">publish comics</a>
    </div>
</div>
