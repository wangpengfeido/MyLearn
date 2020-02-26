import path from 'path';
// import h from 'jsxobj';

function h(name, attrs, ...children) {
	let obj = { name, ...attrs };

	if (typeof name==='function') obj = name(obj);

	[].concat(...children).forEach( child => {
		let { name } = child;
		if (name) {
			obj[name] = child;
			delete child.name;
		}
		else {
			obj.value = child;
		}
	});

	return obj;
}


const configuration = (
  <webpack mode="development">
    <entry main="./src/01.js"></entry>
    <output filename="[name].js" path={path.resolve(__dirname, './dist_01')} publicPath="./"></output>
  </webpack>
);

export default configuration;
