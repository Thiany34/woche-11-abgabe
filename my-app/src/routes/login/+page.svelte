<script lang="ts">
    let name = '';
    let password = '';

    function handleSubmit(event: SubmitEvent) {
        event.preventDefault();

        if (!name || !password) return;

        if (typeof localStorage !== 'undefined') {
            localStorage.setItem('studyplanner_user', name);
        }

        if (typeof window !== 'undefined') {
            window.location.href = '/tasks';
        }
    }
</script>

<section class="page">
    <h1 class="page-title">Login</h1>

    <p class="page-subtitle">
        Gib deinen Namen und ein Passwort ein, um den StudyPlanner zu verwenden.
    </p>

    <form on:submit={handleSubmit} class="form">
        <div class="form-group">
            <label for="name">Name / Kürzel</label>
            <input
                id="name"
                type="text"
                bind:value={name}
                required
                placeholder="z.B. Kanamma"
                class="input"
            />
        </div>

        <div class="form-group">
            <label for="password">Passwort</label>
            <input
                id="password"
                type="password"
                bind:value={password}
                required
                placeholder="dein Passwort"
                class="input"
            />
        </div>

        <button type="submit" class="btn btn-primary">
            Einloggen
        </button>
    </form>
</section>

<style>
    .page-title {
        font-size: 2rem;
        margin-top: 0;
        margin-bottom: 8px;
    }

    .page-subtitle {
        margin-top: 0;
        margin-bottom: 20px;
        color: #4b5563;
        font-size: 0.95rem;
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
</style>
