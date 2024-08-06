import axios from 'axios';
import { parseString } from 'xml2js';

const MEDIUM_URL = 'https://medium.com/feed/@brianjenney';

export default async function handler(req, res) {
  console.log('api endpoint');
  const { data } = await axios.get(MEDIUM_URL);

  parseString(data, (err, result) => {
    if (err) {
      res.status(500).json({ error: 'Error parsing the data' });
    } else {
      const posts = JSON.parse(JSON.stringify(result.rss.channel[0].item));
      res.status(200).json(posts);
    }
  });
}
