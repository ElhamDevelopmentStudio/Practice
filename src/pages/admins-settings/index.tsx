import AdminCard from "./components/admin-card";

export function AdminSettingsPage() {
  return (
    <AdminCard
      title="Admins"
      organization="UNWRA"
      description="UNWRA-Kabul is a local branch of UN Women that provides medical support, mental health and so on..."
      memberCount={5}
    />
  );
}
