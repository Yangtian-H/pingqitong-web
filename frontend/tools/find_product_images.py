import re
import sys
import urllib.parse
import urllib.request


def fetch(url: str) -> str:
    opener = urllib.request.build_opener()
    opener.addheaders = [
        ("User-Agent", "Mozilla/5.0"),
        ("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"),
    ]
    with opener.open(url, timeout=30) as response:
        return response.read().decode("utf-8", "ignore")


def extract(page: str):
    urls = set()
    for match in re.findall(r"https?://[^\"'<>\s]+?\.(?:jpg|jpeg|png|webp)(?:\?[^\"'<>\s]*)?", page, re.I):
        urls.add(match.replace("&amp;", "&"))
    for match in re.findall(r"(?:src|href|data-src|data-zoom-image)=[\"']([^\"']+?\.(?:jpg|jpeg|png|webp)(?:\?[^\"']*)?)[\"']", page, re.I):
        urls.add(match.replace("&amp;", "&"))
    links = re.findall(r"href=[\"']([^\"']+)[\"']", page, re.I)
    return sorted(urls), links


def absolutize(base: str, value: str) -> str:
    return urllib.parse.urljoin(base, value)


def main() -> int:
    for url in sys.argv[1:]:
        print(f"PAGE {url}")
        try:
            page = fetch(url)
        except Exception as exc:
            print(f"ERR {type(exc).__name__}: {exc}")
            continue
        images, links = extract(page)
        print(f"LEN {len(page)} IMAGES {len(images)}")
        for image in images[:80]:
            print("IMG", absolutize(url, image))
        print("LINKS")
        keywords = ("harimoto", "innerforce", "viscaria", "zhang", "jike", "hurricane", "long", "v>15", "v15", "bluestorm", "bluefire", "donic")
        seen = set()
        for link in links:
            low = link.lower()
            if any(key in low for key in keywords):
                full = absolutize(url, link)
                if full not in seen:
                    seen.add(full)
                    print("LINK", full)
        print("---")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
