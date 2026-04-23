const createElement = (tag, className, html) => {
  const element = document.createElement(tag);
  if (className) {
    element.className = className;
  }
  if (html) {
    element.innerHTML = html;
  }
  return element;
};

const createSectionShell = (id, tone = "light") => {
  const section = createElement("section", `slide slide--${tone} reveal`);
  if (id) {
    section.id = id;
  }
  const frame = createElement("div", "slide__frame");
  section.append(frame);
  return { section, frame };
};

export const createHeroSection = (hero) => {
  const section = createElement("section", "hero reveal");
  section.innerHTML = `
    <div class="hero__frame">
      <div class="hero__content">
        <p class="eyebrow">${hero.eyebrow}</p>
        <h1>${hero.title}</h1>
        <p class="hero__description">${hero.description}</p>
        <div class="hero__actions">
          <a class="button button--primary" href="${hero.primaryCta.href}">${hero.primaryCta.label}</a>
          <a class="button button--secondary" href="${hero.secondaryCta.href}">${hero.secondaryCta.label}</a>
        </div>
        <div class="hero__stats">
          ${hero.stats
            .map(
              (stat) => `
                <article class="stat-card">
                  <strong>${stat.value}</strong>
                  <span>${stat.label}</span>
                </article>
              `
            )
            .join("")}
        </div>
      </div>
      <div class="hero__media">
        <div class="media-card media-card--hero">
          <img src="${hero.image.src}" alt="${hero.image.alt}" />
          <div class="media-card__badge">
            <span>Proposal Focus</span>
            <strong>Evergreen real estate lead engine</strong>
          </div>
        </div>
      </div>
    </div>
  `;
  return section;
};

export const createWhySection = (sectionData) => {
  const { section, frame } = createSectionShell(sectionData.id, "light");
  frame.classList.add("split-layout");
  frame.innerHTML = `
    <div class="section-copy">
      <p class="eyebrow">${sectionData.eyebrow}</p>
      <h2>${sectionData.title}</h2>
      <p class="section-copy__body">${sectionData.description}</p>
    </div>
    <div class="metric-stack">
      ${sectionData.metricCards
        .map(
          (card) => `
            <article class="metric-panel">
              <span>${card.label}</span>
              <strong>${card.value}</strong>
            </article>
          `
        )
        .join("")}
    </div>
    <div class="point-grid point-grid--wide">
      ${sectionData.points
        .map(
          (point) => `
            <article class="point-card">
              <h3>${point.title}</h3>
              <p>${point.body}</p>
            </article>
          `
        )
        .join("")}
    </div>
  `;
  return section;
};

export const createLaunchPlanSection = (sectionData) => {
  const { section, frame } = createSectionShell(sectionData.id, "dark");
  frame.classList.add("launch-layout");
  frame.innerHTML = `
    <div class="section-copy section-copy--inverse">
      <p class="eyebrow">${sectionData.eyebrow}</p>
      <h2>${sectionData.title}</h2>
      <p class="section-copy__body">${sectionData.description}</p>
    </div>
    <div class="step-grid">
      ${sectionData.steps
        .map(
          (step) => `
            <article class="step-card">
              <span class="step-card__number">${step.number}</span>
              <h3>${step.title}</h3>
              <p>${step.body}</p>
            </article>
          `
        )
        .join("")}
    </div>
    <aside class="image-spotlight">
      <img src="${sectionData.image.src}" alt="${sectionData.image.alt}" />
      <div class="image-spotlight__caption">${sectionData.image.kicker}</div>
    </aside>
  `;
  return section;
};

export const createVideosSection = (sectionData) => {
  const { section, frame } = createSectionShell(sectionData.id, "light");
  frame.innerHTML = `
    <div class="section-copy">
      <p class="eyebrow">${sectionData.eyebrow}</p>
      <h2>${sectionData.title}</h2>
      <p class="section-copy__body">${sectionData.description}</p>
    </div>
    <div class="section-banner">
      <img src="${sectionData.backgroundImage.src}" alt="${sectionData.backgroundImage.alt}" />
      <div class="section-banner__overlay">
        <span>${sectionData.backgroundImage.label}</span>
        <strong>${sectionData.backgroundImage.title}</strong>
      </div>
    </div>
    <div class="video-grid">
      ${sectionData.items
        .map(
          (item, index) => `
            <article class="video-card">
              <span class="video-card__index">${String(index + 1).padStart(2, "0")}</span>
              <h3>${item.title}</h3>
              <p>${item.angle}</p>
            </article>
          `
        )
        .join("")}
    </div>
  `;
  return section;
};

