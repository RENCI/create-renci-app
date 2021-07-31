import shell from 'shelljs'

export const initializeProject = projectName => {
  console.log(`Creating new project "${ projectName }".`)

  console.log(`\n1. CREATING PROJECT DIRECTORY, "${ projectName }"...\n`)
  shell.mkdir(projectName)
  console.log(`\n\t...done.`)

  console.log(`\n2. INITIALIZING GIT REPO...\n`)
  shell.cd(projectName)

  // console.log(`\n\t...cloning renci/react-starter`)
  shell.exec(`degit https://github.com/RENCI/react-starter .`)
  // console.log(`\n\t...initialize new git repo`)
  shell.exec(`git init`)
  // console.log(`\n\t...stage files`)
  shell.exec(`git add .`)
  // console.log(`\n\t...commit changes`)
  shell.exec(`git commit -m "initial commit from renci/react-starter"`)
  console.log(`\n\t...done.`)

  console.log(`\n3. INSTALLING DEPENDENCIES...\n`)
  shell.exec(`npm i`)
  console.log(`\n\t...done.`)
} 
