<template>
  <footer class="footer">
    <div class="wrapper">
      <div class="footer-column">
        <h3>Kontakt</h3>
        <ul>
          <li class="flex flex-gap-1 flex-align-center">
            <img
              src="/icons/email.svg"
              alt=""
              class="icon m"
            />kontakt@tinc.shop
          </li>
          <li class="flex flex-gap-1 flex-align-center">
            <img src="/icons/phone.svg" alt="" class="icon m" />25 50 54 45
          </li>
          <li>CVR: 38459570</li>
          <hr />
          <address>
            TINC Aarhus <br />
            Frederiksgade 22 <br />
            8000 Aarhus C
          </address>
          <address>
            TINC Aalborg <br />
            Møllegade 6A <br />
            9000 Aalborg
          </address>
        </ul>
      </div>
      <div class="footer-column">
        <h3>Information</h3>
        <ul>
          <li><NuxtLink to="/">Åbningstider</NuxtLink></li>
          <li><NuxtLink to="/">Gavekort</NuxtLink></li>
          <li><NuxtLink to="/">Tilbagetrækninger</NuxtLink></li>
          <li><NuxtLink to="/">FAQ</NuxtLink></li>
          <li><NuxtLink to="/">Job</NuxtLink></li>
          <li><NuxtLink to="/">Sitemap</NuxtLink></li>
        </ul>
      </div>
      <div class="footer-column">
        <h3>Følg os</h3>
        <ul>
          <li class="flex flex-gap-1">
            <a href="https://www.facebook.com/TINC.SHOP" target="_blank"
              ><img src="/icons/facebook.svg" alt="facebook" /></a
            ><a href="https://www.instagram.com/tinc.shop/" target="_blank"
              ><img src="/icons/instagram.svg" alt="instagram"
            /></a>
          </li>
          <li class="small">Copyright & Copy 2022 Tinc.shop.</li>
          <li class="small">Drevet af Shopify</li>
        </ul>
      </div>
      <div class="footer-column">
        <h3>Regler og vilkår</h3>
        <ul>
          <li><NuxtLink to="/">Betaling og levering</NuxtLink></li>
          <li><NuxtLink to="/">Reklamation og retunering</NuxtLink></li>
          <li><NuxtLink to="/">Persondatapolitik</NuxtLink></li>
          <li><NuxtLink to="/">Cookies</NuxtLink></li>
          <li><NuxtLink to="/">Returprotal</NuxtLink></li>
          <li><NuxtLink to="/">Kontrol rapport</NuxtLink></li>
        </ul>
      </div>
    </div>
  </footer>
</template>
