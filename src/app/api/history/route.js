import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const historyFilePath = path.join(process.cwd(), 'data', 'history.json');

// Créez le dossier `data` s'il n'existe pas
if (!fs.existsSync(path.dirname(historyFilePath))) {
  fs.mkdirSync(path.dirname(historyFilePath), { recursive: true });
}

// POST : Ajouter une entrée à l'historique
export async function POST(request) {
  try {
    const { timestamp, status, ethAddress } = await request.json();

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

    return NextResponse.json({ message: 'History updated', history });
  } catch (error) {
    console.error('Error in POST /api/history:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}

// GET : Récupérer l'historique
export async function GET() {
  try {
    // Lire et renvoyer l'historique
    let history = [];
    if (fs.existsSync(historyFilePath)) {
      const fileData = fs.readFileSync(historyFilePath, 'utf8');
      history = JSON.parse(fileData);
    }

    return NextResponse.json(history);
  } catch (error) {
    console.error('Error in GET /api/history:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}