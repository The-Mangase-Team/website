<script lang="ts">
    // Manga Widget
    import MangaWidget from '../Manga/Widget.svelte'
</script>

<main class="flex flex-col gap-1">

    <select class="w-fit select-none text-xl md:text-3xl outline-0">
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
</main>
