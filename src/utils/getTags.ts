export const getTags = (posts) => [...new Set(posts.map((post) => post?.frontmatter?.tags ?? '').flat())].filter((tag) => Boolean(tag)).sort()
