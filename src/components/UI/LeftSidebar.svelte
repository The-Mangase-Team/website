<script>
    import { Icon } from 'astro-iconset/svelte';

    const middleButtons = [
      {icon: "home", href: "/home", text: "Home"},
      {icon: "search", href: "/search", text: "Search"},
      {icon: "plus", href: "/create", text: "Create"},
      {icon: "blog", href: "/blogs", text: "Blogs"},
      {icon: "profile", href: "/user", text: "Profile"},
      {icon: "options", href: "/settings", text: "Settings"},
    ]
    
</script>

<main class="hidden z-11 md:flex flex-col min-h-screen">
    <div class="flex flex-col gap-2 p-ui sticky top-1/2 -translate-y-1/2">
        {#each middleButtons as button}
            <a href={button.href} class="group select-none grid grid-cols-[20%_70%] items-center p-ui hover:bg-white/10 rounded-ui">
                <div class="text-[20px]">
                    <Icon name={button.icon}/>
                </div>
                <div class="absolute translate-x-10 bg-main p-ui font-ui rounded-ui scale-0 opacity-0 text-left duration-100 group-hover:opacity-100 transition-opacity group-hover:scale-100">
                    <h2 class="text-[15px]">{button.text}</h2>
                </div>
            </a>
        {/each}
    </div>
</main>
