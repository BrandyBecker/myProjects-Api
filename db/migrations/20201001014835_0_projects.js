exports.up = function(knex) {
    return knex.schema.createTable('projects', project=> {
        project.increments();
  
        project
        .string('project_name',128)
        .notNullable()

        project
        .string('role_title', 128)
        .notNullable()

        project
        .string('dates', 128)
        .notNullable()

        project
        .string('description', 128)
        .notNullable()

        project
        .string('tech_stack', 128)
        .notNullable()

        project
        .string('responsibilities', 128)
        .notNullable()
  
        project
        .string('deployed_url', 128)
        .notNullable()
  
        project
        .string('github_url', 128)
        .notNullable()
  
    })
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTableIfExists('projects');
  };