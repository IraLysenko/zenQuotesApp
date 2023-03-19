import { makeAuthorsUnique } from './helpers';

describe('makeAuthorsUnique(authors)', () => {
  describe('when authors is undefined', () => {
    it('should return an empty array', function () {
      const result = makeAuthorsUnique(undefined);
      expect(result).toEqual([]);
    });
  });
  describe('when authors is an empty array', () => {
    it('should return an empty array', function () {
      const result = makeAuthorsUnique([]);
      expect(result).toEqual([]);
    });
  });
  describe('when authors is already a list of unique authors', () => {
    it('should return an array with the same authors', function () {
      const author1 = { id: 'ira', name: 'Ira' };
      const author2 = { id: 'danya', name: 'Danya' };
      const uniqueAuthors = [author1, author2];
      const result = makeAuthorsUnique(uniqueAuthors);
      expect(result.filter((a: unknown) => a === author1).length).toEqual(1);
      expect(result.filter((a: unknown) => a === author2).length).toEqual(1);
    });
  });
  describe('when authors has duplicate authors', () => {
    it('should return an array with only unique authors', function () {
      const author1 = { id: 'ira', name: 'Ira' };
      const author2 = { id: 'danya', name: 'Danya' };
      const authorsWithDuplicates = [author1, author2, author2];
      const result = makeAuthorsUnique(authorsWithDuplicates);
      expect(result.filter((a: unknown) => a === author1).length).toEqual(1);
      expect(result.filter((a: unknown) => a === author2).length).toEqual(1);
    });
  });
});
