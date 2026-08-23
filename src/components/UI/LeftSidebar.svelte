<script>
    import { Icon } from 'astro-iconset/svelte';

    const middleButtons = [
      {icon: "home", href: "/home", text: "Home"},
      {icon: "search", href: "/search", text: "Search"},
      {icon: "plus", href: "/create", text: "Create"},
      {icon: "blog", href: "/blogs", text: "Blogs"},
      {icon: "send", href: "/messages", text: "Messages"},
      {icon: "options", href: "/settings", text: "Settings"},
      {icon: "profile", href: "/profile", text: "Profile"},
    ]
    
</script>

<main class="hidden md:grid grid-rows-3 h-full items-center">
    <div class></div>
    <div class="flex flex-col gap-2 p-ui">
        {#each middleButtons as button}
            <a href={button.href} class="group grid grid-cols-[20%_70%] items-center p-ui hover:bg-white/10 rounded-ui">
                <div class="text-[25px] items-center">
                    <Icon name={button.icon}/>
                </div>
                <div class="absolute translate-x-12 bg-main p-ui font-ui rounded-ui overflow-hidden opacity-0 text-left duration-300 group-hover:opacity-100">
                    <h2 class="text-[15px]">{button.text}</h2>
                </div>
            </a>
        {/each}
    </div>
    <div class="mt-auto"></div>
</main>
