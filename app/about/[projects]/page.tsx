import React from 'react'

const ProjectsPage = async ({params}) => {
  const project = (await params).projects;
  return  <div>ProjectsPage {project}</div>
  
}

export default ProjectsPage