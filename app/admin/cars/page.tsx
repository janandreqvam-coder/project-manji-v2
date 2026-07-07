import Link from "next/link";

import { supabase } from "@/app/lib/supabase";
import DeleteButton from "@/app/components/ui/DeleteButton";
import Layout from "@/app/components/ui/Layout";
import PageHero from "@/app/components/ui/PageHero";
import EmptyState from "@/app/components/ui/EmptyState";
import DataTable from "@/app/components/ui/DataTable";
import Button from "@/app/components/ui/Button";

export default async function AdminCarsPage() {
  const { data: cars, error } = await supabase
    .from("cars")
    .select("*")
    .order("name");

  if (error) {
    return (
      <Layout>
        <PageHero
          eyebrow="Admin"
          title="Manage Cars"
          description="Unable to load cars."
        />

        <EmptyState
          title="Something went wrong"
          description="The cars could not be loaded."
        />
      </Layout>
    );
  }

  if (!cars || cars.length === 0) {
    return (
      <Layout>
        <PageHero
          eyebrow="Admin"
          title="Manage Cars"
          description="Add, edit and manage all community cars."
        />

        <EmptyState
          title="No Cars Found"
          description="There are currently no cars in the database."
          buttonText="+ Add Car"
          buttonHref="/admin/cars/new"
        />
      </Layout>
    );
  }

  return (
    <Layout>

      <PageHero
        eyebrow="Admin"
        title="Manage Cars"
        description="Add, edit and manage all community cars."
      />

      <div className="mb-10 flex justify-end">
        <Button href="/admin/cars/new">
          + Add Car
        </Button>
      </div>

      <DataTable
        columns={[
          { key: "name", label: "Car" },
          { key: "driver", label: "Driver" },
          { key: "power", label: "Power" },
          { key: "class", label: "Class" },
        ]}
        data={cars}
        renderActions={(car) => (
          <div className="flex justify-end gap-2">

            <Link
              href={`/admin/cars/${car.id}/edit`}
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-bold transition hover:bg-blue-500"
            >
              Edit
            </Link>

            <DeleteButton id={car.id} />


          </div>
        )}
      />

    </Layout>
  );
}