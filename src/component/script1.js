window.addEventListener("DOMContentLoaded", () => {
  const blockContainer = document.getElementById("blocks");

  const blockSize = 50;
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  const numCols = Math.ceil(screenWidth / blockSize);
  const numRows = Math.ceil(screenHeight / blockSize);
  const numBlocks = numCols * numRows;

  // ✅ Set grid columns
  blockContainer.style.gridTemplateColumns = `repeat(${numCols}, ${blockSize}px)`;

  function createBlocks() {
    for (let i = 0; i < numBlocks; i++) {
      const block = document.createElement("div");
      block.classList.add("block");
      block.dataset.index = i;

      block.addEventListener("mousemove", highlightRandomNeighbors);

      blockContainer.appendChild(block);
    }
  }

  function highlightRandomNeighbors() {
    const index = parseInt(this.dataset.index);

    const neighbors = [
      index - 1/2,
      index + 1/2,
      index - numCols,
      index + numCols,
      index - numCols - 1/2,
      index - numCols + 1/2,
      index + numCols - 1/2,
      index + numCols + 1/2,
    ].filter(
      (i) =>
        i >= 0 &&
        i < numBlocks &&
        Math.abs((i % numCols) - (index % numCols)) <= 1
    );

    // Highlight current
    highlightBlock(this);

    // Highlight random neighbor
    shuffleArray(neighbors)
      .slice(0, 2)
      .forEach((nIndex) => {
        const neighbor = blockContainer.children[nIndex];
        if (neighbor) highlightBlock(neighbor);
      });
  }

  function highlightBlock(block) {
    block.classList.add("highlight");

    setTimeout(() => {
      block.classList.remove("highlight");
    }, 400);
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  createBlocks();
});