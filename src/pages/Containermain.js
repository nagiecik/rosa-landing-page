import ContainerSectionHero from "../components/ContainerSectionHero";
import ContainerSectionTestimonials from "../components/ContainerSectionTestimonials";
import ContainerSectionContextSelecti from "../components/ContainerSectionContextSelecti";
import ContainerFeaturesOverall from "../components/ContainerFeaturesOverall";
import ContainerFeatureLeft from "../components/ContainerFeatureLeft";
import ContainerFeatureRight from "../components/ContainerFeatureRight";
import ContainerSectionPricing from "../components/ContainerSectionPricing";
import ContainerButtonStores from "../components/ContainerButtonStores";
import Footer from "../components/Footer";

const Containermain = () => {
  return (
    <div className="relative w-full overflow-hidden flex flex-col items-center justify-start">
      <ContainerSectionHero
        containerHeroLogoUrl="/imagelogo@2x.png"
        containerHeroAppStoreUrl="/imageappstore@2x.png"
        containerHeroGooglePlayUrl="/imagegoogleplay@2x.png"
        showIconLeft={false}
        showButtonText
        showIconRight={false}
        showContainerDivLinks
        showButtonMenu={false}
      />
      <ContainerSectionTestimonials
        containerTestimonialsImageLogoUrl="/imagelogoifab1.svg"
        containerTestimonialsImageMockupUrl="/imagemockup2@2x.png"
      />
      <ContainerSectionContextSelecti />
      <ContainerFeaturesOverall />
      <ContainerFeatureLeft
        featureHeaderLight="Official"
        featureHeaderBold="Partners"
        featureParagraphText="Elevate your organization's presence and create mutually beneficial partnerships with the Official Partners feature. ROSA provides dedicated spaces for sponsors and partners to showcase their brand through images, banners, and videos, allowing you to monetize your app and deliver value to your supporters. Attract potential sponsors and enhance your app's visual appeal with this powerful feature."
        featureMockupImageUrl="/imagemockup@2x.png"
      />
      <ContainerFeatureRight
        featureMockupImage="/imagemockup3@2x.png"
        featureHeaderLight="Documents"
        featureHeaderBold="Selection"
      />
      <ContainerFeatureLeft
        featureHeaderLight="Manage"
        featureHeaderBold="Competitions"
        featureParagraphText="Effortlessly orchestrate diverse competitions within your sporting organization using the Manage Competitions feature. ROSA offers a versatile platform that allows you to create and customize competitions with distinct rules, ensuring precision and alignment with the specific needs of each event. Whether it's men's and women's competitions or various sporting disciplines, ROSA empowers you to manage them all seamlessly, enhancing the efficiency and accuracy of your organization's operations."
        featureMockupImageUrl="/imagemockup4@2x.png"
      />
      <ContainerFeatureRight
        featureMockupImage="/imagemockup5@2x.png"
        featureHeaderLight="Featured"
        featureHeaderBold="Resources"
      />
      <ContainerSectionPricing />
      <ContainerButtonStores />
      <Footer />
    </div>
  );
};

export default Containermain;
