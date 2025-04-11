import { defineSchema } from 'convex/server';
import { tables } from './tables';

export default defineSchema({
    ...tables
});
