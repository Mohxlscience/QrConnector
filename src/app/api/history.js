import fs from 'fs';
import path from 'path';

const historyFilePath = path.join(process.cwd(), 'data', 'history.json');

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { timestamp, status, ethAddress } = req.body;

    // Lire l'historique existant
    let history = [];
    if (fs.existsSync(historyFilePath)) {
      const fileData = fs.readFileSync(historyFilePath, 'utf8');
      history = JSON.parse(fileData);
    }

    // Ajouter la nouvelle entrée
    history.push({ timestamp, status, ethAddress });

    // Écrire le nouvel historique dans le fichier
    fs.writeFileSync(historyFilePath, JSON.stringify(history, null, 2));

    res.status(200).json({ message: 'History updated' });
  } else if (req.method === 'GET') {
    // Lire et renvoyer l'historique
    let history = [];
    if (fs.existsSync(historyFilePath)) {
      const fileData = fs.readFileSync(historyFilePath, 'utf8');
      history = JSON.parse(fileData);
    }

    res.status(200).json(history);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}