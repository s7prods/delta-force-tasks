// copy-dist.js
const fs = require('fs-extra');
const path = require('path');

async function copyDist() {
    const source = path.join(__dirname, '..', 'dist');
    const target = path.join(__dirname, 'app');

    console.log(`正在从 ${source} 复制到 ${target}`);

    try {
        // 确保目标目录存在
        await fs.ensureDir(target);

        // 清空目标目录
        await fs.emptyDir(target);

        // 复制文件
        await fs.copy(source, target);

        console.log('复制完成！');
    } catch (err) {
        console.error('复制失败:', err);
        process.exit(1);
    }
}

copyDist();