<script lang="ts">
    import { onMount } from 'svelte';

    let user: string | null = null;

    onMount(() => {
        if (typeof localStorage !== 'undefined') {
            user = localStorage.getItem('studyplanner_user');
        }
    });

    function logout() {
        if (typeof localStorage !== 'undefined') {
            localStorage.removeItem('studyplanner_user');
        }

        user = null;

        if (typeof window !== 'undefined') {
            window.location.href = '/login';
        }
    }
</script>

<svelte:head>
    <title>StudyPlanner</title>
</svelte:head>

<div class="app-shell">
    <header class="header">
        <div class="header-inner">
            <div>
                <div class="logo">StudyPlanner</div>
                <nav class="nav">
                    <a href="/tasks" class="nav-link">Abgabenübersicht</a>
                    <a href="/tasks/new" class="nav-link">Neue Abgabe</a>
                    <a href="/login" class="nav-link">Login</a>
                </nav>
            </div>

            <div class="user-info">
                {#if user}
                    <span>Angemeldet als <strong>{user}</strong></span>
                    <button type="button" class="btn btn-outline" on:click={logout}>
                        Logout
                    </button>
                {:else}
                    <span>Nicht eingeloggt</span>
                {/if}
            </div>
        </div>
    </header>

    <main class="main">
        <div class="card">
            <slot />
        </div>
    </main>
</div>

<style>
    :global(body) {
        margin: 0;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        background: #f3f4f6;
        color: #111827;
    }

    .app-shell {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }

    .header {
        background: #1e3a8a;
        color: white;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    }

    .header-inner {
        max-width: 1100px;
        margin: 0 auto;
        padding: 12px 24px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
    }

    .logo {
        font-size: 1.5rem;
        font-weight: 700;
        letter-spacing: 0.03em;
    }

    .nav {
        margin-top: 4px;
        display: flex;
        gap: 16px;
        font-size: 0.95rem;
    }

    .nav-link {
        color: #e5e7eb;
        text-decoration: none;
        padding-bottom: 2px;
        border-bottom: 2px solid transparent;
    }

    .nav-link:hover {
        border-bottom-color: #facc15;
    }

    .user-info {
        font-size: 0.9rem;
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .main {
        flex: 1;
        padding: 24px;
    }

    .card {
        max-width: 1100px;
        margin: 0 auto;
        background: white;
        padding: 24px 32px 32px;
        border-radius: 12px;
        box-shadow: 0 10px 25px rgba(15, 23, 42, 0.08);
    }

    .btn {
        border-radius: 999px;
        padding: 6px 14px;
        font-size: 0.9rem;
        border: none;
        cursor: pointer;
    }

    .btn-outline {
        background: transparent;
        border: 1px solid #e5e7eb;
        color: #e5e7eb;
    }

    .btn-outline:hover {
        background: #e5e7eb;
        color: #1f2933;
    }
</style>
