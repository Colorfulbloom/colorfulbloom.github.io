/**
 * Record cards for article tables (the Ledger direction). CKEditor 5 writes
 * plain figure.table markup; this adds what CSS cannot read on its own, as
 * the code block wrapper adds its bar:
 * - data-label on every body cell, from its column's header text, so a card
 *   can name each value;
 * - data-cell="short" on cells with a short value (a word or two, a single
 *   inline code or Label), which sit on the card's top line;
 * - ARIA table roles, since display: block/flex on table parts drops the
 *   table semantics in some browsers;
 * - .is-records on the figure, so the card layout applies only once the
 *   cells are labelled (without it the table stays a table).
 * A Drupal port would do the same in a theme behavior or the body partial.
 */
const SHORT_MAX = 20;

export const labelTableCells = (root: ParentNode): void => {
  root.querySelectorAll<HTMLElement>('figure.table').forEach((figure) => {
    if (figure.classList.contains('is-records')) return;
    const headers = Array.from(figure.querySelectorAll('thead th')).map((th) =>
      (th.textContent ?? '').trim(),
    );
    if (!headers.length) return;
    const roles: [string, string][] = [
      ['table', 'table'],
      ['thead, tbody', 'rowgroup'],
      ['tr', 'row'],
      ['thead th', 'columnheader'],
      ['tbody th', 'rowheader'],
      ['tbody td', 'cell'],
    ];
    roles.forEach(([selector, role]) =>
      figure.querySelectorAll(selector).forEach((el) => el.setAttribute('role', role)),
    );
    figure.querySelectorAll('tbody tr').forEach((row) => {
      Array.from(row.children).forEach((cell, index) => {
        if (headers[index]) cell.setAttribute('data-label', headers[index]);
        const text = (cell.textContent ?? '').trim();
        const onlyToken =
          cell.children.length === 1 &&
          cell.firstElementChild?.matches('code, .label') &&
          text === (cell.firstElementChild.textContent ?? '').trim();
        if (index > 0 && (onlyToken || text.length <= SHORT_MAX)) {
          cell.setAttribute('data-cell', 'short');
        }
      });
    });
    figure.classList.add('is-records');
  });
};
