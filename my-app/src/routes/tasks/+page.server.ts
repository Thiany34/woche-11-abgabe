import type { Actions, PageServerLoad } from './$types';
import { db } from '$lib/db.server';
import { ObjectId } from 'mongodb';

export const load: PageServerLoad = async () => {
    const docs = await db
        .collection('abgaben')
        .find()
        .sort({ dueDate: 1 })
        .toArray();

    const abgaben = docs.map((doc) => ({
        id: doc._id.toString(),
        subject: doc.subject as string,
        title: doc.title as string,
        dueDate: doc.dueDate as string
    }));

    return { abgaben };
};

export const actions: Actions = {
    delete: async ({ request }) => {
        const form = await request.formData();
        const id = form.get('id');

        if (!id || typeof id !== 'string') {
            return { error: 'Ungültige ID' };
        }

        await db.collection('abgaben').deleteOne({
            _id: new ObjectId(id)
        });

        return { success: true };
    }
};
