(() => {
  const topicEl = document.getElementById('topic');
  const audienceEl = document.getElementById('audience');
  const toneEl = document.getElementById('tone');
  const durationEl = document.getElementById('duration');
  const platformEl = document.getElementById('platform');
  const keywordsEl = document.getElementById('keywords');
  const resultEl = document.getElementById('result');

  // 移动端菜单展开/收起交互（基础逻辑）
  const nav = document.getElementById('nav');
  const menuBtn = document.getElementById('menuBtn');
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    window.addEventListener('resize', () => {
      const isMobile = window.innerWidth <= 640;
      if (!isMobile && nav.classList.contains('open')) {
        nav.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  function pickHook(tone){
    const hooks = {
      '温和鼓励': ['你已经很努力了，让我们一起轻松一点。', '试试这3分钟练习，给自己一个温柔的拥抱。'],
      '理性专业': ['基于认知行为的简易练习，帮你降低焦虑。', '从机制入手，快速理解症状与自我干预。'],
      '活泼亲切': ['来试试这套超简单的“小动作”，立刻松一口气！', '跟我一起做个小游戏，情绪马上放松。'],
      '沉稳疗愈': ['把注意力带回呼吸，在当下获得安稳。', '让心回到身体，让身体告诉你：此刻安全。']
    };
    const arr = hooks[tone] || hooks['温和鼓励'];
    return arr[Math.floor(Math.random()*arr.length)];
  }

  function buildScript({topic, audience, tone, duration, platform, keywords}){
    const secs = Number(duration) || 60;
    const segment = Math.max(10, Math.floor(secs/4));
    const kw = keywords ? `关键词：${keywords}` : '关键词：—';
    const hook = pickHook(tone);
    const title = `${topic}｜${tone}向短视频脚本（${secs}s，面向${audience}）`;
    const storyboard = [
      `开场(${segment}s)：镜头近景，${hook}`,
      `解释(${segment}s)：以${topic}为例，简述成因与可识别信号。`,
      `练习(${segment}s)：给出1–2个可执行的步骤，如呼吸/正念/认知重构。`,
      `收尾(${secs-3*segment}s)：鼓励坚持，提供下一步资源或咨询建议。`
    ];
    const outline = [
      `受众：${audience}`,
      `时长：${secs}s，平台：${platform}`,
      kw,
      `语气：${tone}`
    ];
    const copy = [
      `标题建议：${topic}不靠硬扛：这几步真的有效`,
      `描述文案：从理解到练习，${topic}可被温柔应对。保存这条，今晚睡前试试。`,
      `平台文案：#心理疗愈 #${topic} #自我关怀`,
      `CTA：评论区留下你的困扰关键词，我来给你定制练习清单。`
    ];

    return `【脚本标题】\n${title}\n\n【拍摄分镜】\n- ${storyboard.join('\n- ')}\n\n【要点纲要】\n- ${outline.join('\n- ')}\n\n【配音/字幕草案】\n- 开场：${hook}\n- 解释：问题如何形成、你可能的感受\n- 练习：跟我做，吸气四拍，呼气四拍（示例）\n- 收尾：为自己按下暂停，明天会更好\n\n【分发文案】\n- ${copy.join('\n- ')}\n`;
  }

  function generate(){
    const data = {
      topic: topicEl.value.trim() || '焦虑缓解',
      audience: audienceEl.value.trim() || '轻度焦虑人群',
      tone: toneEl.value,
      duration: durationEl.value,
      platform: platformEl.value,
      keywords: keywordsEl.value.trim()
    };
    const txt = buildScript(data);
    resultEl.textContent = txt;
  }

  function download(){
    const blob = new Blob([resultEl.textContent || ''], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'aipsyc_generator.txt';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  async function copyToClipboard(){
    try {
      await navigator.clipboard.writeText(resultEl.textContent || '');
      alert('已复制到剪贴板');
    } catch {
      alert('复制失败，请手动选择文本复制');
    }
  }

  document.getElementById('generateBtn').addEventListener('click', generate);
  document.getElementById('downloadBtn').addEventListener('click', download);
  document.getElementById('copyBtn').addEventListener('click', copyToClipboard);

  // 首次加载生成一个示例
  generate();
})();