var TaskRepo = (function() {
  var taskRepo;

  function createRepo() {
    var taskRepo = new Repo('Task');
    return taskRepo;
  }
  return {
    getInstance: function() {
      if (!taskRepo) {
        taskRepo = createRepo();
      }
      return taskRepo;
    }
  }
})();

var repo1 = taskRepo.getInstance();
var repo2 = taskRepo.getInstance();