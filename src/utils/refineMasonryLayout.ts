const refineMasonryLayout = (gridId?: string, grid?: HTMLElement): void => {
  const layoutContainer = gridId ? document.getElementById(gridId) : grid;
  if (layoutContainer) {
    const tileElements = layoutContainer.children;
    let previousOffset = 0;
    let currentRow = 1;
    for (const tileElement of tileElements as HTMLCollectionOf<HTMLElement>) {
      if (tileElement.offsetTop > previousOffset) {
        currentRow++;
      }
      previousOffset = tileElement.offsetTop;
      tileElement.classList.add('row');
      tileElement.classList.add('row-' + currentRow);
      if (currentRow % 2 == 0) {
        tileElement.classList.add('custom-shifted');
      }
    }
  }
}

export const refineAllMasonryLayouts = (): void => {
  let adjustedGridChildren = document.getElementsByClassName('custom-shifted');
  for (let adjusted of adjustedGridChildren) {
    adjusted.classList.remove('custom-shifted');
  }
  let masonryGridElements = document.getElementsByClassName('custom-grid-has-row-behavior');
  for (let masonry of masonryGridElements) {
    refineMasonryLayout(undefined, masonry as HTMLElement);
  }
}

addEventListener('DOMContentLoaded', () => {
  refineAllMasonryLayouts()
})

addEventListener('resize', () => {
  refineAllMasonryLayouts();
})

export default refineMasonryLayout;
