/* 児発連ポータル — shared UI */
(function () {
  "use strict";

  const PAGES = {
    home: "index.html",
    about: "about.html",
    offices: "offices.html",
    regionSapporo: "region-sapporo.html",
    regionAsahikawa: "region-asahikawa.html",
    regionOthers: "region-others.html",
    activity: "activity.html",
    jobs: "jobs.html",
    jobPost: "job-post.html",
    partners: "partners.html",
    consult: "consult.html",
    memberLogin: "member-login.html",
    member: "member.html",
    join: "join.html",
    contact: "contact.html",
    terms: "terms.html",
    privacy: "privacy.html",
    guidebook: "guidebook.html",
    sitemap: "sitemap.html",
  };

  function currentFile() {
    const path = location.pathname.replace(/\\/g, "/");
    const name = path.split("/").pop();
    return name && name !== "" ? name : "index.html";
  }

  function navClass(file, aliases) {
    const cur = currentFile();
    const files = [file].concat(aliases || []);
    return files.indexOf(cur) !== -1 ? ' aria-current="page" class="is-current"' : "";
  }

  function renderHeader() {
    const mount = document.getElementById("site-header");
    if (!mount) return;

    mount.innerHTML = `
      <div class="util-bar">
        <div class="container inner">
          <div class="util-links">
            <a href="${PAGES.sitemap}">サイトマップ</a>
            <span class="sep">|</span>
            <a href="${PAGES.privacy}">プライバシーポリシー</a>
            <span class="sep">|</span>
            <a href="${PAGES.guidebook}">ガイドブック</a>
          </div>
          <div class="util-actions">
            <form class="util-search" action="${PAGES.offices}" method="get" role="search">
              <label class="sr-only" for="q-global">サイト内検索</label>
              <input id="q-global" type="search" name="q" placeholder="事業所名・キーワード">
              <button type="submit">検索</button>
            </form>
            <a class="btn-util" href="${PAGES.jobs}">求人検索</a>
            <a class="btn-util is-accent" href="${PAGES.memberLogin}">会員ログイン</a>
          </div>
        </div>
      </div>
      <div class="container header-main">
        <a class="brand" href="${PAGES.home}">
          <img class="brand__mark" src="assets/logo.svg" width="52" height="52" alt="">
          <span class="brand__text">
            <span class="brand__org">一般社団法人 児童発達支援連絡協議会</span>
            <span class="brand__name">児発連</span>
            <span class="brand__tag">北海道内の児童発達支援・放課後等デイサービスネットワーク</span>
          </span>
        </a>
        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="global-nav" aria-label="メニュー">
          <span></span><span></span><span></span>
        </button>
      </div>
      <nav class="global-nav" id="global-nav" aria-label="グローバルナビゲーション">
        <div class="container">
          <ul>
            <li><a href="${PAGES.home}"${navClass(PAGES.home)}>HOME</a></li>
            <li class="has-sub">
              <a href="${PAGES.about}"${navClass(PAGES.about, [PAGES.join, PAGES.terms])}>児発連について</a>
              <ul class="subnav">
                <li><a href="${PAGES.about}"${navClass(PAGES.about)}>ごあいさつ・概要</a></li>
                <li><a href="${PAGES.join}"${navClass(PAGES.join)}>入会案内</a></li>
                <li><a href="${PAGES.terms}"${navClass(PAGES.terms)}>各種規約</a></li>
              </ul>
            </li>
            <li class="has-sub">
              <a href="${PAGES.offices}"${navClass(PAGES.offices, [PAGES.regionSapporo, PAGES.regionAsahikawa, PAGES.regionOthers, "office-detail.html"])}>加盟事業所</a>
              <ul class="subnav">
                <li><a href="${PAGES.regionSapporo}"${navClass(PAGES.regionSapporo)}>札幌地区</a></li>
                <li><a href="${PAGES.regionAsahikawa}"${navClass(PAGES.regionAsahikawa)}>旭川地区</a></li>
                <li><a href="${PAGES.regionOthers}"${navClass(PAGES.regionOthers)}>その他地区</a></li>
                <li><a href="${PAGES.offices}"${navClass(PAGES.offices)}>事業所一覧・検索</a></li>
              </ul>
            </li>
            <li><a href="${PAGES.activity}"${navClass(PAGES.activity, ["activity-detail.html"])}>活動・お知らせ</a></li>
            <li class="has-sub">
              <a href="${PAGES.jobs}"${navClass(PAGES.jobs, [PAGES.jobPost, "job-detail.html"])}>求人・人材</a>
              <ul class="subnav">
                <li><a href="${PAGES.jobs}"${navClass(PAGES.jobs, ["job-detail.html"])}>求人を探す</a></li>
                <li><a href="${PAGES.jobPost}"${navClass(PAGES.jobPost)}>求人を掲載する</a></li>
              </ul>
            </li>
            <li class="has-sub">
              <a href="${PAGES.partners}"${navClass(PAGES.partners, [PAGES.consult])}>専門家相談</a>
              <ul class="subnav">
                <li><a href="${PAGES.partners}"${navClass(PAGES.partners)}>オフィシャルパートナー</a></li>
                <li><a href="${PAGES.consult}"${navClass(PAGES.consult)}>相談フォーム</a></li>
              </ul>
            </li>
            <li><a href="${PAGES.member}"${navClass(PAGES.member, [PAGES.memberLogin, "member-docs.html", "member-training.html"])}>会員ページ</a></li>
            <li><a href="${PAGES.contact}"${navClass(PAGES.contact)}>お問い合わせ</a></li>
          </ul>
        </div>
      </nav>
    `;

    const toggle = mount.querySelector(".nav-toggle");
    const nav = mount.querySelector("#global-nav");
    if (toggle && nav) {
      toggle.addEventListener("click", () => {
        const open = nav.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
      });
    }
  }

  function renderFooter() {
    const mount = document.getElementById("site-footer");
    if (!mount) return;

    mount.innerHTML = `
      <div class="footer-top">
        <div class="container footer-grid">
          <div class="footer-brand">
            <div class="name">児発連</div>
            <p>一般社団法人 児童発達支援連絡協議会<br>
            北海道内の児童発達支援・放課後等デイサービスをつなぐ地域福祉ポータル</p>
            <p>事務局：北海道札幌市（詳細はお問い合わせください）</p>
          </div>
          <div class="footer-col">
            <h3>ポータル</h3>
            <ul>
              <li><a href="${PAGES.offices}">加盟事業所を探す</a></li>
              <li><a href="${PAGES.jobs}">求人を探す</a></li>
              <li><a href="${PAGES.activity}">活動・お知らせ</a></li>
              <li><a href="${PAGES.guidebook}">ガイドブック</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h3>地区・会員</h3>
            <ul>
              <li><a href="${PAGES.regionSapporo}">札幌地区</a></li>
              <li><a href="${PAGES.regionAsahikawa}">旭川地区</a></li>
              <li><a href="${PAGES.regionOthers}">その他地区</a></li>
              <li><a href="${PAGES.memberLogin}">会員ログイン</a></li>
              <li><a href="${PAGES.join}">入会案内</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h3>サポート</h3>
            <ul>
              <li><a href="${PAGES.partners}">オフィシャルパートナー</a></li>
              <li><a href="${PAGES.consult}">専門家へ相談</a></li>
              <li><a href="${PAGES.contact}">お問い合わせ</a></li>
              <li><a href="${PAGES.privacy}">プライバシーポリシー</a></li>
              <li><a href="${PAGES.terms}">各種規約</a></li>
              <li><a href="${PAGES.sitemap}">サイトマップ</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="container">
          一般社団法人 児童発達支援連絡協議会（児発連）<br>
          Copyright © 2021–2026 jihatsuren All Rights Reserved.<br>
          当サイトに掲載の文章・画像等の無断転載・転用を禁じます。
        </div>
      </div>
    `;
  }

  function renderSidebar() {
    const mount = document.getElementById("site-sidebar");
    if (!mount) return;

    mount.innerHTML = `
      <aside class="sidebar" aria-label="サイドバー">
        <div class="side-box">
          <div class="side-box__head">加盟事業所数</div>
          <div class="side-box__body">
            <div class="member-count">
              <div class="member-count__label">最新加盟事業所数</div>
              <div class="member-count__num">486</div>
              <div class="member-count__unit">事業所</div>
            </div>
          </div>
        </div>
        <div class="side-box">
          <div class="side-box__head">会員専用ページ</div>
          <div class="side-box__body">
            <p style="font-size:12px;color:var(--ink-3);margin:0 0 10px;line-height:1.7;">研修資料・会議資料・様式ダウンロードはこちら</p>
            <a class="side-cta is-brand" href="${PAGES.memberLogin}">会員ログイン</a>
          </div>
        </div>
        <div class="side-box">
          <div class="side-box__head">求人・人材確保</div>
          <div class="side-box__body">
            <ul class="side-links">
              <li><a href="${PAGES.jobs}">公開中の求人を探す</a></li>
              <li><a href="${PAGES.jobPost}">加盟事業所の求人投稿</a></li>
            </ul>
          </div>
        </div>
        <div class="side-box">
          <div class="side-box__head">ガイドブック</div>
          <div class="side-box__body">
            <a class="guidebook-thumb" href="${PAGES.guidebook}" aria-label="児発連ガイドブック2026"></a>
            <p style="font-size:12px;margin:10px 0 0;color:var(--ink-3);">PDF版の閲覧・配布情報はこちら</p>
          </div>
        </div>
        <div class="side-box">
          <div class="side-box__head">オフィシャルパートナー</div>
          <div class="side-box__body">
            <a class="partner-banner" href="${PAGES.partners}">
              <strong>あかつき法律事務所</strong>
              <span>弁護士・事業承継・運営相談</span>
            </a>
            <p style="margin:10px 0 0;"><a href="${PAGES.consult}">専門家相談フォームへ</a></p>
          </div>
        </div>
      </aside>
    `;
  }

  function initRegionTabs() {
    document.querySelectorAll("[data-region-tabs]").forEach((root) => {
      const tabs = root.querySelectorAll("[data-tab]");
      const panels = root.querySelectorAll("[data-panel]");
      tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
          const id = tab.getAttribute("data-tab");
          tabs.forEach((t) => t.classList.remove("is-active"));
          panels.forEach((p) => p.classList.remove("is-active"));
          tab.classList.add("is-active");
          const panel = root.querySelector(`[data-panel="${id}"]`);
          if (panel) panel.classList.add("is-active");
        });
      });
    });
  }

  function initJobFilter() {
    const form = document.getElementById("job-filter");
    const list = document.getElementById("job-list");
    if (!form || !list) return;

    const rows = Array.from(list.querySelectorAll("[data-job]"));
    const empty = document.getElementById("job-empty");

    function apply() {
      const region = form.region.value;
      const role = form.role.value;
      const type = form.type.value;
      const q = (form.q.value || "").trim();
      let shown = 0;

      rows.forEach((row) => {
        const okRegion = !region || row.dataset.region === region;
        const okRole = !role || row.dataset.role === role;
        const okType = !type || row.dataset.type === type;
        const text = row.textContent || "";
        const okQ = !q || text.includes(q);
        const show = okRegion && okRole && okType && okQ;
        row.hidden = !show;
        if (show) shown += 1;
      });

      if (empty) empty.hidden = shown > 0;
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      apply();
    });
    form.addEventListener("change", apply);
  }

  function initOfficeFilter() {
    const form = document.getElementById("office-filter");
    const list = document.getElementById("office-list");
    if (!form || !list) return;

    const rows = Array.from(list.querySelectorAll("[data-office]"));
    const empty = document.getElementById("office-empty");

    function apply() {
      const region = form.region.value;
      const service = form.service.value;
      const q = (form.q.value || "").trim();
      let shown = 0;

      rows.forEach((row) => {
        const okRegion = !region || row.dataset.region === region;
        const okService = !service || (row.dataset.service || "").includes(service);
        const text = row.textContent || "";
        const okQ = !q || text.includes(q);
        const show = okRegion && okService && okQ;
        row.hidden = !show;
        if (show) shown += 1;
      });

      if (empty) empty.hidden = shown > 0;
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      apply();
    });
    form.addEventListener("change", apply);

    const params = new URLSearchParams(location.search);
    if (params.get("q")) {
      form.q.value = params.get("q");
      apply();
    }
    if (params.get("region")) {
      form.region.value = params.get("region");
      apply();
    }
  }

  function initForms() {
    document.querySelectorAll("form[data-validate]").forEach((form) => {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const required = form.querySelectorAll("[required]");
        let ok = true;
        required.forEach((el) => {
          if (el.type === "checkbox") {
            if (!el.checked) ok = false;
          } else if (!String(el.value || "").trim()) {
            ok = false;
          }
        });

        const consent = form.querySelector("[name='consent']");
        if (consent && !consent.checked) ok = false;

        const msg = form.querySelector("[data-form-msg]");
        if (!ok) {
          if (msg) {
            msg.hidden = false;
            msg.className = "alert";
            msg.textContent = "未入力の必須項目、または同意確認があります。内容をご確認ください。";
          }
          return;
        }

        if (msg) {
          msg.hidden = false;
          msg.className = "alert alert-ok";
          msg.textContent = form.dataset.success || "送信内容を受け付けました。確認のうえ事務局よりご連絡いたします。（デモ画面）";
        }
        form.reset();
      });
    });
  }

  function initReveal() {
    const nodes = document.querySelectorAll(".reveal");
    if (!nodes.length || !("IntersectionObserver" in window)) {
      nodes.forEach((n) => n.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    nodes.forEach((n) => io.observe(n));
  }

  function initLoginDemo() {
    const form = document.getElementById("login-form");
    if (!form) return;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const id = form.userid.value.trim();
      const pw = form.password.value.trim();
      const msg = document.getElementById("login-msg");
      if (!id || !pw) {
        if (msg) {
          msg.hidden = false;
          msg.className = "alert";
          msg.textContent = "会員IDとパスワードを入力してください。";
        }
        return;
      }
      location.href = PAGES.member;
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderHeader();
    renderFooter();
    renderSidebar();
    initRegionTabs();
    initJobFilter();
    initOfficeFilter();
    initForms();
    initReveal();
    initLoginDemo();
  });
})();
