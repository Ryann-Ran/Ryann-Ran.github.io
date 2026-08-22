---
permalink: /
title: ""
excerpt: ""
author_profile: false
last_updated: 2026-08
redirect_from:
  - /about/
  - /about.html
---

<span class="anchor" id="about-me"></span>

<section class="about-section" aria-label="About">
  <div class="about-section__profile">
    {% include author-profile.html %}
  </div>

  <div class="about-section__content">
    <header class="intro-header">
      <p class="section-eyebrow">About</p>
    </header>

    <div class="intro-copy">
      <p>I am Yuran Wang, a first-year master's student at Peking University.</p>

      <p>From 2022 to 2025, I worked under the supervision of <a href="https://wangzwhu.github.io/home/">Prof. Zheng Wang</a> at AIM Lab, Wuhan University. Since 2024, I have been with DCAI Lab at Peking University under the supervision of <a href="https://zwt233.github.io/">Prof. Wentao Zhang</a>.</p>

      <p>My research focuses on <strong>visual generation</strong> and <strong>unified multimodal models</strong>, aiming to build faithful, controllable, and creative generative intelligence for the real world. I am also interested in world models.</p>

      <p class="contact-line">Email: <canvas class="email-canvas" data-email-canvas role="img" aria-label="Email address"></canvas><noscript><span class="email-fallback"> JavaScript is required to display the address.</span></noscript></p>
    </div>

    <aside class="opportunity-callout" aria-label="PhD opportunity notice">
      <span class="opportunity-callout__marker" aria-hidden="true"></span>
      <div>
        <strong>Seeking PhD opportunities</strong>
        <p>I am looking for PhD opportunities starting in Fall 2027. Feel free to get in touch.</p>
      </div>
    </aside>
  </div>
</section>

{% include publications.html %}

<section class="projects-section" aria-labelledby="projects">
  <h1 id="projects">Projects</h1>
  <div class="publication-list project-list">
    <article class="publication-card publication-card--featured project-card">
      <figure class="publication-card__figure">
        <img src="{{ '/images/project_openworldlib.png' | relative_url }}" alt="OpenWorldLib framework overview" loading="lazy">
      </figure>

      <div class="publication-card__body">
        <div class="publication-card__meta">
          <span class="publication-card__venue">Open-source project</span>
          <span aria-hidden="true">·</span>
          <span>2026</span>
        </div>

        <h2 class="publication-card__title">
          <a href="https://arxiv.org/abs/2604.04707" target="_blank" rel="noopener noreferrer">OpenWorldLib: A Unified Codebase and Definition of Advanced World Models</a>
        </h2>

        <p class="publication-card__authors">DataFlow Team, Bohan Zeng, Daili Hua, Kaixin Zhu, Yifan Dai, Bozhou Li, <strong>Yuran Wang</strong>, Chengzhuo Tong, Yifan Yang, Mingkun Chang, Jianbin Zhao, Zhou Liu, Hao Liang, Xiaochen Ma, Ruichuan An, Junbo Niu, Zimo Meng, Tianyi Bai, Meiyi Qiang, Huanyao Zhang, Zhiyou Xiao, Tianyu Guo, Qinhan Yu, Runhao Zhao, Zhengpin Li, Xinyi Huang, Yisheng Pan, Yiwen Tang, Yang Shi, Yue Ding, Xinlong Chen, Hongcheng Gao, Minglei Shi, Jialong Wu, Zekun Wang, Yuanxing Zhang, Xintao Wang, Pengfei Wan, Yiren Song, Mike Zheng Shou, Wentao Zhang#</p>

        <p class="project-card__contribution"><strong>My contribution:</strong> Core contributor; develops the pipeline for interactive video generation tasks in OpenWorldLib.</p>

        <div class="publication-card__footer">
          <div class="publication-card__links" aria-label="Project resources">
            <a href="https://arxiv.org/abs/2604.04707" target="_blank" rel="noopener noreferrer"><i class="fas fa-file-alt" aria-hidden="true"></i> Paper</a>
            <a href="https://github.com/OpenDCAI/OpenWorldLib" target="_blank" rel="noopener noreferrer"><i class="fab fa-github" aria-hidden="true"></i> Code</a>
          </div>
        </div>
      </div>
    </article>
  </div>
</section>

