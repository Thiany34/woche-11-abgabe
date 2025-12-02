<script lang="ts">
    export let data;
</script>

<section class="page">
    <div class="page-header">
        <h1 class="page-title">Abgabenübersicht</h1>
        <a href="/tasks/new" class="btn btn-primary">
            ➕ Neue Abgabe
        </a>
    </div>

    {#if data.abgaben && data.abgaben.length > 0}
        <ul class="abgabe-list">
            {#each data.abgaben as a}
                <li class="abgabe-item">
                    <div class="abgabe-main">
                        <div class="abgabe-text">
                            <div class="abgabe-subject">{a.subject}</div>
                            <div class="abgabe-title">{a.title}</div>
                        </div>
                        {#if a.dueDate}
                            <div class="badge-date">
                                Fällig am {a.dueDate}
                            </div>
                        {/if}
                    </div>

                    <form method="POST">
                        <input type="hidden" name="id" value={a.id} />
                        <button type="submit" formaction="?/delete" class="btn btn-danger btn-sm">
                            Löschen
                        </button>
                    </form>
                </li>
            {/each}
        </ul>
    {:else}
        <p class="empty-text">Noch keine Abgaben erfasst. Lege deine erste über „Neue Abgabe“ an.</p>
    {/if}
</section>

<style>
    .page-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 12px;
        margin-bottom: 20px;
    }

    .page-title {
        font-size: 2rem;
        margin: 0;
    }

    .abgabe-list {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .abgabe-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 16px;
        padding: 12px 16px;
        border-radius: 10px;
        border: 1px solid #e5e7eb;
        background: #f9fafb;
    }

    .abgabe-item:hover {
        background: #eef2ff;
        border-color: #c7d2fe;
    }

    .abgabe-main {
        display: flex;
        align-items: center;
        gap: 16px;
        flex: 1;
        min-width: 0;
    }

    .abgabe-text {
        min-width: 0;
    }

    .abgabe-subject {
        font-weight: 700;
        margin-bottom: 2px;
    }

    .abgabe-title {
        font-size: 0.95rem;
        color: #4b5563;
    }

    .badge-date {
        font-size: 0.85rem;
        padding: 4px 10px;
        border-radius: 999px;
        background: #e0f2fe;
        color: #0369a1;
        white-space: nowrap;
    }

    .empty-text {
        color: #6b7280;
        font-size: 0.95rem;
    }

    .btn {
        border-radius: 999px;
        padding: 6px 14px;
        font-size: 0.9rem;
        border: none;
        cursor: pointer;
    }

    .btn-sm {
        padding: 4px 10px;
        font-size: 0.8rem;
    }

    .btn-primary {
        background: #4f46e5;
        color: white;
    }

    .btn-primary:hover {
        background: #4338ca;
    }

    .btn-danger {
        background: #ef4444;
        color: white;
    }

    .btn-danger:hover {
        background: #b91c1c;
    }
</style>
