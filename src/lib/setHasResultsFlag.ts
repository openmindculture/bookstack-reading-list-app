export default function setHasResultsFlag(hasResults: boolean): void {
  const mainWrapper = document.querySelector('main');
  if (mainWrapper) {
    if (hasResults) {
      mainWrapper.classList.add('has-search-results');
    } else {
      mainWrapper.classList.remove('has-search-results');
    }
  }
}
