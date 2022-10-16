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
                  buildHookId: '634c6b3cdea29b440380a6d0',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-uop2h3xj',
                  apiId: 'dd315ed1-c549-4ee3-9901-377f22542a1c'
                },
                {
                  buildHookId: '634c6b3c4954f949dd1c7759',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-dv3ut8n3',
                  apiId: 'fb497de0-fcf3-4147-abbc-071e15e8c62a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/HelgiHe/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-dv3ut8n3.netlify.app', category: 'apps'}
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
