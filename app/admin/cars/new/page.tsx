import PageHero from "@/app/components/ui/PageHero";
import FormInput from "@/app/components/ui/FormInput";
import FormTextarea from "@/app/components/ui/FormTextarea";
import Button from "@/app/components/ui/Button";

import { createCar } from "../actions";

export default function NewCarPage() {
  return (
    <>

      <PageHero
        eyebrow="Admin"
        title="Add New Car"
        description="Create a new community build."
      />

      <form
        action={createCar}
        className="mx-auto max-w-3xl space-y-6 rounded-3xl border border-red-600/20 bg-zinc-900 p-8"
      >

        <FormInput
          label="Car Name"
          name="name"
          placeholder="Nissan Silvia S15"
          required
        />

        <FormInput
          label="Manufacturer"
          name="manufacturer"
          placeholder="Nissan"
          required
        />

        <FormInput
          label="Driver"
          name="driver"
          placeholder="Rullo"
          required
        />

        <FormInput
          label="Power"
          name="power"
          placeholder="420 HP"
        />

        <FormInput
          label="Class"
          name="class"
          placeholder="Drift"
        />

        <FormInput
          label="Image URL"
          name="image"
          placeholder="/logos/Nissan Silvia S15.png"
        />

        <FormTextarea
          label="Description"
          name="description"
          placeholder="Describe the build..."
        />

        <div className="pt-4">
          <Button href="#">
            Save Car
          </Button>
        </div>

      </form>

    </>
  );
}
