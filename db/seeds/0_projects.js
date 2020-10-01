
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, project_name: 'Connect Our Kids', role_title:'FrontEnd Developer', dates:'April - May 2020', description:'Connects kids in the foster care system to immediate friends & family, as foster kids are more than likely to stay in a family or family friends home & get out of the system quicker.', tech_stack:'React, React Native, Redux, TypeScript, JavaScript', responsibilities:'', deployed_url:'', github_url:''},
      ]);
    });
};

// {id: 1, project_name: '', role_title:'', dates:'', description:'', tech_stack:'', responsibilities:'', deployed_url:'', github_url:''},