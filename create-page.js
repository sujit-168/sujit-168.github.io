#!/usr/bin/env node

// module
import fs from "node:fs";
import path from "node:path";

const [, , pageName, ...args] = process.argv;

// arg prase
const options = {
  categories: [],
  tags: [],
  section: [],
};

for (const arg of args) {
  if (arg.startsWith("-")) {
    const option = arg.slice(1);
    const value = args[args.indexOf(arg) + 1];

    if (option === "h" || option === "help") {
      console.log(`Usage: create-page <page-name> [options]`);
      console.log("");
      console.log("Options:");
      console.log("  -c, --categories <categories>  Comma-separated list of categories");
      console.log("  -t, --tags <tags>  Comma-separated list of tags");
      console.log("  -s, --section <section>  Section name");
      console.log("  -h, --help  Display this help message");
      console.log(`   usage:  npm run create-page "技术分享随笔" -s "ros" -c "技术" -t "JavaScript"`);
      process.exit(0);
    } else if (option === "c" || option === "categories") {
      options.categories = value.split(",");
    } else if (option === "t" || option === "tags") {
      options.tags = value.split(",");
    } else if (option === "s" || option === "section") {
      options.section = value.split(",");
    } else {
      console.error(`Invalid option: ${arg}`);
      process.exit(1);
    }
  }
}

// check pageName
if (!pageName) {
  console.error("请输入页面名称");
  process.exit(1);
}

const date = new Date().toISOString().split("T")[0];
const [year, month, day] = date.split("-");

// Format time
const time = new Date().toLocaleTimeString("zh-CN", {
  hour: "numeric",
  minute: "numeric",
  // second: "numeric",
  hour12: false,
});

// format dir Path
const dirPath = path.resolve(
  "docs",
  ...options.section.map((section) => section.toString()),
  year.toString(),
  month.toString(),
  day.toString()
);

// mkdir
try {
  await fs.promises.mkdir(dirPath, { recursive: true });
} catch (err) {
  console.error(err);
  process.exit(1);
}

const fullDate = `${date} ${time}`;

// insert the content prepared
const content = `---
title: ${pageName}
date: ${fullDate}
categories: [${options.categories.join(", ")}]
tags: [${options.tags.join(", ")}]
copyright: true
---
`;

const filePath = path.resolve(dirPath, `${pageName}.md`);

// operation
fs.writeFile(filePath, content, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  console.log(`页面 ${dirPath}/${pageName}.md 创建成功！`);
});
