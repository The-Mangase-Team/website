<script>
    import { Icon } from 'astro-iconset/svelte'
</script>
<main class="w-full p-2 flex items-center gap-1.5 hover:bg-white/5 hover:cursor-pointer select-none">

    <!-- PROFILE PIC -->
    <div class="text-5xl">
        <Icon name="profile" />
    </div>

    <!-- Data -->
    <div class="flex-col flex">
        <!-- Person's Name and Status-->
        <div class="flex flex-col">
            <h1>@username</h1>
            <h2 class="text-[10px] overflow-x-auto overflow-y-hidden">Currently Reading "VIRAL-HIT"</h2>
        </div>
    </div>
</main>