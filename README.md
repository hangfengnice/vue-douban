# douban

- 加载图片 403 解决
  - `<meta name="referrer" content="no-referrer" />`

- 使用编程式导航
路径处使用 name 不然取不到参数

`this.$router.push({name: 'moreMovie', params: { title: this.movies.category}})
`

- img 不能使用 ::after ::before
