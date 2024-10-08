import React from "react";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Phone,
  Mail,
  MapPin,
  Clock,
  Flag,
  Building,
  Map,
  Briefcase,
  Target,
  Edit2,
} from "lucide-react";

interface GeneralInfoProps {
  data: {
    bio: string;
    phoneNumber: string;
    emailAddress: string;
    fullAddress: string;
    operatingHours: string;
    country: string;
    province: string;
    district: string;
    sector: string;
    focusArea: string;
  };
}

const GeneralInfo: React.FC<GeneralInfoProps> = ({ data }) => {
  const infoItems = [
    { label: "Bio", value: data.bio, icon: FileText },
    { label: "Phone number", value: data.phoneNumber, icon: Phone },
    { label: "Email Address", value: data.emailAddress, icon: Mail },
    { label: "Full Address", value: data.fullAddress, icon: MapPin },
    { label: "Operating Hours", value: data.operatingHours, icon: Clock },
    { label: "Country", value: data.country, icon: Flag },
    { label: "Province", value: data.province, icon: Building },
    { label: "District", value: data.district, icon: Map },
    { label: "Sector", value: data.sector, icon: Briefcase },
    { label: "Focus Area", value: data.focusArea, icon: Target },
  ];

  return (
    <div>
      {infoItems.map((item, index) => (
        <div key={index} className="mb-4">
          <div className="flex justify-between items-center mb-1">
            <div className="flex items-center">
              <item.icon className="w-4 h-4 mr-2 text-gray-500" />
              <span className="text-xs text-gray-500">{item.label}</span>
            </div>
            <Button variant="ghost" size="sm" className="text-blue-500 p-0">
              <Edit2 className="w-4 h-4" />
            </Button>
          </div>
          <p className="text-sm ml-6">{item.value}</p>
        </div>
      ))}
    </div>
  );
};

export default GeneralInfo;
