<script>
    let emoji = "🔥"
    let reactions = 12000

    const formatter = new Intl.NumberFormat('en-US', {
      notation: 'compact',
      maximumFractionDigits: 1
    });

</script>

<button class="flex items-center px-2 py-1 gap-2 border border-white/10 rounded-xl">
    <span>{formatter.format(reactions)}</span>
    <span>{emoji}</span>
</button>