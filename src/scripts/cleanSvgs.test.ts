import { cleanSvg } from './cleanSvgs';

const svg = (inside: string) =>
  `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n${inside}\n</svg>\n`;

describe('cleanSvg', () => {
  test('black fills and outlines become currentColor', () => {
    expect(cleanSvg(svg('<path d="M1 1" fill="black" stroke="black"/>'))).toBe(
      svg('<path d="M1 1" fill="currentColor" stroke="currentColor"/>')
    );
  });

  test('other ways of writing black', () => {
    expect(
      cleanSvg(
        svg(
          '<path d="M1" fill="#000"/><path d="M2" stroke="#000000"/><path d="M3" fill="#333333"/>'
        )
      )
    ).toBe(
      svg(
        '<path d="M1" fill="currentColor"/><path d="M2" stroke="currentColor"/><path d="M3" fill="currentColor"/>'
      )
    );
  });

  test('white fills become none', () => {
    expect(cleanSvg(svg('<path d="M1 1" fill="white"/>'))).toBe(
      svg('<path d="M1 1" fill="none"/>')
    );
  });

  test('full-size background rectangles are removed', () => {
    expect(
      cleanSvg(
        svg(
          '<rect width="24" height="24" fill="white"/>\n<path d="M1 1" fill="black"/>'
        )
      )
    ).toBe(svg('<path d="M1 1" fill="currentColor"/>'));
    expect(
      cleanSvg(
        svg(
          '<rect width="24" height="24" fill="none"/>\n<path d="M1 1" fill="currentColor"/>'
        )
      )
    ).toBe(svg('<path d="M1 1" fill="currentColor"/>'));
  });

  test('shapes that are part of the icon are kept', () => {
    const icon = svg(
      '<rect x="2" y="2" width="3" height="3" fill="currentColor"/><rect width="24" height="24" fill="currentColor"/>'
    );
    expect(cleanSvg(icon)).toBe(icon);
  });

  test('masks are left alone', () => {
    const masked = svg(
      '<mask id="m" fill="white"><path d="M1" fill="black"/></mask>\n<path d="M2" fill="black" mask="url(#m)"/>'
    );
    expect(cleanSvg(masked)).toBe(
      svg(
        '<mask id="m" fill="white"><path d="M1" fill="black"/></mask>\n<path d="M2" fill="currentColor" mask="url(#m)"/>'
      )
    );
  });

  test('other colors are left alone', () => {
    const icon = svg('<path d="M1" fill="currentColor" stroke="none"/>');
    expect(cleanSvg(icon)).toBe(icon);
  });
});
