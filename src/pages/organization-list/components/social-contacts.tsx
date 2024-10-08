import React from "react";
import { Button } from "@/components/ui/button";
import { Twitter, Facebook, Linkedin, Globe, Phone } from "lucide-react";

interface SocialContactsProps {
  data: {
    xAccount: string;
    facebook: string;
    linkedin: string;
    website: string;
    whatsapp: string;
  };
}

const SocialContacts: React.FC<SocialContactsProps> = ({ data }) => {
  const socialItems = [
    { icon: Twitter, label: "X ACCOUNT", value: data.xAccount },
    { icon: Facebook, label: "FACEBOOK", value: data.facebook },
    { icon: Linkedin, label: "LINKED IN", value: data.linkedin },
    { icon: Globe, label: "WEBSITE", value: data.website },
    { icon: Phone, label: "WHATS APP", value: data.whatsapp },
  ];

  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Social Contacts</h3>
      {socialItems.map((item, index) => (
        <div key={index} className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <item.icon className="w-5 h-5 mr-2 text-gray-500" />
            <div>
              <p className="text-xs text-gray-500">{item.label}</p>
              <p className="text-sm">{item.value}</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" className="text-blue-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
          </Button>
        </div>
      ))}
    </div>
  );
};

export default SocialContacts;
