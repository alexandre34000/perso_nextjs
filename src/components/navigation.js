

export default function navigation(){

return(
    <nav className="ncn-menu-c" data-close-click-outside-curtain>
    <a
      href="#"
      className="ncn-menulink ncn-menulink-community"
    >
      Community
    </a>
    <a
      href="#"
      className="ncn-menulink ncn-menulink-forums"
    >
      Support Forums
    </a>
    <a
      href="#"
      className="ncn-menulink ncn-menulink-explorers"
    >
      Learning Platform
    </a>
    <a
      href="#"
      className="ncn-menulink ncn-menulink-podcast"
      aria-current="page"
    >
      Podcast
    </a>
    <a
      href="https://swag.netlify.com/"
      className="ncn-menulink ncn-menulink-swag"
    >
      Swag
    </a>
  </nav>  
)

}