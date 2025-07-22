const fs = require('fs');
const path = require('path');
const childProcess = require('child_process');
const { BehaviorSubject, debounceTime, filter } = require('rxjs');

const imgPath = path.resolve(__dirname, './graphics/svg');
let vectorScriptProcess;
const changedFiles = new BehaviorSubject([]);

fs.watch(imgPath, {
	persistent: true,
	recursive: true,
}, (eventType, fileName) => {
	if (!fileName) return;

	changedFiles.next([...changedFiles.value, fileName]);
});

changedFiles
	.asObservable()
	.pipe(
		debounceTime(500),
		filter(files => Boolean(files?.length)),
	)
	.subscribe({
		next: files => {
			const changedFilesExts = files.map(fileName => path.extname(fileName).toLowerCase());

			if (changedFilesExts.some(ext => ext === '.svg')) {
				vectorScriptProcess?.kill?.();
				vectorScriptProcess = childProcess.exec('yarn run svg');
			}

			changedFiles.next([]);
		}
	});
