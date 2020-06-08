module.exports = {
	entry: "./src/index.jsx",
	module: {
		rules: [
			{test: /\.jsx?$/, loader: "babel-loader", exclude: /node_modules/}
		],
	}
};
