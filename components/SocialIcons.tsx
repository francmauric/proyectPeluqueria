/* import React from "react";
import { Icons } from "./Menu"
import { IonIcon } from "@ionic/react";
import { logoFacebook, logoTwitter, logoGithub, logoLinkedin, logoInstagram } from "ionicons/icons";

const iconMappings = {
    "logo-facebook": logoFacebook,
    "logo-twitter": logoTwitter,
    "logo-github": logoGithub,
    "logo-linkedin": logoLinkedin,
    "logo-instagram": logoInstagram,
  };

const SocialIcons = () => {
    return (
        <div className="text-teal-500">
            {Icons.map((icon) => (
                <span
                key={icon.name}
                className="p-2 cursor-pointer inline-flex items-center
                    rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500 duration-300"
                >
                     <IonIcon icon={iconMappings[icon.name]} />
            </span>
            
            ))}
        </div>
    )
}

export default SocialIcons; */

import React from "react";
import { Icons } from "./Menu";
import { IonIcon } from "@ionic/react";
import { logoFacebook, logoTwitter, logoGithub, logoLinkedin, logoInstagram } from "ionicons/icons";

// Mapea los nombres de los iconos a los iconos correspondientes en la biblioteca de iconos de Ionic
const iconMappings = {
  "logo-facebook": logoFacebook,
  "logo-twitter": logoTwitter,
  "logo-github": logoGithub,
  "logo-linkedin": logoLinkedin,
  "logo-instagram": logoInstagram,
};

const SocialIcons = () => {
  return (
    <div className="text-teal-500">
      {Icons.map((icon) => (
        <span
          key={icon.name}
          className="p-2 cursor-pointer inline-flex items-center rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500 duration-300"
        >
          <IonIcon icon={iconMappings[icon.name]} />
        </span>
      ))}
    </div>
  );
};

export default SocialIcons;