import path from 'path'
import { writeFileSync } from 'fs'
import { Feed } from 'feed'
import { createContentLoader, type SiteConfig } from 'vitepress'

const baseUrl = `https://blog.sujie-168.top`

export async function genFeed(config: SiteConfig) {
  const feed = new Feed({
    title: 'sujie-168',
    description: '我的个人技术博客',
    id: baseUrl,
    link: baseUrl,
    language: 'zh-CN',
    image: `${baseUrl}/logo.jpg`,
    favicon: `${baseUrl}/favicon.ico`,
    copyright: 'Copyright © 2019-present sujie-168'
  })

  // Load all markdown files in the note directory
  const posts = await createContentLoader('note/**/*.md', {
    excerpt: true,
    render: true
  }).load()

  // Sort by date
  posts.sort(
    (a, b) =>
      +new Date(b.frontmatter.date as string) -
      +new Date(a.frontmatter.date as string)
  )

  for (const { url, excerpt, frontmatter, html } of posts) {
    // Skip index pages or pages without dates
    if (url.endsWith('/') || url.endsWith('index.html') || !frontmatter.date) continue;

    feed.addItem({
      title: frontmatter.title,
      id: `${baseUrl}${url}`,
      link: `${baseUrl}${url}`,
      description: frontmatter.description || excerpt,
      content: html,
      author: [
        {
          name: 'sujie',
          email: 'su2054552689@gmail.com',
          link: baseUrl
        }
      ],
      date: frontmatter.date ? new Date(frontmatter.date) : new Date()
    })
  }

  writeFileSync(path.join(config.outDir, 'feed.xml'), feed.rss2())
}
