<script lang="ts">
    export let form;
</script>

<section class="page">
    <h1 class="page-title">Neue Abgabe erfassen</h1>

    <form method="POST" class="form">
        <div class="form-group">
            <label for="subject">Fach</label>
            <input
                id="subject"
                name="subject"
                type="text"
                placeholder="z.B. BSS, FRW"
                required
                class="input"
            />
        </div>

        <div class="form-group">
            <label for="title">Titel</label>
            <input
                id="title"
                name="title"
                type="text"
                placeholder="z.B. Übung 3, Prüfung IT-Security"
                required
                class="input"
            />
        </div>

        <div class="form-group">
            <label for="dueDate">Fällig am</label>
            <input
                id="dueDate"
                name="dueDate"
                type="date"
                required
                class="input"
            />
        </div>

        <button type="submit" class="btn btn-primary">
            Speichern
        </button>
    </form>

    <p style="margin-top:16px;">
        <a href="/tasks" class="link-back">⬅ Zurück zur Übersicht</a>
    </p>

    {#if form?.success}
        <p class="success-text">Abgabe wurde gespeichert!</p>
    {/if}

    {#if form?.error}
        <p class="error-text">{form.error}</p>
    {/if}
</section>

<style>
    .page-title {
        font-size: 2rem;
        margin-top: 0;
        margin-bottom: 16px;
    }

    .form {
        display: flex;
        flex-direction: column;
        gap: 12px;
        max-width: 400px;
    }

    .form-group {
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    .form-group label {
        font-weight: 600;
        font-size: 0.95rem;
    }

    .input {
        padding: 6px 10px;
        border-radius: 8px;
        border: 1px solid #d1d5db;
        font-size: 0.95rem;
    }

    .input:focus {
        outline: none;
        border-color: #4f46e5;
        box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.2);
    }

    .btn {
        border-radius: 999px;
        padding: 8px 16px;
        font-size: 0.9rem;
        border: none;
        cursor: pointer;
        align-self: flex-start;
    }

    .btn-primary {
        background: #4f46e5;
        color: white;
    }

    .btn-primary:hover {
        background: #4338ca;
    }

    .link-back {
        color: #4f46e5;
        text-decoration: none;
    }

    .link-back:hover {
        text-decoration: underline;
    }

    .success-text {
        color: #16a34a;
        margin-top: 8px;
    }

    .error-text {
        color: #b91c1c;
        margin-top: 8px;
    }
</style>
