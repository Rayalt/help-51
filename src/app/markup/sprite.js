/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const fs = require('fs');
const path = require('path');
const SVGSpriter = require('svg-sprite');


const spriter = new SVGSpriter({
	dest: '../sprites',
	shape: {
		spacing: { // Spacing related options
			padding: 0, // Padding around all shapes
			box: 'content' // Padding strategy (similar to CSS `box-sizing`)
		},
		transform: ['svgo']
	},
	mode: {
		defs: {
			inline: true
		}
	},
	svg: { // General options for created SVG files
		xmlDeclaration: true, // Add XML declaration to SVG sprite
		doctypeDeclaration: false, // Add DOCTYPE declaration to SVG sprite
		dimensionAttributes: false // Width and height attributes on the sprite
	},
});

const getAllFiles = dir => fs.readdirSync(dir).reduce((files, file) => {
	const name = path.join(dir, file);
	const isDirectory = fs.statSync(name).isDirectory();
	if (isDirectory) {
		return [...files, ...getAllFiles(name)];
	}
	return [...files, name];
}, []);

const svgFiles = getAllFiles('src/app/markup/graphics/svg');

svgFiles.map(file =>
	spriter.add(
		file, null, fs.readFileSync(file, 'utf-8')
	)
)

spriter.compile((error, result) => {
	for (const mode in result) {
		for (const resource in result[mode]) {
			fs.mkdirSync(path.resolve(__dirname, '../sprites'), { recursive: true });
			fs.writeFileSync(
				path.resolve(path.resolve(__dirname, '../sprites'), 'sprite.svg'),
				result[mode][resource].contents
			);
		}
	}
});
