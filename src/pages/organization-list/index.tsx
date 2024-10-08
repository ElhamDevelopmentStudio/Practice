import React, { useState } from "react";
import Header from "./components/header";
import TabNavigation from "./components/tab-navigation";
import GeneralInfo from "./components/general-info";
import SocialContacts from "./components/social-contacts";

interface OrganizationData {
  name: string;
  phoneNumber: string;
  date: string;
  bio: string;
  // ... other fields
}

interface SocialContactsData {
  xAccount: string;
  facebook: string;
  linkedin: string;
  website: string;
  whatsapp: string;
}

const OrganizationProfile: React.FC = () => {
  const [activeTab, setActiveTab] = useState("General");

  const organizationData: OrganizationData = {
    name: "Actions Against Hunger ( AAH )",
    phoneNumber: "(0)93 78 7843 456",
    date: "24/03/2024",
    bio: "The United Nations World Rehabilitation Organization (UNWRA) is an international non-governmental organization dedicated to promoting physical, psychological, and social rehabilitation for individuals affected by conflict, natural disasters, and health crises globally.",
    // ... other fields
  };

  const socialContactsData: SocialContactsData = {
    xAccount: "https://x.com/acfusa",
    facebook: "@actionagainsthunger",
    linkedin: "@actionagainsthunger",
    website: "https://www.actionagainsthunger.org",
    whatsapp: "+93 778878133",
  };

  const tabs = [
    "General",
    "Case",
    "Branch's",
    "Users",
    "Practitioner's",
    "Shelters",
    "Roles & Permisions",
    "Logs",
  ];

  return (
    <div className="max-w-6xl mx-auto p-4">
      <Header
        title="List of Organization"
        organizationName={organizationData.name}
        phoneNumber={organizationData.phoneNumber}
        date={organizationData.date}
      />
      <TabNavigation
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      <div className="mt-6 grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <GeneralInfo data={organizationData} />
        </div>
        <div>
          <SocialContacts data={socialContactsData} />
        </div>
      </div>
    </div>
  );
};

export default OrganizationProfile;
