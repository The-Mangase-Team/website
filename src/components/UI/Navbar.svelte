<script>
    import Icon from "astro-iconset/svelte";
    import Search from "./Search.svelte";
</script>

<main class="flex items-center bg-black/50 p-ui w-full border-b-white/20">
    <div class="mr-auto px-ui">
        <a href="/" class=" text-left w-fit">
            <Icon name="m." />
        </a>
    </div>
    
    <div class="m-auto w-50 md:w-75 px-ui">
        <Search />
    </div>

    <div class="ml-auto px-ui">
        a
    </div>
</main>