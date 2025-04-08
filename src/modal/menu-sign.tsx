import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { orderPost } from "@/utils/post";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import ToasModal from "./toas-modal";

import { IoCall } from "react-icons/io5";
import { RiTelegram2Fill } from "react-icons/ri";

const MenuSign = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [toasInfo, setToasInfo] = useState(false);
  const addOrder = useMutation({
    mutationFn: orderPost.postOrder,
    onSuccess: () => {
      setOpen(false);
      const formElement = document.querySelector("form");
      if (formElement) {
        formElement.reset();
      }
      setTimeout(() => setToasInfo(true), 500);
    },
    onError: (err) => {
      console.log(err);
    },
  });
  const hnadleOrder = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    addOrder.mutate({
      firstName: form.firsname.value,
      lastName: form.lastname.value,
      phone: form.phone.value,
      service: form.service.value,
    });
  };
  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger className="">
          <p className="text-[#C9A690]  p-2 xl:w-[190px] text-center font-bold outline-none border border-[#C9A690] rounded-full xl:text-[16px]">
            {t("sign")}
          </p>
        </DialogTrigger>
        <DialogContent className="xl:max-w-[680px] sm:max-w-[687px]">
          <DialogHeader>
            <DialogTitle className="text-[28px] md:text-[40px] xl:text-[50px] text-center">
              {t("sign")}
            </DialogTitle>
            <DialogDescription>
              <form onSubmit={hnadleOrder}>
                <label className="">
                  <span className="text-start text-[14px] md:text-[16px] xl:text-[18px] block text-black py-2">
                    {t("ism_input")}
                  </span>
                  <input
                    required
                    name="firsname"
                    className="p-3 w-full border rounded-md bg-[#F8FAFC]"
                    type="text"
                  />
                </label>
                <label className="">
                  <span className="text-start text-[14px] md:text-[16px] xl:text-[18px] block text-black py-2">
                    {t("familya_input")}
                  </span>
                  <input
                    required
                    name="lastname"
                    className="p-3 w-full border rounded-md bg-[#F8FAFC]"
                    type="text"
                  />
                </label>
                <label className="">
                  <span className="text-start text-[14px] md:text-[16px] xl:text-[18px] block text-black py-2">
                    {t("number_input")}
                  </span>
                  <input
                    required
                    name="phone"
                    className="p-3 w-full border rounded-md bg-[#F8FAFC]"
                    type="text"
                  />
                </label>
                <label className="">
                  <span className="text-start text-[14px] md:text-[16px] xl:text-[18px] block text-black py-2">
                    {t("hizmat_input")}
                  </span>
                  <input
                    required
                    name="service"
                    className="p-3 w-full border rounded-md bg-[#F8FAFC]"
                    type="text"
                  />
                </label>

                <button
                  type="submit"
                  className="bg-[#3679A4]  h-[40px] w-full text-[14px] md:text-[16px] xl:text-[18px] mt-3 text-white py-2 rounded-lg font-bold"
                >
                  {t("leaveRequest")}
                </button>

                <div className="flex flex-col gap-[20px]  lg:flex-row mt-5    items-center lg:justify-between">
                  <a
                    href="tel:+998712812564"
                    className="flex flex-row w-full justify-center text-center rounded-lg  h-[40px] px-[20px] lg:w-[250px]  text-white bg-[#3679A4]   items-center "
                  >
                    <p className="w-[50%] mx-auto flex flex-row items-center gap-2">
                      <IoCall />
                      {t("call")}
                    </p>
                  </a>
                  <div className="flex w-full flex-row items-center lg:w-[250px] ">
                    <a
                      href="https://t.me/endokimlarisa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-center w-full px-[20px] h-[40px] rounded-lg  text-white bg-[#3679A4]  flex-row items-center gap-2"
                    >
                      <RiTelegram2Fill size={20} />
                      {t("writeInTelegram")}
                    </a>
                  </div>
                </div>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <ToasModal openModal={toasInfo} setToasInfo={setToasInfo} />
    </>
  );
};

export default MenuSign;
