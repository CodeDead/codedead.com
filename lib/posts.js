import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export function* readAllFiles(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });

  for (const file of files) {
    if (file.isDirectory()) {
      yield* readAllFiles(path.join(dir, file.name));
    } else {
      yield path.join(dir, file.name);
    }
  }
}

export const getSortedPostsData = () => {
  // Get file names under /posts
  const fileNames = readAllFiles(postsDirectory);
  const allPostsData = [];

  fileNames.forEach((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fileContents = fs.readFileSync(fileName, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    allPostsData.push({
      id,
      ...matterResult.data,
    });
  });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
};

export const getAllPosts = () => {
  // Get file names under /posts
  const fileNames = readAllFiles(postsDirectory);
  const allPostsData = [];

  fileNames.forEach((fileName) => {
    const day = path.basename(path.dirname(fileName));
    const month = path.basename(path.dirname(path.dirname(fileName)));
    const year = path.basename(path.dirname(path.dirname(path.dirname(fileName))));
    const id = path.parse(fileName).name;

    // Combine the data with the id
    allPostsData.push({
      params: {
        id: id,
        year: year,
        month: month,
        day: day,
      },
    });
  });

  // Sort posts by date
  return allPostsData;
};

export const getPostData = (year, month, day, id) => {
  const fullPath = path.join(postsDirectory, year, month, day, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Combine the data with the id
  return {
    id,
    content: matterResult.content,
    ...matterResult.data,
  };
};

export const getLastPosts = (limit) => {
  const allPostsData = getSortedPostsData();
  return allPostsData.slice(0, limit);
};
