var appFiles, exec, fs;

fs = require('fs');

exec = require('child_process').exec;

appFiles = [];

task('build', 'Build single application file from source files', function() {
  var appContents, file, index, process, remaining, _fn, _i, _len;
  appContents = new Array(remaining = appFiles.length);
  _fn = function(file, index) {
    return fs.readFile("" + file + ".coffee", 'utf8', function(err, fileContents) {
      if (err) {
        throw err;
      }
      appContents[index] = fileContents;
      if (--remaining === 0) {
        return process();
      }
    });
  };
  for (index = _i = 0, _len = appFiles.length; _i < _len; index = ++_i) {
    file = appFiles[index];
    _fn(file, index);
  }
  return process = function() {
    return fs.writeFile('applicationSingleFile.coffee', appContents.join('\n\n'), 'utf8', function(err) {
      if (err) {
        throw err;
      }
      return exec('coffee --compile app.coffee', function(err, stdout, stderr) {
        if (err) {
          throw err;
        }
        console.log(stdout + stderr);
        return fs.unlink('applicationSingleFile.coffee', function(err) {
          if (err) {
            throw err;
          }
          return console.log('Done.');
        });
      });
    });
  };
});
