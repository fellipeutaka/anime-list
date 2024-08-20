// Script used in https://www.crunchyroll.com/crunchylists/<list-id>
/*
const series = Array.from(
  document.querySelectorAll("div.custom-list-card--0TK2P")
);

const data = series.map((serie) => {
  const linkElement = serie.querySelector(
    "a.custom-list-card-hover__link--B-7Kw"
  );

  const imageElement = serie.querySelector(
    "a.custom-list-card-hover__thumbnails-wrapper--NscLv div.content-image--3na7E.content-image--is-sized--SOai1.custom-list-card-hover__thumbnail--TCQxG div.content-image-figure-wrapper--pKs17.content-image__figure-wrapper--TRCnl div.content-image-figure-wrapper__figure-sizer--SH2-x.content-image__figure-sizer--is-background-type-one--Eo1qr figure.content-image__figure--7vume div.progressive-image-loading--rwH3R picture img.content-image__image--7tGlg.progressive-image-loading__original--k-k-7"
  );

  const metaElement = serie.querySelector(
    "div.custom-list-card__footer--lDTVT span"
  );

  return {
    title: linkElement?.getAttribute("title"),
    link: linkElement?.getAttribute("href"),
    image: imageElement
      ?.getAttribute("src")
      ?.replace(
        /fit=contain,format=auto,quality=\d+,width=\d+,height=\d+/,
        "format=auto,quality=90,width=256"
      ),
    meta: metaElement?.textContent,
  };
});

console.log(JSON.stringify(data, null, 2));
*/

