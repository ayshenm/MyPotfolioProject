import { socialMediaLinks } from "@/data";

const Socials = () => {
  return (
    <ul className="flex gap-x-2 z-50">
      {socialMediaLinks.map((socialMediaLink) => {
        const SocialMediaIcon = socialMediaLink.icon;
        return (
          <li key={socialMediaLink.id}>
            <a className="text-blue-500 hover:text-blue-800/35 transition-all duration-200" href={socialMediaLink.path} target="_blank" rel="noreferrer">
              <SocialMediaIcon size={20} strokeWidth={1.2} />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Socials;
