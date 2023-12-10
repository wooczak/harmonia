import { TextSize } from '@/theme/types'
import { textMapper } from '../../../src/components/atoms/Text/helpers'
import { render, screen } from '@testing-library/react'

describe('WHEN the textMapper is used', function () {
  describe('AND it receives a size and children props', function () {
    it('THEN return a proper text element (h1)', function () {
      render(textMapper(TextSize.H1, 'Hello'))

      expect(screen.getByRole('heading', { level: 1 })).toMatchInlineSnapshot(`
      <h1>
        Hello
      </h1>
      `)
    })

    it('THEN return a proper text element (h1)', function () {
      render(textMapper(TextSize.H4, 'Hello'))

      expect(screen.getByRole('heading', { level: 4 })).toMatchInlineSnapshot(`
      <h4>
        Hello
      </h4>
      `)
    })

    it('THEN return a proper text element (p - base)', function () {
      render(textMapper(TextSize.BASE, 'Hello'))

      expect(screen.getByText('Hello')).toMatchInlineSnapshot(
        `
        <p>
          Hello
        </p>
        `
      )
    })

    it('THEN return a proper text element (p - small)', function () {
      render(textMapper(TextSize.SMALL, 'Hello'))

      expect(screen.getByText('Hello')).toMatchInlineSnapshot(`
<p>
  Hello
</p>
`)
    })

    it('THEN return a proper text element (p - small) with additional class', function () {
      render(textMapper(TextSize.SMALL, 'Hello', 'additional-class'))

      expect(screen.getByText('Hello')).toMatchInlineSnapshot(
        `
        <p
          class="text-small additional-class"
        >
          Hello
        </p>
        `
      )
    })
  })
})
