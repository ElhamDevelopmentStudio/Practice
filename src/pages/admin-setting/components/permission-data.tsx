export interface PermissionData {
  id: string;
  title: string;
  description: string;
  isActive: boolean;
}

export interface PermissionGroup {
  name: string;
  permissions: PermissionData[];
}

export const permissionsData: PermissionGroup[] = [
  {
    name: "Case Managments",
    permissions: [
      {
        id: "cm1",
        title: "Access Case Managment",
        description:
          "By activating this toggle your role will be able to take intake forms.",
        isActive: true,
      },
      {
        id: "cm2",
        title: "Access Case Managment",
        description:
          "By activating this toggle your role will be able to take intake forms.",
        isActive: false,
      },
      {
        id: "cm3",
        title: "Access Case Managment",
        description:
          "By activating this toggle your role will be able to take intake forms.",
        isActive: false,
      },
      {
        id: "cm4",
        title: "Access Case Managment",
        description:
          "By activating this toggle your role will be able to take intake forms.",
        isActive: false,
      },
    ],
  },
  {
    name: "Intake Form",
    permissions: [
      {
        id: "if1",
        title: "Access Case Managment",
        description:
          "By activating this toggle your role will be able to take intake forms.",
        isActive: false,
      },
      {
        id: "if2",
        title: "Access Case Managment",
        description:
          "By activating this toggle your role will be able to take intake forms.",
        isActive: true,
      },
      {
        id: "if3",
        title: "Access Case Managment",
        description:
          "By activating this toggle your role will be able to take intake forms.",
        isActive: true,
      },
      {
        id: "if4",
        title: "Access Case Managment",
        description:
          "By activating this toggle your role will be able to take intake forms.",
        isActive: false,
      },
    ],
  },
  {
    name: "Resources & Trainings",
    permissions: [
      {
        id: "rt1",
        title: "Access Trainings",
        description:
          "By activating this toggle your role will be able to take intake forms.",
        isActive: true,
      },
      {
        id: "rt2",
        title: "Add Trainings",
        description:
          "By activating this toggle your role will be able to take intake forms.",
        isActive: false,
      },
      {
        id: "rt3",
        title: "Add Participants",
        description:
          "By activating this toggle your role will be able to take intake forms.",
        isActive: false,
      },
      {
        id: "rt4",
        title: "Access Case Management",
        description:
          "By activating this toggle your role will be able to take intake forms.",
        isActive: false,
      },
    ],
  },
];
