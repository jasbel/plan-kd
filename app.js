document.addEventListener('DOMContentLoaded', () => {
  const quantityInput = document.getElementById('quantity');
  const sizeSelect = document.getElementById('size');
  const badgeCheckbox = document.getElementById('badge');
  const categoriesContainer = document.getElementById('categories');
  const generateBtn = document.getElementById('generateBtn');
  const downloadBtn = document.getElementById('downloadBtn');
  const selectAllBtn = document.getElementById('selectAll');
  const selectNoneBtn = document.getElementById('selectNone');
  const grid = document.getElementById('grid');
  const status = document.getElementById('status');

  let generatedImages = [];

  function getSelectedCategories() {
    return Array.from(categoriesContainer.querySelectorAll('input[type="checkbox"]:checked')).map(c => c.value);
  }

  selectAllBtn.addEventListener('click', () => {
    categoriesContainer.querySelectorAll('input[type="checkbox"]').forEach(c => c.checked = true);
  });

  selectNoneBtn.addEventListener('click', () => {
    categoriesContainer.querySelectorAll('input[type="checkbox"]').forEach(c => c.checked = false);
  });

  generateBtn.addEventListener('click', () => {
    const categories = getSelectedCategories();
    if (categories.length === 0) {
      status.textContent = 'Selecciona al menos una categoría.';
      return;
    }

    let quantity = parseInt(quantityInput.value, 10);
    if (isNaN(quantity) || quantity < 1) quantity = 1;
    if (quantity > 200) quantity = 200;
    quantityInput.value = quantity;

    const size = parseInt(sizeSelect.value, 10);
    const withBadge = badgeCheckbox.checked;

    generatedImages = [];
    grid.innerHTML = '';

    for (let i = 0; i < quantity; i++) {
      const categoryKey = categories[i % categories.length] || categories[Math.floor(Math.random() * categories.length)];
      const result = generateProductSVG(categoryKey, size, withBadge);
      const fileName = `${slugify(result.category)}-${result.sku}.svg`;
      generatedImages.push({ fileName, svg: result.svg });

      const thumb = document.createElement('div');
      thumb.className = 'thumb';
      const wrap = document.createElement('div');
      wrap.className = 'svg-wrap';
      wrap.innerHTML = result.svg;
      const label = document.createElement('div');
      label.className = 'name';
      label.textContent = `${result.name} · ${result.category}`;
      thumb.appendChild(wrap);
      thumb.appendChild(label);
      grid.appendChild(thumb);
    }

    downloadBtn.disabled = false;
    status.textContent = `${quantity} imagen(es) generada(s) correctamente.`;
  });

  downloadBtn.addEventListener('click', async () => {
    if (generatedImages.length === 0) return;
    status.textContent = 'Comprimiendo imágenes...';

    const zip = new JSZip();
    const folder = zip.folder('productos-svg');
    const usedNames = new Map();

    generatedImages.forEach(({ fileName, svg }) => {
      let finalName = fileName;
      if (usedNames.has(fileName)) {
        const count = usedNames.get(fileName) + 1;
        usedNames.set(fileName, count);
        finalName = fileName.replace('.svg', `-${count}.svg`);
      } else {
        usedNames.set(fileName, 0);
      }
      folder.file(finalName, svg);
    });

    const blob = await zip.generateAsync({ type: 'blob' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `productos-svg-${Date.now()}.zip`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    status.textContent = `ZIP descargado con ${generatedImages.length} imagen(es).`;
  });

  function slugify(text) {
    return text
      .toLowerCase()
      .normalize('NFD').replace(/[̀-ͯ]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }
});
