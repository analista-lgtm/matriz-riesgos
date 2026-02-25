function toggleColumn(num) {
    const columnas = [
        document.getElementById('col-1'),
        document.getElementById('col-2'),
        document.getElementById('col-3')
    ];

    columnas.forEach((col, index) => {
        if (!col) return; // Seguridad por si falta algún ID
        if ((index + 1) === num) {
            col.classList.remove('collapsed');
            col.classList.add('expanded');
        } else {
            col.classList.remove('expanded');
            col.classList.add('collapsed');
        }
    });
}