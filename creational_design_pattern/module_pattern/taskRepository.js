var repo = function() {
  /**
   * having said to allow only scope of DB instance only for the modules inside repo and
   * should be always available for them
   */
  var db = {};

  function get(id) {
    console.log(`getting data for the id ${id}`);
    return { name: 'data from DB' }
  }

  function save(data) {
    console.log('saving record in DB');
  }
  return {
    get,
    save
  }
}

module.export = repo();