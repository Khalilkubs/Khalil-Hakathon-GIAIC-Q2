import Image from "next/image";
import { RentalCard } from "@/components/ui/card"; // Ensure the path to the card component is correct

const RentalPage = () => {
  const rentalOptions = [
    { src: "/RollsRoyce.png", alt: "Rolls-Royce", price: 76, width: 534 },
    { src: "/MGZXExcite.png", alt: "MG ZX Excite", price: 74, width: 534 },
    { src: "/NissanGTR.png", alt: "Nissan GT-R", price: 80, width: 534 },
    { src: "/Koenigsegg.png", alt: "Koenigsegg", price: 99, width: 534 },
    { src: "/AllNewRush.png", alt: "Cherry", price: 72, width: 534 },
    { src: "/CRV.png", alt: "CR-V", price: 80, width: 534 },
    { src: "/AllNewTerios.png", alt: "All New Terios", price: 74, width: 534 },
    { src: "/NewMGZS.png", alt: "New MG ZS", price: 80, width: 534 },
    { src: "/MGZXExclusive.png", alt: "MG ZX Exclusive", price: 76, width: 534 },
  ];

  return (
    <div className="flex flex-col md:flex-row w-full">
      {/* Sidebar (hidden on mobile) */}
      <aside className="hidden md:block w-[25%] lg:w-[20%] bg-gray-100 p-4">
        <Image
          src="/Heart1.png.jpg"
          alt="Navigation Sidebar"
          width={360}
          height={1600}
          className="rounded-md"
        />
      </aside>

      {/* Desktop View for Rental Cards */}
      <section className="hidden md:flex w-full md:w-[75%] lg:w-[80%] bg-[#f6f7f9] p-6 gap-7 flex-wrap justify-center">
        {rentalOptions.map((car, index) => (
          <RentalCard key={index} {...car} />
        ))}
      </section>

      {/* Mobile View for Rental Cards */}
      <section className="md:hidden flex flex-col gap-6 bg-[#f6f7f9] p-4">
        {rentalOptions.map((car, index) => (
          <RentalCard key={index} {...car} width={327} />
        ))}
      </section>
    </div>
  );
};

export default RentalPage;
