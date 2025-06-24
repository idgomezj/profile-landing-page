"use client"
import { FacebookCircleIcon, InstagramCircleIcon, LinkedInCircleIcon, GithubCircleIcon } from "@/components/ui/icons";
import { useState, useCallback, memo } from "react";
import ProfileInfo from "./pages/ProfileInfo";
import Languages from "./pages/Languages";
import Frameworks from "./pages/Frameworks";
import CI_CD from "./pages/CI_CD";
import Infrastructure from "./pages/Infrastructure";
import TechStack from "./pages/TechStack";
import Image from "next/image";
import Data from "./pages/Data";
// Constants
const MENU_ITEMS = [
    { id: 'profile', label: 'PROFILE' },
    { id: 'languages', label: 'LANGUAGES' },
    { id: 'frameworks', label: 'FRAMEWORKS' },
    { id: 'ci/cd', label: 'CI/CD' },
    { id: 'infrastructure', label: 'INFRASTRUCTURE' },
    { id: 'ai_data', label: 'AI & DATA ENGINEERING' },
    { id: 'tools', label: 'OTHER TOOLS' }
] as const;


const PAGES = {
    profile: <ProfileInfo />,
    languages: <Languages />,
    frameworks: <Frameworks />,
    "ci/cd": <CI_CD />,
    infrastructure: <Infrastructure />,
    "ai_data": <Data />,
    tools: <TechStack />
}

const SOCIAL_LINKS = [
    { 
        href: "https://www.linkedin.com/in/idgomezj/", 
        icon: LinkedInCircleIcon, 
        label: "LinkedIn" 
    },
    { 
        href: "https://github.com/idgomezj", 
        icon: GithubCircleIcon, 
        label: "GitHub" 
    },
    { 
        href: "https://www.facebook.com/idgomezj", 
        icon: FacebookCircleIcon, 
        label: "Facebook" 
    },
    { 
        href: "https://www.instagram.com/idgomezj", 
        icon: InstagramCircleIcon, 
        label: "Instagram" 
    }
] as const;

// Types
type MenuItemId = typeof MENU_ITEMS[number]['id'];

interface MenuProps {
    active: MenuItemId;
    onActiveChange: (active: MenuItemId) => void;
}

interface SocialLinkProps {
    href: string;
    icon: React.ComponentType<{ className?: string }>;
    label: string;
}

// Memoized Components
const MenuItem = memo(({ 
    item, 
    isActive, 
    onClick 
}: { 
    item: typeof MENU_ITEMS[number]; 
    isActive: boolean; 
    onClick: () => void; 
}) => (
    <button
        className={`text-md  transition-colors duration-200 ${
            isActive 
                ? 'text-cyan-400 font-bold border-b-2 border-cyan-400' 
                : 'text-gray-500 hover:text-gray-900 hover:font-bold hover:scale-105 cursor-pointer'
        }`}
        onClick={onClick}
        aria-label={`Switch to ${item.label} section`}
    >
        {item.label}
    </button>
));
MenuItem.displayName = 'MenuItem';

const SocialLink = memo(({ href, icon: Icon, label }: SocialLinkProps) => (
    <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label={`Visit ${label} profile`}
        className="transition-colors duration-200 hover:scale-110"
    >
        <Icon className="w-8 h-8 text-black hover:text-cyan-400 cursor-pointer" />
    </a>
));
SocialLink.displayName = 'SocialLink';

const Menu = memo(({ active, onActiveChange }: MenuProps) => (
    <nav className="flex flex-row items-center justify-start w-full h-full gap-4 mb-4">
        {MENU_ITEMS.map((item) => (
            <MenuItem
                key={item.id}
                item={item}
                isActive={active === item.id}
                onClick={() => onActiveChange(item.id)}
            />
        ))}
    </nav>
));
Menu.displayName = 'Menu';


const SocialLinks = memo(() => (
    <div className="flex flex-col items-center justify-center mx-3 gap-4">
        {SOCIAL_LINKS.map(({ href, icon, label }) => (
            <SocialLink key={href} href={href} icon={icon} label={label} />
        ))}
    </div>
));
SocialLinks.displayName = 'SocialLinks';

const Profile = () => {
    const [active, setActive] = useState<MenuItemId>('profile');
    
    const handleActiveChange = useCallback((newActive: MenuItemId) => {
        setActive(newActive);
    }, []);

    return (
        <div className="flex flex-row items-center justify-center w-full h-full px-2 ">
            <div>
                <Image 
                    src="/images/profile.jpeg" 
                    alt="Profile" 
                    width={800}
                    height={200}
                    className="shadow-lg w-[98%] transition-transform duration-200 hover:scale-105" 
                />
            </div>
            
            <div className="flex flex-col items-center justify-center w-[40%] h-full px-6 gap-3">
                <div className="h-[10%]"><Menu active={active} onActiveChange={handleActiveChange} /></div>
                <div className="h-[90%] w-full min-h-[800px] ">{PAGES[active]}</div>
            </div>
            
            <SocialLinks />
        </div>
    );
};

export default Profile;