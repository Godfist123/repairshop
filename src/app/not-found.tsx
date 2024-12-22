import Image from "next/image";

export const metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <div className="px-2 w-full">
      <div className="flex flex-col items-center justify-center mx-auto py-4 gap-4">
        <h1 className="text-2xl">Page Not Found</h1>

        <Image
          className="m-0 rounded-xl"
          src="/images/not-found.png"
          alt="Page Not Found"
          width={300}
          height={300}
          sizes="300px"
          priority={true}
          title="Page Not Found"
        />
      </div>
    </div>
  );
}
