(function(){
  const nav = document.getElementById('nav');
  const menuBtn = document.getElementById('menuBtn');
  const themeToggle = document.getElementById('themeToggle');
  const langSelect = document.getElementById('languageSelect');

  // 读取主题
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
  }

  // 移动端菜单
  menuBtn && menuBtn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // 当窗口尺寸变更到大屏时，收起菜单并重置 aria
  window.addEventListener('resize', () => {
    const isMobile = window.innerWidth <= 640;
    if (!isMobile && nav.classList.contains('open')) {
      nav.classList.remove('open');
      menuBtn && menuBtn.setAttribute('aria-expanded', 'false');
    }
  });

  // 主题切换
  themeToggle && themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = current === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });

  // 多语言
  const t = {
    zh: {
      doc_title: '心理疗愈AI视频批量生产平台',
      nav_features: '功能亮点',
      nav_tech: '技术要点',
      nav_usecases: '使用场景',
      nav_workflow: '工作流程',
      nav_contact: '联系与提交',
      hero_title: '面向心理疗愈的 AI 视频批量生产平台',
      hero_desc: '把专业心理学家的洞见，转化成可传播的短视频与文案，\n辅导咨询师授课与用户自助康复，并支持 24×7 情绪陪伴。',
      btn_learn_features: '了解功能',
      btn_view_submission: '查看提交方式',
      features_title: '功能亮点',
      card1_title: '批量生产与传播',
      card1_desc: '面向心理学知识与疗愈主题，自动生成短视频与文案，支持一键多平台素材导出。',
      card1_link: '打开生成器',
      card2_title: '多模态生成',
      card2_desc: '文本、语音、视频模型协同：脚本草拟、配音合成、镜头剪辑与字幕水印自动化。',
      card3_title: '对话陪伴',
      card3_desc: '为咨询师与用户提供智能助理，按关键词与语气识别情绪，生成安抚性内容。',
      card3_link: '打开 DeepSeek',
      card4_title: '教学助理',
      card4_desc: '把心理专家的要点准确转述为课程视频与讲义，提升备课与授课效率。',
      card5_title: '群聊管理',
      card5_desc: '支持多个群聊的知识推送与互动，统一管理疗愈用户群。',
      tech_title: '技术要点',
      tech_li1: '海量、准确的心理学知识与数据收集与治理。',
      tech_li2: '多模态转换：文字⇄视频、要点⇄文字、语音合成与识别。',
      tech_li3: '内容准确性保障与自我纠错策略与评审环节。',
      tech_li4: '情绪理解：通过关键词与语气分析，生成具有安抚作用的内容。',
      usecases_title: '使用场景',
      usecases_1_title: '用户自我检测与康复',
      usecases_1_desc: '提供自测问卷、认知行为训练视频与正念练习内容，自动生成个性化计划。',
      usecases_2_title: '咨询师知识传播',
      usecases_2_desc: '面向课程与社群高效产出视频与文案素材，维持稳定的内容节奏。',
      workflow_title: '工作流程',
      workflow_li1: '需求分析：选题、受众与渠道。',
      workflow_li2: '内容生成：脚本草拟、素材生成、配音合成。',
      workflow_li3: '视频剪辑：自动剪辑、颜色校正、字幕水印。',
      workflow_li4: '测试优化：质量评审与迭代。',
      workflow_li5: '部署与监控：发布到多平台并监控效果。',
      contact_title: '提交与说明',
      contact_desc: '本页面为前端展示，无需后端功能。建议将仓库启用 GitHub Pages 托管。',
      cta_chat: '查看 chat.md',
      cta_pages_guide: '我们的Github页面',
      contact_note_html: '仓库包含 <code>chat.md</code>，记录与生成式 AI 的交互与提示。',
      footer_text: '© 2025 AiPsyc — 心理疗愈 AI 视频批量生产平台（演示）',
      footer_readme: '保留所有权利'
    },
    en: {
      doc_title: 'AI Video Batch Production Platform for Psychological Healing',
      nav_features: 'Features',
      nav_tech: 'Technical Highlights',
      nav_usecases: 'Use Cases',
      nav_workflow: 'Workflow',
      nav_contact: 'Contact & Submission',
      hero_title: 'AI Video Batch Production Platform for Psychological Healing',
      hero_desc: "Turn psychologists’ insights into short videos and copywriting,\nassist counselors' teaching and users’ self-recovery, with 24×7 emotional companionship.",
      btn_learn_features: 'Explore Features',
      btn_view_submission: 'View Submission',
      features_title: 'Key Features',
      card1_title: 'Batch Production & Distribution',
      card1_desc: 'Automatically generate short videos and copy for psychology and healing topics; export assets to multiple platforms with one click.',
      card1_link: 'Open Generator',
      card2_title: 'Multimodal Generation',
      card2_desc: 'Text, voice, and video models collaborate: draft scripts, synthesize voice, automate editing and subtitles/watermarks.',
      card3_title: 'Conversational Companionship',
      card3_desc: 'Provide an assistant for counselors and users; detect emotions via keywords and tone, generate soothing content.',
      card3_link: 'Open DeepSeek',
      card4_title: 'Teaching Assistant',
      card4_desc: 'Accurately convey experts’ key points into course videos and handouts, improving preparation and teaching efficiency.',
      card5_title: 'Group Chat Management',
      card5_desc: 'Push knowledge and interact across multiple groups, manage healing communities centrally.',
      tech_title: 'Technical Highlights',
      tech_li1: 'Large and accurate psychology knowledge/data collection and governance.',
      tech_li2: 'Multimodal conversion: text⇄video, key points⇄text, speech synthesis and recognition.',
      tech_li3: 'Content accuracy assurance and self-correction strategies with review steps.',
      tech_li4: 'Emotion understanding: analyze keywords and tone to generate calming content.',
      usecases_title: 'Use Cases',
      usecases_1_title: 'Self-assessment and Recovery',
      usecases_1_desc: 'Provide questionnaires, CBT training videos, and mindfulness content; automatically generate personalized plans.',
      usecases_2_title: 'Counselor Knowledge Distribution',
      usecases_2_desc: 'Efficiently produce video and copy assets for courses and communities, maintaining a steady content pace.',
      workflow_title: 'Workflow',
      workflow_li1: 'Needs analysis: topics, audience, and channels.',
      workflow_li2: 'Content generation: draft scripts, produce materials, synthesize voice.',
      workflow_li3: 'Video editing: auto cut, color grading, subtitles, and watermarks.',
      workflow_li4: 'Testing and optimization: quality review and iteration.',
      workflow_li5: 'Deployment and monitoring: publish to platforms and track performance.',
      contact_title: 'Submission & Notes',
      contact_desc: 'This page is a frontend demo, no backend needed. Recommend hosting via GitHub Pages.',
      cta_chat: 'Open chat.md',
      cta_pages_guide: ' Our GitHub Page',
      contact_note_html: 'Repo includes <code>chat.md</code> recording interactions and prompts with generative AI.',
      footer_text: '© 2025 AiPsyc — AI Video Batch Production Platform for Psychological Healing (Demo)',
      footer_readme: 'All Right Reserved'
    }
  };

  const savedLang = localStorage.getItem('lang') || (navigator.language && navigator.language.startsWith('zh') ? 'zh' : 'en');
  function setLanguage(lang){
    const dict = t[lang] || t.zh;
    document.documentElement.setAttribute('lang', lang);
    document.title = dict.doc_title || document.title;
    localStorage.setItem('lang', lang);
    if (langSelect) langSelect.value = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      const val = dict[key];
      if (typeof val === 'string') el.textContent = val;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.dataset.i18nHtml;
      const val = dict[key];
      if (typeof val === 'string') el.innerHTML = val;
    });
  }

  langSelect && langSelect.addEventListener('change', (e) => {
    setLanguage(e.target.value);
  });

  setLanguage(savedLang);

  // 滚动出现动效（IntersectionObserver）
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReduced) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in-view');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.section, .card, .hero').forEach(el => {
      el.classList.add('reveal');
      io.observe(el);
    });
  }

  // 英雄区视差滚动（使用 CSS 变量驱动）
  const heroVisual = document.querySelector('.hero-visual');
  if (heroVisual && !prefersReduced) {
    let latestY = window.scrollY;
    let ticking = false;
    const maxY = 32; // 纵向偏移上限
    const maxRot = 8; // 旋转上限（度）

    function updateParallax() {
      const y = latestY;
      const parallaxY = Math.max(-maxY, Math.min(maxY, y * 0.06));
      const rot = Math.max(-maxRot, Math.min(maxRot, y * 0.02));
      heroVisual.style.setProperty('--parallaxY', parallaxY + 'px');
      heroVisual.style.setProperty('--parallaxRot', rot + 'deg');
      ticking = false;
    }

    window.addEventListener('scroll', () => {
      latestY = window.scrollY;
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    }, { passive: true });

    window.addEventListener('resize', () => {
      latestY = window.scrollY;
      updateParallax();
    });

    updateParallax();
  }
})();