import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/light.js";
import Pricing from "components/pricing/TwoPlansWithDurationSwitcher.js";
import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import FAQ from "components/faqs/SingleCol.js";
import styled from "styled-components";
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
const ContentContainer = tw.div`justify-center max-w-screen-xl mx-auto py-20 lg:py-6 w-full flex flex-row`;
const InfoContainer = tw.div`flex flex-col mx-4`;
const DonationContainer = tw.div`flex flex-col mx-4`;
const MainInfoContainer = tw.div`mx-10`;
const IconContainer = tw.div`flex flex-row mt-6`;
const Card = tw.div`border border-gray-200 max-w-lg rounded overflow-hidden shadow-lg p-5 my-3`;
const DonationInfoContainer = tw.div``;
const CreatorImage = tw.img`w-32 h-32 rounded-full`;
const ProfileContainer = tw.div`flex flex-row  max-w-screen-xl mx-auto py-20 pb-0 lg:py-24 lg:pb-0 justify-center`;

const DonateButton = styled.button`
  ${tw`w-64 mt-5 tracking-wide font-semibold bg-primary-500 text-gray-100 py-4 rounded-lg hover:bg-primary-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .icon {
    ${tw`w-6 h-6 -ml-2`}
  }
  .text {
    ${tw`ml-3`}
  }
`;
let BobaButton = styled.a`
  ${tw`p-2 py-6 m-2 my-3 tracking-wide font-semibold rounded-lg transition duration-500 ease-in-out bg-white hover:bg-gray-500 transform hover:-translate-y-1 hover:scale-110 `}
`;

// let SelectedBobaButtonStyling = tw`transition-none tracking-wide  p-2 py-6 m-2 rounded-lg transition duration-500 transform scale-110 -translate-y-1 bg-orange-500`;

// let BobaButtonStyling = tw`p-2 py-6 m-2 tracking-wide font-semibold rounded-lg transition duration-500 ease-in-out bg-white hover:bg-gray-500 transform hover:-translate-y-1 hover:scale-110 `;
// BobaButtonStyling = {};

const DonateHeading = tw.div`text-left text-2xl font-bold`;
const BobaContainer = tw.div`flex flex-row items-center justify-around animate-spin`;
const PriceContainer = tw.div`flex flex-row items-center`;

const heading = "Anan Wang";
const description = "Co-founder and developer.";
const purchaseDescription = "Buy Anan Wang a boba";

export default class Creator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentBobaSelection: "large" };
  }
  render() {
    return (
      <AnimationRevealPage>
        <Header />
        {/* <div> */}
        <ProfileContainer>
          <CreatorImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=256&h=256&q=80" />
          <MainInfoContainer>
            <Heading>{heading}</Heading>
            <Description>{description}</Description>
            <IconContainer>
              <GithubIcon style={{ marginRight: 12 }} />
              <InstaIcon style={{ marginRight: 12 }} />
              <TwitterIcon style={{ marginRight: 12 }} />
            </IconContainer>
          </MainInfoContainer>
        </ProfileContainer>
        {/* </div> */}

        <ContentContainer>
          <InfoContainer>
            <Card>
              <p>
                Hey 👋, I'm Katie I am a HCPC registered Dramatherapist,
                Clinical Supervisor, Trainer and Relaxation Facilitator. I
                currently run weekly Facebook Live Relaxations and also run
                training/CPD for therapists to work creatively with clients
                online. I also run holding relaxation workshops online for
                Therapists so they feel supported and held.
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
              <DonateHeading> {"Buy a boba for Anan"}</DonateHeading>
              <BobaContainer>
                <BobaButton
                  onClick={() => {
                    this.setState({ currentBobaSelection: "small" });
                  }}
                  href="https://tailwindcss.com/docs/transition-property#responsive"
                >
                  <PriceContainer
                    
                  >
                    <p>$3.50</p>
                    <CoffeeIcon
                      style={{
                        marginLeft: 6,
                        marginRight: 6,
                        color: "#871818"
                      }}
                      width="3.0em"
                      height="3.0em"
                    />
                  </PriceContainer>
                </BobaButton>

                <BobaButton
                  onClick={() => {
                    this.setState({ currentBobaSelection: "medium" });
                  }}
                  href="https://tailwindcss.com/docs/transition-property#responsive"
                >
                  <PriceContainer
                    className="medium"
                    
                  >
                    <p>$5.50</p>
                    <CoffeeIcon
                      style={{
                        marginLeft: 6,
                        marginRight: 6,
                        color: "#18B164"
                      }}
                      width="4.2em"
                      height="4.2em"
                    />
                  </PriceContainer>
                </BobaButton>

                <BobaButton
                  onClick={() => {
                    this.setState({ currentBobaSelection: "large" });
                  }}
                  href="https://tailwindcss.com/docs/transition-property#responsive"
                >
                  <PriceContainer
                    className="large"
                    
                  >
                    <p>$7.50</p>

                    <CoffeeIcon
                      style={{
                        marginLeft: 6,
                        marginRight: 6,
                        color: "#B16418"
                      }}
                      width="5.7em"
                      height="5.7em"
                    />
                  </PriceContainer>
                </BobaButton>
              </BobaContainer>
         
            </Card>

            <Card style={{}}>
              <p>
                If you prefer bitcoin my address is:
                1Fj7SCHsjnztnv82HPLykziFah62vRGYZ1
              </p>
            </Card>
          </DonationContainer>
        </ContentContainer>
      </AnimationRevealPage>
    );
  }
}
