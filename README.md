# Ayrton Senna - Osobní Webová Stránka

## O projektu
Tento projekt je moderní jednostránková (One-Page) webová prezentace věnovaná legendárnímu závodníkovi F1, Ayrtonu Sennovi. Cílem bylo vytvořit vizuálně poutavý web, který kombinuje estetiku rychlosti, emocí a preciznosti.

**Repozitář:** `2it-web-senna`

## Použité Technologie
- **HTML5**: Sémantická struktura stránky.
- **CSS3**: Moderní stylování s využitím Flexbox/Grid a CSS proměnných.
- **JavaScript (Vanilla)**: Logika pro interakci.
- **GSAP (GreenSock Animation Platform)**: Knihovna pro pokročilé animace (Timeline, ScrollTrigger).
- **Fonty**: Google Fonts (Inter, Racing Sans One).

## Jak to funguje (Pro vysvětlení)
1.  **HTML**: Definuje "kostru" stránky. Je rozdělena na sekce (`header`, `section`, `footer`). Každá sekce má své `id`, aby na ni mohla odkazovat navigace.
2.  **CSS**: Definuje vzhled. Používám tmavé pozadí (`#0a0a0a`) pro kontrast se žlutou barvou (`#FFD700`), která je typická pro Sennovu helmu.
3.  **Animace (JS)**:
    -   **Parallax**: Obrázek v pozadí (hero) se posouvá pomaleji než zbytek stránky, což vytváří efekt hloubky.
    -   **Fade-in**: Když scrollujete dolů, texty se postupně objevují (vyjíždí zdola). To dělá `ScrollTrigger`.
    -   **Počítadlo**: Čísla ve statistikách se "natočí" od 0 do cílové hodnoty, jakmile na ně sjedete.

## Návod na spuštění
Tento web je statický (nevyžaduje backend server).
1.  Stáhněte nebo naklonujte tento repozitář.
2.  Otevřete soubor `index.html` v libovolném moderním webovém prohlížeči (Chrome, Firefox, Edge).

## Na co jsem nejvíce hrdý
-   **Design**: Kombinace tmavého režimu s "neonovou" žlutou vypadá velmi moderně.
-   **Interaktivita**: Plynulé animace čísel ve statistikách dodávají webu dynamiku.
-   **Čistota kódu**: Kód je rozdělen do logických souborů a dobře komentován.
