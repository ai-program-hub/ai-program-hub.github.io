// 程序库页面 JavaScript

let allPrograms = [];
let filteredPrograms = [];

// 加载所有程序
async function loadPrograms() {
    try {
        const response = await fetch('data/programs.json');
        const data = await response.json();
        allPrograms = data.programs;
        filteredPrograms = allPrograms;
        
        renderPrograms();
        updateStats();
    } catch (error) {
        console.error('加载程序数据失败:', error);
        document.getElementById('program-list').innerHTML = '<p>加载失败，请刷新页面重试。</p>';
    }
}

// 渲染程序列表
function renderPrograms() {
    const container = document.getElementById('program-list');
    
    if (filteredPrograms.length === 0) {
        container.innerHTML = '<p style="text-align: center; padding: 3rem; color: #666;">没有找到匹配的程序</p>';
        return;
    }
    
    container.innerHTML = filteredPrograms.map(program => createProgramCard(program)).join('');
}

// 创建程序卡片
function createProgramCard(program) {
    const categoryIcons = {
        'tool': '🔧',
        'game': '🎮',
        'automation': '🤖',
        'data': '📊'
    };
    
    const difficultyStars = '⭐'.repeat(program.difficulty);
    const icon = categoryIcons[program.category] || '📦';
    
    return `
        <div class="program-card">
            <div class="program-header">
                <span class="program-icon">${icon}</span>
                <div class="program-title">
                    <h3>${program.name}</h3>
                    <div class="program-meta">
                        <span>${program.language}</span> • 
                        <span>难度：${difficultyStars}</span> • 
                        <span>AI: ${program.aiGenerated.model}</span>
                    </div>
                </div>
            </div>
            <p class="program-description">${program.description}</p>
            <div class="program-tags">
                ${program.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <div class="program-links">
                <a href="${program.repo}" target="_blank" class="btn btn-primary">查看代码</a>
                <a href="${program.downloadUrl}" class="btn btn-outline">下载</a>
            </div>
        </div>
    `;
}

// 搜索程序
function searchPrograms() {
    const query = document.getElementById('search-input').value.toLowerCase().trim();
    
    if (!query) {
        filteredPrograms = allPrograms;
    } else {
        filteredPrograms = allPrograms.filter(program => {
            const searchText = [
                program.name,
                program.nameEn,
                program.description,
                program.descriptionEn,
                ...program.tags
            ].join(' ').toLowerCase();
            
            return searchText.includes(query);
        });
    }
    
    renderPrograms();
    updateStats();
}

// 按分类筛选
function filterByCategory(category) {
    if (category === 'all') {
        filteredPrograms = allPrograms;
    } else {
        filteredPrograms = allPrograms.filter(program => program.category === category);
    }
    
    // 更新按钮状态
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === category) {
            btn.classList.add('active');
        }
    });
    
    renderPrograms();
    updateStats();
}

// 更新统计信息
function updateStats() {
    const statsElement = document.getElementById('search-stats');
    statsElement.textContent = `显示 ${filteredPrograms.length} / ${allPrograms.length} 个程序`;
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', () => {
    loadPrograms();
    
    // 绑定搜索事件
    document.getElementById('search-input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchPrograms();
        }
    });
    
    // 绑定筛选按钮事件
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            filterByCategory(btn.dataset.category);
        });
    });
});
