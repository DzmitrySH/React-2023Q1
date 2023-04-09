import { IWines } from '../interface/interface';

async function getWines(search: string): Promise<IWines[]> {
  const res = await fetch(`https://api.sampleapis.com/wines/port/?wine=${search}`);
  const data = await res.json();
  return data.product;
}

async function getWinesDetails(productId: number): Promise<IWines> {
  const res = await fetch(`https://api.sampleapis.com/wines/port/${productId}`);
  const data = await res.json();
  return data;
}

export { getWines, getWinesDetails };
