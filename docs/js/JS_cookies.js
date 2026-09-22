export const iniciarCookies = () => {
    const cookieBanner = document.getElementById("cookie-banner");
    const acceptButton = document.getElementById("accept-cookies");

    if (!cookieBanner || !acceptButton) return;

    // Mostrar el banner si el usuario no ha aceptado las cookies
    if (!localStorage.getItem("cookiesAccepted")) {
      cookieBanner.style.display = "block";
    }

    // Manejar la aceptación de cookies
    acceptButton.addEventListener("click", function () {
      localStorage.setItem("cookiesAccepted", "true");
      cookieBanner.style.display = "none";
      loadGoogleAdSense();
    });

    // Cargar Google AdSense si ya se han aceptado las cookies
    if (localStorage.getItem("cookiesAccepted")) {
      loadGoogleAdSense();
    }

    // Función para cargar Google AdSense
    function loadGoogleAdSense() {
        const adsenseScript = document.createElement("script");
        adsenseScript.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7327811292507079";
        adsenseScript.async = true;
        adsenseScript.setAttribute("crossorigin", "anonymous");
        document.head.appendChild(adsenseScript);
    }
}

/*

  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7327811292507079"
  crossorigin="anonymous"></script>
*/