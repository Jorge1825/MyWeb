export function CardRegister() {
  return (
    <>
      <img
        src="/src/assets/images/login2.jpg"
        alt="cloud"
        className="img-left"
      />

      <p className="text-center title pb-4  ">DEVEGEORGE</p>
      <img
        src="/src/assets/images/Logo.png "
        width="150px"
        height="150px"
        alt="logo"
        style={{
          borderRadius: "50%",
        }}
        className=""
      />

      <div className="d-flex-column jus-center items-center w-full ">
        <p className="subtitle pt-1">Bienvenido</p>
        <p className="pl-3 pr-4 pt-2 text-body1">
          Inicia sesión para ver todo el contenido disponible en el sitio. Tus
          datos están seguros, no compartiremos tu información con nadie.
        </p>
        <p className="px-3 py-2 text-body2">
          ¡¡¡ Disfruta de la experiencia en DEVEGEORGE !!!
        </p>
      </div>
    </>
  );
}
