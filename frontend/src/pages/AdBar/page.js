import Image from "next/image";

function AdBar() {
  return (
    <div className="bg-[#0d1117] py-5 w-full">
      <div className="container mx-auto flex justify-between items-center px-4 h-full space-x-4">
        {/* Image 1 */}
        <div className="flex-1 flex justify-center">
          <img
            src="/Group 3.png"
            alt="SBI Card Logo"
            className="object-contain"
          />
        </div>

        {/* img 2 */}
        <div className="flex-1 flex justify-center">
          <img
            src="/Vector.png"
            alt="P Logo"
            className="object-contain"
          />
        </div>

        {/* img 3 */}
        <div className="flex-1 flex justify-center">
          <img
            src="/Group 4.png"
            alt="Vodafone Logo"
            className="object-contain"
          />
        </div>

        {/* img 4 */}
        <div className="flex-1 flex justify-center">
          <img
            src="/Bajaj Allianz Insurance 1.png"
            alt="Bajaj Allianz Logo"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default AdBar;
