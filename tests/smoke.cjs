// Run against a local static server. See README for the test setup.
const assert = require("node:assert/strict");
const { chromium } = require("playwright");
(async () => {
  const browser = await chromium.launch({
    headless: true,
    ...(process.env.CHROMIUM_PATH
      ? { executablePath: process.env.CHROMIUM_PATH }
      : {}),
  });
  try {
    const page = await browser.newPage({
      viewport: { width: 390, height: 844 },
    });
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    const base = process.env.TEST_URL || "http://127.0.0.1:8000/";
    await page.goto(base);
    await page.evaluate(() => {
      localStorage.setItem(
        "sumsi-link-hummel",
        "https://open.spotify.com/playlist/existing",
      );
      localStorage.setItem("sumsi-link-oma", "https://youtu.be/existing");
    });
    await page.reload();
    assert.equal(await page.locator("#dashboard").isVisible(), true);
    assert.equal(await page.locator(".exercise-view:visible").count(), 0);
    assert.equal(
      await page.locator("#hummel .music-link").getAttribute("href"),
      "https://open.spotify.com/playlist/existing",
    );
    assert.equal(
      await page.locator("#oma .music-link").getAttribute("href"),
      "https://youtu.be/existing",
    );
    for (const width of [320, 390, 768, 1440]) {
      await page.setViewportSize({ width, height: 844 });
      assert.equal(
        await page.evaluate(
          () => document.documentElement.scrollWidth > innerWidth,
        ),
        false,
        `Dashboard overflow at ${width}`,
      );
    }
    await page.setViewportSize({ width: 390, height: 844 });
    await page.clock.install();
    await page.locator("[data-open=box]").click();
    assert.equal(
      await page
        .locator("#box-title")
        .evaluate((e) => e === document.activeElement),
      true,
    );
    const box = page.locator("#box"),
      long = page.locator("#lang");
    await box.locator(".toggle").click();
    assert.equal(
      await box.evaluate((e) => e.classList.contains("is-running")),
      true,
    );
    for (const phase of ["Halten", "Ausatmen", "Halten", "Einatmen"]) {
      await page.clock.runFor(4100);
      assert.equal(await box.locator(".phase").textContent(), phase);
    }
    await box.locator(".toggle").click();
    const paused = await box.locator(".seconds").textContent();
    await page.clock.runFor(5000);
    assert.equal(await box.locator(".seconds").textContent(), paused);
    await box.locator(".toggle").click();
    await page.clock.runFor(1000);
    assert.notEqual(await box.locator(".seconds").textContent(), paused);
    await box.locator(".restart").click();
    assert.equal(await box.locator(".seconds").textContent(), "4");
    assert.equal(await box.locator(".phase").textContent(), "Einatmen");
    await page.goBack();
    assert.equal(await page.locator("#dashboard").isVisible(), true);
    assert.match(await box.locator(".toggle").textContent(), /Fortsetzen/);
    assert.equal(
      await page
        .locator("[data-open=box]")
        .evaluate((e) => e === document.activeElement),
      true,
    );
    await page.goForward();
    assert.equal(await box.isVisible(), true);
    await box.locator(".back-button").click();
    await page.waitForFunction(
      () => !document.querySelector("#dashboard").hidden,
    );
    await page.locator("[data-open=lang]").click();
    await long.locator(".toggle").click();
    const small = await long
      .locator(".breath-circle")
      .evaluate((e) => e.style.transform);
    await page.clock.runFor(2100);
    assert.notEqual(
      await long.locator(".breath-circle").evaluate((e) => e.style.transform),
      small,
    );
    await page.clock.runFor(2100);
    assert.equal(await long.locator(".phase").textContent(), "Ausatmen");
    await page.clock.runFor(8000);
    assert.equal(await long.locator(".phase").textContent(), "Einatmen");
    // Exercise exclusivity is a timer invariant, even when called without routing.
    await page.evaluate(() => {
      exercises[0].start();
    });
    assert.match(await long.locator(".toggle").textContent(), /Fortsetzen/);
    await page.evaluate(() => {
      Object.defineProperty(document, "hidden", {
        configurable: true,
        value: true,
      });
      document.dispatchEvent(new Event("visibilitychange"));
    });
    assert.match(await box.locator(".breath-status").textContent(), /Pausiert/);
    await page.goto(base + "#hummel");
    assert.equal(await page.locator("#hummel").isVisible(), true);
    assert.equal(
      await page.locator("#hummel .link-settings").getAttribute("open"),
      null,
    );
    await page.locator("#hummel summary").click();
    for (const bad of [
      "https://evil.example/",
      "http://youtube.com/",
      "https://youtube.com.evil.example/",
      "https://user@youtube.com/",
    ]) {
      await page.locator("#hummel-url").fill(bad);
      await page.locator("#hummel button[type=submit]").click();
      assert.equal(
        await page
          .locator("#hummel-url")
          .evaluate((e) => e.validity.customError),
        true,
      );
    }
    await page
      .locator("#hummel-url")
      .fill("https://www.youtube.com/watch?v=saved");
    await page.locator("#hummel button[type=submit]").click();
    await page.reload();
    assert.equal(
      await page.locator("#hummel .music-link").getAttribute("href"),
      "https://www.youtube.com/watch?v=saved",
    );
    await page.locator("#hummel summary").click();
    await page.locator("[data-reset=hummel]").click();
    assert.match(
      await page.locator("#hummel .music-link").getAttribute("href"),
      /results\?search_query/,
    );
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.waitForFunction(
      () => document.querySelector("#reduce-motion").checked,
    );
    assert.equal(
      await box
        .locator(".box-dot")
        .evaluate((e) => getComputedStyle(e).display),
      "none",
    );
    await page.emulateMedia({ reducedMotion: "no-preference" });
    await page.waitForFunction(
      () => !document.querySelector("#reduce-motion").checked,
    );
    await page.locator("#reduce-motion").check();
    await page.reload();
    assert.equal(await page.locator("#reduce-motion").isChecked(), true);
    // Direct-linked views have a safe back button, even with no app history.
    const direct = await browser.newPage({
      viewport: { width: 320, height: 720 },
    });
    await direct.goto(base + "#box");
    await direct.locator(".back-button:visible").click();
    assert.equal(await direct.locator("#dashboard").isVisible(), true);
    for (const route of ["hummel", "oma", "box", "lang"]) {
      await direct.locator(`[data-open=${route}]`).click();
      assert.equal(
        await direct.evaluate(
          () => document.documentElement.scrollWidth > innerWidth,
        ),
        false,
        `${route} overflow`,
      );
      await direct.locator(".back-button:visible").click();
      await direct.waitForFunction(
        () => !document.querySelector("#dashboard").hidden,
      );
    }
    await direct.reload();
    await direct.keyboard.press("Tab");
    assert.equal(await direct.locator(":focus").textContent(), "Zum Inhalt");
    await direct.keyboard.press("Enter");
    assert.equal(
      await direct
        .locator("#main")
        .evaluate((e) => e === document.activeElement),
      true,
    );
    const noStorage = await browser.newContext();
    await noStorage.addInitScript(() =>
      Object.defineProperty(window, "localStorage", {
        get() {
          throw new DOMException("Disabled", "SecurityError");
        },
      }),
    );
    const fallback = await noStorage.newPage();
    await fallback.goto(base + "#oma");
    await fallback.locator("summary").last().click();
    await fallback.locator("#oma-url").fill("https://youtu.be/test");
    await fallback.locator("#oma button[type=submit]").click();
    assert.match(
      await fallback.locator("#oma-status").textContent(),
      /nicht verfügbar/,
    );
    assert.deepEqual(errors, []);
    console.log(
      "PASS: dashboard, routes/back/forward/focus, preserved links, validation/storage/reset/fallback, breathing cycles/controls/exclusivity/visibility, motion preferences, responsive layouts.",
    );
  } finally {
    await browser.close();
  }
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
