import Image from "next/image";

function AdBar() {
  return (
    <div className="bg-[#0d1117] py-5 w-full">
      <div className="container mx-auto flex justify-between items-center px-4 h-full space-x-4">
        {/* Image 1 */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/Group 3.png"
            alt="SBI Card - Our Partner"
            width={150}
            height={50}
            className="object-contain"
          />
        </div>

        {/* Image 2 */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/Vector.png"
            alt="P Logo - Our Partner"
            width={150}
            height={50}
            className="object-contain"
          />
        </div>

        {/* Image 3 */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/Group 4.png"
            alt="Vodafone - Our Partner"
            width={150}
            height={50}
            className="object-contain"
          />
        </div>

        {/* Image 4 */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/Bajaj Allianz Insurance 1.png"
            alt="Bajaj Allianz Insurance - Our Partner"
            width={150}
            height={50}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default AdBar; 