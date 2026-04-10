export function renderShell() {
    return `
        <div class="glass-panel todo-container">
            <div class="todo-header">
                <h1 class="todo-title">Task List</h1>
                <p class="todo-subtitle">Stay productive today</p>
            </div>
            <div class="todo-form">
                <input type="text" id="todo-input" placeholder="What's next on the agenda?" autocomplete="off" />
                <button id="todo-add-btn">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </button>
            </div>
            <ul id="todo-list" class="todo-list"></ul>
        </div>
    `;
}

export function renderItem(todo) {
    const checkSvg = `<svg class="icon-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
    const deleteSvg = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;
    
    return `
        <li class="todo-item ${todo.todo ? 'todo-item--done' : ''}" data-id="${todo.id}">
            <button class="todo-check-btn ${todo.todo ? 'checked' : ''}" data-id="${todo.id}">
                ${todo.todo ? checkSvg : ''}
            </button>
            <span class="todo-text">${escapeHtml(todo.title)}</span>
            <button class="todo-delete-btn" data-id="${todo.id}">
                ${deleteSvg}
            </button>
        </li>
    `;
}

function escapeHtml(str) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}
