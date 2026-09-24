import Image from "next/image";

type DownloadButtonProps = {
  store: "apple" | "android";
  href: string;
  label: string;
};

const buttonConfig = {
  apple: {
    icon: "/assets/icon-apple.svg",
    iconAlt: "Apple logo",
    iconWidth: 18,
    iconHeight: 20,
    className: "bg-eq-dark text-eq-ivory hover:bg-eq-cyan",
  },
  android: {
    icon: "/assets/icon-android.svg",
    iconAlt: "Android logo",
    iconWidth: 17,
    iconHeight: 20,
    className: "bg-eq-ivory text-eq-dark hover:bg-eq-mustard",
  },
} as const;

export default function DownloadButton({
  store,
  href,
  label,
}: DownloadButtonProps) {
  const { icon, iconAlt, iconWidth, iconHeight, className } =
    buttonConfig[store];

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex h-[61px] w-full items-center justify-center gap-2 rounded-[12px] text-[18px] font-bold leading-[32px] tracking-[-0.18px] transition-colors duration-200 ${className}`}
    >
      <Image
        src={icon}
        alt={iconAlt}
        width={iconWidth}
        height={iconHeight}
        aria-hidden={false}
      />
      <span>{label}</span>
    </a>
  );
}
