export default [
  {
    path: '/',
    component: () => import('layouts/default'),
    children: [
      { path: '/home', name: 'home', component: () => import('pages/Home') },
      { path: '/aboutb', name: 'aboutb', component: () => import('pages/AboutBookmarks') },
      { path: '/aboutc', name: 'aboutc', component: () => import('pages/AboutConversations') },
      { path: '/aboutt', name: 'aboutt', component: () => import('pages/AboutTags') },
      { path: '/signin', name: 'signin', component: () => import('pages/SignIn') },
      { path: '/register', name: 'register', component: () => import('pages/Register') },
      { path: '/chat', name: 'chat', component: () => import('pages/Chat'), meta: { requiresAuth: true } },
      { path: '/admin', name: 'admin', component: () => import('pages/Admin') },
      { path: '/history', name: 'history', component: () => import('pages/History') },
      { path: '/bookmark/new', name: 'bookmarknew', component: () => import('pages/BookmarkForm') },
      { path: '/bookmarks', name: 'bookmarks', component: () => import('pages/BookmarkIndex') },
      { path: '/quests', name: 'quests', component: () => import('pages/Quests') },
      { path: '/tags', name: 'tags', component: () => import('pages/TagIndex') },
      { path: '/ether', name: 'ether', component: () => import('pages/EtherpadView') },
      { path: '/questedit', name: 'questedit', component: () => import('pages/QuestForm') },
      { path: '/bookmarkview/:id', name: 'bookmarkview', component: () => import('pages/QuestView'), props: true },
      { path: '/questview/:id', name: 'questview', component: () => import('pages/QuestView'), props: true },
      { path: '/profile/:id', name: 'profile', component: () => import('pages/ProfileForm'), props: true },
      { path: '/search/:q', name: 'search', component: () => import('pages/Search'), props: true },
      { path: '/userview/:id', name: 'userview', component: () => import('pages/UserView'), props: true },
      { path: '/tagview/:id', name: 'tagview', component: () => import('pages/TagView'), props: true },
      { path: '/tagform/:id', name: 'tagform', component: () => import('pages/TagForm'), props: true },
      { path: '/nodeedit/:type/:parentType/:id/:label', name: 'nodeedit', component: () => import('pages/NodeForm'), props: true },
      { path: '/nodeupdate/:type/:id', name: 'nodeupdate', component: () => import('pages/NodeForm'), props: true }

    ]
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
