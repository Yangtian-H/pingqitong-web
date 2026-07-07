import html
import re
import sys
import urllib.request


def fetch(code: str) -> str:
    url = f"https://www.butterfly-global.com/en/products/detail/{code}.html"
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=20) as res:
        return res.read().decode("utf-8", "ignore")


def plain(page: str) -> str:
    text = re.sub(r"<[^>]+>", " ", page)
    return html.unescape(re.sub(r"\s+", " ", text))


def get_between(text: str, start: str, end: str) -> str:
    idx = text.find(start)
    if idx == -1:
        return ""
    idx += len(start)
    end_idx = text.find(end, idx)
    return text[idx:end_idx].strip() if end_idx != -1 else text[idx : idx + 80].strip()


def parse(code: str, page: str) -> dict:
    text = plain(page)
    title_match = re.search(r"<h1[^>]*>(.*?)</h1>", page, re.S | re.I)
    title = plain(title_match.group(1)) if title_match else get_between(text, "Products", "Online shop")
    return {
        "code": code,
        "title": title[:80],
        "reaction": get_between(text, "Reaction property", "Vibration property"),
        "vibration": get_between(text, "Vibration property", "Structure"),
        "structure": get_between(text, "Structure", "Thickness"),
        "thickness": get_between(text, "Thickness", "Head size"),
        "head": get_between(text, "Head size", "Handle size"),
        "url": f"https://www.butterfly-global.com/en/products/detail/{code}.html",
    }


def main() -> int:
    codes = sys.argv[1:] or ["30041", "35861", "36701", "37021", "37131", "37231", "37331"]
    for code in codes:
        try:
            info = parse(code, fetch(code))
        except Exception as exc:
            print(f"{code}\tERR\t{type(exc).__name__}: {exc}")
            continue
        print(
            "\t".join(
                [
                    info["code"],
                    info["title"],
                    info["structure"],
                    info["thickness"],
                    info["reaction"],
                    info["vibration"],
                    info["head"],
                    info["url"],
                ]
            )
        )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