export const createPricingSection = (sectionData) => {
  const { section, frame } = createSectionShell(sectionData.id, "light");
  frame.classList.add("pricing-layout");
  frame.innerHTML = `
    <div class="section-copy">
      <p class="eyebrow">${sectionData.eyebrow}</p>
      <h2>${sectionData.title}</h2>
    </div>
    <div class="pricing-grid">
      ${sectionData.packages
        .map(
          (pkg) => `
            <article class="pricing-card">
              <div class="pricing-card__header">
                <h3>${pkg.name}</h3>
                <strong>${pkg.price}</strong>
              </div>
              <ul>
                ${pkg.items.map((item) => `<li>${item}</li>`).join("")}
              </ul>
            </article>
          `
        )
        .join("")}
    </div>
    <div class="total-card">
      <span>Total Investment</span>
      <strong>${sectionData.total}</strong>
      <p>Designed as a complete launch package with strategy first, then production, then polished delivery.</p>
    </div>
  `;
  return section;
};

export const createTimelineSection = (sectionData) => {
  const { section, frame } = createSectionShell(sectionData.id, "dark");
  frame.innerHTML = `
    <div class="section-copy section-copy--inverse">
      <p class="eyebrow">${sectionData.eyebrow}</p>
      <h2>${sectionData.title}</h2>
    </div>
    <div class="timeline-layout">
      <div class="timeline">
        ${sectionData.phases
          .map(
            (phase) => `
              <article class="timeline__item">
                <div class="timeline__label">${phase.label}</div>
                <div class="timeline__content">
                  <h3>${phase.title}</h3>
                  <p>${phase.body}</p>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
      <aside class="media-stack media-stack--timeline">
        ${sectionData.visuals
          .map(
            (visual) => `
              <article class="media-tile">
                <img src="${visual.src}" alt="${visual.alt}" />
                <span>${visual.label}</span>
              </article>
            `
          )
          .join("")}
      </aside>
    </div>
  `;
  return section;
};

export const createOutcomesSection = (sectionData) => {
  const { section, frame } = createSectionShell(sectionData.id, "light");
  frame.classList.add("split-layout");
  frame.innerHTML = `
    <div class="section-copy">
      <p class="eyebrow">${sectionData.eyebrow}</p>
      <h2>${sectionData.title}</h2>
    </div>
    <div class="point-grid">
      ${sectionData.pillars
        .map(
          (pillar) => `
            <article class="point-card">
              <h3>${pillar.title}</h3>
              <p>${pillar.body}</p>
            </article>
          `
        )
        .join("")}
    </div>
    <div class="comparison-card">
      ${sectionData.comparison
        .map(
          (item) => `
            <div class="comparison-row">
              <span>${item.label}</span>
              <strong>${item.value}</strong>
            </div>
          `
        )
        .join("")}
    </div>
  `;
  return section;
};

export const createCtaSection = (sectionData) => {
  const { section, frame } = createSectionShell(sectionData.id, "cta");
  frame.innerHTML = `
    <div class="cta-layout">
      <div class="cta-block">
        <p class="eyebrow">${sectionData.eyebrow}</p>
        <h2>${sectionData.title}</h2>
        <p class="section-copy__body">${sectionData.description}</p>
        <div class="hero__actions">
          ${sectionData.actions
            .map(
              (action, index) => `
                <a class="button ${index === 0 ? "button--primary" : "button--secondary"}" href="${action.href}">${action.label}</a>
              `
            )
            .join("")}
        </div>
      </div>
      <aside class="cta-visual">
        <img src="${sectionData.visual.src}" alt="${sectionData.visual.alt}" />
        <div class="cta-visual__caption">
          <span>${sectionData.visual.label}</span>
          <strong>${sectionData.visual.quote}</strong>
        </div>
      </aside>
    </div>
  `;
  return section;
};
