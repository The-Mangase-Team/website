<script>
    import { Icon } from "astro-iconset/svelte";

    const blogData = [
      { type: "heart", count: 123},
      { type: "share", count: 123},
      { type: "blog-views", count: 123},
    ]
    
</script>

<main class="border-b border-white/7">
    <div class="flex gap-2 px-2 py-2.5 h-full w-full">
        <!-- BLOG IDENTITY -->
        <a href="/user" class="h-full flex text-4xl md:text-5xl mx-auto">
            <Icon name="profile" />
        </a>

        <!-- BLOG CONTENT -->
        <div class="flex flex-col w-full">
            <a href="/user">
                <div class="flex gap-x-2 items-center">
                    <h1 class="font-bold text-[20px]">Name</h1>
                    <h1 class="font-light opacity-40">@username</h1>
                    <h1 class="font-light opacity-40">4h</h1>
                </div>
                
                <!-- Additional Blog Flags -->
                <div class="opacity-30 text-[12px]">
                    <p>This is a Flag.</p>
                </div>
            </a>

            <!-- BLOG BODY -->
            <div class="w-full my-2.5">
                This is a Blog's body. It is a very descriptive yet paraphrased version of my thoughts.
                This is a Blog's body. It is a very descriptive yet paraphrased version of my thoughts.
            </div>

            <!-- BLOG INTERACTION AND STATISTICS -->
            <div class="grid grid-cols-4">
                {#each blogData as Data}
                    <div class="justify-start w-fit flex p-1.5 select-none hover:cursor-pointer hover:bg-primary/15 rounded-ui items-center gap-1 text-[15px]">
                        <h1 class="">{Data.count}</h1>
                        <Icon name={Data.type}/>
                    </div>
                {/each}
                <!-- BOOKMARK BUTTON-->
                <div>
                    <div class="justify-start w-fit flex p-1.5 select-none hover:cursor-pointer hover:bg-primary/15 rounded-ui items-center gap-1 text-[15px]">
                        <h1 class="">1</h1>
                        <Icon name="bookmark-unadded"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>