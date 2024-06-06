import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';

export default class ProductRepository {
  private _serverDistFolder: string;
  constructor() {
    this._serverDistFolder = dirname(fileURLToPath(import.meta.url));
  }

  getAllData = async () => {
    try {
      const filePath = path.join(
        this._serverDistFolder,
        '../browser/products.json'
      );
      const data = await fs.readFile(filePath, 'utf-8');
      const jsonData = JSON.parse(data);
      return jsonData;
    } catch (error) {
      console.log('Error reading file:', error);
      throw error;
    }
  };
}
