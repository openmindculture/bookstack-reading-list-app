const refineMasonryLayout = (gridId: string): void => {
  const layoutContainer = document.getElementById(gridId);
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

export default refineMasonryLayout;
