# 新照片放置记录 · 2026-09-13

项目：`C:\Users\91780\abstractmanwear`  
分支：`feat/nav-restructure`  
来源：用户提供的 `C:\Users\91780\Downloads` 文件。

8 份输入文件，按 SHA-256 去重后为 7 张照片。包装工位与“重复原图”文件完全相同，只引入一张。原文件保持原样。

| 原照片 | 网页文件（public/images/brand/） | 放置位置 |
| --- | --- | --- |
| 门店产品陈列-高级质感润色-20260913.png | retail-display.webp | 产品页首屏，配陈列图注 |
| 展会品牌展台-高级质感润色-20260913.png | exhibition-booth.webp | 关于我们 → 展会现场 |
| 展会团队合影-高级质感润色-20260913.png | exhibition-team.webp | 关于我们 → 展会现场 |
| 质检工位-高级质感润色-20260913.png | qc-station.webp | 工厂 → 质量控制部门、质量控制区；首页及工厂的 AQL 卡片 |
| 包装工位-高级质感润色-20260913.png | packing-station.webp | 工厂 → 包装与仓储部门；定制服务 → 私标包装 |
| 仓储货架-高级质感润色-20260913.png | storage-shelves.webp | 工厂 → 包装与仓储图片区 |
| 成品仓通道-高级质感润色-20260913.png | finished-goods-aisle.webp | 工厂 → 包装与仓储图片区，保留竖幅比例 |

网页文件完整路径前缀：`C:\Users\91780\abstractmanwear\public\images\brand\`。

全部使用新的 WebP 路径，完整保留图片分辨率，quality 90。总计 1,886,822 字节，由 Next.js Image 继续按显示尺寸优化和懒加载。新图均已在实际页面引用，并补充对应中英文 alt 和图注；未从照片推断展会名称、日期、客户关系或产能。

## 纸箱标识处理

依据上一轮客户匿名展示要求，包装工位与成品仓通道使用内置 imagegen 编辑版本，去除纸箱客户品牌文字及可识别标签。其他 5 张只转换网页格式。使用内置工具，未使用 API/CLI 回退。

包装工位编辑提示词：

> Use case: precise-object-edit. This photograph is the edit target for an underwear manufacturer's website. Preserve this exact photograph and composition. ONLY remove all client-identifying brand text, partial brand lettering and logos on the brown cardboard shipping cartons, including partial SCHIESSER lettering along the left edge. Replace that printing with natural matching blank cardboard texture. Remove small customer shipping labels on cartons too. Keep the two workers' identities, faces, poses, clothing, underwear stacks, packaging, tables, walls, windows, lighting, fans, blue crates and all other scene details unchanged. Keep room signage 包装区 and the fire hydrant unchanged. Do not add objects, retouch the room, change color grade or invent capabilities. No crop, preserve original 4:3 landscape framing. Produce one edited photo.

成品仓通道编辑提示词：

> Use case: precise-object-edit. The attached warehouse photograph is the edit target for an underwear manufacturer's website. Make a minimal confidentiality edit: remove ALL client names, brand logos, lettering SCHIESSER and partial SCHIESSER lettering, and identifying shipment labels from EVERY cardboard carton throughout the image, left, right, foreground, background. Replace only those printed areas with natural matching plain cardboard. Preserve boxes themselves, their precise positions, yellow tape, human faces and poses, racks, floor markings, walls, windows, fans, ceiling, perspective, lighting and photographic color grade exactly. Do not remove any box or person, alter the factory or add objects. Keep the same 3:4 portrait framing and full composition. Output one photo with all cartons anonymized.

已目视检查两张输出：纸箱品牌文字已移除，主体、画幅和生产场景仍与原照片对应。生成式编辑不保证逐像素不变。

## 验证

- `npm run lint` 通过。
- `npm run build` 通过，包括 TypeScript 检查。
- 产品、关于我们、工厂、服务页的中英文版本，8 个地址均返回 HTTP 200。
- 7 张新照片经 Next.js 优化接口均返回有效图片。
- 修改涉及的中英文翻译命名空间，键名集合一致。
- 浏览器检查新图片区及其宽屏/窄屏布局。

本次只更新本地分支与开发预览，未推送或部署。
