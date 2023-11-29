const ContainerSectionTestimonials = ({
  containerTestimonialsImageLogoUrl,
  containerTestimonialsImageMockupUrl,
}) => {
  return (
    <div className="bg-texts-textprimary w-[1920px] flex flex-col items-center justify-end pt-spacing-256 px-spacing-200 pb-spacing-128 box-border text-left text-13xl text-texts-textprimary font-text-regular-headline">
      <div className="rounded-spacing-48 w-[1520px] overflow-hidden flex flex-col items-start justify-start p-16 box-border relative bg-[url('/public/containerdivfootballrules@3x.png')] bg-cover bg-no-repeat bg-[top]">
        <div className="w-full flex flex-col items-start justify-start gap-[64px] max-w-[800px] z-[0]">
          <div className="flex flex-col items-start justify-start font-roag">
            <i className="relative leading-[32px] uppercase inline-block font-black w-[368px]">
              Official
            </i>
            <i className="relative text-45xl leading-[56px] uppercase inline-block font-black text-laws-light-green-200 w-[368px]">
              Football Rules
            </i>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-5xl">
            <b className="self-stretch relative tracking-[-0.04em] leading-[40px]">
              Revolutized Our Rule Management
            </b>
            <i className="self-stretch relative text-xl leading-[36px] text-texts-textdisabledsubtle">
              “After analysing and understanding the hassle of using printouts
              on the field of play, we decided to launch digitalised Laws. It
              was to give quick and easy access to the Laws, most importantly to
              the referees, both on- and offline.”
            </i>
          </div>
          <div className="self-stretch flex flex-row items-end justify-between text-xl">
            <div className="flex flex-row items-center justify-start gap-[16px]">
              <img
                className="relative rounded-[50%] w-20 h-20 object-cover"
                alt=""
                src="/imageperson@2x.png"
              />
              <div className="flex flex-col items-start justify-start">
                <b className="self-stretch relative leading-[36px]">
                  Lukas Brud
                </b>
                <i className="self-stretch relative text-base leading-[32px] text-texts-textdisabledsubtle">{`The IFAB Secretary & CEO`}</i>
              </div>
            </div>
            <img
              className="relative w-[175.1px] h-[72px]"
              alt=""
              src={containerTestimonialsImageLogoUrl}
            />
          </div>
        </div>
        <img
          className="absolute my-0 mx-[!important] top-[calc(50%_-_280px)] right-[25px] w-[350px] h-[560px] object-cover z-[1]"
          alt=""
          src={containerTestimonialsImageMockupUrl}
        />
        <img
          className="absolute my-0 mx-[!important] top-[calc(50%_-_322px)] right-[200px] w-[400px] h-[640px] object-cover z-[2]"
          alt=""
          src="/imagemockup1@2x.png"
        />
      </div>
    </div>
  );
};

export default ContainerSectionTestimonials;
