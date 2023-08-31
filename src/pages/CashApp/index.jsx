import React from "react";

import { Button, Img, PagerIndicator, Text } from "components";

const CashAppPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-agrandir items-center justify-end mx-auto w-full">
        <div className="h-[1085px] md:h-[2305px] sm:h-[846px] md:px-5 relative w-full">
          <div className="absolute bg-black-900 flex md:flex-col flex-row md:gap-5 inset-x-[0] items-end justify-start mx-auto p-[18px] top-[0] w-full">
            <Img
              className="h-11 mb-[614px] md:ml-[0] ml-[42px]"
              src="images/img_alarm.svg"
              alt="alarm"
            />
            <div className="flex md:flex-1 md:flex-col flex-row gap-5 items-center justify-start mb-[624px] md:ml-[0] ml-[210px] md:mt-0 mt-4 w-auto md:w-full">
              <a
                href="javascript:"
                className="text-white-A700 text-xs tracking-[0.50px] uppercase w-auto"
              >
                <Text size="txtAgrandirWideHeavy12">Sign In</Text>
              </a>
              <Text
                className="text-white-A700 text-xs tracking-[0.50px] uppercase w-auto"
                size="txtAgrandirWideHeavy12"
              >
                Legal
              </Text>
              <Text
                className="text-white-A700 text-xs tracking-[0.50px] uppercase w-auto"
                size="txtAgrandirWideHeavy12"
              >
                Licenses
              </Text>
              <Text
                className="text-white-A700 text-xs tracking-[0.50px] uppercase w-auto"
                size="txtAgrandirWideHeavy12"
              >
                Security
              </Text>
              <a
                href="javascript:"
                className="text-white-A700 text-xs tracking-[0.50px] uppercase w-auto"
              >
                <Text size="txtAgrandirWideHeavy12">Careers</Text>
              </a>
              <Text
                className="text-white-A700 text-xs tracking-[0.50px] uppercase w-auto"
                size="txtAgrandirWideHeavy12"
              >
                Press
              </Text>
              <a
                href="javascript:"
                className="text-white-A700 text-xs tracking-[0.50px] uppercase w-auto"
              >
                <Text size="txtAgrandirWideHeavy12">Support</Text>
              </a>
              <Text
                className="text-white-A700 text-xs tracking-[0.50px] uppercase w-auto"
                size="txtAgrandirWideHeavy12"
              >
                Status
              </Text>
              <Text
                className="text-white-A700 text-xs tracking-[0.50px] uppercase w-auto"
                size="txtAgrandirWideHeavy12"
              >
                Codeblog
              </Text>
            </div>
            <Img
              className="h-9 mb-[616px] md:ml-[0] ml-[173px] md:mt-0 mt-[5px] w-16"
              src="images/img_eyebutton.svg"
              alt="eyebutton"
            />
          </div>
          <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto pr-3.5 py-3.5 w-full">
            <div className="h-[692px] md:h-[818px] mb-[365px] relative w-[98%] md:w-full">
              <div className="md:h-[453px] h-[692px] m-auto w-full">
                <div
                  className="absolute bg-cover bg-no-repeat md:h-[453px] h-[690px] inset-[0] justify-center m-auto p-12 md:px-10 sm:px-5 w-full"
                  style={{ backgroundImage: "url('images/img_group3.png')" }}
                >
                  <div className="absolute bottom-[10%] md:h-[453px] h-[479px] left-[12%] w-[62%] md:w-full">
                    <div className="absolute h-[453px] right-[0] top-[0] w-[85%] md:w-full">
                      <Text
                        className="absolute inset-x-[0] mx-auto md:text-5xl text-[193px] text-center text-white-A700 top-[1%] tracking-[0.50px] uppercase w-max"
                        size="txtAgrandirWideHeavy193"
                      >
                        CASh
                      </Text>
                      <Img
                        className="absolute h-[453px] inset-[0] justify-center m-auto object-cover w-[55%]"
                        src="images/img_introphone1.png"
                        alt="introphoneOne"
                      />
                    </div>
                    <Text
                      className="absolute bottom-[14%] right-[10%] md:text-5xl text-[193px] text-center text-white-A700 tracking-[0.50px] uppercase"
                      size="txtAgrandirWideHeavy193"
                    >
                      APP
                    </Text>
                    <Img
                      className="absolute bottom-[0] h-44 left-[0] object-cover w-[24%]"
                      src="images/img_introcubes1.png"
                      alt="introcubesOne"
                    />
                  </div>
                  <Img
                    className="absolute h-[73px] left-[13%] object-cover top-[7%] w-[74px]"
                    src="images/img_introcube1.png"
                    alt="introcubeOne"
                  />
                  <Img
                    className="absolute h-[260px] object-cover right-[10%] top-[7%] w-[16%]"
                    src="images/img_introstairs1.png"
                    alt="introstairsOne"
                  />
                </div>
                <Img
                  className="absolute bottom-[0] h-[244px] object-cover right-[20%] w-[22%]"
                  src="images/img_intropillar1.png"
                  alt="intropillarOne"
                />
              </div>
              <div className="absolute bottom-[4%] flex md:flex-col flex-row md:gap-5 items-center justify-start right-[1%] w-[95%]">
                <div className="flex flex-col items-center justify-start w-auto">
                  <div className="flex flex-row gap-5 items-center justify-start w-auto">
                    <Button
                      className="bg-black-900 border border-solid border-white-A700 cursor-pointer flex items-center justify-center min-w-[170px] px-6 py-[13px] rounded-[7px]"
                      leftIcon={
                        <div className="mr-[13px] bg-green-A700">
                          <Img src="images/img_close.svg" alt="close" />
                        </div>
                      }
                    >
                      <div className="font-extrabold sm:px-5 text-center text-white-A700 text-xs tracking-[0.50px] uppercase">
                        APP STORE
                      </div>
                    </Button>
                    <Button
                      className="bg-black-900 border border-solid border-white-A700 cursor-pointer flex items-center justify-center min-w-[170px] px-[11px] py-3.5 rounded-[7px]"
                      leftIcon={
                        <div className="mr-[17px] bg-green-A700">
                          <Img src="images/img_vector.svg" alt="Vector" />
                        </div>
                      }
                    >
                      <div className="font-extrabold text-center text-white-A700 text-xs tracking-[0.50px] uppercase">
                        GOOGLE PLAY
                      </div>
                    </Button>
                  </div>
                </div>
                <Img
                  className="h-[30px] md:ml-[0] ml-[253px]"
                  src="images/img_arrowdown.svg"
                  alt="arrowdown"
                />
                <div className="flex flex-col font-mulish items-center justify-start md:ml-[0] ml-[87px] w-auto">
                  <Text
                    className="leading-[13.00px] text-[10px] text-gray-400"
                    size="txtMulishBold10"
                  >
                    <>
                      Brokerage services by Cash App Investing LLC, member FINRA
                      / SIPC.
                      <br />
                      See our BrokerCheck. Investing involves risk; you may lose
                      money. Bitcoin trading offered by Cash App. Cash App
                      Investing does not trade bitcoin and Cash App is not a
                      member of FINRA or SIPC. Cash App facilitates banking
                      services through Sutton Bank and Lincoln Savings Bank,
                      Members FDIC.
                    </>
                  </Text>
                </div>
                <PagerIndicator
                  className="flex gap-[30px] h-6 items-center justify-start md:ml-[0] ml-[35px] w-[126px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 bg-white-A700 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-[17px] bg-white-A700 w-[21px]"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CashAppPage;
