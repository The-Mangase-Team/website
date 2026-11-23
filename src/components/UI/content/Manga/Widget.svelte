<script lang="ts">

    // import placeholders
    import cover1Placeholder from "../../../../assets/images/placeholder/cover.avif"
    import cover2Placeholder from "../../../../assets/images/placeholder/cover2.avif"
    import cover3Placeholder from "../../../../assets/images/placeholder/cover3.avif"

    const numbers = [cover1Placeholder, cover2Placeholder, cover3Placeholder];
    const randomChoice = numbers[Math.floor(Math.random() * numbers.length)];

</script>

<div class="group flex flex-col w-29 md:w-50 pb-5">
    <main class="shrink-0 overflow-hidden w-full hover:opacity-100 snap-center rounded-xl aspect-[1/1.414] bg-black">
        <img src={randomChoice.src} alt="Cover" />
    </main>
    <h1 class="line-clamp-2 leading-6 h-12 opacity-50 group-hover:opacity-100">Bakemonogatari Bakemonogatari</h1>
</div>
