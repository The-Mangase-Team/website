<script lang="ts">
import Icon from 'astro-iconset/svelte'
import { authClient } from "../../lib/auth-client";

  let email = $state("");
  let password = $state("");
  let error = $state("");
  let loading = $state(false);

  async function handleSignIn(e: Event) {
    e.preventDefault();
    error = "";
    loading = true;

    try {
      const { error: authError } = await authClient.signIn.email({
        email,
        password,
      });

      if (authError) {
        error = authError.message || "Failed to sign in";
        return;
      }

      window.location.href = "/home";
    } catch (err) {
      error = "An unexpected error occurred";
    } finally {
      loading = false;
    }
  }

  async function handleGoogleSignIn() {
    await authClient.signIn.social({
      provider: "google",
    });
  }

  async function handleGitHubSignIn() {
    await authClient.signIn.social({
      provider: "github",
    });
  }
</script>

<h1 class="text-mobile-title translate-y-5 font-black md:text-9xl mx-5">
    <Icon name="mangase/wordmark"/>
</h1>

<div class="w-full max-w-sm material-glass border p-8 rounded-lg">
  <h1 class="text-2xl font-bold text-center mb-6 font-mono">Sign In</h1>

  {#if error}
    <div class="bg-red-500/10 border border-red-500/20 text-red-400 p-3 rounded mb-4 text-sm font-mono">
      {error}
    </div>
  {/if}

  <form onsubmit={handleSignIn} class="flex flex-col gap-4">
    <div>
      <label for="email" class="block text-sm text-white/60 mb-1 font-mono">Email</label>
      <input
        id="email"
        type="email"
        bind:value={email}
        required
        class="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-white font-mono text-sm focus:outline-none focus:border-white/30"
        placeholder="you@example.com"
      />
    </div>

    <div>
      <label for="password" class="block text-sm text-white/60 mb-1 font-mono">Password</label>
      <input
        id="password"
        type="password"
        bind:value={password}
        required
        class="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-white font-mono text-sm focus:outline-none focus:border-white/30"
        placeholder="••••••••"
      />
    </div>

    <button
      type="submit"
      disabled={loading}
      class="w-full bg-white/10 hover:cursor-pointer border border-white/10 hover:bg-white/20 text-white font-mono py-2 rounded transition-colors disabled:opacity-50"
    >
      {loading ? "Signing in..." : "Sign In"}
    </button>
  </form>

  <div class="relative my-6">
    <div class="absolute inset-0 flex items-center">
      <div class="w-full border-t border-white/10"></div>
    </div>
    <div class="relative flex justify-center text-xs">
      <span class="bg-main px-2 text-white/40 font-mono">or</span>
    </div>
  </div>

  <div class="flex flex-col gap-2">
    <button
      onclick={handleGoogleSignIn}
      class="w-full bg-white/5 hover:cursor-pointer border border-white/10 hover:bg-white/10 text-white font-mono py-2 rounded transition-colors text-sm"
    >
      Continue with Google
    </button>
    <button
      onclick={handleGitHubSignIn}
      class="w-full bg-white/5 hover:cursor-pointer border border-white/10 hover:bg-white/10 text-white font-mono py-2 rounded transition-colors text-sm"
    >
      Continue with GitHub
    </button>
  </div>

  <p class="text-center text-sm text-white/40 mt-6 font-mono">
    Don't have an account?
    <a href="/signup" class="text-white/70 hover:text-white underline underline-offset-4">Sign up</a>
  </p>
</div>
