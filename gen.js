/* eslint-disable */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// 在 ESM 模式下沒有 __dirname，需要手動建立
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const componentName = process.argv[2];

if (!componentName) {
  console.error("❌ 請輸入組件名稱！範例：node gen.js MyComponent");
  process.exit(1);
}

// 設定組件存放路徑 (請確認 src/components 資料夾已存在)
const targetDir = path.join(__dirname, "src/components", componentName);

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// JSX 內容 (ESM 格式)
const jsxContent = `import React from 'react';
import './${componentName}.scss';

const ${componentName} = () => {
  return (
    <div className="${componentName}">
      ${componentName} Component
    </div>
  );
};

export default ${componentName};
`;

// scss 內容
const scssContent = `.${componentName} {\n\n}`;

// 寫入檔案
try {
  fs.writeFileSync(path.join(targetDir, `${componentName}.jsx`), jsxContent);
  fs.writeFileSync(path.join(targetDir, `${componentName}.scss`), scssContent);
  console.log(
    `✅ 組件 ${componentName} 已成功建立於 src/components/${componentName}`
  );
} catch (err) {
  console.error("❌ 建立檔案時發生錯誤:", err);
}
