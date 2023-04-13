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
      winery: 'Maselva',
      wine: 'Merlot',
      rating: { average: 4.9 },
      id: 1,
    };
    const mockJsonPromiseProducts = Promise.resolve(mockResponseProducts);
    const mockFetchPromiseProducts = Promise.resolve({
      json: () => mockJsonPromiseProducts,
    });
    global.fetch = vi.fn().mockImplementation(() => mockFetchPromiseProducts);
    const prod = await getWines('Merlot');
    expect(prod).toHaveProperty('id');
    expect(prod).toHaveProperty('winery');
    expect(prod).toHaveProperty('wine');
    expect(prod).toHaveProperty('rating.average');
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
