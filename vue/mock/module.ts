import { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/api/module',
    method: 'get',
    response: () => {
      return {
        data: [
          {
            id: 1,
            title: '博客',
            name: 'Blog',
            version: '1.0',
            author: '后盾人',
            preview: '/static/preview.jpeg',
            install: false,
            created_at: '2022-06-20T08:08:10.000000Z',
            updated_at: '2022-06-20T08:08:10.000000Z',
            permission: [
              {
                title: '文章管理',
                items: [
                  {
                    title: '文章列表',
                    name: 'article_list',
                  },
                  {
                    title: '添加文章',
                    name: 'article_add',
                  },
                  {
                    title: '编辑文章',
                    name: 'article_edit',
                  },
                  {
                    title: '删除文章',
                    name: 'article_delete',
                  },
                ],
              },
              {
                title: '评论管理',
                items: [
                  {
                    title: '添加评论',
                    name: 'add_comment',
                  },
                  {
                    title: '添加文章',
                    name: 'article_add',
                  },
                  {
                    title: '编辑文章',
                    name: 'article_edit',
                  },
                  {
                    title: '删除文章',
                    name: 'article_delete',
                  },
                ],
              },
            ],
            config: {
              name: 'Blog',
              version: '1.0',
              title: '博客',
              author: '后盾人',
            },
          },
        ],
        links: {
          first: '/api/module?page=1',
          last: '/api/module?page=1',
          prev: null,
          next: null,
        },
        meta: {
          current_page: 1,
          from: 1,
          last_page: 1,
          links: [
            {
              url: null,
              label: '&laquo; 上一页',
              active: false,
            },
            {
              url: '/api/module?page=1',
              label: '1',
              active: true,
            },
            {
              url: null,
              label: '下一页 &raquo;',
              active: false,
            },
          ],
          path: '/api/module',
          per_page: 15,
          to: 3,
          total: 3,
        },
      }
    },
  },
  {
    url: '/api/module/1',
    method: 'delete',
    response: () => {
      return {}
    },
  },
  {
    url: '/api/module',
    method: 'POST',
    response: () => {
      return {}
    },
  },
  {
    url: '/api/site/1/module',
    method: 'get',
    response: () => {
      return {
        data: [
          {
            id: 1,
            title: '博客',
            name: 'Blog',
            version: '1.0',
            author: '后盾人',
            preview: '/static/preview.jpeg',
            install: false,
            created_at: '2022-06-20T08:08:10.000000Z',
            updated_at: '2022-06-20T08:08:10.000000Z',
            permission: [
              {
                title: '文章管理',
                items: [
                  {
                    title: '文章列表',
                    name: 'article_list',
                  },
                  {
                    title: '添加文章',
                    name: 'article_add',
                  },
                  {
                    title: '编辑文章',
                    name: 'article_edit',
                  },
                  {
                    title: '删除文章',
                    name: 'article_delete',
                  },
                ],
              },
              {
                title: '评论管理',
                items: [
                  {
                    title: '添加评论',
                    name: 'add_comment',
                  },
                  {
                    title: '添加文章',
                    name: 'article_add',
                  },
                  {
                    title: '编辑文章',
                    name: 'article_edit',
                  },
                  {
                    title: '删除文章',
                    name: 'article_delete',
                  },
                ],
              },
            ],
            config: {
              name: 'Blog',
              version: '1.0',
              title: '博客',
              author: '后盾人',
            },
            pivot: {
              site_id: 1,
              module_id: 1,
              created_at: '2022-06-20T09:14:37.000000Z',
              updated_at: '2022-06-20T09:14:37.000000Z',
              is_default: null,
            },
          },
        ],
        links: {
          first: '/api/site/1/module?page=1',
          last: '/api/site/1/module?page=1',
          prev: null,
          next: null,
        },
        meta: {
          current_page: 1,
          from: 1,
          last_page: 1,
          links: [
            {
              url: null,
              label: '&laquo; 上一页',
              active: false,
            },
            {
              url: '/api/site/1/module?page=1',
              label: '1',
              active: true,
            },
            {
              url: null,
              label: '下一页 &raquo;',
              active: false,
            },
          ],
          path: '/api/site/1/module',
          per_page: 15,
          to: 2,
          total: 2,
        },
      }
    },
  },
] as MockMethod[]
