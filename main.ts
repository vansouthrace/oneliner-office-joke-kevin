import { mkdirSync, writeFileSync } from 'node:fs';

const ENTRY = "HR said my 'reply all' email showed initiative, so now I reply-all to everything — including the email telling us to stop replying all.";

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', ENTRY);
