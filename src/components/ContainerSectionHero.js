const ContainerSectionHero = ({
  containerHeroLogoUrl,
  containerHeroAppStoreUrl,
  containerHeroGooglePlayUrl,
  showIconLeft,
  showButtonText,
  showIconRight,
  showContainerDivLinks,
  showButtonMenu,
}) => {
  return (
    <section className="w-[1920px] h-[1080px] flex flex-col items-center justify-start py-0 px-spacing-200 box-border bg-[url('/public/containersectionhero@3x.png')] bg-cover bg-no-repeat bg-[top] lg:w-[1200px] lg:pl-16 lg:pr-16 lg:box-border md:w-[960px] md:pl-8 md:pr-8 md:box-border sm:w-[420px] sm:pl-4 sm:pr-4 sm:box-border mq350small:w-[350px] mq350small:pl-4 mq350small:pr-4 mq350small:box-border">
      <div className="w-full flex flex-col items-start justify-start gap-[128px] max-w-[1520px] lg:gap-[64px] md:gap-[64px] md:items-center md:justify-start md:pl-0 md:pr-0 md:box-border sm:gap-[32px] sm:pl-0 sm:pr-0 sm:box-border mq350small:gap-[32px] mq350small:items-center mq350small:justify-start">
        <nav className="m-0 self-stretch flex flex-row items-center justify-between pt-spacing-24 px-0 pb-0 text-center text-base text-surfaces-default-surfaceprimary font-text-regular-headline">
          <div className="relative w-[165px] h-8">
            <img
              className="absolute top-[0px] left-[0px] w-28 h-8"
              alt=""
              src={containerHeroLogoUrl}
            />
          </div>
          <div className="flex-1 flex flex-row items-start justify-between max-w-[800px] text-left text-xl text-texts-textprimary md:hidden mq350small:hidden">
            <a className="[text-decoration:none] flex-1 flex flex-row items-center justify-center text-[inherit]">
              <div className="relative leading-[36px] font-semibold cursor-pointer hover:[text-decoration:underline]">
                Start
              </div>
            </a>
            <a className="[text-decoration:none] flex-1 flex flex-row items-center justify-center text-[inherit]">
              <div className="relative leading-[36px] font-semibold cursor-pointer hover:[text-decoration:underline]">
                Features
              </div>
            </a>
            <a className="[text-decoration:none] flex-1 flex flex-row items-center justify-center text-[inherit]">
              <div className="relative leading-[36px] font-semibold cursor-pointer hover:[text-decoration:underline]">
                Use Cases
              </div>
            </a>
            <a className="[text-decoration:none] flex-1 flex flex-row items-center justify-center text-[inherit]">
              <div className="relative leading-[36px] font-semibold cursor-pointer hover:[text-decoration:underline]">
                Testimonials
              </div>
            </a>
            <a className="[text-decoration:none] flex-1 flex flex-row items-center justify-center text-[inherit]">
              <div className="relative leading-[36px] font-semibold cursor-pointer hover:[text-decoration:underline]">
                Pricing
              </div>
            </a>
          </div>
          <div className="rounded-spacing-16 bg-surfaces-default-surfacetertiary w-16 h-16 hidden flex-row items-center justify-center p-4 box-border gap-[16px] md:flex mq350small:flex">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0 hidden"
              alt=""
              src="/iconline3horizontal.svg"
            />
            <b className="relative leading-[32px] hidden">Get your app</b>
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0 hidden"
              alt=""
              src="/iconarrowright.svg"
            />
          </div>
          <div className="rounded-spacing-16 bg-surfaces-default-surfacetertiary flex flex-row items-center justify-center py-button-padding-top-bottom px-button-padding-left-right gap-[16px] hover:bg-texts-textprimary hover:cursor-pointer md:hidden mq350small:hidden">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0 hidden"
              alt=""
              src="/iconarrowleft.svg"
            />
            <strong className="relative leading-[32px] font-bold">
              Get your app
            </strong>
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0 hidden"
              alt=""
              src="/iconarrowright.svg"
            />
          </div>
        </nav>
        <div className="self-stretch flex flex-row items-start justify-center gap-[128px] md:flex-col md:items-center md:justify-start sm:items-start sm:justify-center">
          <article className="flex-1 flex flex-col items-start justify-start gap-[48px] max-w-[700px] text-left text-77xl text-texts-textprimary font-text-regular-headline lg:gap-[24px] md:gap-[24px] md:items-center md:justify-start md:flex-[unset] md:self-stretch sm:gap-[24px] mq350small:gap-[24px] mq350small:items-center mq350small:justify-start mq350small:pl-0 mq350small:box-border">
            <div className="self-stretch flex flex-col items-start justify-start gap-[24px] md:gap-[8px] md:items-center md:justify-start md:pl-0 md:box-border sm:gap-[8px] sm:pl-0 sm:box-border mq350small:items-center mq350small:justify-start">
              <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.04em] leading-[96px] font-thin font-inherit lg:text-45xl lg:leading-[80px] md:text-center sm:text-29xl sm:leading-[64px] mq350small:text-21xl mq350small:leading-[56px] mq350small:text-center">
                Gamechanger
              </h1>
              <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.04em] leading-[96px] font-semibold font-inherit lg:text-45xl lg:leading-[80px] md:text-center sm:text-29xl sm:tracking-[-0.04em] sm:leading-[64px] mq350small:text-21xl mq350small:leading-[56px] mq350small:text-center">
                In The Way
              </h1>
              <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.04em] leading-[96px] font-thin font-inherit lg:text-45xl lg:leading-[80px] md:text-center sm:text-29xl sm:leading-[64px] mq350small:text-21xl mq350small:leading-[56px] mq350small:text-center">
                You Manage
              </h1>
            </div>
            <p className="m-0 self-stretch relative text-xl leading-[36px] font-light lg:text-base lg:leading-[32px] md:text-center mq350small:text-sm mq350small:leading-[28px] mq350small:text-center">
              In the realm of sports governance, every organization encounters
              common challenges, irrespective of the specific laws and
              regulations they oversee. These challenges include the constant
              evolution of rules and the imperative to ensure their effective
              dissemination.
            </p>
            <div className="self-stretch flex flex-row items-start justify-start gap-[32px] md:items-start md:justify-center sm:flex-col mq350small:flex-col mq350small:items-start mq350small:justify-center">
              <img
                className="relative w-[207.7px] h-[60px]"
                alt=""
                src={containerHeroAppStoreUrl}
              />
              <img
                className="relative w-[207.4px] h-[60px]"
                alt=""
                src={containerHeroGooglePlayUrl}
              />
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[16px] text-5xl md:items-start md:justify-center sm:flex-col mq350small:flex-col">
              <div className="flex flex-row items-center justify-start gap-[8px]">
                <div className="relative leading-[40px]">Excellent</div>
                <b className="relative leading-[40px] text-surfaces-default-surfacetertiary">
                  4.9 out of 5
                </b>
              </div>
              <div className="flex flex-row items-center justify-start">
                <img
                  className="relative w-8 h-8 overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/imageiconstar@2x.png"
                />
                <img
                  className="relative w-8 h-8 overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/imageiconstar@2x.png"
                />
                <img
                  className="relative w-8 h-8 overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/imageiconstar@2x.png"
                />
                <img
                  className="relative w-8 h-8 overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/imageiconstar@2x.png"
                />
                <img
                  className="relative w-8 h-8 overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/imageiconstar@2x.png"
                />
              </div>
            </div>
          </article>
          <img
            className="flex-1 relative max-w-[700px] overflow-hidden h-[1066px] object-cover lg:w-[400px] lg:h-full md:w-full md:h-[400px] md:flex-[unset] md:self-stretch"
            alt=""
            src="/imagehero@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default ContainerSectionHero;
