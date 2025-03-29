document.addEventListener('DOMContentLoaded', function() {
    const cells = document.querySelectorAll('.cell');
    
    // 保留单元格点击效果
    cells.forEach(cell => {
        cell.addEventListener('click', function() {
            // 移除其他单元格的选中状态
            cells.forEach(c => c.classList.remove('excel-selected'));
            // 添加选中状态
            if (!this.classList.contains('empty')) {
                this.classList.add('excel-selected');
            }
        });
    });
    
    // 添加Excel选中样式
    const style = document.createElement('style');
    style.textContent = `
        .excel-selected {
            box-shadow: inset 0 0 0 2px #4472c4;
            background-color: #e8f0fe !important;
        }
    `;
    document.head.appendChild(style);
    
    // 移除所有高亮相关的处理

    // 添加表格行平衡处理，确保所有行有相同数量的单元格
    const rows = document.querySelectorAll('.row');
    let maxCells = 0;
    
    // 找出最长的一行有多少单元格
    rows.forEach(row => {
        const cellCount = row.querySelectorAll('.cell').length;
        maxCells = Math.max(maxCells, cellCount);
    });
    
    // 为短行添加空单元格，使所有行长度一致
    rows.forEach(row => {
        const currentCells = row.querySelectorAll('.cell').length;
        if (currentCells < maxCells) {
            for (let i = 0; i < maxCells - currentCells; i++) {
                const emptyCell = document.createElement('div');
                emptyCell.className = 'cell empty';
                row.appendChild(emptyCell);
            }
        }
    });
});
