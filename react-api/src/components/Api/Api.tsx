import { IWines } from '../interface/interface';

async function getWines(search: string): Promise<IWines[]> {
  const res = await fetch(`https://api.sampleapis.com/wines/red/?wine=${search}`);
  const data = await res.json();
  return data.products;
}

async function getWinesDetails(productId: number): Promise<IWines> {
  const res = await fetch(`https://api.sampleapis.com/wines/red/${productId}`);
  const data = await res.json();
  return data;
}

export { getWines, getWinesDetails };
