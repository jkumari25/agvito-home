import PromoTriangle from "@/components/promo-triangle";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const SectionPromo = () => {
  return (
    <section className="lg:pb-30 relative pb-28 pt-10 lg:pt-12">
      {/* <PromoTriangle /> */}
      <div className="container">
        <div className="lg:ml-auto lg:w-[45%]">
          <h2 className="max-w-md">BALAJI MINECHEM</h2>
          <p className="mb-10 text-lg">
            Balaji Minechem are one of the reputed concerns, engaged in
            manufacturing and supplying premium quality of salt range of raw
            salt, coarse salt, de-icing salt, tablet salt, iodized salt,
            industrial salt and all other forms of salts that have export as
            well as domestic applications.
            <br />
            <br />
            We are also engaged in manufacturing & exporting of Silica Sand,
            Calcined Kaolin Powder, Hydrous Kaolin Powder, Foundry Sand, China
            Clay, Bentonite Powder and Anthracite Coal. Possession of own huge
            mines, latest machinery/technology lead it on the growth track the
            cost reduction land cost controls the techniques resulted in
            improved bottom lines of the company.
          </p>
          <Link href="/about" aria-label="Click to read more">
            <Button>
              READ MORE
              <ChevronRightIcon width={20} height={20} className="-mr-2 ml-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SectionPromo;
