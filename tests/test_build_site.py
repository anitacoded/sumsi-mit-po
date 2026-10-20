"""Regression checks for deployment cache versioning (Python standard library)."""

import hashlib
from pathlib import Path
import tempfile
import unittest

from scripts.build_site import ROOT, build_site


class BuildSiteTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.source = Path(self.temp.name) / "source"
        self.output = Path(self.temp.name) / "site"
        self.source.mkdir()
        (self.source / "assets").mkdir()
        (self.source / "assets/bee.svg").write_text("<svg/>")
        (self.source / "index.html").write_text(
            '<link rel="stylesheet" href="./styles.css">'
            '<script src="./app.js" defer></script>'
        )
        (self.source / "styles.css").write_bytes(b"/* original CSS */")
        (self.source / "app.js").write_bytes(b"/* original JS */")

    def test_content_hashes_match_and_build_is_repeatable(self):
        names = build_site(self.source, self.output)
        for original, versioned in names.items():
            data = (self.source / original).read_bytes()
            self.assertIn(hashlib.sha256(data).hexdigest()[:16], versioned)
            self.assertEqual(data, (self.output / versioned).read_bytes())
            self.assertIn(f'="./{versioned}"', (self.output / "index.html").read_text())
        self.assertEqual(names, build_site(self.source, self.output))
        self.assertEqual((self.output / "assets/bee.svg").read_text(), "<svg/>")

    def test_each_changed_asset_gets_a_new_url(self):
        for changed in ["styles.css", "app.js"]:
            with self.subTest(asset=changed):
                before = build_site(self.source, self.output)
                (self.source / changed).write_bytes(b"/* changed content */")
                after = build_site(self.source, self.output)
                self.assertNotEqual(before[changed], after[changed])
                other = "app.js" if changed == "styles.css" else "styles.css"
                self.assertEqual(before[other], after[other])
                html = (self.output / "index.html").read_text()
                self.assertIn(after[changed], html)
                self.assertNotIn(before[changed], html)

    def test_missing_reference_fails_instead_of_deploying_unversioned_assets(self):
        (self.source / "index.html").write_text("<p>No assets</p>")
        with self.assertRaises(ValueError):
            build_site(self.source, self.output)
        self.assertFalse(self.output.exists())

    def test_real_site_changes_only_the_two_asset_references(self):
        names = build_site(ROOT, self.output)
        html = (self.output / "index.html").read_text()
        for original, versioned in names.items():
            html = html.replace(f'./{versioned}', f'./{original}')
        self.assertEqual(html, (ROOT / "index.html").read_text())
        for original, versioned in names.items():
            self.assertEqual((self.output / versioned).read_bytes(), (ROOT / original).read_bytes())


if __name__ == "__main__":
    unittest.main()
