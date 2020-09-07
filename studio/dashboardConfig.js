export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '5f562bbc72c9450610f3274c',
                  title: 'Sanity Studio',
                  name: 'andypbrowne-new-studio',
                  apiId: 'c2250a6d-d6dd-4b6f-a174-8f9b7695120e'
                },
                {
                  buildHookId: '5f562bbccbf55b5a803a2487',
                  title: 'Blog Website',
                  name: 'andypbrowne-new',
                  apiId: 'e4de7749-06fb-4cb9-8f5d-13284f69ac21'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/andypbrowne/andypbrowne-new',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://andypbrowne-new.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
