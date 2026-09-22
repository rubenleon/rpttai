const collator = new Intl.Collator('es', {
    numeric: true,
    sensitivity: 'base',
})

const getCellValue = (row, index) => row.cells[index]?.textContent.trim() ?? ''

const parseNumericValue = (value) => {
    const normalized = value
        .replace(/\s/g, '')
        .replace(/€/g, '')
        .replace(/\./g, '')
        .replace(',', '.')

    if (!/^-?\d+(\.\d+)?$/.test(normalized)) {
        return null
    }

    return Number(normalized)
}

const compareValues = (a, b) => {
    const aNumber = parseNumericValue(a)
    const bNumber = parseNumericValue(b)

    if (aNumber !== null && bNumber !== null) {
        return aNumber - bNumber
    }

    return collator.compare(a, b)
}

export const enableTableSorting = (root = document) => {
    root.addEventListener('click', (event) => {
        const header = event.target.closest('.tablaMinisterios th')
        if (!header) return

        const table = header.closest('table')
        const tbody = table?.tBodies[0]
        if (!table || !tbody) return

        const columnIndex = Array.from(header.parentElement.children).indexOf(header)
        const direction = header.dataset.sortDirection === 'asc' ? 'desc' : 'asc'
        const multiplier = direction === 'asc' ? 1 : -1
        const rows = Array.from(tbody.rows)

        rows.sort((a, b) => {
            return compareValues(getCellValue(a, columnIndex), getCellValue(b, columnIndex)) * multiplier
        })

        header.parentElement.querySelectorAll('th').forEach((cell) => {
            cell.removeAttribute('data-sort-direction')
            cell.setAttribute('aria-sort', 'none')
        })

        header.dataset.sortDirection = direction
        header.setAttribute('aria-sort', direction === 'asc' ? 'ascending' : 'descending')
        tbody.append(...rows)
    })
}
