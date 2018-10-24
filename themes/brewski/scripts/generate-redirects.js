var Hexo = require('hexo');
var hexo = new Hexo(process.cwd(), {});

hexo.extend.generator.register('netlify-redirects', function(locals){
  var fs = require('hexo-fs');
  var pathFn = require('path');
  var data = fs.readFileSync( pathFn.join( process.env.PWD || process.cwd() , '_redirects'));
  return {
    path: "_redirects",
    data: data
  };
});