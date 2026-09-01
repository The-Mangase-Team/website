<script>
    import SearchBar from '../../UI/Search.svelte'
    import Logo from '../../../../public/favicon/favicon.svg'
    let isSearched = $state(false)
    
</script>
<main class="h-full w-full items-center">

    <!-- SEARCH BAR -->
    <div class="max-w-100 md:max-w-135 mt-10 md:mt-20 m-auto flex flex-col md:gap-2">
        <img src={Logo.src} alt="logo" class="justify-self-center h-40" />
        <!-- <h1 class="font-bold text-mobile-title md:text-5xl text-center italic">search</h1> -->
        <SearchBar />
    </div>

    <!-- MOST SEARCHED / SEARCH RESULTS -->
    <div class="h-full w-full py-10 max-w-100 md:max-w-135 m-auto">
    </div>
    
</main>