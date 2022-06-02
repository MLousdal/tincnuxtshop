interface NavLink {
  label: string;
  path: string;
}

export const navLinks: NavLink[] = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Personlig pleje",
    path: "/collections/personlig-pleje",
  },
  {
    label: "Hår",
    path: "/collections/har",
  },
  {
    label: "Kosmetik",
    path: "/collections/kosmetik",
  },
  {
    label: "About",
    path: "/about",
  },
];
