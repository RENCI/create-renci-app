import { initializeProject } from './initialize-project'

export function cli(args) {

  if (!args.length) {
    return
  }

  const projectName = args[0].trim()

  if (!projectName) {
    return
  }

  initializeProject(projectName)
}
