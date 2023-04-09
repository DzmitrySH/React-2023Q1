import { vi } from 'vitest';
import { getWines, getWinesDetails } from '../components/Api/Api';

describe('getProducts and Details functions', () => {
  beforeEach(() => {
    global.fetch = vi.fn();
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  test('getProducts returns an array of products', async () => {
    const mockResponseProducts = {
      product: [{ winery: 'Maselva', wine: 'Merlot', rating: { average: 4.9 }, id: 1 }],
    };
    const mockJsonPromiseProducts = Promise.resolve(mockResponseProducts);
    const mockFetchPromiseProducts = Promise.resolve({
      json: () => mockJsonPromiseProducts,
    });
    global.fetch = vi.fn().mockImplementation(() => mockFetchPromiseProducts);
    const product = await getWines('Merlot');
    expect(Array.isArray(product)).toBe(true);
    expect(product[0]).toHaveProperty('id');
    expect(product[0]).toHaveProperty('winery');
    expect(product[0]).toHaveProperty('wine');
    expect(product[0]).toHaveProperty('rating.average');
  });

  test('getProductDetails returns a product object', async () => {
    const mockProduct = { winery: 'Maselva', rating: { average: 4.9 }, id: 1 };
    const mockResponseProduct = Promise.resolve(mockProduct);
    const mockFetchPromiseProduct = Promise.resolve({
      json: () => mockResponseProduct,
    });
    global.fetch = vi.fn().mockImplementation(() => mockFetchPromiseProduct);

    const product = await getWinesDetails(1);
    expect(typeof product).toBe('object');
    expect(product).toHaveProperty('id');
    expect(product).toHaveProperty('winery');
    expect(product).toHaveProperty('rating.average');
  });
});
