// Entry for make.fun's news-image-20261120 bounty — "The World in One Page", a one-image broadsheet of
// Friday 20 November 2026: 46 numbered stories, 7 regions, a dotted world map, a UTC timeline and six big
// numbers, drawn and typeset from poster.html + stories.json and rendered to the entry.png beside this file.
// This program (Node 22, standard library only) copies that image to /output/entry.png. The gate takes a
// whole PNG or JPEG of at most 1 MiB and 1024 by 1024 pixels, and the judge sees exactly the bytes copied.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(new URL('./entry.png', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
