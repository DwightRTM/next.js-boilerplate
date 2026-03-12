import Image from "next/image";

interface PhotoComponentProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export default function PhotoComponent({
  src,
  alt,
  width,
  height,
  className = "",
}: PhotoComponentProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority
    />
  );
}
