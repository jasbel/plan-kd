document.addEventListener('DOMContentLoaded', () => {
  const quantityInput = document.getElementById('quantity');
  const sizeSelect = document.getElementById('size');
  const formatSelect = document.getElementById('format');
  const badgeCheckbox = document.getElementById('badge');
  const categoriesContainer = document.getElementById('categories');
  const generateBtn = document.getElementById('generateBtn');
  const downloadBtn = document.getElementById('downloadBtn');
  const selectAllBtn = document.getElementById('selectAll');
  const selectNoneBtn = document.getElementById('selectNone');
  const grid = document.getElementById('grid');
  const status = document.getElementById('status');

  let generatedImages = [];
  let lastSize = parseInt(sizeSelect.value, 10);

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
    lastSize = size;

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

    const format = formatSelect.value;
    const folderName = `productos-${format}`;

    try {
      const zip = new JSZip();
      const folder = zip.folder(folderName);
      const usedNames = new Map();

      for (let i = 0; i < generatedImages.length; i++) {
        const { fileName, svg } = generatedImages[i];
        status.textContent = `Procesando imagen ${i + 1} de ${generatedImages.length}...`;

        let finalName = fileName.replace(/\.svg$/, `.${format}`);
        if (usedNames.has(finalName)) {
          const count = usedNames.get(finalName) + 1;
          usedNames.set(finalName, count);
          finalName = finalName.replace(`.${format}`, `-${count}.${format}`);
        } else {
          usedNames.set(finalName, 0);
        }

        if (format === 'svg') {
          folder.file(finalName, svg);
        } else {
          const mimeType = format === 'png' ? 'image/png' : 'image/jpeg';
          const imageBlob = await svgToImageBlob(svg, lastSize, mimeType);
          folder.file(finalName, imageBlob);
        }
      }

      status.textContent = 'Comprimiendo imágenes...';
      const blob = await zip.generateAsync({ type: 'blob' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `productos-${format}-${Date.now()}.zip`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      status.textContent = `ZIP descargado con ${generatedImages.length} imagen(es) en formato ${format.toUpperCase()}.`;
    } catch (err) {
      status.textContent = `Error al generar el ZIP: ${err.message}`;
    }
  });

  function svgToImageBlob(svgString, size, mimeType) {
    return new Promise((resolve, reject) => {
      const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
      const svgUrl = URL.createObjectURL(svgBlob);
      const img = new Image();

      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d');

        if (mimeType === 'image/jpeg') {
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(0, 0, size, size);
        }

        ctx.drawImage(img, 0, 0, size, size);
        URL.revokeObjectURL(svgUrl);

        canvas.toBlob((blob) => {
          if (blob) {
            resolve(blob);
          } else {
            reject(new Error('No se pudo convertir la imagen.'));
          }
        }, mimeType, 0.92);
      };

      img.onerror = () => {
        URL.revokeObjectURL(svgUrl);
        reject(new Error('No se pudo cargar el SVG para convertirlo.'));
      };

      img.src = svgUrl;
    });
  }

  function slugify(text) {
    return text
      .toLowerCase()
      .normalize('NFD').replace(/[̀-ͯ]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }
});
