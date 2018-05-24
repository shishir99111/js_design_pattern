var Task = function(name) {
  this.name = name;
  this.complete = false;
}

Task.prototype.complete = function() {
  console.log(`completing task: ${this.name}`);
  this.completed = true;
}

Task.prototype.save = function() {
  console.log(`saving task: ${this.name}`);
  Repo.save(this);
}


var myTask = new Task('Legacy Task');
myTask.complete();
myTask.save();

var urgentTask = new Task('Urgent Task');
urgentTask.priority = 2;
urgentTask.notify = function() {
  console.log('notifying important people');
}

urgentTask.complete();
urgentTask.save = function() {
  this.notify();
  Task.prototype.save.call(this)
}

urgentTask.save();