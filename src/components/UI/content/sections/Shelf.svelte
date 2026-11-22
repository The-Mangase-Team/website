<!-- NEW CHAPTERS / CONTINUE READING -->

<script>
    import MangaWidget from "../Manga/Widget.svelte";
    
</script>

<div class="flex flex-col mb-10 gap-1">
    <div class="w-90 md:w-259 mx-auto box-border h-auto flex snap-x snap-mandatory overflow-x-auto overflow-y-hidden gap-1">
        <MangaWidget />
        <MangaWidget />
        <MangaWidget />
        <MangaWidget />
        <MangaWidget />
    </div>
    
    <!-- See More -->
    <div class="w-full flex-1">
        <button class="px-2 py-1 rounded-xl cursor-pointer border material-glass bg-black/15">See More</button>
    </div>
</div>