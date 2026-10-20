"""Prepare GitHub Pages files with content-addressed CSS and JavaScript URLs."""

import argparse
import hashlib
from pathlib import Path
import shutil


ROOT = Path(__file__).resolve().parents[1]


def build_site(source: Path, output: Path) -> dict[str, str]:
    source, output = source.resolve(), output.resolve()
    if (
        output == source
        or output in source.parents
        or output == source / "assets"
        or source / "assets" in output.parents
    ):
        raise ValueError("Output must be separate from the source and its assets")

    html = (source / "index.html").read_text(encoding="utf-8")
    assets = {}
    contents = {}
    for filename, attribute in [("styles.css", "href"), ("app.js", "src")]:
        data = (source / filename).read_bytes()
        path = Path(filename)
        versioned = f"{path.stem}.{hashlib.sha256(data).hexdigest()[:16]}{path.suffix}"
        reference = f'{attribute}="./{filename}"'
        if html.count(reference) != 1:
            raise ValueError(f"Expected exactly one {reference} in index.html")
        html = html.replace(reference, f'{attribute}="./{versioned}"')
        assets[filename] = versioned
        contents[versioned] = data

    output.mkdir(parents=True, exist_ok=True)
    # Keep relative font/image paths unchanged by retaining the directory layout.
    shutil.copytree(source / "assets", output / "assets", dirs_exist_ok=True)
    for filename, data in contents.items():
        (output / filename).write_bytes(data)
    (output / "index.html").write_text(html, encoding="utf-8")
    (output / ".nojekyll").touch()
    return assets


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--output", type=Path, default=ROOT / "_site")
    args = parser.parse_args()
    for original, versioned in build_site(ROOT, args.output).items():
        print(f"{original} -> {versioned}")
