import ContainerFeatureHeader from "./ContainerFeatureHeader";

const ContainerButtonStores = () => {
  return (
    <section className="bg-texts-textprimary flex flex-col items-end justify-start py-spacing-128 px-spacing-200 text-left text-[1.5rem] text-texts-textprimary font-text-regular-headline">
      <div className="rounded-spacing-48 w-[95rem] overflow-hidden flex flex-col items-start justify-start p-[4rem] box-border relative bg-[url('/public/containerdivcontent@3x.png')] bg-cover bg-no-repeat bg-[top]">
        <img
          className="absolute my-0 mx-[!important] top-[calc(50%_-_278px)] right-[1.59rem] w-[21.88rem] h-[35rem] object-cover z-[0]"
          alt=""
          src="/imagemockup21@2x.png"
        />
        <img
          className="absolute my-0 mx-[!important] top-[calc(50%_-_318px)] right-[12.53rem] w-[25rem] h-[40rem] object-cover z-[1]"
          alt=""
          src="/imagemockup11@2x.png"
        />
        <div className="w-full flex flex-col items-start justify-start gap-[4rem] max-w-[50rem] z-[2]">
          <ContainerFeatureHeader
            featureHeaderLight="Make Sport"
            featureHeaderBold="Rules Moves"
          />
          <p className="m-0 relative leading-[2.5rem] inline-block w-[50rem]">
            Join the multitude of organizations that have placed their trust in
            us. With ROSA, empower your organization to create a custom rule app
            using our ready-made solution.
          </p>
          <div className="flex flex-row items-start justify-start gap-[1.88rem]">
            <img
              className="rounded-spacing-8 max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/imagegoogleplay1@2x.png"
            />
            <img
              className="rounded-spacing-8 max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/imageappstore1@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContainerButtonStores;
