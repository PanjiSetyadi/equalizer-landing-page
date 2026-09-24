import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/assets/logo.svg"
      alt="Equalizer"
      width={147}
      height={33}
      priority
    />
  );
}