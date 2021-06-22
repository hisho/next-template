export const pages = [
  {
    page_id: '0',
    title: 'テンプレート',
    description: 'テンプレートページの説明文',
    path: '/template/',
    parent_id: '1',
  },
  {
    page_id: '1',
    title: 'トップページ',
    path: '/',
  },
  {
    page_id: '999999',
    title: '404 not found',
    path: '/404/',
    parent_id: '1',
  },
] as const;