<section class="experience-section" aria-labelledby="education">
  <h1 id="education">Education</h1>
  <div class="timeline-list">
    <article class="timeline-entry education-entry">
      <span class="timeline-icon"><img src="{{ '/images/logo_pku.png' | relative_url }}" alt="Peking University logo"></span>
      <div class="timeline-card">
        <div class="timeline-heading">
          <div class="education-primary">
            <strong>M.S.</strong>
            <span class="education-separator" aria-hidden="true">·</span>
            <span class="education-institution">Peking University</span>
          </div>
          <time class="timeline-date">2025 – 2027 (expected)</time>
        </div>
        <div class="education-meta">
          <span>School of Mathematical Sciences</span>
          <span class="education-separator" aria-hidden="true">·</span>
          <span class="timeline-location"><i class="fas fa-map-marker-alt" aria-hidden="true"></i> Beijing, China</span>
        </div>
      </div>
    </article>

    <article class="timeline-entry education-entry">
      <span class="timeline-icon"><img src="{{ '/images/logo_whu.png' | relative_url }}" alt="Wuhan University logo"></span>
      <div class="timeline-card">
        <div class="timeline-heading">
          <div class="education-primary">
            <strong>B.Eng.</strong>
            <span class="education-separator" aria-hidden="true">·</span>
            <span class="education-institution">Wuhan University</span>
          </div>
          <time class="timeline-date">2021 – 2025</time>
        </div>
        <div class="education-meta">
          <span>School of Computer Science</span>
          <span class="education-separator" aria-hidden="true">·</span>
          <span class="timeline-location"><i class="fas fa-map-marker-alt" aria-hidden="true"></i> Wuhan, China</span>
        </div>
      </div>
    </article>
  </div>
</section>

<section class="experience-section" aria-labelledby="internships">
  <h1 id="internships">Internships</h1>
  <div class="timeline-list">
    <article class="timeline-entry">
      <span class="timeline-icon timeline-icon--large"><img src="{{ '/images/logo_kling.png' | relative_url }}" alt="Kling AI logo"></span>
      <div class="timeline-card">
        <div class="timeline-heading">
          <strong class="internship-company">Kling AI</strong>
          <time class="timeline-date">2025.06 – Present</time>
        </div>
        <div class="internship-role">Research Intern</div>
        <div class="timeline-location"><i class="fas fa-map-marker-alt" aria-hidden="true"></i> Beijing, China</div>
      </div>
    </article>

    <article class="timeline-entry">
      <span class="timeline-icon"><img src="https://cdn.baichuan-ai.com/build/_next/static/media/favicon-96x96.15rlx4p_j1mxx.png" alt="Baichuan AI logo"></span>
      <div class="timeline-card">
        <div class="timeline-heading">
          <strong class="internship-company">Baichuan AI</strong>
          <time class="timeline-date">2024.10 – 2025.04</time>
        </div>
        <div class="internship-role">Research Intern</div>
        <div class="timeline-location"><i class="fas fa-map-marker-alt" aria-hidden="true"></i> Beijing, China</div>
      </div>
    </article>

    <article class="timeline-entry">
      <span class="timeline-icon"><img src="{{ '/images/logo_whu.png' | relative_url }}" alt="Wuhan University logo"></span>
      <div class="timeline-card">
        <div class="timeline-heading">
          <strong class="internship-company">AIM Lab, Wuhan University</strong>
          <time class="timeline-date">2022.10 – 2024.10</time>
        </div>
        <div class="internship-role">Research Intern</div>
        <div class="timeline-note">Advised by <a href="https://wangzwhu.github.io/home/">Prof. Zheng Wang</a></div>
        <div class="timeline-location"><i class="fas fa-map-marker-alt" aria-hidden="true"></i> Wuhan, China</div>
      </div>
    </article>
  </div>
</section>

<div class="compact-sections">
  <section class="compact-section" aria-labelledby="honors-and-awards">
    <h1 id="honors-and-awards">Honors and Awards</h1>
    <div class="academic-detail">
      <time>2022 – 2025</time>
      <p>National Scholarship, First Class Scholarship, Outstanding Graduate.</p>
    </div>
  </section>

  <section class="compact-section" aria-labelledby="services">
    <h1 id="services">Services</h1>
    <div class="academic-detail">
      <span>Reviewer</span>
      <p>ACM MM 2025–2026, AAAI 2026–2027, ECCV 2026, ICME 2026.</p>
    </div>
  </section>
</div>

<footer class="page-footer-meta">
  <span>Last updated {{ page.last_updated }}</span>
  <span class="page-view-counter">
    <a href="https://info.flagcounter.com/LyV1" target="_blank" rel="noopener noreferrer" aria-label="View site statistics">
      <img src="https://s05.flagcounter.com/mini/LyV1/bg_FFFFFF/txt_000000/border_FFFFFF/flags_0/" alt="Page view counter">
    </a>
  </span>
</footer>
