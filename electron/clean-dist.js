const fs = require('fs-extra');
const path = require('path');

// 清空app-dist目录
async function cleanDist() {
    const distPath = path.join(__dirname, 'app-dist');
    console.log(`正在清空 ${distPath}`);

    try {
        // 确保目录存在
        await fs.ensureDir(distPath);

        // 清空目录
        await fs.emptyDir(distPath);

        console.log('清空完成！');
    } catch (err) {
        console.error('清空失败:', err);
        process.exit(1);
    }
}

// 执行清空操作
cleanDist();