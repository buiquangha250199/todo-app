module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		filename: 'todo.js'
	},
	module: {
        rules: [
        {
            test : /\.html$/ , 
            use: [ "html-loader" ]
        },
        {
            test:/\.css$/,
            use:['style-loader','css-loader']
        }        
      ]
  }


}