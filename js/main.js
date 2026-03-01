// 主页 JavaScript

// 加载精选程序
async function loadFeaturedPrograms() {
    try {
        const response = await fetch('data/programs.json');
        const data = await response.json();
        
        const featuredContainer = document.getElementById('featured-programs');
        const featuredPrograms = data.programs.filter(p => p.featured);
        
        featuredContainer.innerHTML = featuredPrograms.map(program => createProgramCard(program)).join('');
    } catch (error) {
        console.error('加载程序数据失败:', error);
    }
}

// 创建程序卡片 HTML
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

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', () => {
    loadFeaturedPrograms();
});
