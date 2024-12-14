"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import Modal from "react-modal";
import { IoMdClose } from "react-icons/io";

type IconBoxProps = {
  iconBox: IconBox;
  className?: string;
};

const IconBox = ({
  className,
  iconBox: { thumbnail, image, alt },
}: IconBoxProps) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div
      className={cn(
        "hover-shadow z-[1] overflow-hidden rounded-md bg-white px-0 py-12 before:absolute before:left-0 before:top-0 before:block before:h-[.3125rem] before:w-0 before:bg-secondary before:transition-all before:duration-200 hover:before:w-full dark:bg-slate-800 md:px-10 lg:px-10",
        className,
      )}
    >
      {thumbnail ? (
        <>
          <button className="portfolio-btn " onClick={openModal}>
            <div className="portfolio-item md:[30vh] h-[15vh] w-full lg:h-[25vh]">
              <Image
                src={thumbnail}
                alt={alt || ""}
                width={500}
                height={500}
                className="mb-6 inline-block h-full w-full  rounded-md "
              />
            </div>
          </button>

          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Portfolio Image Modal"
            overlayClassName="modal-overlay"
            className="modal-content"
          >
            <button className="close-btn" onClick={closeModal}>
              <IoMdClose size={40} color="black" />
            </button>
            <Image src={image} alt={alt || ""} width={500} height={500} />
          </Modal>
        </>
      ) : null}
    </div>
  );
};

export default IconBox;
