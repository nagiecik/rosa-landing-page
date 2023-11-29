import NavbarLink from "./NavbarLink";
import Button from "./Button";

const Navbar = ({
  navbarImageLogo,
  showContainerDivLinks = true,
  showButtonMenu = false,
  showButtonCta = true,
}) => {
  return (
    <nav className="m-0 self-stretch flex flex-row items-center justify-between pt-spacing-24 px-[0rem] pb-[0rem] text-center text-[1rem] text-surfaces-default-surfaceprimary font-text-regular-headline">
      <div className="relative w-[10.31rem] h-[2rem]">
        <img
          className="absolute top-[0rem] left-[0rem] w-[7rem] h-[2rem] object-cover"
          alt=""
          src={navbarImageLogo}
        />
      </div>
      {showContainerDivLinks && (
        <div className="flex-1 flex flex-row items-start justify-between max-w-[50rem] md:hidden mq350small:hidden">
          <NavbarLink
            linkText="Start"
            textlabelColor="#fff"
            textlabelCursor="pointer"
          />
          <NavbarLink
            linkText="Features"
            textlabelColor="#fff"
            textlabelCursor="pointer"
          />
          <NavbarLink
            linkText="Use Cases"
            textlabelColor="#fff"
            textlabelCursor="pointer"
          />
          <NavbarLink
            linkText="Testimonials"
            textlabelColor="#fff"
            textlabelCursor="pointer"
          />
          <NavbarLink
            linkText="Pricing"
            textlabelColor="#fff"
            textlabelCursor="pointer"
          />
        </div>
      )}
      {showButtonMenu && (
        <div className="rounded-spacing-16 bg-surfaces-default-surfacetertiary w-[4rem] h-[4rem] hidden flex-row items-center justify-center p-[1rem] box-border gap-[1rem] md:flex mq350small:flex">
          <img
            className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0 hidden"
            alt=""
            src="/iconline3horizontal.svg"
          />
          <b className="relative leading-[2rem] hidden">Get your app</b>
          <img
            className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0 hidden"
            alt=""
            src="/iconarrowright.svg"
          />
        </div>
      )}
      <Button
        buttonIconLeftUrl="/iconarrowleft.svg"
        buttonText="Get your app"
        buttonIconRightUrl="/iconarrowright.svg"
        showIconLeft={false}
        showIconRight={false}
        showButtonText
      />
    </nav>
  );
};

export default Navbar;
