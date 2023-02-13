import Image from "next/image";
import banner from "../public/assets/Layer_48.png";
import Header from "./Header";
import Slogan from "../public/assets/slogan.png";
import GetLit from "../public/assets/Get_Lit.png";
import ArtBanner from "../public/assets/arte-banner-mobile.png";
import itens from "../public/assets/itens.png";
import levels from "../public/assets/levels-mobile.jpg";
import BgPhoto from "../public/assets/bg-photo.jpg";
import LootBox from "../public/assets/loot-box.jpg";
import IconMedia from "../public/assets/icons-media.jpg";
import Reward from "../public/assets/REWARDS.png";
import Pic1 from "../public/assets/Pic1.jpg";
import Pic2 from "../public/assets/pic2.jpg";
import discordImage from "../public/assets/botao-join-discord.jpg";
import avatarMeio from "../public/assets/avatar-meio.jpg";
import Link from "../public/assets/ink.jpg";
import LAB from "../public/assets/lab-1001-logo.png";
import { AiOutlineMail } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import ReactPlayer from "react-player";
import Accordian from "./Accordian";
// import video from "../public/assets/Video/fanpower-anim-loop.mp4"
function Banner() {
  return (
    <>
      <div className="bg-[url('../public/assets/bg-top.png')] bg-center h-[450px]">
        <Header />
        <div className="mt-[130px] mx-4">
          <Image src={banner} height={369} width={1089} />
        </div>
      </div>
      <div className="bg-black border-yellow-400 px-8 py-10">
        <Image src={Slogan} />
      </div>
      <div className="bg-black border-yellow-400 px-8 py-10">
        <Image src={GetLit} />
      </div>
      <div className="bg-black border-2 border-black px-8 py-3">
        <p className="text-center text-xl text-white">
          PX is the ultimate digital avatar Plateform, connecting you with your
          favorite creaters, teams, and like-minded fans.Collaborate and create
          epic experiences togather.
        </p>
      </div>
      <div>
        <Image src={ArtBanner} />
      </div>
      <div className="h-56 flex items-center justify-center flex-col">
        <h2 className="text-[#802dff] text-[48px] font-bold leading-[44px]">
          BE THE
        </h2>
        <h2 className="text-white text-[48px] font-bold leading-[44px]">
          ULTIMATE FAN
        </h2>
        <h2 className="text-[#802dff] text-[48px] font-bold leading-[44px]">
          WITH PX.
        </h2>
      </div>
      <div className="flex items-center justify-center">
        <div className="w-[400px]">
          <Image src={itens} />
        </div>
      </div>
      <div className="h-52 flex items-center justify-center flex-col">
        <h2 className="text-[#802dff] text-[48px] font-bold leading-[40px]">
          SCORE
        </h2>
        <h2 className="text-[#802dff] text-[48px] font-bold leading-[40px]">
          BIG WITH
        </h2>
        <h2 className="text-white text-[48px] font-bold leading-[40px]">
          PX DROPS <span className="text-[#802dff]">!</span>
        </h2>
      </div>
      <div className="flex items-center justify-center flex-col py-5 px-10">
        <p className="text-white text-center text-xl font-bold leading-6">
          Get your hands on some seriously epic gear with PX Drops.
        </p>
        <p className="text-white text-center text-xl font-light leading-[26px]">
          Each drop has a chance to contain one of the six rarity
          levels:Legendry, Epic,Super Rare,Rare,Uncommon,or Commong. It's like a
          virtual slot machine for you avatar -pull the
        </p>
      </div>
      <div>
        <Image src={levels} />
      </div>
      <div className="bg-[url('../public/assets/bg-photo.jpg')] bg-top h-[450px] flex items-center justify-center flex-col">
        <h2 className="text-white text-[54px] font-bold leading-[48px]">
          BOOST
        </h2>
        <h2 className="text-white text-[54px] font-bold leading-[48px]">
          YOUR FAN
        </h2>
        <h2 className="text-white text-[54px] font-bold leading-[48px]">
          POWER
        </h2>
        <h2 className="text-white text-[54px] font-bold leading-[48px]">
          WITH PX.
        </h2>
      </div>
      {/* <div className='border-4 border-blue-500 w-[300px]'>
    <ReactPlayer 
    width={280}
    url={video}
    type='video'
    />
  </div> */}
      <div className="py-5 px-5">
        <p className="text-white text-center text-2xl font-light leading-7">
          Each PX gives you up to 100% power bonus, making you a force to be
          reckoned with.
          <span className="font-bold">
            The rarer your goodies, the more powerful the avatar.
          </span>{" "}
          Get decked out in epic gear and turn heads.
        </p>
      </div>
      <div className="py-10 flex flex-col items-center justify-center">
        <div className="px-6">
          <Image src={LootBox} />
        </div>
        <div className="pt-5 px-1 w-full">
          <h2 className="text-[#802dff] text-center text-[48px] font-bold leading-[48px]">
            PX REWARDS
          </h2>
          <h2 className="text-[#802dff] text-center text-[48px] font-bold leading-[48px]">
            YOUR PASSION.
          </h2>
        </div>
      </div>
      <div className="py-2 px-5">
        <p className="text-white text-center text-2xl font-light leading-7">
          PX lets you fully embrace and express your fandom, with rewards for
          activities like watching streams, videos, following your favorite
          content creators, and interacting with other fans.
        </p>
      </div>
      <div className="flex items-center justify-center py-10 my-5">
        <Image src={IconMedia} />
      </div>
      <div className="flex items-center justify-center mb-14">
        <div className="w-[320px]">
          <Image src={Reward} />
        </div>
      </div>
      <div className="bg-[url('../public/assets/dark-concrete-texture-background.jpg')] bg-top h-[450px] flex flex-col text-center pt-10">
        <h2 className="text-white text-[55px] font-bold leading-[58px]">
          DIVE INTO
        </h2>
        <h2 className="text-white text-[55px] font-bold leading-[58px]">
          FUTURE
        </h2>
        <h2 className="text-white text-[55px] font-bold leading-[58px]">
          WORLDS
        </h2>
        <h2 className="text-white text-[55px] font-bold leading-[58px]">
          WITH PX
        </h2>
      </div>
      <div className="bg-[url('../public/assets/bg-grunge.jpg')]">
        <div className="px-8 py-10">
          <p className="text-white text-center text-[22px] font-bold leading-8">
            PX is your ticket to a world of endless possibilities.
          </p>
          <p className="text-white text-center text-xl font-light leading-7">
            Explor multible metaverses, unlock unique experiences, and score
            tons of rewards and interactions.
          </p>
        </div>
        <div className="flex items-center justify-center mb-5">
          <div className="w-[320px]">
            <Image src={Pic1} />
            <div className="px-5 py-5">
              <p className="text-white text-center text-xl font-light leading-7">
                With PX, you'll get preferred access to events, exclusive games,
                and special offers.
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mb-5">
          <div className="w-[320px]">
            <Image src={Pic2} />
            <div className="px-8 py-5">
              <p className="text-white text-center text-xl font-light leading-7">
                The world is your playground with PX - are you ready to dive in?
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mb-10">
          <div className="w-[260px]">
            <Image src={discordImage} />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-[300px]">
            <Image src={avatarMeio} />
          </div>
        </div>
      </div>
      <div className="bg-white flex flex-col items-center justify-center py-5">
        <div className="w-[300px] flex items-center justify-center">
          <h2 className="text-4xl font-bold text-[#802dff] text-center">
            PX runs on the solid foundation of
          </h2>
        </div>
        <h2 className="text-4xl font-bold text-[#802dff] py-4">polygon</h2>
        <p className="text-2xl text-center leading-7 px-8 py-5">
          The polygon blockchain offers top-notch security, scalability and
          infrastructure, trusted by big names like Disney, Coca-Cola,
          Starbucks, and Reddit. Trust PX to keep your online experiences smooth
          and secure.
        </p>
        <button className="bg-black text-white text-xl font-bold w-[200px] py-3  rounded-2xl">
          WHITEPAPER
        </button>
        <div className="w-[200px] py-5">
          <Image src={Link} />
        </div>
      </div>
      <div className="flex items-center justify-center flex-col">
        <div className="bg-[url('../public/assets/paw.jpg')] bg-contain bg-no-repeat bg-center h-[200px] flex items-center justify-center">
          <h2 className="text-white text-[46px] font-bold leading-[44px] text-center px-5">
            SUBSCRIBE AND JOIN THE WAIT LIST
          </h2>
        </div>
        <div className="bg-white py-2 w-[320px] rounded-full px-3 flex items-center justify-between">
          <input type="email" placeholder="Your e-mail" />
          <button
            type="submit"
            className="bg-[#802dff] h-10 w-10 flex items-center justify-center rounded-full"
          >
            <AiOutlineMail className="text-white text-xl" />
          </button>
        </div>
        <div>
          <Accordian heading="What is PX?" text="" />
          <Accordian
            heading="How do I access PX?"
            text="PX is a blockchain-connected platform, and to enjoy all the benifits to sync your 
            digital wallet to the site. To learn more about creating wallet and syncing to PX, Click here.
            "
          />
          <Accordian heading="Where Can I Learn More?" text="" />
        </div>
      </div>
      <div className="bg-[url('../public/assets/bg-pattern-px.jpg')] flex flex-col items-center justify-center">
        <div className="border-b-2 border-[#802dff] w-[320px] h-[120px] flex py-5 my-8">
          <div className="w-[50%] flex flex-col justify-between">
            <p className="text-black text-lg text-center font-bold leading-6">
              Roadmap
            </p>
            <p className="text-black text-lg text-center font-bold leading-6">
              FAQ PX
            </p>
          </div>
          <div className="w-[50%] flex flex-col justify-between">
            <p className="text-black text-lg text-center font-bold leading-6">
              Learn more
            </p>
            <p className="text-black text-lg text-center font-bold leading-6">
              Become a partner
            </p>
          </div>
        </div>
        <div className="w-[150px]">
          <Image src={LAB} />
        </div>
        <div className="py-5">
          <p className="text-black text-lg font-semibold">
            Power by{" "}
            <span className="text-[#802dff] underline">lab1001.io</span>
          </p>
          <p className="flex justify-evenly my-3">
            <FaFacebookF className="text-2xl" />
            <BsInstagram className="text-2xl" />
          </p>
        </div>
      </div>
    </>
  );
}

export default Banner;
