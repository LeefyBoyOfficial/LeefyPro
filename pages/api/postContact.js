import * as fs from 'fs';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        // Process a Post Request
        try {
            // Read existing data
            let data = await fs.promises.readdir('./contactData');
            
            // Write new data
            await fs.promises.writeFile(`./contactData/${data.length + 1}.json`, JSON.stringify(req.body));
            
            res.status(200).json(req.body);
        } catch (error) {
            console.error('Error writing data:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        res.status(200).json(['allBlogs']);
    }
}
