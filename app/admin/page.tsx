import AppLayout from "@/app/components/ui/AppLayout";
import { supabase } from "@/app/lib/supabase";
import QuickAction from "@/app/components/ui/QuickAction";
import PageHero from "@/app/components/ui/PageHero";
import SectionGrid from "@/app/components/ui/SectionGrid";
import StatCard from "@/app/components/ui/StatCard";

export default async function AdminPage() {
  const [
    { count: carCount },
    { count: driverCount },
    { count: eventCount },
    { count: galleryCount },
  ] = await Promise.all([
    supabase.from("cars").select("*", { count: "exact", head: true }),
    supabase.from("drivers").select("*", { count: "exact", head: true }),
    supabase.from("events").select("*", { count: "exact", head: true }),
    supabase.from("gallery").select("*", { count: "exact", head: true }),
  ]);

  const adminCards = [
    {
      icon: "🚗",
      title: "Cars",
      description: "Manage community builds.",
      href: "/admin/cars/new",
    },
    {
      icon: "👤",
      title: "Drivers",
      description: "Manage driver profiles.",
      href: "/admin/drivers/new",
    },
    {
      icon: "📅",
      title: "Events",
      description: "Create and manage events.",
      href: "/admin/events/new",
    },
    {
      icon: "📸",
      title: "Gallery",
      description: "Upload and organize photos.",
      href: "/admin/gallery/new",
    },
  ];

  return (
    <AppLayout>

      <PageHero
        eyebrow="Project Manji"
        title="Admin Dashboard"
        description="Manage the Project Manji community from one place."
      />

      {/* Statistics */}
      <SectionGrid cols={4}>

        <StatCard
          icon="🚗"
          value={carCount ?? 0}
          label="Cars"
        />

        <StatCard
          icon="👤"
          value={driverCount ?? 0}
          label="Drivers"
        />

        <StatCard
          icon="📅"
          value={eventCount ?? 0}
          label="Events"
        />

        <StatCard
          icon="📸"
          value={galleryCount ?? 0}
          label="Gallery"
        />

      </SectionGrid>

      {/* Space between sections */}
      <div className="h-16" />

      {/* Management */}
      <SectionGrid cols={2}>

        {adminCards.map((card) => (

          <QuickAction
            key={card.title}
            icon={card.icon}
            title={card.title}
            href={card.href}
          />

        ))}

      </SectionGrid>

    </AppLayout>
  );
}
