import fsPromises from 'fs/promises';
import path from 'path';

export async function getLocalData() {
  const placeholderFilePath = path.join(process.cwd(), 'data/image-placeholder.json');

  const [placeholderData] = await Promise.all([
    fsPromises.readFile(placeholderFilePath),
  ]);

  const placeholderObjectData = JSON.parse(placeholderData);

  return {
    imagePlaceholder: placeholderObjectData,
  };
}
