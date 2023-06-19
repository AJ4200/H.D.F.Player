import { NextApiRequest, NextApiResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const searchHandler = (req: NextApiRequest, res: NextApiResponse) => {
  const searchTerm = req.query.term as string;
  const publicFolderPath = path.join(process.cwd(), 'public', 'games', 'flash');

  fs.readdir(publicFolderPath, (err, files) => {
    if (err) {
      console.error('Error reading public folder:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    const filteredFiles = files.filter((file) =>
      file.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const searchResults = filteredFiles.map((file) => {
      return {
        id: file,
        name: file,
      };
    });

    res.status(200).json(searchResults);
  });
};

export default searchHandler;
