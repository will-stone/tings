import strngs, { isCompact, isEmpty, isNotEmpty } from '.'

describe('property method', () => {
  describe('or', () => {
    it('should be valid 1', () => {
      const validator = strngs.or(isEmpty, isCompact)
      expect(validator('')).toEqual({ valid: true, message: 'is empty' })
    })

    it('should be valid 2', () => {
      const validator = strngs.or(isEmpty, isCompact)
      expect(validator('compact')).toEqual({
        valid: true,
        message: 'is compact',
      })
    })

    it('should be invalid', () => {
      const validator = strngs.or(isEmpty, isCompact)
      expect(validator('not compact')).toEqual({
        valid: false,
        message: 'no validators passed',
      })
    })

    it('should throw', () => {
      const validator = strngs.or(isEmpty, isCompact)
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      expect(() => validator(123)).toThrow('Input is not a string')
    })
  })

  describe('and', () => {
    it('should be valid 1', () => {
      const validator = strngs.and(isNotEmpty, isCompact)
      expect(validator('compact')).toEqual({
        valid: true,
        message: 'all validators passed',
      })
    })

    it('should be invalid', () => {
      const validator = strngs.and(isEmpty, isCompact)
      expect(validator('')).toEqual({
        valid: false,
        message: 'not compact',
      })
    })

    it('should throw', () => {
      const validator = strngs.and(isEmpty, isCompact)
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      expect(() => validator(123)).toThrow('Input is not a string')
    })
  })
})

describe('inline method', () => {
  describe('or', () => {
    it('should be valid 1', () => {
      expect(strngs('').or(isEmpty, isCompact)).toEqual({
        valid: true,
        message: 'is empty',
      })
    })

    it('should be valid 2', () => {
      expect(strngs('compact').or(isEmpty, isCompact)).toEqual({
        valid: true,
        message: 'is compact',
      })
    })

    it('should be invalid', () => {
      expect(strngs('not compact').or(isEmpty, isCompact)).toEqual({
        valid: false,
        message: 'no validators passed',
      })
    })

    it('should throw', () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      expect(() => strngs(123).or(isEmpty, isCompact)).toThrow(
        'Input is not a string',
      )
    })
  })

  describe('and', () => {
    it('should be valid 1', () => {
      expect(strngs('compact').and(isNotEmpty, isCompact)).toEqual({
        valid: true,
        message: 'all validators passed',
      })
    })

    it('should be invalid', () => {
      expect(strngs('').and(isEmpty, isCompact)).toEqual({
        valid: false,
        message: 'not compact',
      })
    })

    it('should throw', () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      expect(() => strngs(123).and(isEmpty, isCompact)).toThrow(
        'Input is not a string',
      )
    })
  })
})
