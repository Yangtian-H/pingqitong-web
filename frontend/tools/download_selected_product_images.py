import io
import sys
import urllib.request
from pathlib import Path

from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / "assets" / "product-photos" / "optimized"


IMAGES = {
    "butterfly_timo_boll_alc.jpg": "https://www.butterfly-global.com/en/products/item/35861.jpg",
    "butterfly_innerforce_layer_alc.jpg": "https://www.butterfly-global.com/en/products/item/36701.jpg",
    "butterfly_lin_yun_ju_super_zlc.jpg": "https://www.butterfly-global.com/en/products/item/37131.jpg",
    "butterfly_tenergy_05.jpg": "https://www.butterfly-global.com/en/products/item/05800.jpg",
    "butterfly_tenergy_19.jpg": "https://www.butterfly-global.com/en/products/item/06090.jpg",
    "butterfly_glayzer.jpg": "https://www.butterfly-global.com/en/products/item/06100.jpg",
    "dhs_w968.jpg": "https://dhstabletennis.ca/cdn/shop/files/DHS_GHLW968_Ma-Long_Blade_yumoproshop.jpg?v=1730503122&width=1200",
    "dhs_b2x.jpg": "https://dhstabletennis.ca/cdn/shop/files/DHS_Blade_B2X_FL_doublehappinesscanada.png?v=1782244579&width=1200",
    "dhs_hurricane_2_neo.jpg": "https://dhstabletennis.ca/cdn/shop/files/ScreenShot2020-08-27at11.58.14AM.png?v=1730512379&width=1200",
    "dhs_hurricane_8.jpg": "https://dhstabletennis.ca/cdn/shop/files/DHS_Hurricane8_rubber_doublehappinesscanada.png?v=1730588732&width=1200",
    "dhs_hurricane_9.jpg": "https://dhstabletennis.ca/cdn/shop/files/DHS_hurricane_9_pink_dhscanada.png?v=1744230122&width=1200",
    "dhs_hurricane_3_50.jpg": "https://dhstabletennis.ca/cdn/shop/files/DHS_Hurricane3_50_rubber_doublehappinesscanada.png?v=1730591531&width=1200",
    "dhs_h6002.jpg": "https://dhstabletennis.ca/cdn/shop/files/DHS_H6002_FL_BAT_doublehappiness_canada.png?v=1730762550&width=1200",
    "dhs_h4002.jpg": "https://dhstabletennis.ca/cdn/shop/files/IMG_0950.jpg?v=1730748164&width=1200",
    "stiga_cybershape_carbon.jpg": "https://stigasports.centracdn.net/client/dynamic/images/4330_25f7933563-stiga-21-04-2394536-1080x1080-full.jpg",
    "yasaka_rakza_z.jpg": "https://bunny-wp-pullzone-2n5sdzke4o.b-cdn.net/wp-content/uploads/2024/09/Rubber-Rakza-Z-HR.jpg",
    "tibhar_evolution_mxp.jpg": "https://tibhar.info/wp-content/uploads/2022/09/evolution_MXP.jpg",
    "tibhar_hybrid_k3.jpg": "https://tibhar.info/wp-content/uploads/2022/09/Hybrid_K3.jpg",
    "stiga_carbonado_145.jpg": "https://sklep.stiga-tenis.pl/images/deski/carbonado145.jpg",
    "donic_zhang_jike_new_era.jpg": "https://tabletennisstore.eu/cdn/shop/files/donic-zhang-jike-NewEra01.jpg?v=1741344196",
    "nittaku_acoustic.jpg": "https://static.wixstatic.com/media/25f110_f3385049c6f14de7aa4dc882a0906b70~mv2.jpg",
    "yasaka_ma_lin_extra_offensive.jpg": "https://rodneystabletennis.co.nz/cdn/shop/products/yasaka-ma-lin-extra-off_1_480x480.jpg?v=1633320419",
    "victas_zx_gear_out.jpg": "https://tabletennisstore.eu/cdn/shop/files/Victas_ZX-Gear_OUT_02.jpg?v=1769552354",
    "xiom_vega_europe.jpg": "https://rodneystabletennis.co.nz/cdn/shop/products/265031047_1024x1024.jpg?v=1643335217",
    "xiom_omega7_pro.jpg": "https://cdn.awsli.com.br/800x800/2618/2618166/produto/232077778/2e5e4799af3abea82ea47a98ef7d4262-1ut8j1fets.jpg",
    "andro_rasanter_r48.jpg": "https://eztabletennis.com/cdn/shop/files/ANDRORASANTERR48.jpg?v=1714020376&width=1920",
    "victas_v15_extra.jpg": "https://rodneystabletennis.co.nz/cdn/shop/files/V15Extra_1024x1024.webp?v=1698102088",
    "stiga_dna_platinum_h.jpg": "https://tabletennisstore.eu/cdn/shop/products/Stiga_Stiga_DNA_Platinum_H_4.jpg?v=1649441282",
    "joola_infinity_edge.jpg": "https://cdn.megaspin.net/store/images/products/zoom_j-infinity-edge.jpg",
    "dhs_goldarc_8.jpg": "https://www.megaspin.net/store/images/products/zoom_d-gold-arc-8.jpg",
    "dhs_hurricane_8_80.jpg": "https://www.megaspin.net/store/images/products/zoom_dhs-hurricane-8-80-38.jpg",
}


def fetch(url: str) -> bytes:
    request = urllib.request.Request(
        url,
        headers={
            "User-Agent": "Mozilla/5.0",
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
        },
    )
    with urllib.request.urlopen(request, timeout=30) as response:
        return response.read()


def save_jpeg(data: bytes, target: Path) -> None:
    image = Image.open(io.BytesIO(data))
    if image.mode not in ("RGB", "L"):
        background = Image.new("RGB", image.size, "white")
        background.paste(image.convert("RGBA"), mask=image.convert("RGBA").split()[-1])
        image = background
    else:
        image = image.convert("RGB")
    image.thumbnail((900, 900), Image.Resampling.LANCZOS)
    target.parent.mkdir(parents=True, exist_ok=True)
    image.save(target, format="JPEG", quality=86, optimize=True)


def main() -> int:
    for filename, url in IMAGES.items():
        target = OUT_DIR / filename
        try:
            save_jpeg(fetch(url), target)
            print(f"saved {filename}")
        except Exception as exc:
            print(f"failed {filename}: {exc}", file=sys.stderr)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
