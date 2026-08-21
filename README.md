PlayNFT

A clone of the PlayNFT ,marketplace landing page, built component by component in React + TypeScript with Css Modules. This project focuses on translating a static design referece into a responsive real feel UI.

![PlayNFT HeroSection](/src/assets/hero-preview.png)

Features:

Responsive navbar, with active-route underline animation and live search bar.

Hero section, with gradient CTA buttons, a stats pill, and a stacked avatar group

Interactive bid card (HeroCardOverlay) - full bleed artwork with an absolutely-positioned gradient scrim, static countdown/bid values, and clickable actions.

Auto-scrolling partner and top sellers marquee - infinite loop built with duplicated content + CSS (translate) animation, pausable on hover.

"Popular this week" carousal - data-driven NFT cards with raised, larger featured card.

Explore artworks - cards with different categories of artworks.

Footer, with a 4 column link grid and social icons.

Dark, glow-accented theme using layered (radical-gradient) backgrounds.

Preview:

![PlayNFT HeroSection](/src/assets/hero-preview.png)
![PlayNFT HeroSection](/src/assets/popularThisWeek.png)
![PlayNFT HeroSection](/src/assets/footer-preview.png)

<details>
  <summary>Original design reference</summary>
  <br/>
  <img src="/src/assets/reference-design.jpg">
</details>

Tech Stack:

| | |
|---|---|
| Framework:| React + TypeScript | 
| Styling: | CSS Modules |
| Bundler: | Vite |
| Fonts:  | Poppins, Baloo 2/Fredoka |

Project Structure:
  
    src/
    
    assets/
    
    components/
    
    Band/

marquee

      Band.tsx
      Bandbar.tsx
      Band.module.css

    Community/

      Community.module.css
      Community.tsx

    ExploreArtWorks/

      ExploreArtWorks.module.css
      ExploreArtWorks.tsx
      ExploreArtWorksCard.tsx

    Footer/

      Footer.module.css
      Footer.tsx

    HeroCardOverlay/

      HeroCardOverlay.module.css
      HeroCardOverlay.tsx

    Navbar/

      Navbar.module.css
      Navbar.tsx

    Overlay/

      Overlay.module.css
      Overlay.tsx

    PopularThisWeek/

      PopularThisWeek.module.css
      PopularThisWeek.tsx

    Register/

      Register.module.css
      Register.tsx

    Search/

      Search.module.css
      Search.tsx
      Searchbar.tsx

    Section1

      Section1.module.css
      Section1.tsx

    Text/

      Text.module.css
      Text.tsx

    TopSellers

      TopSellersBar.tsx
      TopSellers.module.css
      TopSellers.tsx

    ContentContainer/
    
    App.css
    
    App.tsx
    
    asset-attribution.txt
    
    index.css
    
    main.tsx
    
    .gitignore
    
    eslint.config.js
    
    index.html
    
    package-lock.json
    
    package.json
    
    README.md
    
    tsconfig.app.json
    
    tsconfig.json
    
    tsconfig.node.json
    
    vite.config.ts

Getting Started:

  Prerequisites:

    Node.js 18+

    npm

  Installation:

    git clone https://github.com/surprise2024-cpu/Challenge-1.git

    cd playnft

    npm install

  Development:

    npm run dev

    Visit http://localhost:5173 to view the app.

  Build:

    npm run build

    npm run preview

Component Notes:

|||
|---|---|
| Band/Bandbar | The partner marquee duplicates the partner list once and animates the combined track with (Transform: translateX(-50)) on an infinite loop. The row pauses on hover via (animation-play-state: paused). |
| HeroCardOverlay | Takes (image, endingIn, highestBid), and as props rather than hardcoding any NFT's data, so that it can be reused across multiple cards (e.g. the "Popular this weeo" row) by just passing different data in. | 
| PopularThisWeek | Renders from a types array of NFT object; a card is emphasized either via a (featured) flag per item or a positional (:nth-child) rule. |

Design Tokens:

|||
|---|---|
| --accent-purple: | #8b5cf6; |
| --accent-blue: | #4f7cf7; |
| --bg-deep: | #05061a; |
| --text-light: | #ffffff; |
| --text-muted: | #9a9ac2; |



Primary gardient used across CTAs, badges and highlights:

  background: linear-gradient(90deg, #8b5cf6 0%, #4f7cf7 100%);
  
Roadmap:

  Live countdown timer on the bid card (currently a static string).

  "Popular this week" data sourced from an API instead of local array.

  Marketplace, Explore, Artists and News pages.

  Wallet connect flow for Place a Bid / Purchase actions
