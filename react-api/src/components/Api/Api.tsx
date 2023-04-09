import { IWines } from '../interface/interface';

async function getWines(search: string): Promise<IWines[]> {
  const res = await fetch(`https://api.sampleapis.com/wines/reds/?wine=${search}`);
  const data = await res.json();
  return data;
}

async function getWinesDetails(productId: number): Promise<IWines> {
  const res = await fetch(`https://api.sampleapis.com/wines/reds/${productId}`);
  const data = await res.json();
  return data;
}

export { getWines, getWinesDetails };
