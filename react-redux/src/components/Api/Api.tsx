import { IWines } from '../interface/interface';

async function getWines(search: string): Promise<IWines[]> {
  try {
    const res = await fetch(`https://api.sampleapis.com/wines/port/?winery=Toro Albalá${search}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log('Data is not fetched');
    return [];
  }
}

async function getWinesDetails(productId: number): Promise<IWines | undefined> {
  try {
    const res = await fetch(`https://api.sampleapis.com/wines/port/${productId}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log('Data is not fetched');
  }
}

export { getWines, getWinesDetails };
