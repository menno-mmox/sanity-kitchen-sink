export default {
  widgets: [
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
                  buildHookId: '619cc346b61e24d33417c7dd',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-3a6qiui3',
                  apiId: '4c798b5b-d403-480c-abf5-4da76b79af31'
                },
                {
                  buildHookId: '619cc3467c4c7dc28c786b14',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-3q4idss9',
                  apiId: '17c36297-ea5c-42e2-9c1d-d2ac762e2bc7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/menno-mmox/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-3q4idss9.netlify.app', category: 'apps'}
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
