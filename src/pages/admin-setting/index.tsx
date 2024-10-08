import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import PermissionCard from "./components/permission-card";
import { permissionsData, PermissionGroup } from "./components/permission-data";
import Header from "./components/header";

const PermissionsManager: React.FC = () => {
  const [permissions, setPermissions] =
    useState<PermissionGroup[]>(permissionsData);

  const handleToggle = (groupIndex: number, permissionIndex: number) => {
    setPermissions((prevPermissions) => {
      const newPermissions = [...prevPermissions];
      newPermissions[groupIndex].permissions[permissionIndex].isActive =
        !newPermissions[groupIndex].permissions[permissionIndex].isActive;
      return newPermissions;
    });
  };

  return (
    <div className="min-h-screen ">
      <Header />
      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-2">
          Add or remove roles & Permissions
        </h1>
        <p className="text-gray-600 mb-6">
          Add new role details and assign specific permissions to it.
        </p>

        <div className="grid grid-cols-3 gap-4 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Role Name
            </label>
            <Input placeholder="Case Worker" className="w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Search for controls*
            </label>
            <Input placeholder="Search..." className="w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Status*
            </label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Case Management" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="case-management">Case Management</SelectItem>
                <SelectItem value="intake-form">Intake Form</SelectItem>
                <SelectItem value="resources-trainings">
                  Resources & Trainings
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {permissions.map((group, groupIndex) => (
          <div key={group.name} className="mb-8">
            <h2 className="text-lg font-semibold mb-4">{group.name}</h2>
            <div className="grid grid-cols-2 gap-4">
              {group.permissions.map((permission, permissionIndex) => (
                <PermissionCard
                  key={permission.id}
                  title={permission.title}
                  description={permission.description}
                  isActive={permission.isActive}
                  onToggle={() => handleToggle(groupIndex, permissionIndex)}
                />
              ))}
            </div>
          </div>
        ))}

        <div className="flex justify-end mt-8 space-x-4">
          <Button variant="outline">Cancel</Button>
          <Button>Next</Button>
        </div>
      </div>
    </div>
  );
};

export default PermissionsManager;
