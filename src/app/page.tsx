import Image from "next/image";
import DownloadButton from "@/components/DownloadButton";
import Logo from "@/components/Logo";
import SocialIcon from "@/components/SocialIcon";

export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0">
        <Image
          src="/assets/bg-main-mobile.png"
          alt=""
          width={582}
          height={780}
          className="w-full h-auto md:hidden"
          priority
        />
        <Image
          src="/assets/bg-main-tablet.png"
          alt=""
          width={1283}
          height={1108}
          className="hidden w-full h-auto md:block lg:hidden"
          priority
        />
        <Image
          src="/assets/bg-main-desktop.png"
          alt=""
          width={1913}
          height={2058}
          className="hidden w-full h-auto lg:block"
          priority
        />
      </div>

      <header className="relative z-10 px-6 pt-10 md:px-6 md:pt-14 lg:px-[165px]">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-[100px] right-[-60px] hidden md:block lg:right-0"
        >
          <Image
            src="/assets/bg-pattern-1.svg"
            alt=""
            width={312}
            height={468}
            className="md:w-[266px] md:h-auto lg:w-[312px] lg:h-[468px]"
          />
        </div>

        <div className="relative z-10 lg:mx-auto lg:max-w-[1110px]">
          <Logo />
          <h1 className="mt-16 max-w-[75%] text-[40px] font-bold leading-[48px] tracking-[-0.45px] text-eq-dark md:mt-20 md:max-w-[60%] md:text-[64px] md:leading-[64px] md:tracking-[-0.6px] lg:mt-[124px] lg:max-w-[70%] lg:text-[88px] lg:leading-[88px] lg:tracking-[-1px]">
            We make your music sound extraordinary.
          </h1>
          <p className="mt-8 max-w-[25rem] text-[16px] leading-[26px] md:max-w-[25rem] md:text-[18px] md:leading-[28px] lg:mt-10 lg:max-w-[40rem] lg:text-[20px] lg:leading-[34px]">
            A system audio equalizer specifically designed for Android and iOS.
            Freely tune the way your music sounds with a professional grade
            parametric EQ &amp; volume mixer. Control bass, mids, treble, gain
            control, reverb, and more!
          </p>
        </div>
      </header>

      <main className="relative z-10 px-6 md:px-[40px] lg:px-[165px]">
        <section className="relative mx-auto mt-[120px] max-w-[1110px] md:mt-[180px] lg:mt-[200px] lg:h-[600px]">
          <div className="relative h-[384px] w-full overflow-hidden rounded-[12px] bg-eq-dark md:h-[600px] md:rounded-[16px] lg:h-[600px] lg:rounded-[24px]">
            <Image
              src="/assets/bg-pattern-1.svg"
              alt=""
              width={280}
              height={420}
              className="absolute -top-[15px] left-1/2 -translate-x-1/2 md:left-[180px] md:top-[120px] md:translate-x-0 lg:left-[110px]"
            />
          </div>

          {/* 2. Gambar Mockup HP */}
          <Image
            src="/assets/illustration-app.png"
            alt="Equalizer app preview"
            width={624}
            height={1284}
            className="absolute left-1/2 top-[-96px] z-20 w-[209px] -translate-x-1/2 md:left-[36px] md:top-[-40px] md:w-[270px] md:translate-x-0 lg:left-[102px] lg:top-[-40px] lg:w-[312px]"
            priority
          />

          {/* 3. Kartu Harga Oranye (Premium EQ) */}
          <div className="relative z-30 mx-auto -mt-[32px] w-full max-w-[327px] rounded-[12px] bg-eq-orange p-9 text-eq-ivory md:absolute md:right-[36px] md:bottom-[-48px] md:mt-0 md:w-[399px] md:max-w-none md:rounded-[16px] md:p-12 lg:right-[95px] lg:bottom-[-96px] lg:w-[446px] lg:rounded-[24px] lg:p-[54px]">
            <div className="flex flex-col">
              <h2 className="text-[32px] font-bold leading-[40px] md:text-[40px] md:leading-[52px]">
                Premium EQ
              </h2>
              <p className="mt-4 text-[16px] leading-[26px] md:mt-6 md:text-[20px] md:leading-[34px]">
                Get expert-level control with a robust equalizer, volume mixer,
                and spatial audio. Take your listening experience to a whole new
                level and access all our incredible features!
              </p>
              <p className="mt-8 flex items-center gap-4 md:mt-10">
                <span className="text-[65px] font-bold leading-[52px]">$4</span>
                <span className="text-[20px] leading-[32px]">/ month</span>
              </p>
              <div className="mt-8 flex w-full flex-col gap-4 md:mt-10">
                <DownloadButton
                  store="apple"
                  href="https://www.apple.com/app-store/"
                  label="iOS Download"
                />
                <DownloadButton
                  store="android"
                  href="https://play.google.com/store/apps"
                  label="Android Download"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 mt-[64px] flex flex-1 flex-col gap-8 px-6 pb-6 md:mt-[200px] md:px-6 lg:mt-[120px] lg:flex-row lg:items-center lg:justify-between lg:px-[165px] lg:pb-[91px]">
        <div className="lg:flex-1">
          <Logo />
        </div>
        <p className="max-w-[27rem] text-[16px] leading-[26px] lg:flex-[2] lg:max-w-[24rem]">
          All rights reserved © Equalizer 2021
          <br />
          Have any problems? Contact us via social media or email us at{" "}
          <a
            href="mailto:equalizer@example.com"
            className="font-bold underline-offset-2 hover:underline"
          >
            equalizer@example.com
          </a>
        </p>
        <div className="flex items-center gap-4 lg:flex-1 lg:justify-end">
          <SocialIcon
            name="facebook"
            href="https://www.facebook.com/"
            label="Equalizer on Facebook"
          />
          <SocialIcon
            name="instagram"
            href="https://www.instagram.com/"
            label="Equalizer on Instagram"
          />
          <SocialIcon
            name="twitter"
            href="https://www.twitter.com/"
            label="Equalizer on Twitter"
          />
        </div>
      </footer>
    </div>
  );
}
