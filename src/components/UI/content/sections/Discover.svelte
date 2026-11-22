<script lang="ts">
    // Manga Widget
    import MangaWidget from '../Manga/Widget.svelte'
</script>

<main class="flex flex-col gap-1">

    <select class="w-fit select-none text-xl md:text-2xl outline-0">
        <option class="">New Additions</option>
        <option class="">Most Popular</option>
    </select>
    
    <section
      class="w-90 md:w-259 mx-auto flex flex-row gap-1
             overflow-x-auto snap-x snap-mandatory
             md:flex-wrap md:overflow-visible md:snap-none
             *:shrink-0 *:snap-start">
        <MangaWidget />
        <MangaWidget />
        <MangaWidget />
        <MangaWidget />
        <MangaWidget />
        <MangaWidget />
        <MangaWidget />
        <MangaWidget />
        <MangaWidget />
        <MangaWidget />
    </section>

    <!-- See More -->
    <div class="w-full flex-1 ml-auto ">
        <button class="px-2 py-1 rounded-xl cursor-pointer border material-glass bg-black/15">See More</button>
    </div>
</main>
