<script>
    import { Icon } from 'astro-iconset/svelte';

    import BlogWidget from '../../UI/content/Blogs/Blog.svelte'
</script>

<!-- Comics Billboard -->
<main class="z-0 flex flex-col h-full items-center">
    <div class="mx-auto border-x border-white/7 w-[95%] md:w-[45%] h-full">

        <!-- FOLLOWING \ FOR YOU -->
        <div class="flex border-b border-white/7">
            <button class="flex-1 p-2 hover:cursor-pointer font-ui hover:bg-white/7">FOLLOWING</button>
            <button class="flex-1 p-2 hover:cursor-pointer font-ui hover:bg-white/7">FOR YOU</button>
        </div>

        <!-- BLOGS -->
        <div class="border-b border-white/7 pt-2.5 flex flex-col">
            <div class="flex border-b border-white/7 px-2 h-full w-full">
                <div class="h-full flex text-4xl md:text-5xl">
                    <Icon name="profile" />
                </div>
                <div class="rounded-ui w-full">
                    <textarea class="w-full min-h-30 px-2 resize-none text-[20px] md:text-[22px] outline-none" placeholder="What's on your mind?"></textarea>
                </div>
            </div>
            <div class="flex items-center w-full p-2.5">
                <div class="ml-auto">
                    <button class="p-2 bg-main/60 border border-white/6 min-w-20 rounded-ui">POST</button>
                </div>
            </div>
        </div>
        <!-- BLOGS -->
        <div>
            <BlogWidget />
            <BlogWidget />
        </div>

    </div>
</main>
