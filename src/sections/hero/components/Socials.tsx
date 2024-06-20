// import { useTheme } from "@/contexts/ThemeProvider";
import { socialMediaLinks } from "@/data";


const Socials = () => {
  return (
    <div>
      {socialMediaLinks.map((socialMediaLink) => {
        return (
          <div key={socialMediaLink.id}>
            <a href={socialMediaLink.path} target="_blank" rel="noreferrer">
              {socialMediaLink.icon}
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Socials;
