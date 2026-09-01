<script>
    import LeftSidebar from './LeftSidebar.svelte'
    import Chat from './Chat.svelte'
</script>

<main class="z-0 bg-white/5 flex flex-col material-glass border h-full w-full rounded-ui">
    <!-- TABLIST -->
    <div class="w-full material-glass h-10 flex items-center">
        <h1 class="p-2 material-glass min-w-64 ">Messages</h1>

        <!-- MESSAGER TABS -->
        <div class="flex">
            <div class="h-full p-2 border material-glass">
                <h1>AAA</h1>
            </div>
            
        </div>
    </div>

    <!-- APP -->
    <div class="flex flex-1 w-full flex-row">
        <!-- SIDEBAR -->
        <div class="bg-white/5 material-glass border w-64 min-w-64 shrink-0 h-full overflow-y-auto">
            <LeftSidebar />
        </div>
        
        <!-- MESSAGES -->
        <div class="material-glass bg-white/5 border flex-1 min-w-0 min-h-full overflow-y-auto">
            <Chat />
        </div>
    </div>
</main>
