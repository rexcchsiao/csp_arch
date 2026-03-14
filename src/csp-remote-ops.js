// CSP Remote Ops Capabilities - For Hyperscaler/CSP Customers
export const cspRemoteOps = [
  {
    title: '即時資源與環境監控',
    capability: '提供 CSP 客戶即時的 GPU/CPU/記憶體/網路使用率監控，跨機櫃、跨站點的可視化儀表板。',
    value: '讓運維團隊不用派人到現場，就能掌握所有節點狀態。',
    refs: [
      { name: 'NVIDIA Mission Control', url: 'https://www.nvidia.com/en-us/data-center/mission-control/' },
      { name: 'HPE Private Cloud AI', url: 'https://www.hpe.com/us/en/private-cloud-ai.html' },
    ],
  },
  {
    title: '遠端 Log 與診斷',
    capability: '集中收集所有節點的 log，支援關鍵字搜尋、事件關聯、異常偵測。',
    value: '故障發生時，運維團隊可以遠端快速定位問題，減少現場支援需求。',
    refs: [{ name: 'NVIDIA Mission Control', url: 'https://www.nvidia.com/en-us/data-center/mission-control/' }],
  },
  {
    title: '預測性維護 (Predictive Maintenance)',
    capability: '根據歷史資料與即時監控數據，預測可能的硬體故障或效能瓶頸。',
    value: '在問題發生前先預警，降低停機風險，提升客戶滿意度。',
    refs: [{ name: 'NVIDIA Mission Control', url: 'https://www.nvidia.com/en-us/data-center/mission-control/' }],
  },
  {
    title: '遠端運維能力 (Remote Ops)',
    capability: '提供遠端重啟、遠端更新、遠端診斷、遠端修復等完整運維工具鏈。',
    value: '讓 CSP 客戶即使面對全球分布的機房，也能集中管理，降低運維成本。',
    refs: [{ name: 'NVIDIA Base Command Manager', url: 'https://www.nvidia.com/en-us/data-center/base-command-manager/' }],
  },
];
