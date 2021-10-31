


function getRoleItem(employee) {
  if (employee.getRole() === 'manager') {
    return 'Office Number: ' + employee.officeNumber;
  }else if(employee.getRole() === 'engineer') {
    return `Github: <a href = "https://github.com/${employee.github}"> ${employee.github}</a>`;
  }else if(employee.getRole() === 'intern') {
    return 'School: ' + employee.school;
  }
}

function generateEmployee(templateData) {
  const htmlArr = [];
  for(let i = 0; i < templateData.length; i++) {
  htmlArr.push(`
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${templateData[i].name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${templateData[i].getRole()}</h6>
      <p class="card-text">${templateData[i].id}
      </br>Email: <a href = "mailto: ${templateData[i].email}">${templateData[i].email}</a>
      </br>${getRoleItem(templateData[i])}</p>
    </div>
  </div>
  `)
  }
  return htmlArr.join(`
  `);
}




module.exports = templateData => {
    // destructure page data by section
    const { role, name, id, email, jobSpecific} = templateData;
  
    return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>My Team</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" 
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" 
      crossorigin="anonymous">
      <link rel="stylesheet" href="style.css">

    </head>
  
    <body>
      <header>
        <div class="container flex-row justify-space-between align-center py-3">
          <h1 class="page-title text-secondary bg-dark py-2 px-3">My Team</h1>
          <nav class="flex-row">
          </nav>
        </div>
      </header>
      <main class="container my-5">
      <div class = 'row d-flex justify-content-between'>
        ${generateEmployee(templateData)}
      </div>
      </main>

    </body>
    </html>
    `;
  };