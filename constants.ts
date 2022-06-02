interface NavLink {
  label: string;
  path: string;
  img: string;
}

export const navLinks: NavLink[] = [
  {
    label: "Home",
    path: "/",
    img: "",
  },
  {
    img: "/images/neauthy-skincare.jpg",
    label: "Personlig pleje",
    path: "/collections/personlig-pleje",
  },
  {
    img: "/images/ella-olsson.jpg",
    label: "Husholdning",
    path: "/collections/husholdning",
  },
  {
    img: "/images/anh-nguyen.jpg",
    label: "Fødevare",
    path: "/collections/fodevare",
  },
  {
    img: "",
    label: "About",
    path: "/about",
  },
];

export const Links = [
  {
    img: "/images/neauthy-skincare.jpg",
    title: "Personlig pleje",
    path: "/collections/personlig-pleje",
    subMenus: [
      {
        img: "/images/neauthy-skincare.jpg",
        title: "Bad og sæbe",
        path: "/collections/personlig-pleje/Bad og sæbe",
        subSubMenus: [
          {
            img: "/images/neauthy-skincare.jpg",
            title: "Bad tilbehør",
            path: "/collections/personlig-pleje/Bad og sæbe/Bad tilbehør",
          },
          {
            img: "/images/neauthy-skincare.jpg",
            title: "Bodyscrub",
            path: "/collections/personlig-pleje/Bad og sæbe/Bodyscrub",
          },
          {
            img: "/images/neauthy-skincare.jpg",
            title: "Håndsæbe",
            path: "/collections/personlig-pleje/Bad og sæbe/Håndsæbe",
          },
          {
            img: "/images/neauthy-skincare.jpg",
            title: "Sæber og sæbeskåle",
            path: "/collections/personlig-pleje/Bad og sæbe/Sæber og sæbeskåle",
          },
        ],
      },
      {
        img: "/images/neauthy-skincare.jpg",
        title: "Hygiejne",
        path: "/collections/personlig-pleje/Hygiejne/",
        subSubMenus: [
          {
            img: "/images/neauthy-skincare.jpg",
            title: "Babering",
            path: "/collections/personlig-pleje/Hygiejne/Babering",
          },
          {
            img: "/images/neauthy-skincare.jpg",
            title: "Deodorant",
            path: "/collections/personlig-pleje/Hygiejne/Deodorant",
          },
          {
            img: "/images/neauthy-skincare.jpg",
            title: "Intimhygiejne",
            path: "/collections/personlig-pleje/Hygiejne/Intimhygiejne",
          },
          {
            img: "/images/neauthy-skincare.jpg",
            title: "Lommetørklæder",
            path: "/collections/personlig-pleje/Hygiejne/Lommetørklæder",
          },
          {
            img: "/images/neauthy-skincare.jpg",
            title: "Plaster",
            path: "/collections/personlig-pleje/Hygiejne/Plaster",
          },
        ],
      },
      {
        img: "/images/neauthy-skincare.jpg",
        title: "Hår",
        path: "/collections/personlig-pleje/Hår/",
        subSubMenus: [
          {
            img: "/images/neauthy-skincare.jpg",
            title: "Hårbørster, Kamme & Sakse",
            path: "/collections/personlig-pleje/Hår/Hårbørster, Kamme & Sakse",
          },
          {
            img: "/images/neauthy-skincare.jpg",
            title: "Hårfarve",
            path: "/collections/personlig-pleje/Hår/Hårfarve",
          },
          {
            img: "/images/neauthy-skincare.jpg",
            title: "Hårserum, Kur & Massage",
            path: "/collections/personlig-pleje/Hår/Hårserum, Kur & Massage",
          },
          {
            img: "/images/neauthy-skincare.jpg",
            title: "Hårpynt",
            path: "/collections/personlig-pleje/Hår/Hårpynt",
          },
          {
            img: "/images/neauthy-skincare.jpg",
            title: "Shampoo - Balsam bar",
            path: "/collections/personlig-pleje/Hår/Shampoo - Balsam bar",
          },
          {
            img: "/images/neauthy-skincare.jpg",
            title: "Shampoo - Balsam flydende",
            path: "/collections/personlig-pleje/Hår/Shampoo - Balsam flydende",
          },
          {
            img: "/images/neauthy-skincare.jpg",
            title: "Styling & Tørshampoo",
            path: "/collections/personlig-pleje/Hår/Styling & Tørshampoo",
          },
        ],
      },
      {
        img: "/images/neauthy-skincare.jpg",
        title: "Kosmetik",
        path: "/collections/personlig-pleje/Kosmetik/",
        subSubMenus: [
          {
            img: "/images/neauthy-skincare.jpg",
            title: "Ansigt",
            path: "/collections/personlig-pleje/Kosmetik/Ansigt",
          },
          {
            img: "/images/neauthy-skincare.jpg",
            title: "Eau de Toilette",
            path: "/collections/personlig-pleje/Kosmetik/Eau de Toilette",
          },
          {
            img: "/images/neauthy-skincare.jpg",
            title: "Læber",
            path: "/collections/personlig-pleje/Kosmetik/Læber",
          },
          {
            img: "/images/neauthy-skincare.jpg",
            title: "Makeup børster & tilbehør",
            path: "/collections/personlig-pleje/Kosmetik/Makeup børster & tilbehør",
          },
          {
            img: "/images/neauthy-skincare.jpg",
            title: "Neglelak & negletilbehør",
            path: "/collections/personlig-pleje/Kosmetik/Neglelak & negletilbehør",
          },
          {
            img: "/images/neauthy-skincare.jpg",
            title: "Øjne",
            path: "/collections/personlig-pleje/Kosmetik/Øjne",
          },
        ],
      },
      {
        img: "/images/neauthy-skincare.jpg",
        title: "Kropspleje",
        path: "/collections/personlig-pleje/Kropspleje/",
        subSubMenus: [
          {
            img: "/images/neauthy-skincare.jpg",
            title: "Ansigtscreme",
            path: "/collections/personlig-pleje/Kropspleje/Ansigtscreme",
          },
          {
            img: "/images/neauthy-skincare.jpg",
            title: "Bodylotion",
            path: "/collections/personlig-pleje/Kropspleje/Bodylotion",
          },
          {
            img: "/images/neauthy-skincare.jpg",
            title: "Fodpleje",
            path: "/collections/personlig-pleje/Kropspleje/Fodpleje",
          },
          {
            img: "/images/neauthy-skincare.jpg",
            title: "Håndpleje",
            path: "/collections/personlig-pleje/Kropspleje/Håndpleje",
          },
          {
            img: "/images/neauthy-skincare.jpg",
            title: "Læbepomade",
            path: "/collections/personlig-pleje/Kropspleje/Læbepomade",
          },
          {
            img: "/images/neauthy-skincare.jpg",
            title: "Massage",
            path: "/collections/personlig-pleje/Kropspleje/Massage",
          },
          {
            img: "/images/neauthy-skincare.jpg",
            title: "Rens & tilbehør",
            path: "/collections/personlig-pleje/Kropspleje/Rens & tilbehør",
          },
          {
            img: "/images/neauthy-skincare.jpg",
            title: "Solcreme & aftersun",
            path: "/collections/personlig-pleje/Kropspleje/Solcreme & aftersun",
          },
        ],
      },
      {
        img: "/images/neauthy-skincare.jpg",
        title: "Mor og barn",
        path: "/collections/personlig-pleje/Mor og barn/",
        subSubMenus: [
          {
            img: "/images/neauthy-skincare.jpg",
            title: "Baby",
            path: "/collections/personlig-pleje/Mor og barn/Baby",
          },
        ],
      },
      {
        img: "/images/neauthy-skincare.jpg",
        title: "Tandpleje",
        path: "/collections/personlig-pleje/tandpleje/",
        subSubMenus: [
          {
            img: "/images/neauthy-skincare.jpg",
            title: "Tandpleje",
            path: "/collections/personlig-pleje/tandpleje/tandpleje",
          },
        ],
      },
      {
        img: "/images/neauthy-skincare.jpg",
        title: "Natulige olier & kosmetriske råvare",
        path: "/collections/personlig-pleje/Natulige olier & kosmetriske råvare/",
        subSubMenus: [
          {
            img: "/images/neauthy-skincare.jpg",
            title: "Naturlig duft",
            path: "/collections/personlig-pleje/Natulige olier & kosmetriske råvare/Naturlig duft",
          },
          {
            img: "/images/neauthy-skincare.jpg",
            title: "Naturlig olie",
            path: "/collections/personlig-pleje/Natulige olier & kosmetriske råvare/Naturlig olie",
          },
          {
            img: "/images/neauthy-skincare.jpg",
            title: "Kosmetiske råvarer",
            path: "/collections/personlig-pleje/Natulige olier & kosmetriske råvare/Kosmetiske råvarer",
          },
        ],
      },
      {
        img: "/images/neauthy-skincare.jpg",
        title: "Rondeller og vatpinde",
        path: "/collections/personlig-pleje/Rondeller og vatpinde/",
        subSubMenus: [
          {
            img: "/images/neauthy-skincare.jpg",
            title: "Vatpinde og ørerensere",
            path: "/collections/personlig-pleje/Rondeller og vatpinde/Vatpinde og ørerensere",
          },
        ],
      },
      {
        img: "/images/neauthy-skincare.jpg",
        title: "Tilbehør",
        path: "/collections/personlig-pleje/Tilbehør/",
        subSubMenus: [
          {
            img: "/images/neauthy-skincare.jpg",
            title: "Toilettasker",
            path: "/collections/personlig-pleje/Tilbehør/Toilettasker",
          },
          {
            img: "/images/neauthy-skincare.jpg",
            title: "Varmepude",
            path: "/collections/personlig-pleje/Tilbehør/Varmepude",
          },
        ],
      },
    ],
  },
  {
    img: "/images/ella-olsson.jpg",
    title: "Husholdning",
    path: "/collections/husholdning",
    subMenus: [
      {
        img: "/images/ella-olsson.jpg",
        title: "Boligtilbehør",
        path: "/collections/husholdning/boligtilbehor/",
        subSubMenus: [
          {
            img: "/images/ella-olsson.jpg",
            title: "Duft, røgelse & lys",
            path: "/collections/husholdning/boligtilbehor/Duft, røgelse & lys",
          },
          {
            img: "/images/ella-olsson.jpg",
            title: "Glasflasker & beholder",
            path: "/collections/husholdning/boligtilbehor/Glasflasker & beholder",
          },
          {
            img: "/images/ella-olsson.jpg",
            title: "Indpakning, poser & pynt",
            path: "/collections/husholdning/boligtilbehor/Indpakning, poser & pynt",
          },
        ],
      },
      {
        img: "/images/ella-olsson.jpg",
        title: "Køkkenartikler",
        path: "/collections/husholdning/Køkkenartikler/",
        subSubMenus: [
          {
            img: "/images/ella-olsson.jpg",
            title: "Køkkentilbehør",
            path: "/collections/husholdning/Køkkenartikler/Køkkentilbehør",
          },
          {
            img: "/images/ella-olsson.jpg",
            title: "Sugerør",
            path: "/collections/husholdning/Køkkenartikler/Sugerør",
          },
        ],
      },
      {
        img: "/images/ella-olsson.jpg",
        title: "Madopbevaring",
        path: "/collections/husholdning/Madopbevaring/",
        subSubMenus: [
          {
            img: "/images/ella-olsson.jpg",
            title: "Drikkeflasker",
            path: "/collections/husholdning/Madopbevaring/Drikkeflasker",
          },
          {
            img: "/images/ella-olsson.jpg",
            title: "Madkasser",
            path: "/collections/husholdning/Madopbevaring/Madkasser",
          },
        ],
      },
      {
        img: "/images/ella-olsson.jpg",
        title: "Rengøring(sartikler)",
        path: "/collections/husholdning/Rengøring(sartikler)/",
        subSubMenus: [
          {
            img: "/images/ella-olsson.jpg",
            title: "Børste & svampe",
            path: "/collections/husholdning/Rengøring(sartikler)/Børste & svampe",
          },
          {
            img: "/images/ella-olsson.jpg",
            title: "Koste & fejebakker",
            path: "/collections/husholdning/Rengøring(sartikler)/Koste & fejebakker",
          },
          {
            img: "/images/ella-olsson.jpg",
            title: "Opvask",
            path: "/collections/husholdning/Rengøring(sartikler)/Opvask",
          },
          {
            img: "/images/ella-olsson.jpg",
            title: "Rengøringsmidler",
            path: "/collections/husholdning/Rengøring(sartikler)/Rengøringsmidler",
          },
          {
            img: "/images/ella-olsson.jpg",
            title: "Tøjvask",
            path: "/collections/husholdning/Rengøring(sartikler)/Tøjvask",
          },
        ],
      },
      {
        img: "/images/ella-olsson.jpg",
        title: "Tekstiler",
        path: "/collections/husholdning/Tekstiler/",
        subSubMenus: [
          {
            img: "/images/ella-olsson.jpg",
            title: "Håndklæder",
            path: "/collections/husholdning/Tekstiler/Håndklæder",
          },
          {
            img: "/images/ella-olsson.jpg",
            title: "Klude",
            path: "/collections/husholdning/Tekstiler/Klude",
          },
          {
            img: "/images/ella-olsson.jpg",
            title: "Viskestykker",
            path: "/collections/husholdning/Tekstiler/Viskestykker",
          },
        ],
      },
    ],
  },
  {
    title: "Fødevare",
    path: "/collections/fodevare",
    img: "/images/anh-nguyen.jpg",
    subMenus: [
      {
        img: "/images/anh-nguyen.jpg",
        title: "Mad - kolonial",
        path: "/collections/fodevare/Mad - kolonial/",
        subSubMenus: [
          {
            img: "/images/anh-nguyen.jpg",
            title: "Kolonial",
            path: "/collections/fodevare/Mad - kolonial/Kolonial",
          },
          {
            img: "/images/anh-nguyen.jpg",
            title: "Konfekture",
            path: "/collections/fodevare/Mad - kolonial/Konfekture",
          },
          {
            img: "/images/anh-nguyen.jpg",
            title: "Krydderier, Urter, Blomster & Pulver",
            path: "/collections/fodevare/Mad - kolonial/Krydderier, Urter, Blomster & Pulver",
          },
          {
            img: "/images/anh-nguyen.jpg",
            title: "Slik",
            path: "/collections/fodevare/Mad - kolonial/Slik",
          },
          {
            img: "/images/anh-nguyen.jpg",
            title: "Tyggeegummi",
            path: "/collections/fodevare/Mad - kolonial/Tyggeegummi",
          },
        ],
      },
      {
        img: "/images/anh-nguyen.jpg",
        title: "Drikkevare",
        path: "/collections/fodevare/Drikkevare/",
        subSubMenus: [
          {
            img: "/images/anh-nguyen.jpg",
            title: "Drikkevarer",
            path: "/collections/fodevare/Drikkevare/Drikkevarer",
          },
          {
            img: "/images/anh-nguyen.jpg",
            title: "Kaffe & te",
            path: "/collections/fodevare/Drikkevare/Kaffe & te",
          },
        ],
      },
    ],
  },
];
