"use client";
import React from "react";
import { useEffect } from "react";
import useMenuStore from "./store/useMenuStore";
import useSiteStore from "./store/useSiteStore";
import Image from "next/Image"

import Title from "./TitleLine";

function Footer({footer}) {
  const { menuItems, fetchAndSetMenus } = useMenuStore();
  const { site, fetchAndSetSite } = useSiteStore();

  useEffect(() => {
    fetchAndSetSite();
  }, [fetchAndSetSite]);

  useEffect(() => {
    fetchAndSetMenus();
  }, [fetchAndSetMenus]);

  console.log("footer", footer);

  // Définir un tableau d'objets pour les photos du footer
  const photoFooter = [];

  return (
    <footer className="bg-sky-600 text-center text-white dark:bg-neutral-900 dark:text-gold-400">
      <div className="flex items-center justify-center border-neutral-200 p-6 dark:border-neutral-500 lg:justify-end">
        <div className="mr-12 hidden md:block">
          <span>Restons en contact sur les réseaux sociaux</span>
        </div>
        <div className="flex justify-center items-center">
          <a
            href="https://www.facebook.com/profile.php?id=61556209084036"
            className="flex flex-row mr-6 text-sky-300 dark:text-neutral-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
            <p className="pl-4">La page facebook de {site.title} !</p>
          </a>
        </div>
      </div>

      <div className="mx-6 pt-8 pb-4 text-center">
        <div className="mb-6">
          <Title title= {footer && footer.messages && footer.messages["title"] 
          ? footer.messages["title"] 
          : "Contactez nous !"}/>
          <p className="mb-4 text-white">
        {footer && footer.messages && footer.messages["intervention"] 
          ? footer.messages["intervention"] 
          : "No intervention message available"}
      </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 mb-4">
          <div className="mb-6">
            <h5 className="mb-2.5 font-bold text-gold-800 dark:text-gold-800">
              Qui sommes-nous?
            </h5>

            <ul className="mb-0 list-none text-gold-200">
              <li>{site.societe}</li>
              <li>{site.contact}</li>
              <li>{site.adresse}</li>
              <li>
                {site.codePostal} {site.ville}
              </li>
              <li>{site.telephone}</li>
              <li>{site.email}</li>
              <br />
              <li className=" text-gold-800">N° de SIRET {site.SIRET}</li>
            </ul>
          </div>

          <div className="mb-6 flex-col flex items-center">
            <h5 className="mb-2.5 font-bold text-yellow-500 dark:text-neutral-200">
              {/* DEVIS GRATUIT ! */}
            </h5>
            <div className="h-60">
            <Image src={site.footerImageUrl} width={200} height={200} alt="..." />
            </div>
          </div>

          <div className="mb-6">
            <h5 className="mb-2.5 font-bold  text-white  dark:text-gold-800">
              Nos services
            </h5>

            <ul className="mb-0 list-none">
              {menuItems.map((menuItem, index) => (
                <li key={index}>
                  <a
                    href={menuItem.route}
                    className=" text-white hover:dark:text-gold-800 dark:text-gold-200"
                  >
                    {menuItem.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mb-7 flex justify-center gap-x-5">
          {photoFooter.map((photo, index) => (
            <div
              key={index}
              className="relative w-full overflow-hidden bg-cover bg-no-repeat rounded-lg"
            >
              <img src={photo.url} className="w-full" alt={photo.alt} />
              <a href="#!">
                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-neutral-200 p-6 text-center dark:bg-neutral-700 flex justify-center items-center">
        <span>&copy; 2023 Copyright: </span>

        <a className="mx-3" href="#">
          <img
            src="https://tecdn.b-cdn.net/img/logo/te-transparent-noshadows.webp"
            className="h-5"
            alt="TE Logo"
            loading="lazy"
          />
        </a>

        <a
          className="font-semibold text-neutral-600 dark:text-neutral-400"
          href="www.latelier22.fr"
        >
          L&apos;Atelier - Webdesign
        </a>
      </div>
    </footer>
  );
}

export default Footer;
