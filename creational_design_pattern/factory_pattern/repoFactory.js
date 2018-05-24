var repoFactory = function() {
    var repos = this;
    var repoList = [
      { name: 'task', source: './taskRepo' },
      { name: 'user', source: './userRepo' },
      { name: 'project', source: './projectRepo' },
    ]
    repoList.forEach(function(repository) {
      repos[repo.name] = require(repo.source)
    })
  }
  // less optimized solution
  // var repoFactory = function () {
  // 	this.getRepo = function(repoType) {
  // 		if(repoType === 'task'){
  // 			if(this.taskRepo){
  // 				console.log('retrieving from cache')
  // 				return this.taskRepo
  // 			}else{
  // 				this.taskRepo = require('./taskRepo')()
  // 				return this.taskRepo;
  // 			}
  // 		}
  // 		if(repoType === 'user'){
  // 			if(this.userRepo){
  // 				return this.userRepo
  // 			}else{
  // 				this.userRepo = require('./userRepo')()
  // 				return this.userRepo;
  // 			}
  // 		}
  // 		if(repoType === 'project'){
  // 			if(this.projectRepo){
  // 				return this.projectRepo
  // 			}else{
  // 				this.projectRepo = require('./projectRepo')()
  // 				return this.projectRepo;
  // 			}
  // 		}
  // 	}
  // }

module.exports = new repoFactory;