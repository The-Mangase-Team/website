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

<main class="hidden z-11 md:flex flex-col h-full">
    <div class="flex flex-col gap-2 p-ui sticky top-1/2 -translate-y-1/2">
        {#each middleButtons as button}
            <a href={button.href} class="group grid grid-cols-[20%_70%] items-center p-ui hover:bg-white/10 rounded-ui">
                <div class="text-[20px] ">
                    <Icon name={button.icon}/>
                </div>
                <div class="absolute translate-x-10 bg-main p-ui font-ui rounded-ui opacity-0 text-left duration-300 group-hover:opacity-100">
                    <h2 class="text-[15px]">{button.text}</h2>
                </div>
            </a>
        {/each}
    </div>
</main>