export const INITIAL_ANIME_LIST = [
  {
    title: "Re:ZERO -Starting Life in Another World-",
    link: "/series/GRGG9798R/rezero--starting-life-in-another-world-",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,quality=90,width=256/catalog/crunchyroll/653fb1c89ecec17dc6947308819d702b.jpg",
    meta: "Sub | Dub",
  },
  {
    title: "Death Note",
    link: "/series/G6QWD3EE6/death-note",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,quality=90,width=256/catalog/crunchyroll/97129a46f2418ffe5a67ec64f49a3038.jpg",
    meta: "Sub | Dub",
  },
  {
    title: "Classroom of the Elite",
    link: "/series/GRVN8MNQY/classroom-of-the-elite",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,quality=90,width=256/catalog/crunchyroll/3faa80fc683fd414a128b66b1acf535f.jpg",
    meta: "Sub | Dub",
  },
  {
    title: "Dragon Ball",
    link: "/series/G8DHV7W21/dragon-ball",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,quality=90,width=256/catalog/crunchyroll/ce1e64ed1cb39a718b070960c86e0db2.jpg",
    meta: "Sub | Dub",
  },
  {
    title: "Dragon Ball Z",
    link: "/series/G9VHN9PPW/dragon-ball-z",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,quality=90,width=256/catalog/crunchyroll/36bdc5ea4443cd8e42f22ec7d3884cbb.jpg",
    meta: "Sub | Dub",
  },
  {
    title: "Dragon Ball Super",
    link: "/series/GR19V7816/dragon-ball-super",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,quality=90,width=256/catalog/crunchyroll/26079ab060401d8a76039e985d63a3e9.jpg",
    meta: "Subtitled",
  },
  {
    title: "Dragon Ball GT",
    link: "/series/G4PH0WXXM/dragon-ball-gt",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,quality=90,width=256/catalog/crunchyroll/5de444edf50cfe5dc4b8b9c93546c150.jpg",
    meta: "Sub | Dub",
  },
  {
    title: "KONOSUBA -God's blessing on this wonderful world!",
    link: "/series/GYE5K3GQR/konosuba--gods-blessing-on-this-wonderful-world",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,quality=90,width=256/catalog/crunchyroll/131f32cf27743b9c95b78b4b3fb1c6ee.jpg",
    meta: "Sub | Dub",
  },
  {
    title: "KONOSUBA -An Explosion on This Wonderful World!",
    link: "/series/GJ0H7Q5V7/konosuba--an-explosion-on-this-wonderful-world",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,quality=90,width=256/catalog/crunchyroll/26f4a1d5cd1369fb15c7d52a7d7a3105.jpe",
    meta: "Sub | Dub",
  },
  {
    title: "Zom 100: Bucket List of the Dead",
    link: "/series/GJ0H7QGQK/zom-100-bucket-list-of-the-dead",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,quality=90,width=256/catalog/crunchyroll/ee3b963336bd4a9932fa880874bee3d3.jpg",
    meta: "Sub | Dub",
  },
  {
    title: "DON'T TOY WITH ME, MISS NAGATORO",
    link: "/series/GQWH0M455/dont-toy-with-me-miss-nagatoro",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,quality=90,width=256/catalog/crunchyroll/341ee9d0732bd1df3ca278dcaf6e11be.jpg",
    meta: "Sub | Dub",
  },
  {
    title: "More than a Married Couple, but Not Lovers.",
    link: "/series/GJ0H7Q5N3/more-than-a-married-couple-but-not-lovers",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,quality=90,width=256/catalog/crunchyroll/8a9adc8fd5b4c946d6ee86f29da554c0.jpe",
    meta: "Sub | Dub",
  },
  {
    title: "Berserk of Gluttony",
    link: "/series/G1XHJV05V/berserk-of-gluttony",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,quality=90,width=256/catalog/crunchyroll/99d963532512c5a7ea974204138faf6f.jpg",
    meta: "Sub | Dub",
  },
  {
    title: "Grimgar, Ashes and Illusions",
    link: "/series/GRVNX917Y/grimgar-ashes-and-illusions",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,quality=90,width=256/catalog/crunchyroll/46e661617b75f57a8f5ffa6544d02a85.jpg",
    meta: "Subtitled",
  },
  {
    title: "BLUE LOCK",
    link: "/series/G4PH0WEKE/blue-lock",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,quality=90,width=256/catalog/crunchyroll/8c2a8fcb6dfba195ad4e7486b39339c2.jpg",
    meta: "Sub | Dub",
  },
  {
    title: "SPY x FAMILY",
    link: "/series/G4PH0WXVJ/spy-x-family",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,quality=90,width=256/catalog/crunchyroll/d45157163f2cfa6c1ce3ae32c30a96f4.jpe",
    meta: "Sub | Dub",
  },
  {
    title: "TONIKAWA: Over The Moon For You",
    link: "/series/GRWMGGQ86/tonikawa-over-the-moon-for-you",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,quality=90,width=256/catalog/crunchyroll/3e426b92e0f4d9d1fff29cad8e268773.jpe",
    meta: "Sub | Dub",
  },
  {
    title: "Food Wars! Shokugeki no Soma",
    link: "/series/G6GG91P26/food-wars-shokugeki-no-soma",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,quality=90,width=256/catalog/crunchyroll/4e954b4dff8729bf4476d76d8185bce6.jpg",
    meta: "Sub | Dub",
  },
  {
    title: "Girlfriend, Girlfriend",
    link: "/series/GEXH3WP97/girlfriend-girlfriend",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,quality=90,width=256/catalog/crunchyroll/606fbba7ec63de98752bed45e8b0a3b7.jpg",
    meta: "Sub | Dub",
  },
  {
    title: "DARLING in the FRANXX",
    link: "/series/GY8VEQ95Y/darling-in-the-franxx",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,quality=90,width=256/catalog/crunchyroll/626b30dc8203a0e263bba0a191a8f7be.jpg",
    meta: "Sub | Dub",
  },
  {
    title: "Noragami",
    link: "/series/G6WEV3WM6/noragami",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,quality=90,width=256/catalog/crunchyroll/b5dc286fb64f7bdc8eaa47e36f079c74.jpe",
    meta: "Sub | Dub",
  },
  {
    title: "Your lie in April",
    link: "/series/G63V7KN9Y/your-lie-in-april",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,quality=90,width=256/catalog/crunchyroll/589632aedf2ed936e2c7ba95ed6ed5d4.jpe",
    meta: "Sub | Dub",
  },
  {
    title: "Fullmetal Alchemist: Brotherhood",
    link: "/series/GRGGPG93R/fullmetal-alchemist-brotherhood",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,quality=90,width=256/catalog/crunchyroll/ac0052958fa876ed2ef926920a88ec75.jpg",
    meta: "Sub | Dub",
  },
  {
    title: "Mob Psycho 100",
    link: "/series/GY190DKQR/mob-psycho-100",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,quality=90,width=256/catalog/crunchyroll/c0e2440d3f27196ba37abaed8b824df5.jpg",
    meta: "Sub | Dub",
  },
  {
    title: "Sword Art Online",
    link: "/series/GR49G9VP6/sword-art-online",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,quality=90,width=256/catalog/crunchyroll/2ac201aa63c364c1520838bfa24bb3b4.jpg",
    meta: "Sub | Dub",
  },
  {
    title: "High School DxD",
    link: "/series/GR2P21J9R/high-school-dxd",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,quality=90,width=256/catalog/crunchyroll/c250f0d2e00af970476de8a8f3362446.jpg",
    meta: "Dubbed",
  },
  {
    title: "Engage Kiss",
    link: "/series/GJ0H7Q8J0/engage-kiss",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,quality=90,width=256/catalog/crunchyroll/c06a128a85df266ba55bd9c01677cb69.jpg",
    meta: "Sub | Dub",
  },
  {
    title: "The Girl I Like Forgot Her Glasses",
    link: "/series/GNVHKN9DE/the-girl-i-like-forgot-her-glasses",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,quality=90,width=256/catalog/crunchyroll/b5de387d9b810e125fd674589819aa16.jpe",
    meta: "Subtitled",
  },
  {
    title: "The Angel Next Door Spoils Me Rotten",
    link: "/series/G9VHN91DJ/the-angel-next-door-spoils-me-rotten",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,quality=90,width=256/catalog/crunchyroll/f8d67f897026df95f8104660f5e5b15b.jpe",
    meta: "Sub | Dub",
  },
  {
    title: "Science Fell in Love, So I Tried to Prove it",
    link: "/series/G6P5MMXV6/science-fell-in-love-so-i-tried-to-prove-it",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,quality=90,width=256/catalog/crunchyroll/f6d76492f7493e633aac8f7bb0da3228.jpe",
    meta: "Sub | Dub",
  },
  {
    title: "The Rising of the Shield Hero",
    link: "/series/G6W4QKX0R/the-rising-of-the-shield-hero",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,quality=90,width=256/catalog/crunchyroll/6aaf36afb57680cdc5812e28a98bb62d.jpe",
    meta: "Sub | Dub",
  },
  {
    title: "A Couple of Cuckoos",
    link: "/series/GXJHM39MP/a-couple-of-cuckoos",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,quality=90,width=256/catalog/crunchyroll/0c976a3b11750b3e34655b6eac0e96fd.jpg",
    meta: "Sub | Dub",
  },
  {
    title:
      "The 100 Girlfriends Who Really, Really, Really, Really, REALLY Love You",
    link: "/series/GNVHKN933/the-100-girlfriends-who-really-really-really-really-really-love-you",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,quality=90,width=256/catalog/crunchyroll/530b81ea91a57829a9851e68b96db82c.jpe",
    meta: "Sub | Dub",
  },
  {
    title: "Naruto",
    link: "/series/GY9PJ5KWR/naruto",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,quality=90,width=256/catalog/crunchyroll/e6b2cd29a5ff62f4591d3b299007e24e.jpe",
    meta: "Subtitled",
  },
  {
    title: "Naruto Shippuden",
    link: "/series/GYQ4MW246/naruto-shippuden",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,quality=90,width=256/catalog/crunchyroll/3f283002b47c62b1e5d311c45f95c97e.jpg",
    meta: "Subtitled",
  },
  {
    title: "BORUTO: NARUTO NEXT GENERATIONS (International Dubs)",
    link: "/series/GZJH3DPED/boruto-naruto-next-generations-international-dubs",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,quality=90,width=256/catalog/crunchyroll/602f19613d3655fdd79ca2e3c0400d00.jpg",
    meta: "Dubbed",
  },
  {
    title: "One Piece",
    link: "/series/GRMG8ZQZR/one-piece",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,quality=90,width=256/catalog/crunchyroll/a249096c7812deb8c3c2c907173f3774.jpg",
    meta: "Sub | Dub",
  },
  {
    title: "JoJo's Bizarre Adventure",
    link: "/series/GYP8DP1MY/jojos-bizarre-adventure",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,quality=90,width=256/catalog/crunchyroll/aaeca3e651bebe79fe808085d079feea.jpe",
    meta: "Subtitled",
  },
  {
    title: "My Hero Academia",
    link: "/series/G6NQ5DWZ6/my-hero-academia",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,quality=90,width=256/catalog/crunchyroll/9ca680632ac63f44c7220f61ace9a81b.jpg",
    meta: "Sub | Dub",
  },
  {
    title: "Solo Leveling",
    link: "/series/GDKHZEJ0K/solo-leveling",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,quality=90,width=256/catalog/crunchyroll/4305090653ee4239dd0d797f1a4a6bdf.jpg",
    meta: "Sub | Dub",
  },
  {
    title: "Hunter x Hunter",
    link: "/series/GY3VKX1MR/hunter-x-hunter",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,quality=90,width=256/catalog/crunchyroll/2e54344c7cc1675af721b4021222230f.jpg",
    meta: "Subtitled",
  },
  {
    title: "Dr. STONE",
    link: "/series/GYEXQKJG6/dr-stone",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,quality=90,width=256/catalog/crunchyroll/f3accca2b543e1d3b7b9533ca55d2119.jpg",
    meta: "Sub | Dub",
  },
  {
    title: "Fuuka",
    link: "/series/GRJQNG8XY/fuuka",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,quality=90,width=256/catalog/crunchyroll/e246c3bcbfb7de7554e468943f184b6f.jpg",
    meta: "Sub | Dub",
  },
  {
    title: "Attack on Titan",
    link: "/series/GR751KNZY/attack-on-titan",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,quality=90,width=256/catalog/crunchyroll/1dea4b0c71a1b3837e27077b93bfc217.jpg",
    meta: "Sub | Dub",
  },
  {
    title: "Haikyu!!",
    link: "/series/GY8VM8MWY/haikyu",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,quality=90,width=256/catalog/crunchyroll/fe17730303eb9b81fab379a0546a3fc7.jpg",
    meta: "Sub | Dub",
  },
  {
    title: "THE PROMISED NEVERLAND",
    link: "/series/GYVD2K1WY/the-promised-neverland",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,quality=90,width=256/catalog/crunchyroll/a7243613edbb4322bf20caed6a270b52.jpe",
    meta: "Sub | Dub",
  },
  {
    title: "Idoly Pride",
    link: "/series/G3KHEVQW5/idoly-pride",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,quality=90,width=256/catalog/crunchyroll/c43fdd9deaa33e3cf291cfa10d8de0e2.jpg",
  },
  {
    title: "Mushoku Tensei: Jobless Reincarnation",
    link: "/series/G24H1N3MP/mushoku-tensei-jobless-reincarnation",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,quality=90,width=256/catalog/crunchyroll/6b944913c4e0a705b1fdc0e426e24530.jpg",
    meta: "Sub | Dub",
  },
  {
    title: "STEINS;GATE",
    link: "/series/GYWE7W5GY/steinsgate",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,quality=90,width=256/catalog/crunchyroll/ac6e22b27d285ed90e72744584d23434.jpe",
  },
  {
    title: "Steins;Gate 0",
    link: "/series/GYW4D15K6/steinsgate-0",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,quality=90,width=256/catalog/crunchyroll/411e752336bd55d33c2bf1ead2fddef9.jpe",
    meta: "Sub | Dub",
  },
  {
    title: "Tokyo Revengers",
    link: "/series/G3KHEVMN1/tokyo-revengers",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,quality=90,width=256/catalog/crunchyroll/7923a0407dbdba324c56acec9f096c13.jpe",
    meta: "Sub | Dub",
  },
  {
    title:
      "Higehiro: After Being Rejected, I Shaved and Took in a High School Runaway",
    link: "/series/GXJHM3NW5/higehiro-after-being-rejected-i-shaved-and-took-in-a-high-school-runaway",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,quality=90,width=256/catalog/crunchyroll/5a4da09cb93bb47279df775e3e4b2de8.jpg",
    meta: "Sub | Dub",
  },
  {
    title: "Cowboy Bebop",
    link: "/series/GYVNXMVP6/cowboy-bebop",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,quality=90,width=256/catalog/crunchyroll/87a7725ab26709c9d17d9d44c7cee02a.jpg",
    meta: "Sub | Dub",
  },
  {
    title: "Bungo Stray Dogs",
    link: "/series/GR5VXQ8PR/bungo-stray-dogs",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,quality=90,width=256/catalog/crunchyroll/8f5fce5262796491d3d9332b0e5551bf.jpg",
    meta: "Sub | Dub",
  },
  {
    title: "Demon Slayer: Kimetsu no Yaiba",
    link: "/series/GY5P48XEY/demon-slayer-kimetsu-no-yaiba",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,quality=90,width=256/catalog/crunchyroll/6b17182a3518d7406f0e69687f773f4f.jpg",
    meta: "Sub | Dub",
  },
  {
    title: "JUJUTSU KAISEN",
    link: "/series/GRDV0019R/jujutsu-kaisen",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,quality=90,width=256/catalog/crunchyroll/8b7f5847f9b97f921e41d4ef59fd2d79.jpe",
    meta: "Sub | Dub",
  },
  {
    title: "Kaguya-sama: Love Is War",
    link: "/series/GRJ0J828Y/kaguya-sama-love-is-war",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,quality=90,width=256/catalog/crunchyroll/c666ad3b91f3aca41e958b0c618cde77.jpg",
    meta: "Sub | Dub",
  },
  {
    title: "Golden Time",
    link: "/series/GY49G7K8R/golden-time",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,quality=90,width=256/catalog/crunchyroll/9506fe767074a571c4f520d39dbf989b.jpg",
  },
  {
    title: "The Quintessential Quintuplets",
    link: "/series/GY4PD7Z06/the-quintessential-quintuplets",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,quality=90,width=256/catalog/crunchyroll/010634e9d1c76f0596248c1091e4586c.jpg",
    meta: "Sub | Dub",
  },
  {
    title: "Chainsaw Man",
    link: "/series/GVDHX8QNW/chainsaw-man",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,quality=90,width=256/catalog/crunchyroll/706a725cc02cd7b50c6cbbd5444be3e9.jpg",
    meta: "Sub | Dub",
  },
  {
    title: "Tokyo Ghoul",
    link: "/series/G6NV7Z50Y/tokyo-ghoul",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,quality=90,width=256/catalog/crunchyroll/95d654e35bbd2b8f972f2ccfe80df20b.jpe",
    meta: "Sub | Dub",
  },
  {
    title: "Rascal Does Not Dream of Bunny Girl Senpai",
    link: "/series/GYW4MG9G6/rascal-does-not-dream-of-bunny-girl-senpai",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,quality=90,width=256/catalog/crunchyroll/298403eab66728ac995f64c7d92fd154.jpe",
    meta: "Subtitled",
  },
  {
    title: "Our Dating Story: The Experienced You and The Inexperienced Me",
    link: "/series/G5PHNM9G5/our-dating-story-the-experienced-you-and-the-inexperienced-me",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,quality=90,width=256/catalog/crunchyroll/a3c010d796abeb4f0d0cc72650ca7fac.jpe",
    meta: "Subtitled",
  },
  {
    title: "BOCCHI THE ROCK!",
    link: "/series/GXJHM3P19/bocchi-the-rock",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,quality=90,width=256/catalog/crunchyroll/88fbe563405097ee6eeeccd9d46195e2.jpg",
    meta: "Subtitled",
  },
  {
    title: "Shikimori's Not Just a Cutie",
    link: "/series/GNVHKN7M4/shikimoris-not-just-a-cutie",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,quality=90,width=256/catalog/crunchyroll/c1aa33105d2acdcf7807310743b01948.jpe",
    meta: "Sub | Dub",
  },
  {
    title: "My Dress-Up Darling",
    link: "/series/GQWH0M9N8/my-dress-up-darling",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,quality=90,width=256/catalog/crunchyroll/e882b318ff164f165ac4918e6118ab49.jpg",
    meta: "Sub | Dub",
  },
  {
    title: "Rent-a-Girlfriend",
    link: "/series/G6QWV3976/rent-a-girlfriend",
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,quality=90,width=256/catalog/crunchyroll/548c51dae7f89955eadaf9f9ce79359b.jpg",
    meta: "Sub | Dub",
  },
].map(({ title, link, image, meta }) => ({
  id: crypto.randomUUID(),
  title,
  link: `https://www.crunchyroll.com${link}`,
  image,
  meta,
}));

export type Anime = (typeof INITIAL_ANIME_LIST)[number];
