var Task = function(name) {
  this.name = name;
  this.completed = false;

  this.completed = () => {
    console.log(`completing task: ${this.name}`);
    this.completed = true;
  }

  this.save = () => {
    console.log(`saving task: ${this.name}`);
  }
}

var task1 = new Task('create a demo for constructor');

task1.completed();
task1.save();