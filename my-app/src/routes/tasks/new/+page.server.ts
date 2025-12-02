import type { Actions } from './$types';
import { db } from '$lib/db.server';

export const actions: Actions = {
    default: async ({ request }) => {
        const form = await request.formData();

        const subject = form.get('subject');
        const title = form.get('title');
        const dueDate = form.get('dueDate');

        if (
            !subject || typeof subject !== 'string' ||
            !title || typeof title !== 'string' ||
            !dueDate || typeof dueDate !== 'string'
        ) {
            return { error: 'Bitte alle Felder ausfüllen.' };
        }

        await db.collection('abgaben').insertOne({
            subject,
            title,
            dueDate
        });

        return { success: true };
    }
};
