var Task = require('./task');
var Repo = require('./taskRepository');

// module pattern
var task1 = new Task(Repo.get(1));

task1.complete();
task1.save();