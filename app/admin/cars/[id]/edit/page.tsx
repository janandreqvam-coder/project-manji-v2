import { supabase } from "@/app/lib/supabase";

import PageHero from "@/app/components/ui/PageHero";
import FormInput from "@/app/components/ui/FormInput";
import FormTextarea from "@/app/components/ui/FormTextarea";
import Button from "@/app/components/ui/Button";

import { updateCar } from "@/app/admin/cars/actions";

export default async function EditCarPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const { data: car } = await supabase
    .from("cars")
    .select("*")
    .eq("id", id)
    .single();

  if (!car) {
    return (
      <>

        <PageHero
          eyebrow="Admin"
          title="Car Not Found"
          description="The requested car could not be found."
        />

      </>
    );
  }

  return (
    <>

      <PageHero
        eyebrow="Admin"
        title={`Edit ${car.name}`}
        description="Update this community build."
      />

      <form
        action={updateCar}
        className="mx-auto max-w-3xl space-y-6 rounded-3xl border border-red-600/20 bg-zinc-900 p-8"
      >

        <input
          type="hidden"
          name="id"
          defaultValue={car.id}
        />

        <FormInput
          label="Car Name"
          name="name"
          defaultValue={car.name}
        />

        <FormInput
          label="Manufacturer"
          name="manufacturer"
          defaultValue={car.manufacturer}
        />

        <FormInput
          label="Driver"
          name="driver"
          defaultValue={car.driver}
        />

        <FormInput
          label="Power"
          name="power"
          defaultValue={car.power}
        />

        <FormInput
          label="Class"
          name="class"
          defaultValue={car.class}
        />

        <FormInput
          label="Image"
          name="image"
          defaultValue={car.image}
        />

        <FormTextarea
          label="Description"
          name="description"
          defaultValue={car.description}
        />

        <Button type="submit">
          Save Changes
        </Button>

      </form>

    </>
  );
}
