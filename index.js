const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generatePage = require('./src/template');
const fs = require('fs');


const promptUser = teamData => {
    console.log(teamData)
    if (!teamData) {
        teamData = [];
      }
    return inquirer.prompt([  
        {
            type: 'list',
            name: 'role',
            message: 'What type of team member would you like to add?',
            choices: ['Manager','Engineer','Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: 'Enter employees name',
            validate: nameInput => {
            if (nameInput) {
                return true;
            }else {
                console.log('Please enter employees name');
                return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter employees ID',
            validate: idInput => {
            if (idInput) {
                return true;
            }else {
                console.log('Please enter employees ID');
                return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter employees email',
            validate: emailInput => {
            if (emailInput) {
                return true;
            }else {
                console.log('Please enter employees email');
                return false;
                }
            }
        },
        {
            type: 'input',
            name: 'jobSpecific',
            message: `Enter manager's office number`,
            when: (answers) => answers.role === 'Manager',
            validate: managerInput => {
                if (managerInput) {
                    return true;
                }else {
                    console.log(`Please enter manager's office number`);
                    return false;
                    }
                }
        },
        {
            type: 'input',
            name: 'jobSpecific',
            message: `Enter engineer's Github`,
            when: (answers) => answers.role === 'Engineer',
            validate: engineerInput => {
                if (engineerInput) {
                    return true;
                }else {
                    console.log(`Please enter engineer's Github`);
                    return false;
                    }
                }
        },
        {
            type: 'input',
            name: 'jobSpecific',
            message: `Enter intern's school`,
            when: (answers) => answers.role === 'Intern',
            validate: internInput => {
                if (internInput) {
                    return true;
                }else {
                    console.log(`Please enter intern's school`);
                    return false;
                    }
                }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to enter another employee?',
            default: false
        }
    ])
    .then(memberData => {
        const {role, name, id, email, jobSpecific} = memberData;
        if(role === 'Manager') {
              this.memberData = new Manager(name, id, email, jobSpecific);
        }else if(memberData.role === 'Engineer') {
            this.memberData = new Engineer(name, id, email, jobSpecific);
        }else if(memberData.role === 'Intern'){
            this.memberData = new Intern(name, id, email, jobSpecific);
        }
        teamData.push(this.memberData);
        console.log(this.memberData)
        console.log(teamData)
        if (memberData.confirmAddEmployee) {
            return promptUser(teamData)
        }else {
           return generatePage(teamData);
        }
    })
    .then(html => {
        return fs.writeFile('./dist/index.html', html, err => {
            if (err) {
                throw(err);
            }
            console.log('file created!')
        })
    })
    .catch(error => {
        console.log(error);
    })
    .then(response => {
        console.log(response)
    })
  };

  promptUser();