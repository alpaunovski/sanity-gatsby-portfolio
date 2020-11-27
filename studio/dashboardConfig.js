export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fc15fc61c76590e2d4985eb',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-junwfgni',
                  apiId: '268c8a6f-d6c1-470f-baff-b16facf62b22'
                },
                {
                  buildHookId: '5fc15fc6b9a514fba8c63679',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-q3opt37r',
                  apiId: '3e0dc26c-11e2-47b6-af1f-8c4f6b46d9d2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/alpaunovski/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-q3opt37r.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
