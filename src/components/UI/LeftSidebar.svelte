<script>
    import { Icon } from 'astro-iconset/svelte';

    const middleButtons = [
      {icon: "home", href: "/home", text: "Home"},
      {icon: "search", href: "/search", text: "Search"},
      {icon: "plus", href: "/create", text: "Create"},
      {icon: "profile", href: "/profile", text: "Profile"},
      {icon: "send", href: "/messages", text: "Messages"},
      {icon: "options", href: "/settings", text: "Settings"},
    ]
    
</script>

<main class="px-2 group py-70 h-full grid items-center text-2xl">

    {#each middleButtons as button}
        <a href={button.href} class="grid grid-cols-[20%_70%] gap-5 items-center p-ui hover:bg-white/10 rounded-ui">
            <div class="z-10 text-4xl items-center flex">
                <Icon name={button.icon}/>
            </div>
            <div class="-translate-x-2 overflow-hidden opacity-0 text-left duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                <h2 class="text-[20px]">{button.text}</h2>
            </div>
        </a>
    {/each}

</main>
