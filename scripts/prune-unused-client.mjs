import { readdirSync, readFileSync, unlinkSync } from 'node:fs';
import { extname, join } from 'node:path';

const dist = 'dist';
const assets = join(dist, '_astro');
const htmlFiles = [];

const walk = (dir) => {
	for (const entry of readdirSync(dir, { withFileTypes: true })) {
		const path = join(dir, entry.name);
		if (entry.isDirectory()) walk(path);
		else if (extname(entry.name) === '.html') htmlFiles.push(path);
	}
};

walk(dist);

const markup = htmlFiles.map((file) => readFileSync(file, 'utf8')).join('\n');

for (const file of readdirSync(assets)) {
	if (!/^client\..*\.js$/.test(file)) continue;
	if (markup.includes(file)) continue;
	unlinkSync(join(assets, file));
	console.log(`[prune] removed unused ${file}`);
}
