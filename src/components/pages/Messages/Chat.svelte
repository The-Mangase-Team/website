<script>
    import Icon from "astro-iconset/svelte";

</script>
<main class="h-full w-full flex flex-col flex-1">
    <!-- PROFILE -->
    <div class="h-10 flex items-center gap-5 p-2 border-b border-white/7">
        <h1>@username</h1>
    </div>

    <!-- CHAT -->
    <div class="flex-1 grid grid-rows-[1fr] h-200">

        <!-- MESSAGES -->
        <div class="grid-1 flex-5 p-2 "></div>

        <!-- SEND MESSAGE -->
        <div class="m-1 px-2 flex text-[17px] items-center  bg-black/7 border border-black/20 rounded-ui">
            <input class="flex-5 text-white p-2 outline-0" type="text">
            <button class="p-2 rounded-ui hover:cursor-pointer hover:bg-black/70">
                <Icon name="plus" />
            </button>
            <button class="p-2 rounded-ui hover:cursor-pointer hover:bg-black/70">
                <Icon name="send" />
            </button>
        </div>
    </div>
</main>