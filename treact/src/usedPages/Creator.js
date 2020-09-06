import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/light.js";
import Pricing from "components/pricing/TwoPlansWithDurationSwitcher.js";
import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import FAQ from "components/faqs/SingleCol.js";
import {
  ContentWithPaddingXl,
  ContentWithPaddingLg,
  Container
} from "components/misc/Layouts.js";
import {
  SectionHeading,
  Subheading as SubheadingBase
} from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { ReactComponent as GithubIcon } from "feather-icons/dist/icons/github.svg";
import { ReactComponent as InstaIcon } from "feather-icons/dist/icons/instagram.svg";
import { ReactComponent as TwitterIcon } from "feather-icons/dist/icons/twitter.svg";
import { ReactComponent as CoffeeIcon } from "feather-icons/dist/icons/coffee.svg";

const HeaderContainer = tw.div`w-full flex flex-col`;
const Subheading = tw(SubheadingBase)`mb-4`;
const Heading = tw.div`w-full text-left text-4xl sm:text-5xl font-black tracking-wide`;
const Description = tw.div`w-full text-left font-medium leading-relaxed text-secondary-100 md:text-base lg:text-lg`;
const ContentContainer = tw.div`max-w-screen-xl mx-auto py-20 lg:py-6 w-full flex flex-row`;
const InfoContainer = tw.div`w-full flex flex-col`;
const DonationContainer = tw.div`w-full flex flex-col`;
const MainInfoContainer = tw.div`max-w-screen-xl mx-auto py-20 pb-0 lg:py-24 lg:pb-0`;
const IconContainer = tw.div`flex flex-row mt-6`;
const Card = tw.div`border border-gray-200 max-w-sm rounded overflow-hidden shadow-lg p-5 my-3`;
const DonationInfoContainer = tw.div``;

export default () => {
  const heading = "Anan Wang";
  const description = "Co-founder and developer.";
  const purchaseDescription = "Buy Anan Wang a boba";
  return (
    <AnimationRevealPage>
      <Header />

      <MainInfoContainer>
        <Heading>{heading}</Heading>
        <Description>{description}</Description>
        <IconContainer>
          <GithubIcon style={{ marginRight: 12 }} />
          <InstaIcon style={{ marginRight: 12 }} />
          <TwitterIcon style={{ marginRight: 12 }} />
        </IconContainer>
      </MainInfoContainer>
      <ContentContainer>
        <InfoContainer>
          <Card>
            <p>
              Hey 👋, I'm Katie I am a HCPC registered Dramatherapist, Clinical
              Supervisor, Trainer and Relaxation Facilitator. I currently run
              weekly Facebook Live Relaxations and also run training/CPD for
              therapists to work creatively with clients online. I also run
              holding relaxation workshops online for Therapists so they feel
              supported and held.
            </p>
          </Card>

          <Card>
            <p>
              If you prefer bitcoin my address is:
              1Fj7SCHsjnztnv82HPLykziFah62vRGYZ1
            </p>
            <br />
            <p>My projects:</p>
            <br />
            <p>
              ncov2019.live - A website for keeping track of the latest
              statistics and news for the COVID19 Coronavirus
            </p>
            <br />
            <p>Email me at coronaviruswebsite@gmail.com!</p>
            <br />
            <p>
              ps: donations go thru my moms paypal because I am too young to
              have my own, that is why it says nathalie acher, thank you!
            </p>
            <br />
            <p>ncov2019.live</p>
            <br />
          </Card>
        </InfoContainer>
        <DonationContainer>
          <Card>
            <Subheading>{purchaseDescription}</Subheading>
            <CoffeeIcon width="100" height="100" />
          </Card>
        </DonationContainer>
      </ContentContainer>
    </AnimationRevealPage>
  );
};
