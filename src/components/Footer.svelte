<script>
  const year = new Date().getFullYear();

  const links = [
    {
      title: "",
      items: [
        { label: "Browse Manga", href: "/browse" },
        { label: "Latest Updates", href: "/updates" },
        { label: "Genres", href: "/genres" },
      ],
    },
    {
      title: "",
      items: [
        { label: "Upload a Series", href: "/upload" },
        { label: "Creator Dashboard", href: "/dashboard" },
        { label: "Guidelines", href: "/guidelines" },
      ],
    },
    {
      title: "",
      items: [
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
        { label: "Terms", href: "/terms" },
        { label: "Privacy", href: "/privacy" },
      ],
    },
  ];
</script>

<footer class="bg-neutral-900 border-t border-neutral-800 text-neutral-400 font-sans">
  <div class="max-w-5xl mx-auto px-6 pt-10 pb-6">
    <div class="flex flex-wrap justify-between gap-8">
      <div>
        <span class="text-xl font-bold tracking-wide text-neutral-200">mangase</span>
        <p class="mt-1.5 text-sm text-neutral-500">Read Webcomics, or Publish Them.</p>
      </div>

      <nav class="flex flex-wrap gap-10 ">
        {#each links as group}
          <div>
            <h4 class="mb-3 text-xs font-medium uppercase tracking-wider text-neutral-500">
              {group.title}
            </h4>
            <ul class="flex flex-col gap-2">
              {#each group.items as item}
                <li>
                  <a
                    href={item.href}
                    class="text-sm text-neutral-400 hover:text-neutral-100 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              {/each}
            </ul>
          </div>
        {/each}
      </nav>
    </div>

    <div class="mt-10 pt-5 border-t border-neutral-800 text-center text-sm text-neutral-600">
      <p>&copy; {year} Mangase. All rights reserved.</p>
    </div>
  </div>
</footer>