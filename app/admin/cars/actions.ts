"use server";

import { redirect } from "next/navigation";
import { supabase } from "@/app/lib/supabase";

/* -------------------------------- */
/* Create Car                       */
/* -------------------------------- */

export async function createCar(formData: FormData) {
  const name = formData.get("name") as string;
  const manufacturer = formData.get("manufacturer") as string;
  const driver = formData.get("driver") as string;
  const power = formData.get("power") as string;
  const carClass = formData.get("class") as string;
  const image = formData.get("image") as string;
  const description = formData.get("description") as string;

  const slug = name
    .toLowerCase()
    .replace(/\s+/g, "-");

  const { error } = await supabase.from("cars").insert({
    slug,
    name,
    manufacturer,
    driver,
    power,
    class: carClass,
    image,
    description,
  });

  if (error) {
    console.error(error);
    return;
  }

  redirect("/admin/cars");
}

/* -------------------------------- */
/* Update Car                       */
/* -------------------------------- */

export async function updateCar(formData: FormData) {
  const id = Number(formData.get("id"));

  const name = formData.get("name") as string;
  const manufacturer = formData.get("manufacturer") as string;
  const driver = formData.get("driver") as string;
  const power = formData.get("power") as string;
  const carClass = formData.get("class") as string;
  const image = formData.get("image") as string;
  const description = formData.get("description") as string;

  const slug = name
    .toLowerCase()
    .replace(/\s+/g, "-");

  const { error } = await supabase
    .from("cars")
    .update({
      slug,
      name,
      manufacturer,
      driver,
      power,
      class: carClass,
      image,
      description,
    })
    .eq("id", id);

  if (error) {
    console.error(error);
    return;
  }

  redirect("/admin/cars");
}

/* -------------------------------- */
/* Delete Car                       */
/* -------------------------------- */

export async function deleteCar(id: number) {
  const { error } = await supabase
    .from("cars")
    .delete()
    .eq("id", id);

  if (error) {
    console.error(error);
    return;
  }

  redirect("/admin/cars");
}