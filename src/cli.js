import { initializeProject } from './initialize-project'
import inquirer from 'inquirer'

export function cli(args) {
  if (!args.length) {
    return
  }

  const projectName = args[0].trim()

  if (!projectName) {
    return
  }

  inquirer.prompt([
    {
      type: 'list',
      message: `Select the framework you\'ll be using for ${ projectName }:`,
      name: 'framework',
      choices: ['React'],
    }
  ]).then(answers => {
    const { framework } = answers
    console.log(`You've selected ${ framework }`)
    console.log(`(which makes sense because it's currently the only option!)`)
    initializeProject(projectName)
  })

}
